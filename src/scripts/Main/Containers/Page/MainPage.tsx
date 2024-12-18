import { useEffect, useState } from 'react'
import MainPage from '../../Components/Page/MainPage'
import useApiLoading from '../../../Cores/Hooks/useApiLoading'
import RakutenApiRanking, {
  IRankingResponse,
} from '../../../Cores/Api/RakutenApiRanking'

const MainPageContainers = () => {
  const { execApi: execRakutenApiGet } = useApiLoading(RakutenApiRanking.get)
  const [items, setItems] = useState<IRankingResponse['Items']>([])

  useEffect(() => {
    execRakutenApiGet({
      successCallback: (response) => {
        // 商品データを状態にセット
        setItems(response.Items)
      },
    })
  }, [])

  return (
    <MainPage
      items={items.map((item) => ({
        name: item.Item.itemName,
        price: item.Item.itemPrice,
        imageUrl: item.Item.mediumImageUrls[0]?.imageUrl,
      }))}
    />
  )
}

export default MainPageContainers
