import { css } from '@emotion/css'
import AuthenticationSuccessSvg from '../../../Cores/Svgs/Icons/AuthenticationSuccessSvg'
import AuthenticationFailedSvg from '../../../Cores/Svgs/Icons/AuthenticationFailedSvg'
import { successType } from '../../Containers/AccountVerifyPage'

const rootStyle = css`
  display: flex;
  flex-direction: column;
  margin-top: 90px;
  align-items: center;
  height: 100vh;
  .account-verify-title-area {
    width: 500px;
    text-align: center;
    margin-bottom: 50px;
    .account-verify-title {
      font-size: 35px;
      color: #62cda2;
    }
  }
  .account-verify-card {
    width: 500px;
    box-shadow: 0 6px 17px rgba(0, 0, 0, 0.1);
    .account-verify-svg-area {
      text-align: center;
      margin: 20px 20px;
    }
    .account-verify-txt {
      text-align: center;
    }
    hr {
      margin: 30px 70px;
    }
    .login-btn-link-area {
      margin: 50px 0;
      text-align: center;
      .login-btn-link {
        color: #469fd6;
        font-size: 12px;
        font-weight: 700;
        background: transparent;
        border: 0;
        &:hover {
          color: #5ab3e1;
          text-decoration: underline;
          cursor: pointer;
        }
      }
    }
  }
`

type IProps = {
  /** 認証状態 */
  successType: successType
}

/**
 * アカウント認証画面
 * @returns {JSX.Element}
 */
const AccountVerifyPage = ({ successType }: IProps): JSX.Element => {
  return (
    <div className={rootStyle}>
      <div className="account-verify-title-area">
        <div className="account-verify-title">
          {successType === 'success' ? '認証完了' : '認証エラー'}
        </div>
      </div>
      <article className="account-verify-card">
        {successType === 'success' && (
          <section>
            <div className="account-verify-svg-area">
              <AuthenticationSuccessSvg />
            </div>
            <p className="account-verify-txt">アカウント登録が完了しました。</p>
            <hr />
            <p className="account-verify-txt">早速ログインしてみましょう</p>
            <div className="login-btn-link-area">
              <button
                className="login-btn-link"
                type="button"
                onClick={() =>
                  (location.href = process.env.REACT_APP_WEB_URL + '/login')
                }
              >
                ログイン画面はこちら
              </button>
            </div>
          </section>
        )}
        {successType === 'failed' && (
          <section>
            <div className="account-verify-svg-area">
              <AuthenticationFailedSvg />
            </div>
            <p className="account-verify-txt">
              有効期限が切れているか無効なURLです。
            </p>
            <hr />
            <div className="login-btn-link-area">
              <button
                className="login-btn-link"
                type="button"
                onClick={() =>
                  (location.href = process.env.REACT_APP_WEB_URL + '/login')
                }
              >
                ログイン画面はこちら
              </button>
            </div>
          </section>
        )}
      </article>
    </div>
  )
}

export default AccountVerifyPage
