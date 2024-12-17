import { IErrorResponse } from '../Utils/ApiUtil'

export const ApiErrorKind = {
  /** なし */
  NONE: 0,
  /** リクエストエラー */
  REQUEST_FAILED: 100,
  /** APIから返却されたエラー */
  API_ERROR: 200,
} as const

export type ApiErrorKindType = (typeof ApiErrorKind)[keyof typeof ApiErrorKind]

/**
 * APIのエラークラス
 */
export default class ApiError extends Error {
  readonly response: Response
  readonly status: number
  readonly errorKind: ApiErrorKindType
  readonly errorResponse?: IErrorResponse
  readonly errorDescription?: string

  constructor(
    e: string,
    response: Response,
    status: number,
    errorKind: ApiErrorKindType,
    errorResponse?: IErrorResponse,
    errorDescription?: string
  ) {
    super(e)
    this.name = new.target.name
    this.response = response
    this.status = status
    this.errorKind = errorKind
    this.errorResponse = errorResponse
    this.errorDescription = errorDescription
    // 下記の行いはTypeScriptの出力ターゲットがES2015より古い場合(ES3,ESS)のみ必要
    Object.setPrototypeOf(this, new.target.prototype)
  }
}
