import { css } from '@emotion/css'
import AuthenticationSuccessSvg from '../../../Cores/Svgs/Icons/AuthenticationSuccessSvg'
import AuthenticationFailedSvg from '../../../Cores/Svgs/Icons/AuthenticationFailedSvg'
import { successType } from '../../Containers/AccountVerifyPage'
import CommonLink from '../../../Cores/Components/Atoms/CommonLink'
import CommonH2 from '../../../Cores/Components/Atoms/CommonH2'

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
        <CommonH2
          className="account-verify-title"
          label={successType === 'success' ? '認証完了' : '認証エラー'}
        />
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
              <CommonLink href={process.env.REACT_APP_WEB_URL + '/login'}>
                ログイン画面はこちら
              </CommonLink>
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
              <CommonLink href={process.env.REACT_APP_WEB_URL + '/login'}>
                ログイン画面はこちら
              </CommonLink>
            </div>
          </section>
        )}
      </article>
    </div>
  )
}

export default AccountVerifyPage
