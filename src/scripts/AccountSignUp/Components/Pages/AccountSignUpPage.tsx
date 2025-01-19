import { css } from '@emotion/css'
import { ChangeEvent } from 'react'
import { IAccount } from '../../../Cores/Types/Account'
import AccountSignUpForm from '../Organisms/AccountSignUpForm'
import CommonH2 from '../../../Cores/Components/Atoms/CommonH2'
import CommonLink from '../../../Cores/Components/Atoms/CommonLink'

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
      }
    }
    .login-btn-area {
      margin: 60px 25px 90px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`

export type FocusedInputsState = {
  store: boolean
  lastName: boolean
  firstName: boolean
  phoneNo: boolean
  mail: boolean
  pass: boolean
  confirmPass: boolean
}

// 初期値
export const initFocusedInputState: FocusedInputsState = {
  store: false,
  lastName: false,
  firstName: false,
  phoneNo: false,
  mail: false,
  pass: false,
  confirmPass: false,
}

type IProps = {
  /** アカウント情報 */
  account: IAccount
  /** データ変更時処理のコールバック */
  onChange: (key: keyof IAccount) => (e: ChangeEvent<HTMLInputElement>) => void
  /** アカウント作成ボタン押下時のコールバック */
  onClickCreate: (e: React.FormEvent) => void
}

/**
 * アカウント作成画面
 * @returns {JSX.Element}
 */
const AccountSignUpPage = (props: IProps): JSX.Element => {
  return (
    <div className={rootStyle}>
      <article className="sign-up-card">
        <div className="sign-up-title-area">
          <CommonH2 className="sign-up-title-text" label="アカウント作成" />
        </div>
        <AccountSignUpForm
          account={props.account}
          onClickCreate={props.onClickCreate}
          onChange={props.onChange}
        />
        <div className="login-btn-area">
          <CommonLink href={process.env.REACT_APP_WEB_URL + '/login'}>
            すでにアカウントをお持ちの方はログイン
          </CommonLink>
        </div>
      </article>
    </div>
  )
}

export default AccountSignUpPage
