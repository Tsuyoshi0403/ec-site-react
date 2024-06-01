import { Route, Routes } from 'react-router-dom'
import Header from '../../../SiteList/Components/Organisms/Header'
import NewLoginPage from './ NewLoginPage'

const TopPage = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/login" element={<NewLoginPage />} />
    </Routes>
  )
}

export default TopPage
