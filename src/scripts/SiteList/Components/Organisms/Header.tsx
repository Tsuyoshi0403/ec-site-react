import SearchBar from '../Molecules/SearchBar'
import LoginIcon from '@mui/icons-material/Login'

const Header = () => {
  return (
    <header>
      <SearchBar />
      <ul>
        <li>
          <a href="#">
            <span>
              <LoginIcon />
            </span>
            ログイン
          </a>
        </li>
      </ul>
    </header>
  )
}

export default Header
