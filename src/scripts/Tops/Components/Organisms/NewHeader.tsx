import { css } from '@emotion/css'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartSvg from '../../../Cores/Svgs/Icons/ShoppingCartSvg'
import FavoriteSvg from '../../../Cores/Svgs/Icons/FavoriteSvg'
import PurchaseHistorySvg from '../../../Cores/Svgs/Icons/PurchaseHistorySvg'
import BrowsingHistorySvg from '../../../Cores/Svgs/Icons/BrowsingHistorySvg'
import MyPageSvg from '../../../Cores/Svgs/Icons/MyPageSvg'

const rootStyle = css`
  .header-area {
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #e0e0e0;

    .header-title {
      color: #62cda2;
      font-size: 25px;
      margin: 10px 0 10px 0;
    }
    .header-bar {
      display: flex;
      align-items: center;
      padding-left: 20px;
      padding-right: 20px;
      .search-input {
        border: 0;
        background-color: #f7f7f7;
        height: 40px;
        width: 500px;
        border: 1px solid #ebebeb;
        border-radius: 4px 0 0 4px;
        padding-left: 10px;
        box-sizing: border-box;

        &::placeholder {
          font-size: 15px;
        }

        &:focus {
          outline: none;
        }
      }
      .search-btn {
        background-color: #62cda2;
        border-radius: 0 4px 4px 0;
        height: 40px;
        width: 40px;
        border: 0;
        cursor: pointer;

        &:hover {
          background-color: #4da882;
        }
      }
    }
    .header-ul {
      display: flex;
      padding-left: 16px;
      margin: 10px 0 10px 0;
      .header-li {
        min-width: 60px;
        list-style-type: none;
        .header-a {
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;

          &:hover {
            background-color: #f0f0f0; /* ホバー時の背景色 */
          }

          .header-span {
            font-size: 10px;
          }
        }
      }
    }
  }
`

/**
 * ヘッダーコンポーネント
 * @returns {JSX.Element}
 */
const NewHeader = (): JSX.Element => {
  return (
    <div className={rootStyle}>
      <header className="header-area">
        <h1 className="header-title">オンラインショッピング</h1>
        <form className="header-bar">
          <input className="search-input" placeholder="キーワードで検索" />
          <button className="search-btn">
            <SearchIcon sx={{ color: 'white' }} />
          </button>
        </form>
        <ul className="header-ul">
          <li className="header-li">
            <a className="header-a">
              <ShoppingCartSvg />
              <span className="header-span">買い物かご</span>
            </a>
          </li>
          <li className="header-li">
            <a className="header-a">
              <FavoriteSvg />
              <span className="header-span">お気に入り</span>
            </a>
          </li>
          <li className="header-li">
            <a className="header-a">
              <PurchaseHistorySvg />
              <span className="header-span">購入履歴</span>
            </a>
          </li>
          <li className="header-li">
            <a className="header-a">
              <BrowsingHistorySvg />
              <span className="header-span">閲覧履歴</span>
            </a>
          </li>
          <li className="header-li">
            <a className="header-a">
              <MyPageSvg />
              <span className="header-span">マイページ</span>
            </a>
          </li>
        </ul>
      </header>
    </div>
  )
}

export default NewHeader
