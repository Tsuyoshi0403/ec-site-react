import { css } from '@emotion/css'
import StarRating from '../Molecules/StarRating'
import { ChangeEvent, useState } from 'react'
import ProductDetail from '../Molecules/ProductDetail'

const rootStyle = css`
  display: flex;
  justify-content: center;
  .product-container {
    margin-top: 100px;
    .product-wrapper {
      display: flex;
      .image-section {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 400px;
        width: 500px;
        .image {
          max-height: 100%;
          max-width: 100%;
          object-fit: contain;
        }
      }
      .product-info {
        width: 700px;
        .product-title {
          margin: 10px 0;
          font-weight: 300;
        }
        .star-area {
          padding-bottom: 10px;
          border-bottom: 1px solid #000000;
        }
        .product-price {
          font-size: 35px;
        }
        .quantity-dropdown {
          padding: 8px;
          border: 1px solid #d9d9d9;
          border-radius: 10px;
          font-size: 14px;
          background-color: #d9d9d9;
          cursor: pointer;
        }
        .button-area {
          margin: 25px 0 15px;
          .button {
            width: 700px;
            height: 50px;
            border: 0;
            border-radius: 20px;
            font-size: 20px;
            font-weight: 700;
            color: #fff;
            cursor: pointer;
            &.cart {
              background-color: #fed214;
            }
            &.buy-now {
              background-color: #62cda2;
              margin-top: 15px;
            }
          }
        }
      }
    }
  }
`

type IProps = {
  /** 商品一覧 */
  items: Array<{
    Item: {
      /** 商品名 */
      itemName: string
      /** 商品価格 */
      itemPrice: number
      /** 星評価 */
      reviewAverage: number
      /** 商品詳細 */
      itemCaption: string
      /** 販売ショップ */
      shopName: string
      /** 商品コード */
      itemCode: string
      /** 送料区分 */
      postageFlag: number
      /** 商品画像URL一覧 */
      mediumImageUrls: Array<{
        /** 商品画像URL */
        imageUrl: string
      }>
    }
  }>
}

/**
 * 商品画面
 * @returns {JSX.Element}
 */
const ProductPage = ({ items }: IProps): JSX.Element => {
  const [selectedQuantity, setSelectedQuantity] = useState<number>(1)
  const quantities = Array.from({ length: 10 }, (_, index) => index + 1)

  // 数量が選択されたときに状態を更新
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedQuantity(Number(event.target.value))
  }

  // itemsの最初の商品の情報を表示
  const product = items.length > 0 ? items[0].Item : null

  return (
    <div className={rootStyle}>
      <div className="product-container">
        <div className="product-wrapper">
          <div className="image-section">
            <img
              className="image"
              src={product?.mediumImageUrls[0].imageUrl.replace(
                /\?_ex=\d+x\d+$/,
                ''
              )}
              alt="商品画像"
            />
          </div>
          <div className="product-info">
            <h1 className="product-title">{product?.itemName}</h1>
            <StarRating
              className="star-area"
              score={product?.reviewAverage || 0}
            />
            <p>
              <span className="product-price">
                {product?.itemPrice
                  ? new Intl.NumberFormat().format(product.itemPrice)
                  : '0'}
              </span>
              <span>円</span>
            </p>
            <div>
              <label>数量: </label>
              <select
                className="quantity-dropdown"
                id="quantity-dropdown"
                value={selectedQuantity}
                onChange={handleSelectChange}
              >
                {quantities.map((quantity) => (
                  <option key={quantity} value={quantity}>
                    {quantity}
                  </option>
                ))}
              </select>
            </div>
            <div className="button-area">
              <button className="button cart">買い物がごにいれる</button>
              <button className="button buy-now">今すぐ買う</button>
            </div>
          </div>
        </div>
        {/** 商品情報 */}
        <ProductDetail
          shopName={product?.shopName ? product.shopName : ''}
          itemCode={product?.itemCode ? product.itemCode : ''}
          postageFlag={product?.postageFlag ? product.postageFlag : 0}
          itemCaption={product?.itemCaption ? product.itemCaption : ''}
        />
      </div>
    </div>
  )
}

export default ProductPage
