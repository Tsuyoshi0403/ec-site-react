import { atom } from 'recoil'
import { RecoilKey } from './RecoilKey'

/**
 * ローディングステート
 */
const LoadingState = atom<boolean>({ key: RecoilKey.Loading, default: false })

export default LoadingState
