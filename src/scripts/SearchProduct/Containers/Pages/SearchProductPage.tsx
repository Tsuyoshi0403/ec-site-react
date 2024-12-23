import { useEffect, useState } from 'react'
import SearchProductPage from '../../Components/Pages/SearchProductPage'
import RakutenApiGenreSearch, {
  IGenreSearchResponse,
} from '../../../Cores/Api/RakutenApiGenreSearch'
import useApiLoading from '../../../Cores/Hooks/useApiLoading'
import { useLocation, useSearchParams } from 'react-router-dom'
import RakutenApiItemSearch, {
  IItemSearchResponse,
} from '../../../Cores/Api/RakutenApiItemSearch'

const SearchProductPageContainers = () => {
  const [searchParams] = useSearchParams()
  const keyword = searchParams.get('keyword')
  const { execApi: execGenreSearchApiGet } = useApiLoading(
    RakutenApiGenreSearch.get
  )
  const { execApi: execItemSearchApiGet } = useApiLoading(
    RakutenApiItemSearch.get
  )
  const [genresState, setGenresState] = useState<
    IGenreSearchResponse['children']
  >([])
  const [productState, setProductState] = useState<
    IItemSearchResponse['Items']
  >([])
  const location = useLocation()

  useEffect(() => {
    execGenreSearchApiGet({
      request: {
        genreId: 0,
      },
      successCallback: (response) => {
        setGenresState(response.children)
      },
    })
  }, [])

  useEffect(() => {
    if (!keyword) return

    execItemSearchApiGet({
      request: {
        keyword: keyword,
      },
      successCallback: (response) => {
        setProductState(response.Items)
      },
    })
  }, [location])

  /* eslint-disable react/no-children-prop */
  return (
    <SearchProductPage
      genres={genresState.map((genres) => ({
        genreId: genres.child.genreId,
        genreName: genres.child.genreName,
      }))}
      items={productState}
    />
  )
}

export default SearchProductPageContainers
