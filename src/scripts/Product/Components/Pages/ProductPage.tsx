import CoffeeMachine from '../../../assets/images/CoffeeMachine.jpg'
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
        height: 400px;
        width: 500px;
        .image {
          height: 376px;
          width: 320px;
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
/**
 * 商品画面
 * @returns {JSX.Element}
 */
const ProductPage = (): JSX.Element => {
  const [selectedQuantity, setSelectedQuantity] = useState<number>(1)
  const quantities = Array.from({ length: 10 }, (_, index) => index + 1)

  // 数量が選択されたときに状態を更新
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedQuantity(Number(event.target.value))
  }

  return (
    <div className={rootStyle}>
      <div className="product-container">
        <div className="product-wrapper">
          <div className="image-section">
            <img className="image" src={CoffeeMachine} alt="商品画像" />
          </div>
          <div className="product-info">
            <h1 className="product-title">
              ネスカフェ ゴールドブレンド バリスタアイ レッド SPM9635-R
            </h1>
            <StarRating className="star-area" score={3.5} />
            <p>
              <span className="product-price">10,000</span>
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
        <ProductDetail />
      </div>
    </div>
  )
}

export default ProductPage
