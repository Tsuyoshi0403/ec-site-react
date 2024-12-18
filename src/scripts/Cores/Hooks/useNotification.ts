import { useSetRecoilState } from 'recoil'
import NotificationState from '../Recoil/NotificationState'

type IShowNotification = (message: string) => void

type IReturn = {
  /** ノーマル通知を表示 */
  showNotification: IShowNotification
  /** 警告通知を表示 */
  showWarnNotification: IShowNotification
}

/**
 * Notification通知のフック関数
 */
const useNotification = (): IReturn => {
  const setNotification = useSetRecoilState(NotificationState)

  /**
   * ノーマル通知を表示
   * @param message
   */
  const showNotification: IShowNotification = (message) => {
    setNotification((_state) => ({
      ..._state,
      open: true,
      message: message,
    }))
  }

  /**
   * 警告通知を表示
   * @param message
   */
  const showWarnNotification: IShowNotification = (message) => {
    setNotification((_state) => ({
      ..._state,
      open: true,
      message: message,
      color: 'warning',
    }))
  }

  return { showNotification, showWarnNotification }
}

export default useNotification
