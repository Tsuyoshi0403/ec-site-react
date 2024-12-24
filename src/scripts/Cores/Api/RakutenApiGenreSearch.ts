import { ICommonResponse } from '../Utils/ApiUtil'
import Http from '../Utils/RakutenApiUtil'

type IGenreSearchRequest = {
  /** ジャンルID */
  genreId: number
}

export type IGenreSearchResponse = ICommonResponse & {
  /** 子ジャンル情報 */
  children: Array<{
    child: {
      /** ジャンルID */
      genreId: number
      /** ジャンル名 */
      genreName: string
    }
  }>
}

/**
 * GenreSearch RakutenApi実行関数
 */
const RakutenApiGenreSearch = {
  /**
   * 楽天市場のジャンル情報を取得
   * @param request
   */
  async get(request?: IGenreSearchRequest): Promise<IGenreSearchResponse> {
    return await Http.request<IGenreSearchResponse>(
      'get',
      'IchibaGenre/Search/20140222',
      request
    )
  },
}

export default RakutenApiGenreSearch
