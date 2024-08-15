import { Route, Routes, useLocation } from 'react-router-dom'
import NewLoginPage from './NewLoginPage'
import MainPage from '../../../Main/Components/Page/MainPage'
import NewHeader from '../Organisms/NewHeader '
import ProductPage from '../../../Product/Components/Pages/ProductPage'

/**
 * Topページ
 * @returns {JSX.Element}
 */
const TopPage = (): JSX.Element => {
  const location = useLocation()
  return (
    <div>
      {/** ヘッダー */}
      {location.pathname !== '/login' && <NewHeader />}
      {/** メイン領域 */}
      <Routes>
        <Route path="/login" element={<NewLoginPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
    </div>
  )
}

export default TopPage
