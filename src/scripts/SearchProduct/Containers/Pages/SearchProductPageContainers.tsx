import { useEffect, useState } from 'react'
import SearchProductPage from '../../Components/Pages/SearchProductPage'
import RakutenApiGenreSearch, {
  IGenreSearchResponse,
} from '../../../Cores/Api/RakutenApiGenreSearch'
import useApiLoading from '../../../Cores/Hooks/useApiLoading'

const SearchProductPageContainers = () => {
  const { execApi: execGenreSearchApiGet } = useApiLoading(
    RakutenApiGenreSearch.get
  )
  const [genresState, setGenresState] = useState<
    IGenreSearchResponse['children']
  >([])

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

  /* eslint-disable react/no-children-prop */
  return (
    <SearchProductPage
      genres={genresState.map((genres) => ({
        genreId: genres.child.genreId,
        genreName: genres.child.genreName,
      }))}
    />
  )
}

export default SearchProductPageContainers
