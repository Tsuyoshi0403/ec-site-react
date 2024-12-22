import { css } from '@emotion/css'
import CoffeeMachine from '../../../assets/images/CoffeeMachine.jpg'
import StarRating from '../../../Product/Components/Molecules/StarRating'
import ShopSvg from '../../../Cores/Svgs/Icons/ShopSvg'

const rootStyle = css`
  display: flex;
  justify-content: center;
  margin: 50px 30px;

  .sidebar {
    .sidebar-products-number-area {
      width: 215px;
      padding: 10px;
      color: #fff;
      background-color: #62cda2;
      border-radius: 4px 4px 0 0;
      display: flex;
      flex-flow: column;
      .sidebar-products-number {
        display: flex;
        flex-direction: column;
        padding-left: 15px;
        .products-label {
          font-size: 14px;
        }
        .products-number-label {
          margin-top: 5px;
          font-size: 35px;
          font-weight: bold;
          line-height: 1.1;
          .number-label {
            font-size: 14px;
            font-weight: normal;
          }
        }
      }
    }
    .sidebar-genre {
      width: 235px;
      background-color: rgba(217, 217, 217, 0.2);
      padding: 15px 0;
      border-radius: 0 0 4px 4px;
      .genre-title-label {
        margin-top: 0px;
        padding-left: 10px;
        margin-bottom: 6px;
        font-size: 17px;
        font-weight: bold;
      }
      .genre-ul {
        margin: 0px;
        list-style-type: none;
        .genre-li {
          margin-top: 1px;
          .genre-a {
            display: flex;
            padding: 7px 10px 0 0;
            .genre-span {
              font-size: 13px;
            }
            .genre-span:hover {
              cursor: pointer;
              color: #62cda2;
            }
          }
        }
      }
    }
  }
  .search-product-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-left: 30px;
    .product {
      width: 200px;
      padding: 30px;
      border-bottom: 1px solid #dcdcdc;
      transition:
        background-color 0.3s,
        opacity 0.3s;

      &:hover {
        background-color: #f0f0f0;
        cursor: pointer;
      }

      .product-a {
        display: flex;
        justify-content: center;
        width: 100%;
        .product-img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }
      }
      .product-title {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        margin: 0;
        padding-top: 12px;
        font-size: 12px;
        font-weight: 400;
        overflow: hidden;
        line-height: 1.5;
      }
      .product-price-wrapper {
        display: flex;
        align-items: baseline;
        .product-price {
          padding-top: 8px;
          color: #bf0000;
          font-size: 24px;
          font-weight: 600;
          line-height: 1;
          .product-yen {
            font-size: 14px;
            padding: 0 6px 0 1px;
            font-weight: 600;
          }
        }
        .free-shipping {
          padding-top: 4px;
          color: #bf0000;
          font-weight: 700;
          font-size: 14px;
        }
      }
      .star-area {
        padding-top: 4px;
      }
      .shop-area {
        display: flex;
        align-items: center;
        padding-top: 8px;
        .shop-name {
          font-size: 12px;
        }
      }
    }
  }
`

/**
 * 商品検索画面
 */
const SearchProductPage = () => {
  return (
    <div className={rootStyle}>
      {/** サイドナビ */}
      <div className="sidebar">
        <div className="sidebar-products-number-area">
          <div className="sidebar-products-number">
            <span className="products-label">対象商品</span>
            <span className="products-number-label">
              695,487<span className="number-label">件</span>
            </span>
          </div>
        </div>
        <section className="sidebar-genre">
          <h2 className="genre-title-label">ジャンル</h2>
          <ul className="genre-ul">
            <li className="genre-li">
              <a className="genre-a">
                <span className="genre-span">レディースファッション</span>
              </a>
            </li>
            <li className="genre-li">
              <a className="genre-a">
                <span className="genre-span">メンズファッション</span>
              </a>
            </li>
            <li className="genre-li">
              <a className="genre-a">
                <span className="genre-span">インナー・下着・ナイトウェア</span>
              </a>
            </li>
            <li className="genre-li">
              <a className="genre-a">
                <span className="genre-span">靴</span>
              </a>
            </li>
            <li className="genre-li">
              <a className="genre-a">
                <span className="genre-span">腕時計</span>
              </a>
            </li>
          </ul>
        </section>
      </div>
      {/** 検索商品一覧 */}
      <div className="search-product-list">
        {/** 検索商品 */}
        <div className="product">
          <a className="product-a">
            <img className="product-img" src={CoffeeMachine}></img>
          </a>

          <h2 className="product-title">
            [PR] 【日本正規公式品】NEWモデル 日本正規公式
            モルック【リピーターの方はレビ
          </h2>
          <div className="product-price-wrapper">
            <div className="product-price">
              1,969<span className="product-yen">円</span>
            </div>
            <span className="free-shipping">送料無料</span>
          </div>

          <StarRating className="star-area" score={4} />
          <div className="shop-area">
            <ShopSvg />
            <span className="shop-name">ダイレクトショップ</span>
          </div>
        </div>
        {/** 検索商品 */}
        <div className="product">
          <a className="product-a">
            <img className="product-img" src={CoffeeMachine}></img>
          </a>

          <h2 className="product-title">
            [PR] 【日本正規公式品】NEWモデル 日本正規公式
            モルック【リピーターの方はレビ
          </h2>
          <div className="product-price-wrapper">
            <div className="product-price">
              1,969<span className="product-yen">円</span>
            </div>
            <span className="free-shipping">送料無料</span>
          </div>

          <StarRating className="star-area" score={4} />
          <div className="shop-area">
            <ShopSvg />
            <span className="shop-name">ダイレクトショップ</span>
          </div>
        </div>
        {/** 検索商品 */}
        <div className="product">
          <a className="product-a">
            <img className="product-img" src={CoffeeMachine}></img>
          </a>

          <h2 className="product-title">
            [PR] 【日本正規公式品】NEWモデル 日本正規公式
            モルック【リピーターの方はレビ
          </h2>
          <div className="product-price-wrapper">
            <div className="product-price">
              1,969<span className="product-yen">円</span>
            </div>
            <span className="free-shipping">送料無料</span>
          </div>

          <StarRating className="star-area" score={4} />
          <div className="shop-area">
            <ShopSvg />
            <span className="shop-name">ダイレクトショップ</span>
          </div>
        </div>
        {/** 検索商品 */}
        <div className="product">
          <a className="product-a">
            <img className="product-img" src={CoffeeMachine}></img>
          </a>

          <h2 className="product-title">
            [PR] 【日本正規公式品】NEWモデル 日本正規公式
            モルック【リピーターの方はレビ
          </h2>
          <div className="product-price-wrapper">
            <div className="product-price">
              1,969<span className="product-yen">円</span>
            </div>
            <span className="free-shipping">送料無料</span>
          </div>

          <StarRating className="star-area" score={4} />
          <div className="shop-area">
            <ShopSvg />
            <span className="shop-name">ダイレクトショップ</span>
          </div>
        </div>
        {/** 検索商品 */}
        <div className="product">
          <a className="product-a">
            <img className="product-img" src={CoffeeMachine}></img>
          </a>

          <h2 className="product-title">
            [PR] 【日本正規公式品】NEWモデル 日本正規公式
            モルック【リピーターの方はレビ
          </h2>
          <div className="product-price-wrapper">
            <div className="product-price">
              1,969<span className="product-yen">円</span>
            </div>
            <span className="free-shipping">送料無料</span>
          </div>

          <StarRating className="star-area" score={4} />
          <div className="shop-area">
            <ShopSvg />
            <span className="shop-name">ダイレクトショップ</span>
          </div>
        </div>
        {/** 検索商品 */}
        <div className="product">
          <a className="product-a">
            <img className="product-img" src={CoffeeMachine}></img>
          </a>

          <h2 className="product-title">
            [PR] 【日本正規公式品】NEWモデル 日本正規公式
            モルック【リピーターの方はレビ
          </h2>
          <div className="product-price-wrapper">
            <div className="product-price">
              1,969<span className="product-yen">円</span>
            </div>
            <span className="free-shipping">送料無料</span>
          </div>

          <StarRating className="star-area" score={4} />
          <div className="shop-area">
            <ShopSvg />
            <span className="shop-name">ダイレクトショップ</span>
          </div>
        </div>
        {/** 検索商品 */}
        <div className="product">
          <a className="product-a">
            <img className="product-img" src={CoffeeMachine}></img>
          </a>

          <h2 className="product-title">
            [PR] 【日本正規公式品】NEWモデル 日本正規公式
            モルック【リピーターの方はレビ
          </h2>
          <div className="product-price-wrapper">
            <div className="product-price">
              1,969<span className="product-yen">円</span>
            </div>
            <span className="free-shipping">送料無料</span>
          </div>

          <StarRating className="star-area" score={4} />
          <div className="shop-area">
            <ShopSvg />
            <span className="shop-name">ダイレクトショップ</span>
          </div>
        </div>
        {/** 検索商品 */}
        <div className="product">
          <a className="product-a">
            <img className="product-img" src={CoffeeMachine}></img>
          </a>

          <h2 className="product-title">
            [PR] 【日本正規公式品】NEWモデル 日本正規公式
            モルック【リピーターの方はレビ
          </h2>
          <div className="product-price-wrapper">
            <div className="product-price">
              1,969<span className="product-yen">円</span>
            </div>
            <span className="free-shipping">送料無料</span>
          </div>

          <StarRating className="star-area" score={4} />
          <div className="shop-area">
            <ShopSvg />
            <span className="shop-name">ダイレクトショップ</span>
          </div>
        </div>
        {/** 検索商品 */}
        <div className="product">
          <a className="product-a">
            <img className="product-img" src={CoffeeMachine}></img>
          </a>

          <h2 className="product-title">
            [PR] 【日本正規公式品】NEWモデル 日本正規公式
            モルック【リピーターの方はレビ
          </h2>
          <div className="product-price-wrapper">
            <div className="product-price">
              1,969<span className="product-yen">円</span>
            </div>
            <span className="free-shipping">送料無料</span>
          </div>

          <StarRating className="star-area" score={4} />
          <div className="shop-area">
            <ShopSvg />
            <span className="shop-name">ダイレクトショップ</span>
          </div>
        </div>
        {/** 検索商品 */}
        <div className="product">
          <a className="product-a">
            <img className="product-img" src={CoffeeMachine}></img>
          </a>

          <h2 className="product-title">
            [PR] 【日本正規公式品】NEWモデル 日本正規公式
            モルック【リピーターの方はレビ
          </h2>
          <div className="product-price-wrapper">
            <div className="product-price">
              1,969<span className="product-yen">円</span>
            </div>
            <span className="free-shipping">送料無料</span>
          </div>

          <StarRating className="star-area" score={4} />
          <div className="shop-area">
            <ShopSvg />
            <span className="shop-name">ダイレクトショップ</span>
          </div>
        </div>
        {/** 検索商品 */}
        <div className="product">
          <a className="product-a">
            <img className="product-img" src={CoffeeMachine}></img>
          </a>

          <h2 className="product-title">
            [PR] 【日本正規公式品】NEWモデル 日本正規公式
            モルック【リピーターの方はレビ
          </h2>
          <div className="product-price-wrapper">
            <div className="product-price">
              1,969<span className="product-yen">円</span>
            </div>
            <span className="free-shipping">送料無料</span>
          </div>

          <StarRating className="star-area" score={4} />
          <div className="shop-area">
            <ShopSvg />
            <span className="shop-name">ダイレクトショップ</span>
          </div>
        </div>
        {/** 検索商品 */}
        <div className="product">
          <a className="product-a">
            <img className="product-img" src={CoffeeMachine}></img>
          </a>

          <h2 className="product-title">
            [PR] 【日本正規公式品】NEWモデル 日本正規公式
            モルック【リピーターの方はレビ
          </h2>
          <div className="product-price-wrapper">
            <div className="product-price">
              1,969<span className="product-yen">円</span>
            </div>
            <span className="free-shipping">送料無料</span>
          </div>

          <StarRating className="star-area" score={4} />
          <div className="shop-area">
            <ShopSvg />
            <span className="shop-name">ダイレクトショップ</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchProductPage
