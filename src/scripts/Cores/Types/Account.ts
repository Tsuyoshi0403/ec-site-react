export type IAccount = {
  /** 店舗名 */
  store: string
  /** 姓 */
  lastName: string
  /** 名 */
  firstName: string
  /** 電話番号 */
  phoneNo: string
  /** メールアドレス */
  mail: string
  /** パスワード */
  pass: string
  /** パスワード再入力 */
  confirmPass?: string
}

export const InitAccount: IAccount = {
  store: '',
  lastName: '',
  firstName: '',
  phoneNo: '',
  mail: '',
  pass: '',
  confirmPass: '',
}
