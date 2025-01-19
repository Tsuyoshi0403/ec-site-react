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

type IProps = {
  /** 商品一覧 */
  items: Array<{
    /** 商品名 */
    name: string
    /** 商品価格 */
    price: number
    /** 商品コード */
    itemCode: string
    /** 商品画像URL */
    imageUrl: string
  }>
  /** 商品選択時の処理 */
  onSelectItem: (itemCode: string) => void
}

/**
 * メイン画面
 * @returns {JSX.Element}
 */
const MainPage = ({ items, onSelectItem }: IProps): JSX.Element => {
  const saleItems = items.slice(0, 4)
  const recommendedItems = items.slice(4, 8)
  const rebuyItems = items.slice(8, 12)
  const freshShovelerItems = items.slice(12, 24)
  return (
    <div className={rootStyle}>
      {/* スライドショー */}
      <SlideShow />
      <div className="card-container">
        {/* セール商品 */}
        <SaleItems items={saleItems} onSelectItem={onSelectItem} />
        {/* 閲覧履歴のおすすめ */}
        <RecommendedItems
          items={recommendedItems}
          onSelectItem={onSelectItem}
        />
        {/* 再び購入商品 */}
        <RebuyItems items={rebuyItems} onSelectItem={onSelectItem} />
      </div>
      {/* お客様が閲覧した商品に関連する商品・チェックした関連商品 */}
      <FreshShoveler items={freshShovelerItems} onSelectItem={onSelectItem} />
    </div>
  )
}

export default MainPage
