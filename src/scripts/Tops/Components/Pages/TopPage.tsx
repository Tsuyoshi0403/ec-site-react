import { Route, Routes } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import LoadingState from '../../../Cores/Recoil/LoadingState'
import Loading from '../../../Cores/Components/Organisms/Loading'
import NewLoginPageContainers from '../../Containers/Pages/NewLoginPage'
import AuthRoute from './AuthRoute'
import Notification from '../../../Cores/Components/Atoms/Notification'
import AccountSignUpPageContainers from '../../../AccountSignUp/Containers/Pages/AccountSignUpPage'

/**
 * Topコンポーネント
 * @returns {JSX.Element}
 */
const TopPage = (): JSX.Element => {
  const isLoading = useRecoilValue(LoadingState)
  return (
    <>
      <Routes>
        {/** 未ログイン時はログインページにリダイレクト、ログイン済みはメインページを表示 */}
        <Route path="/*" element={<AuthRoute path="/*" />} />
        <Route path="/login" element={<NewLoginPageContainers />} />
        <Route path="/sign-up" element={<AccountSignUpPageContainers />} />
        <Route
          path="/sign-up/check-mail"
          element={<AccountSignUpPageContainers />}
        />
      </Routes>
      <Loading open={isLoading} />
      <Notification />
    </>
  )
}

export default TopPage
