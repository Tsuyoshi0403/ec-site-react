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

  /**
   * ハイフン込の数字を抽出
   * @param value
   */
  pickNumberHyphen<T>(value: T): string {
    let num = ''
    // 数字のみ抽出
    if (typeof value === 'string') {
      const rep = value.replace(/[^0-9０-９-]/g, '')
      if (rep) {
        num = this.toHalfWidth(rep)
      }
    } else if (typeof value === 'number') {
      num = value.toString()
    }
    return num
  },

  /**
   * パスワードで使用できる文字を抽出
   * @param value
   */
  pickPassword(value: string): string {
    let num = ''
    const rep = value.replace(/[^0-9０-９a-zA-Z!-/:-@¥[-`{-~]/g, '')
    if (rep) {
      num = this.toHalfWidth(rep)
    }
    return num
  },

  /**
   * 全角を全角に変換
   * @param input
   */
  toHalfWidth(input: string): string {
    return input.replace(/[！-～]/g, (input) => {
      return String.fromCharCode(input.charCodeAt(0) - 0xfee0)
    })
  },

  /**
   * パスワードのバリデーションチェック
   * 英字/数字/記号を2種類以上含む8文字以上32文字以下の正規表現
   * @param value
   */
  checkPasswordValidation(value: string): boolean {
    const reg =
      /^((?=.*[a-zA-Z])(?=.*[0-9])|(?=.*[a-zA-Z])(?=.*[!-/:-@¥[-`{-~])|(?=.*[0-9])(?=.*[a-zA-Z])|(?=.*[0-9])(?=.*[!-/:-@¥[-`{-~])|(?=.*[!-/:-@¥[-`{-~])(?=.*[a-zA-Z])|(?=.*[!-/:-@¥[-`{-~])(?=.*[0-9]))([a-zA-Z0-9!-/:-@¥[-`{-~]){8,32}$/i
    return reg.test(value)
  },
}
