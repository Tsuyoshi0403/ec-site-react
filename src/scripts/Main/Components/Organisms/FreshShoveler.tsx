import { css } from '@emotion/css'

const rootStyle = css`
  .fresh-shoveler-card {
    display: block;
    justify-content: center;
    align-items: center;
    border: 1px solid #ebebeb;
    margin: 0px auto;
    width: 1245px;
    padding: 10px 20px;
    margin-bottom: 20px;
    .fresh-shoveler-title {
      font-size: 17px;
      margin: 10px 10px;
    }
    .fresh-shoveler-ul {
      display: grid;
      grid-template-columns: repeat(6, 0fr);
      gap: 60px;
      justify-content: center;
      align-items: center;
      padding: 0px;
      .fresh-shoveler-li {
        list-style-type: none;
        .fresh-shoveler-img {
          height: 200px;
          width: 150px;
          object-fit: contain;
          cursor: pointer;
        }
      }
    }
  }
`

type IProps = {
  /** 商品一覧 */
  items: Array<{
    /** 商品画像URL */
    imageUrl: string
  }>
}

/**
 * お客様が閲覧した商品に関連する商品・チェックした関連商品コンポーネント
 * @returns {JSX.Element}
 */
const FreshShoveler = ({ items }: IProps): JSX.Element => {
  const relatedItems = items.slice(0, 6)
  const checkedItems = items.slice(6, 12)
  return (
    <div className={rootStyle}>
      <div className="fresh-shoveler-card">
        <h2 className="fresh-shoveler-title">
          お客様が閲覧した商品に関連する商品
        </h2>
        <ul className="fresh-shoveler-ul">
          {relatedItems.map((item, index) => (
            <li className="fresh-shoveler-li" key={`related-${index}`}>
              <span className="fresh-shoveler-span">
                <a className="fresh-shoveler-a">
                  <img
                    className="fresh-shoveler-img"
                    src={item.imageUrl}
                    alt="お客様が閲覧した商品に関連する商品"
                  />
                </a>
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="fresh-shoveler-card">
        <h2 className="fresh-shoveler-title">
          この商品をチェックした人はこんな商品もチェックしています
        </h2>
        <ul className="fresh-shoveler-ul">
          {checkedItems.map((item, index) => (
            <li className="fresh-shoveler-li" key={`checked-${index}`}>
              <span className="fresh-shoveler-span">
                <a className="fresh-shoveler-a">
                  <img
                    className="fresh-shoveler-img"
                    src={item.imageUrl}
                    alt="この商品をチェックした人はこんな商品もチェックしています"
                  />
                </a>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default FreshShoveler
