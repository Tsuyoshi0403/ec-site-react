import { css } from '@emotion/css'
import { ChangeEvent, useState } from 'react'
import StringUtil from '../../../Cores/Utils/StringUtil'
import classNames from 'classnames'

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
      .login-title-text {
        font-size: 40px;
        color: #62cda2;
      }
    }
    .login-from-area {
      padding: 0 62px;
      .login-input {
        position: relative;
        height: 52px;
        margin-bottom: 20px;
        .login-label {
          position: absolute;
          transform: translateY(-120%);
          color: #62cda2;
          font-size: 12px;
          &.label-error {
            color: #eb5a46;
          }
        }
        .login-input-text {
          border: 0px;
          font-size: 17px;
          border-bottom: 2px solid #dfe5ec;
          padding-bottom: 5px;
          width: 100%;

          &::placeholder {
            color: #dfe5ec;
            font-weight: bold;
            font-size: 17px;
          }
          &:focus::placeholder {
            opacity: 0;
          }
          /* フォーカス時の枠線を非表示にする */
          &:focus {
            outline: none;
            border-bottom-color: #62cda2;
          }
          &.input-error {
            border-bottom-color: #eb5a46;
          }
        }
      }
      .login-btn-area {
        .login-btn {
          border-radius: 5px;
          height: 60px;
          width: 100%;
          font-weight: 700;
          font-size: 16px;
          background-color: #62cda2;
          color: #fff;
          border: 0;
          cursor: pointer;
          &:disabled {
            background-color: #dee5ec;
            cursor: not-allowed;
          }
        }
      }
    }
    .forgot-password-btn-area {
      margin: 60px 25px 90px;
      display: flex;
      flex-direction: column;
      .forgot-password-btn {
        color: #469fd6;
        font-size: 12px;
        font-weight: 700;
        background: transparent;
        border: 0;
      }
    }
  }
`

type IFormState = {
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
 * ログイン画面
 * @returns {JSX.Element}
 */
const NewLoginPage = (): JSX.Element => {
  const [emailFocus, setEmailFocus] = useState<boolean>(false)
  const [passwordFocus, setPasswordFocus] = useState<boolean>(false)
  const [formState, setFormState] = useState<IFormState>({
    loginId: '',
    password: '',
    loginIdError: false,
    passwordError: false,
  })

  /**
   * フォーム送信時の処理
   */
  const onSubmit = () => {}

  /**
   * データ変更時の処理
   * @param key - フォームのキー
   */
  const onChange =
    (key: keyof IFormState) => (e: ChangeEvent<HTMLInputElement>) => {
      setFormState({ ...formState, [key]: e.target.value })
    }

  /**
   * ログインIDのバリデーション関数
   */
  const validateLoginId = () => {
    // メールアドレスがあるかつアドレスフォーマットが正しくない場合はログインIDエラー
    const loginIdError =
      !!formState.loginId && !StringUtil.checkFormatMail(formState.loginId)
    setFormState({ ...formState, loginIdError })
  }

  return (
    <div className={rootStyle}>
      <article className="login-card">
        <div className="login-title-area">
          <h1 className="login-title-text">LOGIN</h1>
        </div>
        <form className="login-from-area" onSubmit={onSubmit}>
          <div className="login-input">
            {(formState.loginIdError || emailFocus) && (
              <label
                className={classNames('login-label', {
                  'label-error': formState.loginIdError,
                })}
              >
                メールアドレス
              </label>
            )}
            <input
              className={classNames('login-input-text', {
                'input-error': formState.loginIdError,
              })}
              placeholder="メールアドレス"
              type="text"
              value={formState.loginId}
              onChange={onChange('loginId')}
              onFocus={() => setEmailFocus(true)}
              onBlur={() => {
                setEmailFocus(false)
                validateLoginId()
              }}
            />
          </div>
          <div className="login-input">
            {(formState.passwordError || passwordFocus) && (
              <label
                className={classNames('login-label', {
                  'label-error': formState.passwordError,
                })}
              >
                パスワード
              </label>
            )}
            <input
              className={classNames('login-input-text', {
                'input-error': formState.passwordError,
              })}
              placeholder="パスワード"
              type="password"
              value={formState.password}
              onChange={onChange('password')}
              onFocus={() => setPasswordFocus(true)}
              onBlur={() => setPasswordFocus(false)}
            />
          </div>
          <div className="login-btn-area">
            <button
              className="login-btn"
              type="submit"
              disabled={
                formState.loginIdError ||
                formState.passwordError ||
                !formState.loginId ||
                !formState.password
              }
            >
              ログイン
            </button>
          </div>
        </form>
        <div className="forgot-password-btn-area">
          <button className="forgot-password-btn" type="button">
            ログインID/パスワードを忘れた方
          </button>
        </div>
      </article>
    </div>
  )
}

export default NewLoginPage
