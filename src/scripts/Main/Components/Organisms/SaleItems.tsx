import { css } from '@emotion/css'
import TrackballMouse from '../../../assets/images/TrackballMouse.jpg'
import Keyboard1 from '../../../assets/images/Keyboard1.jpg'
import Keyboard2 from '../../../assets/images/Keyboard2.jpg'
import Mouse1 from '../../../assets/images/Mouse1.jpg'

const rootStyle = css`
  height: 450px;
  width: 400px;
  border: 1px solid #ebebeb;
  margin: 20px 0 20px 0;
  .card-title {
    font-size: 17px;
    line-height: 21.34px;
    margin: 10px 10px;
  }
  .card-body {
    display: grid;
    grid-template-columns: repeat(2, 0fr);
    gap: 10px;
    justify-content: center;
    .card-a {
      width: 150px;
      text-align: center;
      cursor: pointer;
      .card-image {
        padding: 10px 5px;
        height: 145px;
        width: 130px;
        object-fit: contain;
      }
      .card-product {
        display: flex;
        align-items: center;
        .card-off-txt {
          background-color: #cc0c39;
          color: #ffffff;
          border-radius: 2px;
          padding: 5px 7px;
          font-size: 12px;
          font-weight: 600;
        }
        .card-time-sale-txt {
          color: #cc0c39;
          font-weight: 700;
          font-size: 12px;
        }
      }
    }
  }
`

/**
 * セールス商品コンポーネント
 * @returns {JSX.Element}
 */
const SaleItems = (): JSX.Element => {
  return (
    <div className={rootStyle}>
      <h2 className="card-title">セール商品のお買いモノを続ける</h2>
      <div className="card-body">
        <a className="card-a">
          <img
            className="card-image"
            src={TrackballMouse}
            alt="セール商品のお買いモノを続ける"
          />
          <div className="card-product">
            <span className="card-off-txt">25%OFF</span>
            <span className="card-time-sale-txt">タイムセール</span>
          </div>
        </a>
        <a className="card-a">
          <img
            className="card-image"
            src={Keyboard1}
            alt="セール商品のお買いモノを続ける"
          />
          <div className="card-product">
            <span className="card-off-txt">11%OFF</span>
            <span className="card-time-sale-txt">タイムセール</span>
          </div>
        </a>
        <a className="card-a">
          <img
            className="card-image"
            src={Keyboard2}
            alt="セール商品のお買いモノを続ける"
          />
          <div className="card-product">
            <span className="card-off-txt">19%OFF</span>
            <span className="card-time-sale-txt">タイムセール</span>
          </div>
        </a>
        <a className="card-a">
          <img
            className="card-image"
            src={Mouse1}
            alt="セール商品のお買いモノを続ける"
          />
          <div className="card-product">
            <span className="card-off-txt">14%OFF</span>
            <span className="card-time-sale-txt">タイムセール</span>
          </div>
        </a>
      </div>
    </div>
  )
}

export default SaleItems
