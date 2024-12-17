import { useEffect } from 'react'
import MainPage from '../../Components/Page/MainPage'
import RakutenApiItemSearch from '../../../Cores/Api/RakutenApiItemSearch'
import useApiLoading from '../../../Cores/Hooks/useApiLoading'

const MainPageContainers = () => {
  const { execApi: execRakutenApiGet } = useApiLoading(RakutenApiItemSearch.get)

  useEffect(() => {
    // リクエストデータを直接セット
    const requestData = {
      keyword: '',
    }

    // APIを実行
    execRakutenApiGet({
      request: requestData,
      successCallback: (response) => {
        console.log(response.Items[0].Item.itemName)
        console.log(response.error_description)
      },
    })
  }, [])

  return <MainPage />
}

export default MainPageContainers
