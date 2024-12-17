import { IErrorResponse } from '../Utils/ApiUtil'

export const ApiErrorKind = {
  /** リクエストエラー */
  REQUEST_FAILED: 100,
  /** APIから返却されたエラー */
  API_ERROR: 200,
  /** なし */
  NONE: 0,
} as const

export type ApiErrorKindType = (typeof ApiErrorKind)[keyof typeof ApiErrorKind]

/**
 * APIのエラークラス
 */
export default class ApiError extends Error {
  readonly response: Response
  readonly status: number
  readonly errorKind: ApiErrorKindType
  readonly errorResponse?: IErrorResponse | string

  constructor(
    e: string,
    response: Response,
    status: number,
    errorKind: ApiErrorKindType,
    errorResponse?: IErrorResponse | string
  ) {
    super(e)
    this.name = new.target.name
    this.response = response
    this.status = status
    this.errorKind = errorKind
    this.errorResponse = errorResponse
    // 下記の行いはTypeScriptの出力ターゲットがES2015より古い場合(ES3,ESS)のみ必要
    Object.setPrototypeOf(this, new.target.prototype)
  }
}
