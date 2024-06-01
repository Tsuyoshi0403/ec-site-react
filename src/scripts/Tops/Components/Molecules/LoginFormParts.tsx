import React, { useState } from 'react'
import CommonBtn from '../../../Cores/Components/Atoms/CommonBtn'
import CommonInput from '../../../Cores/Components/Atoms/CommonInput '
import FormLabelArea from '../../../Cores/Components/Molecules/FormLabelArea'
import { css } from '@emotion/css'
import { useNavigate } from 'react-router-dom'

const FormWrapStyle = css`
  margin-bottom: 15px;
  .input-style {
    border-radius: 8px;
  }
  .login-btn {
    display: flex;
    justify-content: center;
  }
  .login-btn-color {
    background: #bbdefb;
  }
`

type IState = {
  /** ログインID */
  loginId: string
  /** パスワード */
  password: string
  /** ログインIDエラーフラグ */
  loginIdError: boolean
  /** パスワードエラーフラグ */
  passwordError: boolean
}

/**
 * ログイン画面のIDとPASS入力用のフォーマットセット
 */
const LoginFormParts = (): JSX.Element => {
  const navigate = useNavigate()
  const [state, setState] = useState<IState>({
    loginId: '',
    password: '',
    passwordError: false,
    loginIdError: false,
  })

  /** ログインボタンクリック時処理 */
  const onClickLogin = async () => {
    const loginIdError = !state.loginId
    const passwordError = !state.password

    // ログインIDまたはパスワードが空の場合
    if (loginIdError || passwordError) {
      setState({ ...state, loginIdError, passwordError })
      return
    }

    navigate('/Top')
  }

  /** データ変更時処理 */
  const onChange = (key: keyof IState) => (value: any) => {
    const updState = { ...state, [key]: value }
    if (key === 'loginId') {
      updState.loginIdError = !value
    } else if (key === 'password') {
      updState.passwordError = !value
    }

    setState(updState)
  }

  return (
    <article className={FormWrapStyle}>
      <FormLabelArea
        label="メールアドレス"
        error={state.loginIdError ? 'メールアドレスの入力を行ってください' : ''}
      >
        <CommonInput
          type="text"
          placeholder="メールアドレスを入力"
          onChangeValue={onChange('loginId')}
          className="input-style"
        />
      </FormLabelArea>
      <FormLabelArea
        label="パスワード"
        error={state.passwordError ? 'パスワードの入力を行ってください' : ''}
      >
        <CommonInput
          type="password"
          placeholder="パスワードを入力"
          onChangeValue={onChange('password')}
          className="input-style"
        />
      </FormLabelArea>
      <div className="login-btn">
        <CommonBtn
          size="large"
          className="login-btn-color"
          onClick={onClickLogin}
        >
          ログイン
        </CommonBtn>
      </div>
    </article>
  )
}

export default LoginFormParts
