import { useSetRecoilState } from 'recoil'
import { ICommonResponse } from '../Utils/ApiUtil'
import LoadingState from '../Recoil/LoadingState'
import JWTUtil from '../Utils/JWTUtil'
import ApiRefresh from '../Api/ApiRefresh'
import ApiError, { ApiErrorKind } from '../Api/ApiError'
import useAsyncError from './useAsyncError'
import useNotification from './useNotification'
import { IRakutenErrorResponse } from '../Utils/RakutenApiUtil'

/** API関数の型定義 */
export declare type ApiFunction<
  Request,
  Response extends IRakutenErrorResponse,
> = (request?: Request) => Promise<Response>

/** 成功時のコールバック */
export type SuccessCallback<Response> = (response: Response) => void
/** エラー時のコールバック */
export type ErrorCallback = (e: any) => boolean | void

/** 実行API関数の型定義 */
export declare type ExecApiFunction<
  Request,
  Response extends IRakutenErrorResponse,
> = (params: {
  request?: Request
  successCallback?: SuccessCallback<Response>
  errorCallback?: ErrorCallback
  finallyCallback?: () => void
}) => Promise<boolean>

let execApiCount = 0
/**
 * API実行中、共通ローディングを表示
 * @param apiFunc
 * @param showLoading
 */
export const useRakutenApiLoading = <
  Request,
  Response extends IRakutenErrorResponse,
>(
  apiFunc: ApiFunction<Request, Response>,
  showLoading = true
): { execApi: ExecApiFunction<Request, Response> } => {
  const setLoading = useSetRecoilState(LoadingState)
  const { showWarnNotification } = useNotification()
  const throwError = useAsyncError()

  const execApi: ExecApiFunction<Request, Response> = async ({
    request,
    successCallback,
    errorCallback,
    finallyCallback,
  }) => {
    if (showLoading) {
      setLoading(true)
      execApiCount++
    }
    try {
      if (JWTUtil.existsToken() && JWTUtil.checkTokenExpired()) {
        // TODO: refreshAPI実装が完了後、API繋ぎ込みをする
        // await ApiRefresh.post()
      }

      const response = await apiFunc(request)
      successCallback && successCallback(response)

      return true
    } catch (e) {
      if (errorCallback) {
        const shouldContinue = errorCallback(e)
        if (!shouldContinue) return false
      }

      if (e instanceof ApiError) {
        let message = ''
        switch (e.errorKind) {
          case ApiErrorKind.REQUEST_FAILED:
            message = '通信に失敗しました。 status : ' + e.status
            break

          case ApiErrorKind.API_ERROR:
            if (e.errorResponse) {
              if (typeof e.errorResponse === 'string') {
                message = e.errorResponse.replace('\\n', '\n')
              } else if ('message' in e.errorResponse) {
                message = e.errorResponse.message.replace('\\n', '\n')
              }
            }
            break
          default:
            message = `code:[${e.status}]\nエラーが発生しました : ${e.errorResponse}`
            break
        }
        showWarnNotification(message)
      } else if (e instanceof Error) {
        throwError(e)
      } else {
        // 想定外のエラーの場合、エラーページに遷移させる
        throwError(new Error('API Unknown Error'))
      }
    } finally {
      finallyCallback && finallyCallback()
      if (showLoading) {
        execApiCount--
        if (execApiCount <= 0) {
          setLoading(false)
          execApiCount = 0
        }
      }
    }
    return false
  }
  return { execApi }
}

export default useRakutenApiLoading
