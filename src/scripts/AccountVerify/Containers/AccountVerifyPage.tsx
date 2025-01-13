import { useParams } from 'react-router-dom'
import AccountVerifyPage from '../Components/Pages/AccountVerifyPage'
import { useEffect, useState } from 'react'
import useApiLoading from '../../Cores/Hooks/useApiLoading'
import ApiAccountVerify from '../../Cores/Api/ApiAccountVerify'

export type successType = 'loading' | 'success' | 'failed'

/**
 * アカウント認証コンテナ
 * @returns {JSX.Element}
 */
const AccountVerifyPageContainers = (): JSX.Element => {
  const params = useParams()
  const [successType, setSuccessType] = useState<successType>('loading')
  const { execApi: execApiPost } = useApiLoading(ApiAccountVerify.post)

  /** 認証APIを実行 */
  useEffect(() => {
    // ローディング以外の場合は返却
    if (successType !== 'loading') return

    // paramsにtokenが含まれていない場合、処理を止める
    if (!params.token) {
      setSuccessType('failed')
      return
    }

    execApiPost({
      request: {
        t: params.token,
      },
      successCallback: (res) => {
        setSuccessType(res.isSuccess ? 'success' : 'failed')
      },
    })
  }, [])

  return <AccountVerifyPage successType={successType} />
}

export default AccountVerifyPageContainers
