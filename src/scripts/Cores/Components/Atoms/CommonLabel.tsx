import { css } from '@emotion/css'
import * as React from 'react'
import classNames from 'classnames'

const rootStyle = css`
  position: absolute;
  transform: translateY(-120%);
  color: #62cda2;
  font-size: 12px;
  &.label-error {
    color: #eb5a46;
  }
`

type ICommonLabelProps = React.DetailedHTMLProps<
  React.LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
> & {
  /** エラーフラグ */
  error?: boolean
}

/**
 * 共通labelタグ
 * @param props
 */
const CommonLabel = (props: ICommonLabelProps): JSX.Element => {
  const { className = '', children, error, ...otherProps } = props

  return (
    <label
      className={classNames(
        rootStyle,
        {
          'label-error': error,
        },
        className
      )}
      {...otherProps}
    >
      {children}
    </label>
  )
}

export default CommonLabel
