import { useEffect, useState } from 'react'
import SearchProductPage from '../../Components/Pages/SearchProductPage'
import RakutenApiGenreSearch, {
  IGenreSearchResponse,
} from '../../../Cores/Api/RakutenApiGenreSearch'
import useApiLoading from '../../../Cores/Hooks/useApiLoading'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import RakutenApiItemSearch, {
  IItemSearchResponse,
} from '../../../Cores/Api/RakutenApiItemSearch'

const SearchProductPageContainers = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const keyword = searchParams.get('keyword')
  const genreId = searchParams.get('genreId')
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
  const [selectedGenreIdState, setSelectedGenreIdState] = useState<
    number | null
  >(Number(genreId))

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
        genreId: Number(genreId),
      },
      successCallback: (response) => {
        setProductState(response.Items)
      },
    })
  }, [location])

  // ジャンル選択された際の処理
  const onSelectGenre = (selectedGenreId: number) => {
    setSelectedGenreIdState((prevId) =>
      prevId === selectedGenreId ? null : selectedGenreId
    )

    navigate(
      `/search/product?keyword=${keyword}${
        selectedGenreIdState === selectedGenreId
          ? ''
          : `&genreId=${selectedGenreId}`
      }`
    )
  }

  /* eslint-disable react/no-children-prop */
  return (
    <SearchProductPage
      genres={genresState.map((genres) => ({
        genreId: genres.child.genreId,
        genreName: genres.child.genreName,
        onSelectGenre: onSelectGenre,
      }))}
      items={productState}
      selectedGenreIdState={selectedGenreIdState}
    />
  )
}

export default SearchProductPageContainers
