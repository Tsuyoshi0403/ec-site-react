import StorageUtil, { StorageKey } from './StorageUtil'
import { Buffer } from 'buffer'

export type JWTClaim = {
  /** 期限切れ日時 */
  exp: number
  /** JWT発行日時 */
  iat: number
  /** 期限開始日時 */
  ndf: number
  /** 発行者(サーバ側)の識別子 */
  iss: string
}

export default {
  /** トークンを取得 */
  getToken(): string | undefined {
    return StorageUtil.get(StorageKey.API_TOKEN)
  },

  /** リフレッシュトークンを取得 */
  getRefreshToken(): string | undefined {
    return StorageUtil.get(StorageKey.API_REFRESH_TOKEN)
  },

  /** トークンが存在するかチェック */
  existsToken(): boolean {
    return !!this.getToken()
  },

  /** 期限が切れているかチェック */
  checkTokenExpired: function (): boolean {
    const claim = this.getClaim()
    if (!claim) return false
    // API実行時間を考慮して、10秒進めた時間で判定する
    const nowDate = new Date()
    nowDate.setSeconds(nowDate.getSeconds() + 10)
    return nowDate.getTime() > claim.exp * 1000
  },

  /** クレーム情報を取得 */
  getClaim(): JWTClaim | undefined {
    const token = this.getToken()
    if (!token) return
    const claim = token.split('.')[1] || ''
    if (!claim) return
    return JSON.parse(Buffer.from(claim, 'base64').toString()) as JWTClaim
  },

  /** 全てのトークンを削除 */
  removeAllToken(): void {
    StorageUtil.remove(StorageKey.API_TOKEN)
    StorageUtil.remove(StorageKey.API_REFRESH_TOKEN)
  },
}
