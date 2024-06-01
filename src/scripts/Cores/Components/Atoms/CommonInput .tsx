import { css } from '@emotion/css'
import * as React from 'react'

const rootStyle = css`
  margin: 0px;
  input {
    width: 250px;
    height: 20px;
    border: #585858 solid 2px;
    padding: 5px 25px 5px 5px;
    transition: 0.3s;
  }
`

type ICommonInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  /** 変更時コールバック */
  onChangeValue?: (value: string | number) => void
}

/**
 * 共通1行インプットエリア
 */
const CommonInput = (props: ICommonInputProps): JSX.Element => {
  const { type, onChangeValue, ...otherProps } = props
  const isPassword = type === 'password'

  const onChange = (e: React.FocusEvent<HTMLInputElement>) => {
    onChangeValue && onChangeValue(e.target.value)
  }

  return (
    <p className={rootStyle}>
      <input
        {...otherProps}
        type={isPassword ? 'password' : type}
        onChange={onChange}
      />
    </p>
  )
}

export default CommonInput
