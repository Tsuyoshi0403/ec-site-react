import { css } from '@emotion/css'
import { ChangeEvent, useState } from 'react'
import { IFormState } from '../../Containers/Pages/LoginPage'
import CommonBtn from '../../../Cores/Components/Atoms/CommonBtn'
import CommonInput from '../../../Cores/Components/Atoms/CommonInput '
import CommonLabel from '../../../Cores/Components/Atoms/CommonLabel'

const rootStyle = css`
  .login-from-area {
    padding: 0 62px;
    .login-input {
      position: relative;
      height: 52px;
      margin-bottom: 20px;
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
 * ID・PASS入力用コンポーネント
 * @returns {JSX.Element}
 */
const LoginForm = (props: IProps): JSX.Element => {
  const [emailFocus, setEmailFocus] = useState<boolean>(false)
  const [passwordFocus, setPasswordFocus] = useState<boolean>(false)

  return (
    <div className={rootStyle}>
      <form className="login-from-area" onSubmit={props.onSubmitLogin}>
        <div className="login-input">
          {(props.loginIdError || emailFocus) && (
            <CommonLabel error={props.loginIdError}>メールアドレス</CommonLabel>
          )}
          <CommonInput
            error={props.loginIdError}
            placeholder="メールアドレス"
            type="text"
            value={props.loginId}
            onChange={props.onChange('loginId')}
            onFocus={() => setEmailFocus(true)}
            onBlur={() => {
              setEmailFocus(false)
              props.validateLoginId()
            }}
          />
        </div>
        <div className="login-input">
          {(props.passwordError || passwordFocus) && (
            <CommonLabel error={props.passwordError}>パスワード</CommonLabel>
          )}
          <CommonInput
            error={props.passwordError}
            placeholder="パスワード"
            type="password"
            value={props.password}
            onChange={props.onChange('password')}
            onFocus={() => setPasswordFocus(true)}
            onBlur={() => setPasswordFocus(false)}
          />
        </div>
        <CommonBtn
          size="medium"
          type="submit"
          disabled={
            props.loginIdError ||
            props.passwordError ||
            !props.loginId ||
            !props.password
          }
        >
          ログイン
        </CommonBtn>
      </form>
    </div>
  )
}

export default LoginForm
