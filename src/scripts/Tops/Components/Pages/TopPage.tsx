import { Route, Routes } from 'react-router-dom'
import MainPage from '../../../Main/Components/Page/MainPage'
import { useRecoilValue } from 'recoil'
import LoadingState from '../../../Cores/Recoil/LoadingState'
import Loading from '../../../Cores/Components/Organisms/Loading'
import NewLoginPageContainers from '../../Containers/Pages/NewLoginPage'

/**
 * Topコンポーネント
 * @returns {JSX.Element}
 */
const TopPage = (): JSX.Element => {
  const isLoading = useRecoilValue(LoadingState)
  return (
    <>
      <Routes>
        <Route path="/login" element={<NewLoginPageContainers />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
      <Loading open={isLoading} />
    </>
  )
}

export default TopPage
