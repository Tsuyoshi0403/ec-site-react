import { Snackbar } from '@material-ui/core'
import { useRecoilState, useResetRecoilState } from 'recoil'
import NotificationState from '../../Recoil/NotificationState'
import MuiAlert from '@material-ui/lab/Alert'
import { useEffect, useReducer } from 'react'
import { css } from '@emotion/css'

const rootStyle = css`
  &.MuiSnackbar-root {
    border-radius: 12px;
    .MuiPaper-root {
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
      border-radius: 12px;
      min-width: 80vw;
      white-space: pre-wrap;
    }
  }
  .MuiAlert-icon {
    align-items: center;
    margin-right: 0;
  }
  .MuiAlert-message {
    padding: 8px 20px 0;
    font-size: 16px;
  }
  .MuiAlert-filledWarning {
    background: #f55f74;
  }
  .MuiAlert-filledInfo {
    color: #63523c;
    background: #f6e693;
  }
`
/**
 * スナックバーで通知を行う
 * @constructor
 */
const Notification = (): JSX.Element => {
  const [state, setState] = useRecoilState(NotificationState)
  const resetState = useResetRecoilState(NotificationState)
  const [count, addCount] = useReducer((_count) => ++_count, 0)

  /** 表示回数をインクリメントいていく */
  useEffect(() => {
    state.open && addCount()
  }, [state.open])

  /** 終了処理 */
  const onClose = () => {
    setState({ ...state, open: false })
  }

  /** 表示が消えた際の処理 */
  const onExited = () => {
    resetState()
  }

  return (
    <Snackbar
      key={'snackbar-' + count}
      open={state.open}
      autoHideDuration={6000}
      onClose={onClose}
      TransitionProps={{
        onExited: onExited,
      }}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      className={rootStyle}
    >
      <MuiAlert
        onClose={onClose}
        severity={state.color ?? 'info'}
        variant="filled"
      >
        {state.message.replace('\\n', '\n')}
      </MuiAlert>
    </Snackbar>
  )
}
export default Notification
