import LoginFormParts from '../Molecules/LoginFormParts'
import { css } from '@emotion/css'

const rootStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .login-card {
    border: 1px solid #000;
    border-radius: 10px;
    padding: 30px 10px;
  }
  .login-text {
    display: flex;
    justify-content: center;
  }
`
/**
 * ログイン画面
 */
const LoginPage = (): JSX.Element => {
  return (
    <div className={rootStyle}>
      <article className="login-card">
        <h1 className="login-text">ECサイト</h1>
        <LoginFormParts />
      </article>
    </div>
  )
}

export default LoginPage
