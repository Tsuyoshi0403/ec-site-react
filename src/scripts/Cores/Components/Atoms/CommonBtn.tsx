import { css } from '@emotion/css'
import classNames from 'classnames'

const smallStyle = css`
  border-radius: 5px;
  height: 60px;
  width: 360px;
  font-weight: 700;
  font-size: 16px;
  background-color: #62cda2;
  color: #fff;
  border: 0;
  cursor: pointer;
  &:disabled {
    background-color: #dee5ec;
    cursor: not-allowed;
  }
`

const mediumStyle = css`
  border-radius: 5px;
  height: 60px;
  width: 380px;
  font-weight: 700;
  font-size: 16px;
  background-color: #62cda2;
  color: #fff;
  border: 0;
  cursor: pointer;
  &:disabled {
    background-color: #dee5ec;
    cursor: not-allowed;
  }
`

const largeStyle = css`
  border-radius: 5px;
  height: 60px;
  width: 400px;
  font-weight: 700;
  font-size: 16px;
  background-color: #62cda2;
  color: #fff;
  border: 0;
  cursor: pointer;
  &:disabled {
    background-color: #dee5ec;
    cursor: not-allowed;
  }
`

const megaStyle = css`
  border-radius: 5px;
  height: 60px;
  width: 420px;
  font-weight: 700;
  font-size: 16px;
  background-color: #62cda2;
  color: #fff;
  border: 0;
  cursor: pointer;
  &:disabled {
    background-color: #dee5ec;
    cursor: not-allowed;
  }
`

type ICommonBtnProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  /** サイズ */
  size?: 'small' | 'medium' | 'large' | 'mega'
}

/**
 * 共通buttonタグ
 * @param props
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
    <button {...props} className={classNames(props.className, sizeStyle)}>
      {props.children}
    </button>
  )
}

export default CommonBtn
