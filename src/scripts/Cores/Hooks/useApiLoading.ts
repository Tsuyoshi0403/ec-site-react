import { useSetRecoilState } from 'recoil'
import { ICommonResponse } from '../Utils/ApiUtil'
import LoadingState from '../Recoil/LoadingState'
import JWTUtil from '../Utils/JWTUtil'
import ApiRefresh from '../Api/ApiRefresh'
import ApiError, { ApiErrorKind } from '../Api/ApiError'
import useAsyncError from './useAsyncError'

/** 成功時のコールバック */
export type SuccessCallback<Response> = (response: Response) => void
/** エラー時のコールバック */
export type ErrorCallback = (e: any) => boolean | void

/** API関数の型定義 */
export declare type ApiFunction<Request, Response extends ICommonResponse> = (
  request?: Request
) => Promise<Response>

/** 実行API関数の型定義 */
export declare type ExecApiFunction<
  Request,
  Response extends ICommonResponse,
> = (
  request?: Request,
  successCallback?: SuccessCallback<Response>,
  errorCallback?: ErrorCallback,
  finallyCallback?: () => void
) => Promise<boolean>

let execApiCount = 0
/**
 * API実行中、共通ローディングを表示
 * @param apiFunc
 * @param showLoading
 */
const useApiLoading = <Request, Response extends ICommonResponse>(
  apiFunc: ApiFunction<Request, Response>,
  showLoading = true
): { execApi: ExecApiFunction<Request, Response> } => {
  const setLoading = useSetRecoilState(LoadingState)
  const throwError = useAsyncError()

  const execApi: ExecApiFunction<Request, Response> = async (
    request,
    successCallback,
    errorCallback,
    finallyCallback
  ) => {
    if (showLoading) {
      setLoading(true)
      execApiCount++
    }
    try {
      // トークンが存在しているかつ期限が切れていたらリフレッシュを実行
      if (JWTUtil.existsToken() && JWTUtil.checkTokenExpired()) {
        await ApiRefresh.post()
      }

      const response = await apiFunc(request)
      successCallback && successCallback(response)

      return true
    } catch (e) {
      // エラーコールバックが設定されていた場合、以降の処理は行わない
      if (errorCallback) {
        const shouldContinue = errorCallback(e)
        // リターンがtrue以外の場合、ここで止める
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
              message = e.errorResponse.errorMessage.replace('\\n', '\n')
            }
            break
          default:
            message = 'エラーが発生しました : ' + e.message
            break
        }
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

export default useApiLoading
