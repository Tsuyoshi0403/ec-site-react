import { SvgIcon } from '@mui/material'

/**
 * SVGアイコンコンポーネント
 * 次ボタン
 */
const NextButtonSvg = (): JSX.Element => {
  return (
    <SvgIcon style={{ width: '1.4em', height: '1.4em' }} viewBox="0 0 24 24">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        d="m9 6l6 6l-6 6"
      ></path>
    </SvgIcon>
  )
}

export default NextButtonSvg
