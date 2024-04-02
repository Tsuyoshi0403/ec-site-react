import { css } from '@emotion/css'
import * as React from 'react'

const rootStyle = css`
  padding: 8px;
  .description {
    font-size: 0.8em;
    padding-bottom: 3px;
  }
  .repletion {
    font-size: 0.8em;
    padding-bottom: 3px;
    color: #a9a9a9;
  }
  .custom-div {
    .txt-color-label {
      display: inline-flex;
      padding-right: 10px;
      border-left: solid 2px #5cd9c7;
      margin-bottom: 5px;
      .txt-color-label {
        margin: 2px auto 1px 1px;
      }
    }
  }
  .txt-color-label,
  .atm-label {
    font-size: 13px;
    line-height: 0.8;
    margin: 5px auto 7px 1px;
    padding: 0 6px 2px;
  }
  .form-label-glossary {
    position: absolute;
    right: -15px;
    top: -5px;
    .MuiSvgIcon-root {
      top: 0;
      right: 0;
    }
  }
  .specification {
    font-size: 16px;
    margin: 0 0 -3px 3px;
  }
`

type IProps = {
  /** タイトル */
  label?: string
  /** 説明 */
  description?: string
  /** 補足（エラーメッセージの上部に表示） */
  repletion?: string
  /** エラーメッセージ */
  error?: string
  /** クラス名 */
  className?: string
  /** 子要素 */
  children: React.ReactNode
  /** 説明 */
  info?: string
  /** 必須マーク（テキスト） */
  specification?: string
}

/**
 * フォームのラベルセル コンポーネント
 */
const FormLabelArea = (props: IProps): JSX.Element => {
  return (
    <div className={rootStyle}>
      {props.info ? (
        <div className="txt-color-label atm-label">
          {props.info}
          {props.label}
          {props.specification && (
            <span className="txt-color-alert specification">
              {props.specification}
            </span>
          )}
        </div>
      ) : (
        <p className="atm-label">
          {props.label}
          {props.specification && (
            <span className="txt-color-alert specification">
              {props.specification}
            </span>
          )}
        </p>
      )}
      {props.description && (
        <p className="txt-color-sub description">{props.description}</p>
      )}
      {props.children}
      {props.repletion && (
        <p className="txt-color-sub repletion">{props.repletion}</p>
      )}
      <p className="txt-color-alert txt-size-small">{props.error ?? ''}</p>
    </div>
  )
}

export default FormLabelArea
