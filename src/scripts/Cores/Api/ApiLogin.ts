import Http, { ICommonResponse } from '../Utils/ApiUtil'

type ILoginRequest = {
  /** ログインタイプ */
  type: 'google' | 'pass'
  /** ログインID */
  id: string
  /** パスワード */
  pass: string
}

type ILoginResponse = ICommonResponse & {
  /** ユーザ名 */
  name: string
  /** メールアドレス */
  mail: string
}

/**
 * login API実行関数
 */
const ApiLogin = {
  /**
   * ログイン情報を送信
   * @param request
   */
  async post(request?: ILoginRequest): Promise<ILoginResponse> {
    return await Http.request<ILoginResponse>('post', 'login', request)
  },
}

export default ApiLogin
