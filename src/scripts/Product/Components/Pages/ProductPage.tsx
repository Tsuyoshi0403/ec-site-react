import CoffeeMachine from '../../../assets/images/CoffeeMachine.jpg'
import { css } from '@emotion/css'
import StarRating from '../Molecules/StarRating'
import { ChangeEvent, useState } from 'react'

const rootStyle = css`
  display: flex;
  justify-content: center;
  .product-container {
    margin-top: 100px;
    .product-wrapper {
      display: flex;
      .image-area {
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
        .dropdown {
          padding: 8px;
          border: 1px solid #d9d9d9;
          border-radius: 10px;
          font-size: 14px;
          background-color: #d9d9d9;
          cursor: pointer;
        }
        .cart-btn-area {
          margin-top: 25px;
          margin-bottom: 15px;
          .cart-btn {
            width: 700px;
            height: 50px;
            border: 0;
            border-radius: 20px;
            background-color: #fed214;
            font-size: 20px;
            font-weight: 700;
            color: #fff;
            cursor: pointer;
          }
        }

        .buy-now-btn {
          width: 700px;
          height: 50px;
          border: 0;
          border-radius: 20px;
          background-color: #62cda2;
          font-size: 20px;
          font-weight: 700;
          color: #fff;
          cursor: pointer;
        }
      }
    }
    .wrapper-details {
      width: 1200px;
      margin-top: 60px;
      .title-details {
        border-bottom: 1px solid #000000;
        padding-bottom: 10px;
      }
      .product-details {
        padding-bottom: 7px;
        .label-category {
          display: inline-block;
          width: 150px;
        }
        .label-result {
          position: relative;
          left: 20px;
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
          <div className="image-area">
            <a>
              <img className="image" src={CoffeeMachine} />
            </a>
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
                className="dropdown"
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
            <div className="cart-btn-area">
              <button className="cart-btn">買い物がごにいれる</button>
            </div>
            <div className="buy-now-area">
              <button className="buy-now-btn">今すぐ買う</button>
            </div>
          </div>
        </div>
        {/** 商品情報 */}
        <div className="wrapper-details">
          <h1 className="title-details">商品情報</h1>
          <div className="product-details">
            <span className="label-category">販売元</span>:
            <span className="label-result">ネスレ日本株式会社</span>
          </div>
          <div className="product-details">
            <span className="label-category">対応機種等</span>:
            <span className="label-result">Nestle(ネスレ)</span>
          </div>
          <div className="product-details">
            <span className="label-category">販売元</span>:
            <span className="label-result">HAD-S-KABAH</span>
          </div>
          <div className="product-details">
            <span className="label-category">JAN</span>:
            <span className="label-result">4902370550733</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
