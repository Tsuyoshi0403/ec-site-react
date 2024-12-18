import { Route, Routes } from 'react-router-dom'
import MainPageContainers from '../../../Main/Containers/Page/MainPage'
import ProductPage from '../../../Product/Components/Pages/ProductPage'
import NewHeader from '../Organisms/NewHeader'

/**
 * ログイン後のダッシュボードページ
 * @constructor
 */

export default function Dashboard(): JSX.Element {
  return (
    <div>
      {/** ヘッダー */}
      <NewHeader />
      {/** メイン領域 */}
      <Routes>
        <Route path="/" element={<MainPageContainers />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
    </div>
  )
}
