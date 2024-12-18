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
    &.re-buy-card-body {
      gap: 40px;
    }
    .card-a {
      width: 150px;
      text-align: center;
      cursor: pointer;
      &.re-buy-card-a {
        background: rgba(0, 0, 0, 0.03);
      }
      .card-image {
        padding: 10px 5px;
        height: 145px;
        width: 130px;
        object-fit: contain;
      }
    }
  }
`

type IProps = {
  /** 商品一覧 */
  items: Array<{
    /** 商品名 */
    name: string
    /** 商品画像URL */
    imageUrl: string
  }>
}

/**
 * 再び購入商品コンポーネント
 * @returns {JSX.Element}
 */
const RebuyItems = ({ items }: IProps): JSX.Element => {
  return (
    <div className={rootStyle}>
      <h2 className="card-title">再び購入</h2>
      <div className="card-body re-buy-card-body">
        {items.map((item, index) => (
          <a key={index} className="card-a re-buy-card-a">
            <img className="card-image" src={item.imageUrl} alt={item.name} />
          </a>
        ))}
      </div>
    </div>
  )
}

export default RebuyItems
