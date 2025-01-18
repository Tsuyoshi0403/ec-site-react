import { css } from '@emotion/css'
import { ChangeEvent } from 'react'
import { IFormState } from '../../Containers/Pages/NewLoginPage'
import LoginForm from '../Molecules/LoginForm'
import CommonLink from '../../../Cores/Components/Atoms/CommonLink'
import CommonH2 from '../../../Cores/Components/Atoms/CommonH2'

const rootStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .login-card {
    width: 500px;
    box-shadow: 0 6px 17px rgba(0, 0, 0, 0.1);
    .login-title-area {
      margin: 49px 0 35px;
      text-align: center;
    }
    .sign-up-link-area {
      margin: 60px 25px 90px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`

type IProps = {
  /** ログインID */
  loginId: string
  /** パスワード */
  password: string
  /** ログインIDエラーフラグ */
  loginIdError: boolean
  /** パスワードエラーフラグ */
  passwordError: boolean
  /** ログインボタン押下時のコールバック */
  onSubmitLogin: (e: React.FormEvent) => void
  /** データ変更時処理のコールバック */
  onChange: (
    key: keyof IFormState
  ) => (e: ChangeEvent<HTMLInputElement>) => void
  /** ログインIDのバリデーション処理 */
  validateLoginId: () => void
}

/**
 * ログイン画面
 * @returns {JSX.Element}
 */
const NewLoginPage = (props: IProps): JSX.Element => {
  return (
    <div className={rootStyle}>
      <article className="login-card">
        <div className="login-title-area">
          <CommonH2 label="LOGIN" />
        </div>
        <LoginForm
          loginId={props.loginId}
          password={props.password}
          loginIdError={props.loginIdError}
          passwordError={props.passwordError}
          onSubmitLogin={props.onSubmitLogin}
          onChange={props.onChange}
          validateLoginId={props.validateLoginId}
        />
        <div className="sign-up-link-area">
          <CommonLink href={process.env.REACT_APP_SIGN_UP_URL + '/sign-up'}>
            アカウント作成はこちら
          </CommonLink>
        </div>
      </article>
    </div>
  )
}

export default NewLoginPage
