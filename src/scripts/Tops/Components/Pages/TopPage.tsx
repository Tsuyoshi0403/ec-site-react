import { Route, Routes } from 'react-router-dom'
import NewLoginPage from './NewLoginPage'
import MainPage from '../../../Main/Components/Page/MainPage'

const TopPage = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/login" element={<NewLoginPage />} />
      <Route path="/" element={<MainPage />} />
    </Routes>
  )
}

export default TopPage
