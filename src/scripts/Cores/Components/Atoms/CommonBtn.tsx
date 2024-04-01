/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import * as React from 'react'

const smallStyle = css({
  color: 'red',
  fontSize: '16px',
})

const mediomStyle = css({
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
  size?: 'small' | 'mediom' | 'large' | 'mega'
}

/**
 * 共通ボタン
 */
const CommonBtn = (props: ICommonBtnProps): JSX.Element => {
  let sizeStyle = smallStyle
  if (props.size === 'mediom') {
    sizeStyle = mediomStyle
  } else if (props.size === 'large') {
    sizeStyle = largeStyle
  } else if (props.size === 'mega') {
    sizeStyle = megaStyle
  }

  return (
    <div>
      <button {...props} css={sizeStyle}>
        {props.children}
      </button>
    </div>
  )
}

export default CommonBtn
