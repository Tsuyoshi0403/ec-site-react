import Http, { ICommonResponse } from '../Utils/ApiUtil'

type IAccountVerifyRequest = {
  /** トークン */
  t: string
}

type IAccountVerifyResponse = ICommonResponse & {
  /** 成功フラグ */
  isSuccess: string
}

/**
 * account/verify API実行関数
 */
const ApiAccountVerify = {
  /**
   * アカウント認証API
   * @param request
   */
  async post(request?: IAccountVerifyRequest): Promise<IAccountVerifyResponse> {
    return await Http.request<IAccountVerifyResponse>(
      'post',
      'account/verify',
      request
    )
  },
}
export default ApiAccountVerify
