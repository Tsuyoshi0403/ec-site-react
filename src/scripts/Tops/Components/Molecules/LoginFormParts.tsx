import React from 'react'
import CommonBtn from '../../../Cores/Components/Atoms/CommonBtn'
import CommonInput from '../../../Cores/Components/Atoms/CommonInput '
import FormLabelArea from '../../../Cores/Components/Molecules/FormLabelArea'
import { css } from '@emotion/css'

const FormWrapStyle = css`
  margin-bottom: 15px;
  .login-btn {
    display: flex;
    justify-content: center;
  }
  .login-btn-color {
    background: #bbdefb;
  }
`

/**
 * ログイン画面のIDとPASS入力用のフォーマットセット
 */
const LoginFormParts = (): JSX.Element => {
  return (
    <article className={FormWrapStyle}>
      <FormLabelArea label="メールアドレス">
        <CommonInput type="text" />
      </FormLabelArea>
      <FormLabelArea label="パスワード">
        <CommonInput type="password" />
      </FormLabelArea>
      <div className="login-btn">
        <CommonBtn size="large" className="login-btn-color">
          ログイン
        </CommonBtn>
      </div>
    </article>
  )
}

export default LoginFormParts
