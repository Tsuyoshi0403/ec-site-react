import { css } from '@emotion/css'
import NewHeader from '../../../Tops/Components/Organisms/NewHeader'
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

type IProps = {
  /** 商品一覧 */
  items: Array<{
    /** 商品名 */
    name: string
    /** 商品価格 */
    price: number
    /** 商品画像URL */
    imageUrl: string
  }>
}

/**
 * メイン画面
 * @returns {JSX.Element}
 */
const MainPage = ({ items }: IProps): JSX.Element => {
  const saleItems = items.slice(0, 4)
  const recommendedItems = items.slice(4, 8)
  const rebuyItems = items.slice(8, 12)
  const freshShovelerItems = items.slice(12, 24)
  return (
    <div className={rootStyle}>
      {/* ヘッダー */}
      <NewHeader />
      {/* スライドショー */}
      <SlideShow />
      <div className="card-container">
        {/* セール商品 */}
        <SaleItems items={saleItems} />
        {/* 閲覧履歴のおすすめ */}
        <RecommendedItems items={recommendedItems} />
        {/* 再び購入商品 */}
        <RebuyItems items={rebuyItems} />
      </div>
      {/* お客様が閲覧した商品に関連する商品・チェックした関連商品 */}
      <FreshShoveler items={freshShovelerItems} />
    </div>
  )
}

export default MainPage
