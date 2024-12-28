import { ChangeEvent, useEffect, useState } from 'react'
import AccountSignUpPage from '../../Components/Pages/AccountSignUpPage'
import useApiLoading from '../../../Cores/Hooks/useApiLoading'
import ApiAccountSignUp from '../../../Cores/Api/ApiAccountSignUp'
import { IAccount, InitAccount } from '../../../Cores/Types/Account'
import StringUtil from '../../../Cores/Utils/StringUtil'
import { useNavigate } from 'react-router-dom'
import useNotification from '../../../Cores/Hooks/useNotification'

/**
 *  アカウント作成コンテナ
 * @returns {JSX.Element}
 */
const AccountSignUpPageContainers = (): JSX.Element => {
  const navigate = useNavigate()
  const { showWarnNotification } = useNotification()
  const { execApi: execApiPost } = useApiLoading(ApiAccountSignUp.post)
  const [account, setAccount] = useState<IAccount>(InitAccount)

  // 初回レンダリング時のURLチェック
  useEffect(() => {
    if (
      location.href.indexOf(process.env.REACT_APP_SIGN_UP_URL ?? 'http') === -1
    ) {
      location.href = process.env.REACT_APP_SIGN_UP_URL + '/sign-up'
    }
  }, [])

  /**
   * データ変更時の処理
   * @param {IAccount} key - キー
   */
  const onChange =
    (key: keyof IAccount) => (e: ChangeEvent<HTMLInputElement>) => {
      let value = e.target.value
      if (key === 'phoneNo') value = StringUtil.pickNumberHyphen(e.target.value)
      else if (key === 'pass') value = StringUtil.pickPassword(e.target.value)
      setAccount({ ...account, [key]: value })
    }

  /**
   * アカウント作成ボタン押下時の処理
   * @param {React.FormEvent} e - フォーム送信イベント
   */
  const onClickCreate = async (e: React.FormEvent) => {
    e.preventDefault()

    const errorMessages = validateAccount(account)
    if (errorMessages.length > 0) {
      showWarnNotification(errorMessages.join('\n'))
      return
    }

    execApiPost({
      request: {
        store: account.store,
        lastName: account.lastName,
        firstName: account.firstName,
        phoneNo: account.phoneNo,
        mail: account.mail,
        pass: account.pass,
      },
      successCallback: () => {
        navigate('/sign-up/check-mail')
      },
    })
  }

  return (
    <AccountSignUpPage
      account={account}
      onClickCreate={onClickCreate}
      onChange={onChange}
    />
  )
}

/**
 * アカウントのバリデーション処理
 * @param {IAccount} account - 検証対象のアカウント情報
 */
const validateAccount = (account: IAccount): string[] => {
  const errors: string[] = []

  if (!account.store) errors.push('店舗名を入力してください')
  if (!account.lastName) errors.push('姓を入力してください')
  if (!account.firstName) errors.push('名を入力してください')

  if (!account.mail) {
    errors.push('メールアドレスを入力してください')
  } else if (!StringUtil.checkFormatMail(account.mail)) {
    errors.push('メールアドレスのフォーマットが異なります')
  }

  if (!account.pass) {
    errors.push('パスワードを入力してください')
  } else {
    if (account.pass.length < 8)
      errors.push('パスワードは8文字以上で設定してください')
    if (account.pass.length > 36)
      errors.push('パスワードは36文字以下で設定してください')
    if (!StringUtil.checkPasswordValidation(account.pass))
      errors.push('半角英字、半角数字を含めたパスワードを設定してください')
  }

  if (!account.confirmPass) {
    errors.push('再入力パスワードを入力してください')
  } else if (account.pass !== account.confirmPass) {
    errors.push('パスワードと再入力パスワードが一致しません')
  }

  return errors
}

export default AccountSignUpPageContainers
