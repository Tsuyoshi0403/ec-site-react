import { Route, Routes } from 'react-router-dom'
import LoginPage from './LoginPage'

const TopPage = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  )
}

export default TopPage
