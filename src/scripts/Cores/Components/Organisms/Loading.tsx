import { Backdrop } from '@material-ui/core'
import LoadingMark from '../Atoms/LoadingMark'
import { css } from '@emotion/css'

const loadStyle = css`
  z-index: 10000000 !important;
`

type IProps = {
  /** ローディング表示 */
  open: boolean
}

/**
 * ローディング表示
 * @returns {JSX.Element}
 */
const Loading = ({ open }: IProps): JSX.Element => {
  return (
    <Backdrop
      className={loadStyle}
      open={open}
      transitionDuration={{ enter: 100, exit: 600 }}
    >
      <LoadingMark />
    </Backdrop>
  )
}

export default Loading
