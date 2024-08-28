import Http, { ICommonResponse } from '../Utils/ApiUtil'
import JWTUtil from '../Utils/JWTUtil'

/**
 * refresh API実行関数
 */
const ApiRefresh = {
  /**
   * トークンのリフレッシュを行う
   * @param request
   */
  async post(request?: Request): Promise<ICommonResponse> {
    return await Http.request<ICommonResponse>(
      'post',
      'refresh',
      request,
      undefined,
      { Authorization: `Bearer ${JWTUtil.getRefreshToken()}` }
    )
  },
}

export default ApiRefresh
