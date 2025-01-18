import { css } from '@emotion/css'
import * as React from 'react'
import { ReactNode } from 'react'
import classNames from 'classnames'

const rootStyle = css`
  color: #469fd6;
  font-size: 12px;
  font-weight: 700;
  text-decoration: none;
  &:hover {
    color: #5ab3e1;
    text-decoration: underline;
    cursor: pointer;
  }
`

type Props = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  /** クラス名 */
  className?: string
  /** 子要素 */
  children: ReactNode
  /** URLリンク */
  href?: string
  /** 別ウィンドウ */
  target?: string
}

/**
 * 共通aタグ
 * @param props
 */
const CommonLink = (props: Props): JSX.Element => {
  const { className = '', children, href, target, ...otherProps } = props

  return (
    <>
      {props.target ? (
        <a
          {...otherProps}
          href={href}
          target={target}
          rel="noopener noreferrer"
          className={classNames(rootStyle, className)}
        >
          {children}
        </a>
      ) : (
        <a
          {...otherProps}
          href={href}
          className={classNames(rootStyle, className)}
        >
          {children}
        </a>
      )}
    </>
  )
}

export default CommonLink
