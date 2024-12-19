import { css } from '@emotion/css'

const rootStyle = css`
  height: 450px;
  width: 400px;
  border: 1px solid #ebebeb;
  margin: 20px 0 20px 0;
  .card-title {
    font-size: 17px;
    line-height: 21.34px;
    margin: 10px 10px;
  }
  .card-body {
    display: grid;
    grid-template-columns: repeat(2, 0fr);
    gap: 10px;
    justify-content: center;
    .card-a {
      width: 150px;
      text-align: center;
      cursor: pointer;
      .card-image {
        padding: 10px 5px;
        height: 145px;
        width: 130px;
        object-fit: contain;
      }
      .card-product {
        display: flex;
        align-items: center;
        .card-off-txt {
          background-color: #cc0c39;
          color: #ffffff;
          border-radius: 2px;
          padding: 5px 7px;
          font-size: 12px;
          font-weight: 600;
        }
        .card-time-sale-txt {
          color: #cc0c39;
          font-weight: 700;
          font-size: 12px;
        }
      }
    }
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
 * セールス商品コンポーネント
 * @returns {JSX.Element}
 */
const SaleItems = ({ items, onSelectItem }: IProps): JSX.Element => {
  return (
    <div className={rootStyle}>
      <h2 className="card-title">セール商品のお買いモノを続ける</h2>
      <div className="card-body">
        {items.map((item, index) => (
          <a
            className="card-a"
            key={index}
            onClick={() => onSelectItem(item.itemCode)}
          >
            <img
              className="card-image"
              src={item.imageUrl.replace(/\?_ex=\d+x\d+$/, '')}
              alt={item.name}
            />
            <div className="card-product">
              <span className="card-off-txt">
                {Math.floor(Math.random() * 30) + 10}%OFF
              </span>
              <span className="card-time-sale-txt">タイムセール</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default SaleItems
