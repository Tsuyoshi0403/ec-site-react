import { css } from '@emotion/css'
import * as React from 'react'
import classNames from 'classnames'

const rootStyle = css`
  .login-input-text {
    border: 0px;
    font-size: 17px;
    border-bottom: 2px solid #dfe5ec;
    padding-bottom: 5px;
    width: 100%;

    &::placeholder {
      color: #dfe5ec;
      font-weight: bold;
      font-size: 17px;
    }
    &:focus::placeholder {
      opacity: 0;
    }
    /* フォーカス時の枠線を非表示にする */
    &:focus {
      outline: none;
      border-bottom-color: #62cda2;
    }
    &.input-error {
      border-bottom-color: #eb5a46;
    }
  }
`

type ICommonInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  /** エラーフラグ */
  error?: boolean
}

/**
 * 共通inputタグ
 * @param props
 */
const CommonInput = (props: ICommonInputProps): JSX.Element => {
  const { ...otherProps } = props

  return (
    <p className={rootStyle}>
      <input
        className={classNames('login-input-text', {
          'input-error': props.error,
        })}
        {...otherProps}
      />
    </p>
  )
}

export default CommonInput
