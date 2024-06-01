/**
 * 文字列操作系の共通クラス
 */
export default {
  /**
   * メールフォーマットチェック
   */
  checkFormatMail(mail: string): boolean {
    if (!mail) return false
    const reg =
      /^[A-Za-z0-9]{1}[A-Za-z0-9_+.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/
    return reg.test(mail)
  },
}
