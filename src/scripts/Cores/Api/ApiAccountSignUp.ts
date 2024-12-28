import { IAccount } from '../Types/Account'
import Http, { ICommonResponse } from '../Utils/ApiUtil'

type IAccountRegisterRequest = IAccount

/**
 * account/sign-up API実行関数
 */
const ApiAccountSignUp = {
  /**
   * アカウント作成API
   * @param request
   */
  async post(request?: IAccountRegisterRequest): Promise<ICommonResponse> {
    return await Http.request<ICommonResponse>(
      'post',
      'account/sign-up',
      request
    )
  },
}
export default ApiAccountSignUp
