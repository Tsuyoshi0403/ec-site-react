import { css } from '@emotion/css'

const rootStyle = css`
  .product-details-container {
    width: 1200px;
    margin-top: 60px;
    .details-title {
      border-bottom: 1px solid #000000;
      padding-bottom: 10px;
    }
    .product-detail {
      padding-bottom: 7px;
      .detail-label {
        display: inline-block;
        width: 150px;
      }
      .detail-value {
        position: relative;
        left: 20px;
      }
    }
  }
`

type IProps = {
  /** 販売ショップ */
  shopName: string
  /** 商品コード */
  itemCode: string
  /** 送料区分 */
  postageFlag: number
  /** 商品説明 */
  itemCaption: string
}

/**
 * 商品情報コンポーネント
 * @returns {JSX.Element}
 */
const ProductDetail = (props: IProps): JSX.Element => {
  return (
    <div className={rootStyle}>
      <div className="product-details-container">
        <h1 className="details-title">商品情報</h1>
        <div className="product-detail">
          <span className="detail-label">販売ショップ</span>:
          <span className="detail-value">{props.shopName}</span>
        </div>
        <div className="product-detail">
          <span className="detail-label">商品コード</span>:
          <span className="detail-value">{props.itemCode}</span>
        </div>
        <div className="product-detail">
          <span className="detail-label">送料区分</span>:
          <span className="detail-value">
            {props.postageFlag ? '送料込み' : '送料無料'}
          </span>
        </div>
        <div className="product-detail">
          <span className="detail-label">商品説明</span>:
          <span className="detail-value">{props.itemCaption}</span>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
