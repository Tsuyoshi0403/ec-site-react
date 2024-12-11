import { ChangeEvent, useEffect, useState } from 'react'
import ApiLogin from '../../../Cores/Api/ApiLogin'
import useApiLoading from '../../../Cores/Hooks/useApiLoading'
import NewLoginPage from '../../Components/Pages/NewLoginPage'
import StringUtil from '../../../Cores/Utils/StringUtil'
import { useNavigate } from 'react-router-dom'

export type IFormState = {
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
 * ログイン画面コンテナ
 */
const NewLoginPageContainers = () => {
  const [formState, setFormState] = useState<IFormState>({
    loginId: '',
    password: '',
    loginIdError: false,
    passwordError: false,
  })
  const navigate = useNavigate()
  const { execApi: execApiPost } = useApiLoading(ApiLogin.post)

  /**
   * ログインフォーム送信時の処理
   */
  const onSubmitLogin = async (e: React.FormEvent) => {
    //form送信のページリロードの影響で、API通信が失敗するのでデフォルト動作をキャンセル
    e.preventDefault()
    const loginIdError = !formState.loginId
    const passwordError = !formState.password

    // ログインIDまたはパスワードが空の場合
    if (loginIdError || passwordError) {
      setFormState({ ...formState, loginIdError, passwordError })
      return
    }

    execApiPost(
      {
        type: 'pass',
        id: formState.loginId,
        pass: formState.password,
      },
      () => {
        navigate('/')
      }
    )
  }

  /**
   * データ変更時の処理
   * @param key キー
   */
  const onChange =
    (key: keyof IFormState) => (e: ChangeEvent<HTMLInputElement>) => {
      setFormState({ ...formState, [key]: e.target.value })
    }

  /**
   * ログインIDのバリデーション処理
   */
  const validateLoginId = () => {
    // メールアドレスが存在するかつアドレスフォーマットが正しくない場合はログインIDエラー
    const loginIdError =
      !!formState.loginId && !StringUtil.checkFormatMail(formState.loginId)
    setFormState({ ...formState, loginIdError })
  }

  return (
    <NewLoginPage
      loginId={formState.loginId}
      password={formState.password}
      loginIdError={formState.loginIdError}
      passwordError={formState.passwordError}
      onSubmitLogin={onSubmitLogin}
      onChange={onChange}
      validateLoginId={validateLoginId}
    />
  )
}

export default NewLoginPageContainers
