import { SvgIcon } from '@mui/material'

/**
 * SVGアイコンコンポーネント
 * 購入履歴
 */
const PurchaseHistorySvg = (): JSX.Element => {
  return (
    <SvgIcon style={{ width: '1.2em', height: '1.2em' }} viewBox="0 0 48 48">
      <g fill="none" stroke="currentColor" strokeWidth="3.5">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M42 24V9a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h15"
        />
        <circle cx="32" cy="32" r="6" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m37 36l5 4M14 16h20m-20 8h8"
        />
      </g>
    </SvgIcon>
  )
}

export default PurchaseHistorySvg
