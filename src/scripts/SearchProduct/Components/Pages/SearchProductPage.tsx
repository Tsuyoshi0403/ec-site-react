import { css } from '@emotion/css'
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
            .selected-genre {
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
        width: 200px;
        height: 200px;
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

type IProps = {
  /** 子ジャンル情報 */
  genres: Array<{
    /** ジャンルID */
    genreId: number
    /** ジャンル名 */
    genreName: string
    /** ジャンル選択のハンドラー */
    onSelectGenre: (genreId: number) => void
  }>
  /** 商品検索一覧 */
  items: Array<{
    Item: {
      /** 商品名 */
      itemName: string
      /** 商品価格 */
      itemPrice: number
      /** 星評価 */
      reviewAverage: number
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
  /** 合計商品数 */
  totalCount: number
  /** 選択中のジャンルID */
  selectedGenreIdState: number | null
  /** 商品選択時の処理 */
  onSelectItem: (itemCode: string) => void
}

/**
 * 商品検索画面
 * @returns {JSX.Element}
 */
const SearchProductPage = ({
  genres,
  items,
  totalCount,
  selectedGenreIdState,
  onSelectItem,
}: IProps): JSX.Element => {
  return (
    <div className={rootStyle}>
      {/** サイドナビ */}
      <div className="sidebar">
        <div className="sidebar-products-number-area">
          <div className="sidebar-products-number">
            <span className="products-label">対象商品</span>
            <span className="products-number-label">
              {new Intl.NumberFormat().format(totalCount)}
              <span className="number-label">件</span>
            </span>
          </div>
        </div>
        <section className="sidebar-genre">
          <h2 className="genre-title-label">ジャンル</h2>
          <ul className="genre-ul">
            {genres.map((genre) => (
              <li key={genre.genreId} className="genre-li">
                <a
                  className="genre-a"
                  onClick={() => genre.onSelectGenre(genre.genreId)}
                >
                  <span
                    className={`genre-span ${
                      selectedGenreIdState === genre.genreId
                        ? 'selected-genre'
                        : ''
                    }`}
                  >
                    {genre.genreName}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
      {/** 検索商品一覧 */}
      <div className="search-product-list">
        {items.map((item, index) => (
          <div key={`${item.Item.itemCode}-${index}`} className="product">
            <a
              className="product-a"
              onClick={() => onSelectItem(item.Item.itemCode)}
            >
              <img
                className="product-img"
                src={
                  item.Item.mediumImageUrls[0]
                    ? item.Item.mediumImageUrls[0].imageUrl.replace(
                        /\?_ex=\d+x\d+$/,
                        ''
                      )
                    : ''
                }
                alt="検索商品"
              ></img>
            </a>

            <h2 className="product-title">{item.Item.itemName}</h2>
            <div className="product-price-wrapper">
              <div className="product-price">
                {new Intl.NumberFormat().format(item.Item.itemPrice)}
                <span className="product-yen">円</span>
              </div>
              {item.Item.postageFlag === 1 && (
                <span className="free-shipping">送料無料</span>
              )}
            </div>

            <StarRating className="star-area" score={item.Item.reviewAverage} />
            <div className="shop-area">
              <ShopSvg />
              <span className="shop-name">{item.Item.shopName}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SearchProductPage
