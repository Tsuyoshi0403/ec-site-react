import { Route, Routes } from 'react-router-dom'
import MainPageContainers from '../../../Main/Containers/Page/MainPage'

/**
 * ログイン後のダッシュボードページ
 * @constructor
 */

export default function Dashboard(): JSX.Element {
  return (
    <div>
      {/** メイン領域 */}
      <Routes>
        <Route path="/" element={<MainPageContainers />} />
      </Routes>
    </div>
  )
}
