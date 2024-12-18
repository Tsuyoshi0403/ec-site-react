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
        .card-title-txt {
          padding: 5px 7px;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          font-size: 12px;
          font-weight: 600;
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
    /** 商品画像URL */
    imageUrl: string
  }>
}

/**
 * 閲覧履歴のおすすめコンポーネント
 * @returns {JSX.Element}
 */
const RecommendedItems = ({ items }: IProps): JSX.Element => {
  return (
    <div className={rootStyle}>
      <h2 className="card-title">閲覧履歴に基づくおすすめ商品</h2>
      <div className="card-body">
        {items.map((item, index) => (
          <a key={index} className="card-a">
            <img className="card-image" src={item.imageUrl} alt={item.name} />
            <div className="card-product">
              <span className="card-title-txt">{item.name}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default RecommendedItems
