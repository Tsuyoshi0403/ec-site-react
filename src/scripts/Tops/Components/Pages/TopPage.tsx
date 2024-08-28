import { Route, Routes } from 'react-router-dom'
import NewLoginPage from './NewLoginPage'
import MainPage from '../../../Main/Components/Page/MainPage'
import Loading from '../../../Cores/Components/Organisms/Loading'
import { useRecoilValue } from 'recoil'
import LoadingState from '../../../Cores/Recoil/LoadingState'

/**
 * Topコンポーネント
 * @returns {JSX.Element}
 */
const TopPage = (): JSX.Element => {
  const isLoading = useRecoilValue(LoadingState)
  return (
    <>
      <Routes>
        <Route path="/login" element={<NewLoginPage />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
      <Loading open={isLoading} />
    </>
  )
}

export default TopPage
