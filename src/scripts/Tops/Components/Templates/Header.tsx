import { css } from '@emotion/css'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartSvg from '../../../Cores/Svgs/Icons/ShoppingCartSvg'
import FavoriteSvg from '../../../Cores/Svgs/Icons/FavoriteSvg'
import PurchaseHistorySvg from '../../../Cores/Svgs/Icons/PurchaseHistorySvg'
import BrowsingHistorySvg from '../../../Cores/Svgs/Icons/BrowsingHistorySvg'
import MyPageSvg from '../../../Cores/Svgs/Icons/MyPageSvg'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

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
const Header = (): JSX.Element => {
  const navigate = useNavigate()
  const location = useLocation()

  // クエリパラメータの取得と初期キーワードの設定
  const query = new URLSearchParams(location.search)
  const initKeyword = query.get('keyword') || ''
  const genreId = query.get('genreId')
  const [keyword, setKeyword] = useState<string>(initKeyword)

  /**
   * 商品検索を実行する
   * @param e - フォーム送信イベント
   */
  const onSearchProduct = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const keyword = (e.currentTarget.elements as any).keyword.value.trim()
    if (keyword) {
      navigate(
        `/search/product?keyword=${keyword}${
          genreId ? `&genreId=${genreId}` : ''
        }`
      )
    } else {
      navigate(`/`)
    }
  }

  /**
   * 検索キーワードの変更を処理
   * @param e - 入力フィールドの変更イベント
   */
  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value)
  }

  return (
    <div className={rootStyle}>
      <header className="header-area">
        <h1 className="header-title">オンラインショッピング</h1>
        <form className="header-bar" onSubmit={onSearchProduct}>
          <input
            className="search-input"
            name="keyword"
            value={keyword}
            onChange={onSearchChange}
            placeholder="キーワードで検索"
            autoComplete="off"
          />
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

export default Header
