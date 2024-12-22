import { ICommonResponse } from '../Utils/ApiUtil'
import Http from '../Utils/RakutenApiUtil'

type IItemSearchRequest = {
  /** 検索キーワード */
  keyword?: string
  /** 商品コード */
  itemCode?: string
}

export type IItemSearchResponse = ICommonResponse & {
  /** 楽天市場の商品一覧 */
  Items: Array<{
    Item: {
      /** 商品名 */
      itemName: string
      /** 商品価格 */
      itemPrice: number
      /** 星評価 */
      reviewAverage: number
      /** 商品詳細 */
      itemCaption: string
      /** 販売ショップ */
      shopName: string
      /** 商品コード */
      itemCode: string
      /** 送料区分 */
      postageFlag: number
      /** 商品画像URL一覧 */
      mediumImageUrls: Array<{
        /** 商品画像URL */
        imageUrl: string
      }>
    }
  }>
}

/**
 * ItemSearch RakutenApi実行関数
 */
const RakutenApiItemSearch = {
  /**
   * 楽天市場の商品を取得
   * @param request
   */
  async get(request?: IItemSearchRequest): Promise<IItemSearchResponse> {
    return await Http.request<IItemSearchResponse>(
      'get',
      'IchibaItem/Search/20220601',
      request
    )
  },
}

export default RakutenApiItemSearch
