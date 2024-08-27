import { useCallback, useState } from 'react'

type IReturn = (e: any) => void

/**
 * Async内でエラーが発生した場合のフック
 */
const useAsyncError = (): IReturn => {
  const [, setError] = useState()
  return useCallback(
    (e) => {
      setError(() => {
        throw e
      })
    },
    [setError]
  )
}

export default useAsyncError
