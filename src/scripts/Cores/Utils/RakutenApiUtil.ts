import ky, { Options } from 'ky'
import ApiError, { ApiErrorKind } from '../Api/ApiError'

const DEFAULT_OPTIONS: Options = {
  prefixUrl: process.env.REACT_APP_RAKUTEN_API_URL,
  throwHttpErrors: false,
  timeout: 60000,
  retry: 2,
}

/** 楽天API共通のレスポンス */
export type IRakutenErrorResponse = {
  /** エラー詳細 */
  error_description?: string
}

/**
 * Responsible for all Rakuten API HTTP requests
 */
export default {
  /**
   * Rakuten API リクエスト
   * @param method GET|POST|DELETE|PATCH|PUTを指定
   * @param url URL
   * @param data リクエストデータ
   */
  request: async function <TResponse extends IRakutenErrorResponse>(
    method: string,
    url: string,
    data?: any
  ): Promise<TResponse> {
    const searchParams = {
      applicationId: process.env.REACT_APP_RAKUTEN_KEY,
      format: 'json',
      ...data,
    }

    const option: Options = {
      ...DEFAULT_OPTIONS,
      method: method,
      searchParams: searchParams,
    }

    const response = await ky(url, option)

    if (!response.ok) {
      const responseJson = (await response.json()) as TResponse
      const errorDescription = responseJson.error_description

      let errorKind
      if ([400, 404, 429, 500, 503].includes(response.status)) {
        errorKind = ApiErrorKind.NONE
      } else {
        errorKind = ApiErrorKind.REQUEST_FAILED
      }

      throw new ApiError(
        response.statusText,
        response,
        response.status,
        errorKind,
        errorDescription
      )
    }

    const responseJson = (await response.json()) as TResponse

    return responseJson
  },
}
