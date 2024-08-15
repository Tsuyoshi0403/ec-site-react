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
/**
 * 商品情報コンポーネント
 * @returns {JSX.Element}
 */
const ProductDetail = (): JSX.Element => {
  return (
    <div className={rootStyle}>
      <div className="product-details-container">
        <h1 className="details-title">商品情報</h1>
        <div className="product-detail">
          <span className="detail-label">販売元</span>:
          <span className="detail-value">ネスレ日本株式会社</span>
        </div>
        <div className="product-detail">
          <span className="detail-label">対応機種等</span>:
          <span className="detail-value">Nestle(ネスレ)</span>
        </div>
        <div className="product-detail">
          <span className="detail-label">販売元</span>:
          <span className="detail-value">HAD-S-KABAH</span>
        </div>
        <div className="product-detail">
          <span className="detail-label">JAN</span>:
          <span className="detail-value">4902370550733</span>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
