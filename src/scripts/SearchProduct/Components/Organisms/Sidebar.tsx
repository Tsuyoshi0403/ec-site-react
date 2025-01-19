import { css } from '@emotion/css'

const rootStyle = css`
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
  /** 合計商品数 */
  totalCount: number
  /** 選択中のジャンルID */
  selectedGenreIdState: number | null
}

/**
 * サイドバーコンポーネント
 * @returns {JSX.Element}
 */
const SideBar = (props: IProps): JSX.Element => {
  return (
    <div className={rootStyle}>
      <div className="sidebar">
        <div className="sidebar-products-number-area">
          <div className="sidebar-products-number">
            <span className="products-label">対象商品</span>
            <span className="products-number-label">
              {new Intl.NumberFormat().format(props.totalCount)}
              <span className="number-label">件</span>
            </span>
          </div>
        </div>
        <section className="sidebar-genre">
          <h2 className="genre-title-label">ジャンル</h2>
          <ul className="genre-ul">
            {props.genres.map((genre) => (
              <li key={genre.genreId} className="genre-li">
                <a
                  className="genre-a"
                  onClick={() => genre.onSelectGenre(genre.genreId)}
                >
                  <span
                    className={`genre-span ${
                      props.selectedGenreIdState === genre.genreId
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
    </div>
  )
}

export default SideBar
