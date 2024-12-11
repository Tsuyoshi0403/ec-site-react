import ky, { NormalizedOptions, Options } from 'ky'
import JWTUtil from './JWTUtil'
import StorageUtil, { StorageKey } from './StorageUtil'
import { APP_VERSION } from '../Kinds/AppVersion'
import { DeviceKind } from '../Kinds/DeviceKind'
import ApiError, { ApiErrorKind } from '../Api/ApiError'

const DEFAULT_OPTIONS: Options = {
  prefixUrl: process.env.REACT_APP_API_URL,
  throwHttpErrors: true,
  timeout: 60000,
  retry: 2,
  hooks: {
    afterResponse: [
      async (
        request: Request,
        option: NormalizedOptions,
        response: Response
      ): Promise<Response | void> => {
        if (!response.ok) {
          switch (response.status) {
            // 401はトークン切れもしくはトークン不正なので、ローカルストレージのトークンを削除しインデックスへ飛ばす
            case 401:
            // 権限が無いエラーは更新するために、トークンを削除しログイン画面へ返却
            // eslint-disable-next-line no-fallthrough
            case 403:
              StorageUtil.remove(StorageKey.API_TOKEN)
              StorageUtil.remove(StorageKey.API_REFRESH_TOKEN)
              window.location.href = '/login'
              break
          }
        } else {
          const resJson = await response.json()
          if (resJson.jtkn) {
            StorageUtil.set(StorageKey.API_TOKEN, resJson.jtkn)
          }
          if (resJson.refJtkn) {
            StorageUtil.set(StorageKey.API_REFRESH_TOKEN, resJson.refJtkn)
          }
        }
      },
    ],
  },
}

/** エラーレスポンス */
export type IErrorResponse = {
  /** エラーコード */
  errorCode: number
  /** エラーメッセージ */
  errorMessage: string
  /** スタックトレース */
  stackTrace: string
}

/** 共通レスポンス */
export type ICommonResponse = {
  /** エラー内容 */
  error?: IErrorResponse
  /** JWT */
  jtkn?: string
  /** リフレッシュトークン */
  refJtkn?: string
}

/**
 * Responsible for all HTTP requests
 */
export default {
  /**
   * 基本HTTPリクエストクラス
   * @param method GET|POST|DELETE|PATCH|PUTを指定
   * @param url URL
   * @param data リクエストデータ
   * @param addOption 追加オプション
   * @param addHeaders 追加ヘッダー
   */
  request: async function <TResponse extends ICommonResponse>(
    method: string,
    url: string,
    data?: any,
    addOption?: Options,
    addHeaders?: HeadersInit | { [key: string]: undefined }
  ): Promise<TResponse> {
    const option: Options = {
      ...DEFAULT_OPTIONS,
      ...addOption,
      headers: {
        Authorization: `Bearer ${JWTUtil.getToken()}`,
        'App-Version': APP_VERSION.toString(),
        'Device-Kind': DeviceKind.WEB.toString(),
        ...(addHeaders ?? {}),
      },
      method: method,
    }

    if (method !== 'get') {
      option.json = data
    } else {
      const params: any = { ...data }
      option.searchParams = { ...params }
    }

    const response = await ky(url, option)
    if (!response.ok) {
      throw new ApiError(
        response.statusText,
        response,
        response.status,
        ApiErrorKind.REQUEST_FAILED
      )
    }

    const responseJson = (await response.json()) as TResponse
    if (responseJson.error !== undefined) {
      throw new ApiError(
        'Api Response Error',
        response,
        response.status,
        ApiErrorKind.API_ERROR,
        responseJson.error
      )
    }

    return responseJson
  },
}
