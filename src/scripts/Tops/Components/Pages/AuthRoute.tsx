import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import StorageUtil, { StorageKey } from '../../../Cores/Utils/StorageUtil'
import { Suspense } from 'react'
import Loading from '../../../Cores/Components/Organisms/Loading'
import Dashboard from '../Templates/Dashboard'

/**
 * URLを構築する関数
 * @param path URLのベースパス
 * @param params URLに含めるパラメータ
 * @returns 構築されたURL
 */
const urlBuilder = (
  path: string,
  params: { [key: string]: string | number | undefined }
): string => {
  const sanitisedParamsArray = Object.entries(params)
    .filter((p) => p[0] !== '' && p[1] !== undefined)
    .map((p) => [p[0], p[1]?.toString() || ''])

  const sanitisedParams = Object.fromEntries(sanitisedParamsArray)

  if (sanitisedParamsArray.length > 0) {
    return `${path}?${new URLSearchParams(sanitisedParams)}`
  } else {
    return path
  }
}

/**
 * 未ログイン時にログイン画面へ遷移させる
 * @param path URLのベースパス
 * @constructor
 */
const AuthRoute: (props: { path: string }) => JSX.Element = (props) => {
  const { pathname, search } = useLocation()
  const searchParams = new URLSearchParams(search)

  if (StorageUtil.get(StorageKey.API_TOKEN) !== null) {
    return (
      <Suspense fallback={<Loading open={true} />}>
        <Routes>
          <Route path={props.path} element={<Dashboard />} />
        </Routes>
      </Suspense>
    )
  } else {
    const redirectUrl =
      searchParams.get('redirect') !== null
        ? urlBuilder('/login', { redirect: encodeURI(pathname + search) })
        : '/login'

    return <Navigate to={redirectUrl} replace />
  }
}

export default AuthRoute
