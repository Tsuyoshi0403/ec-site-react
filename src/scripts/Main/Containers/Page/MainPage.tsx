import { useEffect, useState } from 'react'
import MainPage from '../../Components/Page/MainPage'
import useApiLoading from '../../../Cores/Hooks/useApiLoading'
import RakutenApiRanking, {
  IRankingResponse,
} from '../../../Cores/Api/RakutenApiRanking'
import { useNavigate } from 'react-router-dom'

/**
 * メイン画面コンテナ
 * @returns {JSX.Element}
 */
const MainPageContainers = (): JSX.Element => {
  const navigate = useNavigate()
  const { execApi: execRankingApiGet } = useApiLoading(RakutenApiRanking.get)
  const [items, setItems] = useState<IRankingResponse['Items']>([])

  useEffect(() => {
    execRankingApiGet({
      successCallback: (response) => {
        // 商品データを状態にセット
        setItems(response.Items)
      },
    })
  }, [])

  // 商品が選択された際の処理
  const onSelectItem = (itemCode: string) => {
    navigate(`/product?itemCode=${itemCode}`)
  }

  return (
    <MainPage
      items={items.map((item) => ({
        name: item.Item.itemName,
        price: item.Item.itemPrice,
        itemCode: item.Item.itemCode,
        imageUrl: item.Item.mediumImageUrls[0]?.imageUrl,
      }))}
      onSelectItem={onSelectItem}
    />
  )
}

export default MainPageContainers
