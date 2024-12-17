import { useEffect } from 'react'
import MainPage from '../../Components/Page/MainPage'
import RakutenApiItemSearch from '../../../Cores/Api/RakutenApiItemSearch'
import useRakutenApiLoading from '../../../Cores/Hooks/useRakutenApiLoading'

const MainPageContainers = () => {
  const { execApi: execRakutenApiGet } = useRakutenApiLoading(
    RakutenApiItemSearch.get
  )

  useEffect(() => {
    // リクエストデータを直接セット
    const requestData = {
      keyword: '楽天',
    }

    // APIを実行
    execRakutenApiGet({
      request: requestData,
      successCallback: (response) => {
        console.log(response.Items[0].Item.itemName)
      },
    })
  }, [])

  return <MainPage />
}

export default MainPageContainers
