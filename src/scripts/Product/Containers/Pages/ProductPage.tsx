import { useSearchParams } from 'react-router-dom'
import ProductPage from '../../Components/Pages/ProductPage'
import { useEffect, useState } from 'react'
import RakutenApiItemSearch, {
  IItemSearchResponse,
} from '../../../Cores/Api/RakutenApiItemSearch'
import useApiLoading from '../../../Cores/Hooks/useApiLoading'

/**
 * 商品画面コンテナ
 */
const ProductPageContainers = () => {
  const [searchParams] = useSearchParams()
  const itemCode = searchParams.get('itemCode')
  const { execApi: execItemSearchApiGet } = useApiLoading(
    RakutenApiItemSearch.get
  )
  const [productState, setProductState] = useState<
    IItemSearchResponse['Items']
  >([])

  useEffect(() => {
    if (!itemCode) return

    execItemSearchApiGet({
      request: {
        itemCode: itemCode,
      },
      successCallback: (response) => {
        setProductState(response.Items)
      },
    })
  }, [])
  return <ProductPage items={productState} />
}

export default ProductPageContainers
