import { css } from '@emotion/css'
import SlideShow from '../Organisms/SlideShow'
import SaleItems from '../Organisms/SaleItems'
import RecommendedItems from '../Organisms/RecommendedItems'
import RebuyItems from '../Organisms/RebuyItems'
import FreshShoveler from '../Organisms/FreshShoveler'

const rootStyle = css`
  .card-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
  }
`

/**
 * メイン画面
 * @returns {JSX.Element}
 */
const MainPage = (): JSX.Element => {
  return (
    <div className={rootStyle}>
      {/* スライドショー */}
      <SlideShow />
      <div className="card-container">
        {/* セール商品 */}
        <SaleItems />
        {/* 閲覧履歴のおすすめ */}
        <RecommendedItems />
        {/* 再び購入商品 */}
        <RebuyItems />
      </div>
      {/* お客様が閲覧した商品に関連する商品・チェックした関連商品 */}
      <FreshShoveler />
    </div>
  )
}

export default MainPage
