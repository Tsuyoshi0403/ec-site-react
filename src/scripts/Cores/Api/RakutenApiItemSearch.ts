import Http, { IRakutenErrorResponse } from '../Utils/RakutenApiUtil'

type IItemSearchRequest = {
  /** 商品検索キーワード */
  keyword: string
}

type IItemSearchResponse = IRakutenErrorResponse & {
  /** レスポンス */
  Items: Array<{
    Item: {
      affiliateRate: number
      affiliateUrl: string
      asurakuArea: string
      asurakuClosingTime: string
      asurakuFlag: number
      availability: number
      catchcopy: string
      creditCardFlag: number
      endTime: string
      genreId: string
      giftFlag: number
      imageFlag: number
      itemCaption: string
      itemCode: string
      itemName: string
      itemPrice: number
      itemPriceBaseField: string
      itemPriceMax1: number
      itemPriceMax2: number
      itemPriceMax3: number
      itemPriceMin1: number
      itemPriceMin2: number
      itemPriceMin3: number
      itemUrl: string
      mediumImageUrls: Array<{ imageUrl: string }>
      pointRate: number
      pointRateEndTime: string
      pointRateStartTime: string
      postageFlag: number
      reviewAverage: number
      reviewCount: number
      shipOverseasArea: string
      shipOverseasFlag: number
      shopAffiliateUrl: string
      shopCode: string
      shopName: string
      shopOfTheYearFlag: number
      shopUrl: string
      smallImageUrls: Array<{ imageUrl: string }>
      startTime: string
      tagIds: number[]
      taxFlag: number
    }
  }>
}

/**
 * ItemSearch RakutenApi実行関数
 */
const RakutenApiItemSearch = {
  /**
   * 楽天市場の商品一覧を取得
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
