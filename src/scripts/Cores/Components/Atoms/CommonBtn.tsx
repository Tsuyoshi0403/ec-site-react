import { css } from '@emotion/css'
import classNames from 'classnames'

const smallStyle = css({
  color: 'red',
  fontSize: '16px',
})

const mediumStyle = css({
  color: 'red',
  fontSize: '32px',
})

const largeStyle = css({
  display: 'inline-flex',
  flexShrink: 0,
  minWidth: '120px',
  height: '48px',
  fontSize: '16px',
  fontWeight: 600,
  borderRadius: '10px',
  lineHeight: '16px',
  padding: '0 20px',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: 'none',
})

const megaStyle = css({
  color: 'red',
  fontSize: '54px',
})

type ICommonBtnProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  /** サイズ */
  size?: 'small' | 'medium' | 'large' | 'mega'
}

/**
 * 共通ボタン
 */
const CommonBtn = (props: ICommonBtnProps): JSX.Element => {
  let sizeStyle = smallStyle
  if (props.size === 'medium') {
    sizeStyle = mediumStyle
  } else if (props.size === 'large') {
    sizeStyle = largeStyle
  } else if (props.size === 'mega') {
    sizeStyle = megaStyle
  }

  return (
    <div>
      <button {...props} className={classNames(props.className, sizeStyle)}>
        {props.children}
      </button>
    </div>
  )
}

export default CommonBtn
