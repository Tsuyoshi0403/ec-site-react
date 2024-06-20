import { css } from '@emotion/css'
import NewHeader from '../../../Tops/Components/Organisms/NewHeader '

const rootStyle = css``

/**
 * メイン画面
 */
const MainPage = (): JSX.Element => {
  return (
    <div className={rootStyle}>
      {/* ヘッダー */}
      <NewHeader />
    </div>
  )
}

export default MainPage
