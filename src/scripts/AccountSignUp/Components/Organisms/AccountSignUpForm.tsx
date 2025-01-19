import { css } from '@emotion/css'
import { ChangeEvent, useState } from 'react'
import {
  FocusedInputsState,
  initFocusedInputState,
} from '../Pages/AccountSignUpPage'
import { IAccount } from '../../../Cores/Types/Account'
import CommonLabel from '../../../Cores/Components/Atoms/CommonLabel'
import CommonInput from '../../../Cores/Components/Atoms/CommonInput '
import CommonBtn from '../../../Cores/Components/Atoms/CommonBtn'

const rootStyle = css`
  .sign-up-from-area {
    padding: 0 62px;
    .sign-up-input-area {
      position: relative;
      height: 65px;
    }
    .sign-up-name-area {
      display: flex;
      gap: 40px;
    }
    .sign-up-btn-area {
      padding-top: 15px;
    }
  }
`

type IProps = {
  /** アカウント情報 */
  account: IAccount
  /** データ変更時処理のコールバック */
  onChange: (key: keyof IAccount) => (e: ChangeEvent<HTMLInputElement>) => void
  /** アカウント作成ボタン押下時のコールバック */
  onClickCreate: (e: React.FormEvent) => void
}

/**
 * アカウント作成入力用コンポーネント
 * @returns {JSX.Element}
 */
const AccountSignUpForm = (props: IProps): JSX.Element => {
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
      <form className="sign-up-from-area" onSubmit={props.onClickCreate}>
        <div className="sign-up-input-area">
          {focusedInput.store && <CommonLabel>店舗名（必須）</CommonLabel>}
          <CommonInput
            placeholder="店舗名（必須）"
            type="text"
            value={props.account.store}
            onChange={props.onChange('store')}
            onFocus={() => handleFocus('store', true)}
            onBlur={() => handleFocus('store', false)}
          />
        </div>
        <div className="sign-up-name-area">
          <div className="sign-up-input-area">
            {focusedInput.lastName && <CommonLabel>姓（必須）</CommonLabel>}
            <CommonInput
              placeholder="姓（必須）"
              type="text"
              value={props.account.lastName}
              onChange={props.onChange('lastName')}
              onFocus={() => handleFocus('lastName', true)}
              onBlur={() => handleFocus('lastName', false)}
            />
          </div>
          <div className="sign-up-input-area">
            {focusedInput.firstName && <CommonLabel>名（必須）</CommonLabel>}
            <CommonInput
              placeholder="名（必須）"
              type="text"
              value={props.account.firstName}
              onChange={props.onChange('firstName')}
              onFocus={() => handleFocus('firstName', true)}
              onBlur={() => handleFocus('firstName', false)}
            />
          </div>
        </div>
        <div className="sign-up-input-area">
          {focusedInput.phoneNo && <CommonLabel>電話番号</CommonLabel>}
          <CommonInput
            placeholder="電話番号"
            type="text"
            value={props.account.phoneNo}
            onChange={props.onChange('phoneNo')}
            onFocus={() => handleFocus('phoneNo', true)}
            onBlur={() => handleFocus('phoneNo', false)}
          />
        </div>
        <div className="sign-up-input-area">
          {focusedInput.mail && (
            <CommonLabel>メールアドレス（必須）</CommonLabel>
          )}
          <CommonInput
            placeholder="メールアドレス（必須）"
            type="text"
            value={props.account.mail}
            onChange={props.onChange('mail')}
            onFocus={() => handleFocus('mail', true)}
            onBlur={() => handleFocus('mail', false)}
          />
        </div>
        <div className="sign-up-input-area">
          {focusedInput.pass && <CommonLabel>パスワード（必須）</CommonLabel>}
          <CommonInput
            placeholder="パスワード（必須）"
            type="password"
            value={props.account.pass}
            onChange={props.onChange('pass')}
            onFocus={() => handleFocus('pass', true)}
            onBlur={() => handleFocus('pass', false)}
          />
        </div>
        <div className="sign-up-input-area">
          {focusedInput.confirmPass && (
            <CommonLabel>再入力パスワード（必須）</CommonLabel>
          )}
          <CommonInput
            placeholder="再入力パスワード（必須）"
            type="password"
            value={props.account.confirmPass}
            onChange={props.onChange('confirmPass')}
            onFocus={() => handleFocus('confirmPass', true)}
            onBlur={() => handleFocus('confirmPass', false)}
          />
        </div>
        <div className="sign-up-btn-area">
          <CommonBtn size="medium" type="submit">
            アカウント作成
          </CommonBtn>
        </div>
      </form>
    </div>
  )
}

export default AccountSignUpForm
