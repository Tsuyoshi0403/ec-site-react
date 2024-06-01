import { css } from '@emotion/css'
import CommonBtn from '../../../Cores/Components/Atoms/CommonBtn'
import CommonInput from '../../../Cores/Components/Atoms/CommonInput '
import SearchIcon from '@material-ui/icons/Search'

const rootStyle = css`
  display: flex;

  .input-style {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    height: 30px;
    width: 400px;
    outline: none;
    border: 1px solid;
  }

  .btn-style {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    height: 42px;
    width: 45px;
    background-color: red;
    border: 1px solid black;

    &:hover {
      background-color: rgb(255, 50, 50);
      /* border-color: #0056b3; */
    }

    &:active {
      background-color: rgb(255, 0, 0);
    }

    .search-icon-style {
      color: white;
    }
  }
`
/**
 * 検索バー
 */
const SearchBar = () => {
  return (
    <div className={rootStyle}>
      <CommonInput placeholder="検索キーワード" className="input-style" />
      <CommonBtn className="btn-style">
        <SearchIcon className="search-icon-style" />
      </CommonBtn>
    </div>
  )
}

export default SearchBar
