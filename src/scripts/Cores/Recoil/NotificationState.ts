/**
 * メッセージ通知ステート管理
 */
import { atom } from 'recoil'
import { RecoilKey } from './RecoilKey'
import { Color } from '@material-ui/lab'

/** メッセージ通知ステートのインターフェース */
export type INotificationState = {
  /** メッセージ */
  message: string
  /** 表示フラグ */
  open: boolean
  /** 色 */
  color?: Color
}

const NotificationState = atom<INotificationState>({
  key: RecoilKey.Notification,
  default: {
    message: '',
    open: false,
  },
})

export default NotificationState
