import { css } from '@emotion/css'
import { useState } from 'react'

const rootStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .sign-up-card {
    width: 500px;
    box-shadow: 0 6px 17px rgba(0, 0, 0, 0.1);
    .sign-up-title-area {
      margin: 49px 0 35px;
      text-align: center;
      .sign-up-title-text {
        font-size: 35px;
        color: #62cda2;
      }
    }

    .sign-up-from-area {
      padding: 0 62px;
      .sign-up-name-area {
        display: flex;
        gap: 40px;
      }
      .sign-up-input-area {
        position: relative;
        height: 52px;
        margin-bottom: 20px;
        .sign-up-label {
          position: absolute;
          transform: translateY(-120%);
          color: #62cda2;
          font-size: 12px;
          &.label-error {
            color: #eb5a46;
          }
        }

        .sign-up-input {
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
      .sign-up-btn-area {
        padding-top: 10px;
        .sign-up-btn {
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
    .login-btn-area {
      margin: 60px 25px 90px;
      display: flex;
      flex-direction: column;
      .login-btn {
        color: #469fd6;
        font-size: 12px;
        font-weight: 700;
        background: transparent;
        border: 0;
      }
    }
  }
`

type FocusedInputsState = {
  storeName: boolean
  lastName: boolean
  firstName: boolean
  phoneNumber: boolean
  email: boolean
  password: boolean
  confirmPassword: boolean
}

// 初期値
const initFocusedInputState: FocusedInputsState = {
  storeName: false,
  lastName: false,
  firstName: false,
  phoneNumber: false,
  email: false,
  password: false,
  confirmPassword: false,
}

/**
 * アカウント作成画面
 * @returns {JSX.Element}
 */
const AccountSignUpPage = (): JSX.Element => {
  const [focusedInput, setFocusedInput] = useState<FocusedInputsState>(
    initFocusedInputState
  )

  /**
   * フォーカス状態の更新
   * @param {string} key - 更新対象のキー
   * @param {boolean} isFocused - フォーカス状態
   */
  const handleFocus = (key: string, isFocused: boolean) => {
    setFocusedInput((prev) => ({ ...prev, [key]: isFocused }))
  }

  return (
    <div className={rootStyle}>
      <article className="sign-up-card">
        <div className="sign-up-title-area">
          <h1 className="sign-up-title-text">アカウント作成</h1>
        </div>
        <form className="sign-up-from-area">
          <div className="sign-up-input-area">
            {focusedInput.storeName && (
              <label className="sign-up-label">店舗名（必須）</label>
            )}
            <input
              className="sign-up-input"
              placeholder="店舗名（必須）"
              onFocus={() => handleFocus('storeName', true)}
              onBlur={() => handleFocus('storeName', false)}
            />
          </div>
          <div className="sign-up-name-area">
            <div className="sign-up-input-area">
              {focusedInput.lastName && (
                <label className="sign-up-label">姓（必須）</label>
              )}
              <input
                className="sign-up-input"
                placeholder="姓（必須）"
                onFocus={() => handleFocus('lastName', true)}
                onBlur={() => handleFocus('lastName', false)}
              />
            </div>
            <div className="sign-up-input-area">
              {focusedInput.firstName && (
                <label className="sign-up-label">名（必須）</label>
              )}
              <input
                className="sign-up-input"
                placeholder="名（必須）"
                onFocus={() => handleFocus('firstName', true)}
                onBlur={() => handleFocus('firstName', false)}
              />
            </div>
          </div>
          <div className="sign-up-input-area">
            {focusedInput.phoneNumber && (
              <label className="sign-up-label">電話番号</label>
            )}
            <input
              className="sign-up-input"
              placeholder="電話番号"
              onFocus={() => handleFocus('phoneNumber', true)}
              onBlur={() => handleFocus('phoneNumber', false)}
            />
          </div>
          <div className="sign-up-input-area">
            {focusedInput.email && (
              <label className="sign-up-label">メールアドレス（必須）</label>
            )}
            <input
              className="sign-up-input"
              placeholder="メールアドレス（必須）"
              onFocus={() => handleFocus('email', true)}
              onBlur={() => handleFocus('email', false)}
            />
          </div>
          <div className="sign-up-input-area">
            {focusedInput.password && (
              <label className="sign-up-label">パスワード（必須）</label>
            )}
            <input
              className="sign-up-input"
              placeholder="パスワード（必須）"
              onFocus={() => handleFocus('password', true)}
              onBlur={() => handleFocus('password', false)}
            />
          </div>
          <div className="sign-up-input-area">
            {focusedInput.confirmPassword && (
              <label className="sign-up-label">パスワード再入力（必須）</label>
            )}
            <input
              className="sign-up-input"
              placeholder="パスワード再入力（必須）"
              onFocus={() => handleFocus('confirmPassword', true)}
              onBlur={() => handleFocus('confirmPassword', false)}
            />
          </div>
          <div className="sign-up-btn-area">
            <button className="sign-up-btn">アカウント作成</button>
          </div>
        </form>
        <div className="login-btn-area">
          <button className="login-btn" type="button">
            すでにアカウントをお持ちの方はログイン
          </button>
        </div>
      </article>
    </div>
  )
}

export default AccountSignUpPage
