import { Route, Routes } from 'react-router-dom'
import MainPage from '../../../Main/Components/Page/MainPage'

/**
 * ログイン後のダッシュボードページ
 * @constructor
 */

export default function Dashboard(): JSX.Element {
  return (
    <div>
      {/** メイン領域 */}
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  )
}
