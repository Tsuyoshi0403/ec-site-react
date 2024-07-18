import { css } from '@emotion/css'
import FatherDaySale from '../../../assets/images/FatherDaySale.jpg'
import NextButtonSvg from '../../../Cores/Svgs/Icons/NextButtonSvg'
import PreviousButtonSvg from '../../../Cores/Svgs/Icons/PreviousButtonSvg '

const rootStyle = css`
  .slideshow-ul {
    padding: 0;
    margin: 10px 0 0 0;
    .slideshow-li {
      list-style-type: none;
      .slideshow-item-image {
        max-height: 100%;
        max-width: 100%;
        height: 300px;
        width: 2000px;
      }
    }
  }
  .slideshow-button-next {
    position: absolute;
    top: 200px;
    width: 55px;
    height: 55px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 50px;
    border: 0;
    right: 50px;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
  .slideshow-button-previous {
    position: absolute;
    top: 200px;
    width: 55px;
    height: 55px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 50px;
    border: 0;
    left: 50px;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
`

/**
 * スライドショーコンポーネント
 * @returns {JSX.Element}
 */
const SlideShow = (): JSX.Element => {
  return (
    <div className={rootStyle}>
      <ul className="slideshow-ul">
        <li className="slideshow-li">
          <a className="card-a">
            <img
              className="slideshow-item-image"
              src={FatherDaySale}
              alt="キャンペーン"
            />
          </a>
        </li>
      </ul>
      <button className="slideshow-button-next">
        <NextButtonSvg />
      </button>
      <button className="slideshow-button-previous">
        <PreviousButtonSvg />
      </button>
    </div>
  )
}

export default SlideShow
