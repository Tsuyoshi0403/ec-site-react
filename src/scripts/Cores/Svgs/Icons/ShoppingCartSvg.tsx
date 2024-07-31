import { SvgIcon } from '@mui/material'

/**
 * SVGアイコンコンポーネント
 * 買い物かご
 */
const ShoppingCartSvg = (): JSX.Element => {
  return (
    <SvgIcon style={{ width: '1.2em', height: '1.2em' }} viewBox="0 0 32 32">
      <circle cx="10" cy="28" r="2" fill="currentColor" />
      <circle cx="24" cy="28" r="2" fill="currentColor" />
      <path
        fill="currentColor"
        d="M28 7H5.82L5 2.8A1 1 0 0 0 4 2H0v2h3.18L7 23.2a1 1 0 0 0 1 .8h18v-2H8.82L8 18h18a1 1 0 0 0 1-.78l2-9A1 1 0 0 0 28 7m-2.8 9H7.62l-1.4-7h20.53Z"
      />
    </SvgIcon>
  )
}

export default ShoppingCartSvg