import { ICommonResponse } from '../Utils/ApiUtil'
import Http from '../Utils/RakutenApiUtil'

export type IRankingResponse = ICommonResponse & {
  /** 楽天市場の商品一覧 */
  Items: Array<{
    Item: {
      /** 商品名 */
      itemName: string
      /** 商品価格 */
      itemPrice: number
      /** 商品コード */
      itemCode: string
      /** 商品画像URL一覧 */
      mediumImageUrls: Array<{
        /** 商品画像URL */
        imageUrl: string
      }>
    }
  }>
}

/**
 * Ranking RakutenApi実行関数
 */
const RakutenApiRanking = {
  /**
   * 楽天市場のランキング一覧を取得
   * @param request
   */
  async get(): Promise<IRankingResponse> {
    return await Http.request<IRankingResponse>(
      'get',
      'IchibaItem/Ranking/20220601'
    )
  },
}

export default RakutenApiRanking
