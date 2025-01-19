import { css } from '@emotion/css'
import CheckMailSvg from '../../../Cores/Svgs/Icons/CheckMailSvg'
import CommonH2 from '../../../Cores/Components/Atoms/CommonH2'
import CommonLink from '../../../Cores/Components/Atoms/CommonLink'

const rootStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .check-mail-title-area {
    width: 500px;
    text-align: center;
    margin-bottom: 50px;
    .check-mail-title {
      font-size: 35px;
    }
  }
  .check-mail-card {
    width: 500px;
    box-shadow: 0 6px 17px rgba(0, 0, 0, 0.1);
    .check-mail-svg-area {
      text-align: center;
      margin: 20px 20px;
    }
    .check-mail-txt {
      text-align: center;
      .check-mail {
        color: #5b9ed4;
      }
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
  /** メールアドレス */
  mail: string
}

/**
 * 認証用メール送信画面
 * @returns {JSX.Element}
 */
const AccountCheckMailPage = ({ mail }: IProps): JSX.Element => {
  return (
    <div className={rootStyle}>
      <div className="check-mail-title-area">
        <CommonH2
          className="check-mail-title"
          label="認証用メールを送信しました"
        />
      </div>
      <article className="check-mail-card">
        <div className="check-mail-svg-area">
          <CheckMailSvg />
        </div>
        <p className="check-mail-txt">
          オンラインショッピングから
          <br />
          <span className="check-mail">{mail}</span>
          に<br />
          認証用URLを記載したメールを送信しました。
          <br />
          送信されたメールを確認してください。
        </p>
        <hr />
        <p className="check-mail-txt">
          メールが届かない場合は迷惑メール設定
          <br />
          およびスパムフォルダをご確認ください。
        </p>
        <div className="login-btn-link-area">
          <CommonLink href={process.env.REACT_APP_WEB_URL + '/login'}>
            ログイン画面はこちら
          </CommonLink>
        </div>
      </article>
    </div>
  )
}

export default AccountCheckMailPage
