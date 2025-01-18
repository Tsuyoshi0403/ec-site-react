import { css } from '@emotion/css'
import classNames from 'classnames'

const rootStyle = css`
  font-size: 40px;
  color: #62cda2;
`

type Props = {
  /** クラス名 */
  className?: string
  /** タイトル */
  label: string
}

/**
 * 共通H2タグ
 * @param props
 */
const CommonH2 = (props: Props): JSX.Element => {
  const { className = '' } = props

  return <h2 className={classNames(rootStyle, className)}>{props.label}</h2>
}

export default CommonH2
