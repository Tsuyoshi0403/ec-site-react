import CryptoJS from 'crypto-js'

/** LocalStorageに保存するキー */
export const StorageKey = {
  API_TOKEN: 'jtkn',
  API_REFRESH_TOKEN: 'ref_jtkn',
}

export type StorageKeyType = (typeof StorageKey)[keyof typeof StorageKey]

/**
 * LocalStorage保存用共通クラス
 */
export default {
  /**
   * LocalStorageからデータを保存
   * @param key キー
   * @param value 保存情報
   * @param ttl 有効時間(秒)
   */
  set(key: StorageKeyType, value: any, ttl = -1): void {
    const expireDate = new Date()
    expireDate.setSeconds(expireDate.getSeconds() + ttl)
    const json = JSON.stringify({
      expire: ttl > 0 ? expireDate.getTime() : undefined,
      value: value,
    })

    localStorage.setItem(
      key,
      CryptoJS.AES.encrypt(
        json,
        process.env.REACT_APP_SECRET as string
      ).toString()
    )
  },

  /**
   * LocalStorageからデータを取得
   * @param key キー
   */
  get(key: StorageKeyType): any {
    const data = localStorage.getItem(key)
    if (data === undefined || data === null) {
      return null
    }
    try {
      const bytes = CryptoJS.AES.decrypt(
        data,
        process.env.REACT_APP_SECRET as string
      )
      const json = bytes.toString(CryptoJS.enc.Utf8)
      const object = JSON.parse(json)
      if (object.expire === undefined || object.expire > new Date().getTime()) {
        return object.value
      } else {
        localStorage.removeItem(key)
        return null
      }
    } catch (e) {
      localStorage.removeItem(key)
      return null
    }
  },

  /**
   * LocalStorageからデータを削除
   * @param key キー
   */
  remove(key: StorageKeyType): void {
    localStorage.removeItem(key)
  },
}
