import { Route, Routes } from 'react-router-dom'
import MainPageContainers from '../../../Main/Containers/Page/MainPage'
import NewHeader from '../Organisms/NewHeader'
import ProductPageContainers from '../../../Product/Containers/Pages/ProductPage'
import { css } from '@emotion/css'
import SearchProductPageContainers from '../../../SearchProduct/Containers/Pages/SearchProductPageContainers'

const mainStyle = css`
  display: flex;
  flex-direction: column;

  .main-content {
    height: calc(100vh - 80px);
    overflow-y: scroll;
  }
`

/**
 * ログイン後のダッシュボードページ
 * @constructor
 */
export default function Dashboard(): JSX.Element {
  return (
    <div className={mainStyle}>
      {/** ヘッダー */}
      <NewHeader />
      {/** メイン領域 */}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<MainPageContainers />} />
          <Route path="/product" element={<ProductPageContainers />} />
          <Route
            path="/search/product"
            element={<SearchProductPageContainers />}
          />
        </Routes>
      </div>
    </div>
  )
}
