import { css } from '@emotion/css'
import classNames from 'classnames'

const rootStyle = css`
  display: flex;
  align-items: center;
  column-gap: 0.5em;

  .starsBg,
  .stars {
    background-repeat: repeat-x;
  }

  .starsBg {
    width: 5.4rem;
    height: 1rem;
    overflow: hidden;
    background-image: url('data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20110%20100%22%3E%3Cpath%20d%3D%22M100%2040.4c0-5.1-4-9.3-8.9-9.3h-25L58.5%206.4C57%201.6%2052-1.1%2047.3.4c-2.7.9-4.9%203.2-5.7%206l3.8%201.3-3.8-1.3L34%2031.1H9c-3.9%200-7.3%202.6-8.5%206.4s.1%208%203.3%2010.4L24%2063.1l-7.8%2024.7c-1.2%203.8.1%208%203.2%2010.4s7.4%202.4%2010.5%200L50%2082.8l20.1%2015.4c3.1%202.4%207.4%202.4%2010.5%200%203.1-2.4%204.4-6.6%203.2-10.4L76%2063.1%2096.3%2048c2.3-1.8%203.7-4.6%203.7-7.6zm-8.4.7-22.7%2017c-1.4%201.1-2%203-1.5%204.7l8.7%2027.6v.3c0%20.3-.1.5-.4.7-.3.2-.7.2-1%200L52.4%2074.2c-1.4-1.1-3.4-1.1-4.8%200L25.1%2091.4c-.4.3-.9.2-1.1-.2-.1-.1-.2-.3-.2-.5v-.3l8.7-27.6c.5-1.8%200-3.7-1.5-4.7l-22.7-17c-.2-.2-.4-.4-.4-.7v-.3c.1-.3.4-.6.8-.6h27.9c1.8%200%203.3-1.2%203.8-2.9L49.2%209c.1-.4.6-.7%201-.5.3.1.4.3.5.5l8.5%2027.6c.5%201.8%202.1%202.9%203.8%202.9h27.9c.4%200%20.7.2.8.6v.3c.2.3.1.5-.1.7z%22%20fill%3D%22%23ffb200%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E');
  }

  .stars {
    height: 100%;
    background-image: url('data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20110%20100%22%3E%3Cpath%20d%3D%22M99.6%2037.6c-1.2-3.8-4.6-6.4-8.5-6.4h-25L58.5%206.4C57%201.6%2052-1.1%2047.3.5c-2.7.9-4.9%203.2-5.7%206L34%2031.2H9c-3.9%200-7.3%202.6-8.5%206.4-1.2%203.8.1%208%203.3%2010.4L24%2063.1l-7.8%2024.7c-1.2%203.8.1%208%203.2%2010.4%203.1%202.4%207.4%202.4%2010.5%200L50%2082.8l20.1%2015.4c3.1%202.4%207.4%202.4%2010.5%200%203.1-2.4%204.4-6.6%203.2-10.4L76%2063.1%2096.3%2048c2.3-1.8%203.7-4.6%203.7-7.6%200-.9-.1-1.9-.4-2.8z%22%20fill%3D%22%23ffb200%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E');
  }

  .score {
    line-height: 1;
  }
`
/** 最大の星数 */
const MAX_STAR_COUNT = 5

type IProps = {
  /** クラス名 */
  className?: string
  /** 星スコア */
  score: number
  /** 数値表示フラグ */
  showsScore?: boolean
}

/**
 * 星評価コンポーネント
 * @returns {JSX.Element}
 */
const StarRating = ({
  score,
  showsScore = true,
  className,
}: IProps): JSX.Element => {
  return (
    <div className={classNames(rootStyle, className)}>
      <div
        className="starsBg"
        role="img"
        aria-label={`${MAX_STAR_COUNT}点中${score}点の評価`}
      >
        <div
          className="stars"
          style={
            score >= MAX_STAR_COUNT
              ? undefined
              : { width: `${(score / MAX_STAR_COUNT) * 100}%` }
          }
        ></div>
      </div>
      {showsScore && <span className="score">{score.toFixed(1)}</span>}
    </div>
  )
}

export default StarRating
