import { css } from '@emotion/css'
import TrackballMouse from '../../../assets/images/TrackballMouse.jpg'
import Keyboard1 from '../../../assets/images/Keyboard1.jpg'
import Keyboard2 from '../../../assets/images/Keyboard2.jpg'
import Keyboard3 from '../../../assets/images/Keyboard3.jpg'
import CoffeeMachine from '../../../assets/images/CoffeeMachine.jpg'
import CoffeeMachine2 from '../../../assets/images/CoffeeMachine2.jpg'
import PowerBelt from '../../../assets/images/PowerBelt.jpg'

const rootStyle = css`
  .fresh-shoveler-card {
    display: block;
    justify-content: center;
    align-items: center;
    border: 1px solid #ebebeb;
    margin: 0px auto;
    width: 1245px;
    padding: 10px 20px;
    margin-bottom: 20px;
    .fresh-shoveler-title {
      font-size: 17px;
      margin: 10px 10px;
    }
    .fresh-shoveler-ul {
      display: grid;
      grid-template-columns: repeat(6, 0fr);
      gap: 60px;
      justify-content: center;
      align-items: center;
      padding: 0px;
      .fresh-shoveler-li {
        list-style-type: none;
        .fresh-shoveler-img {
          height: 200px;
          width: 150px;
          object-fit: contain;
          cursor: pointer;
        }
      }
    }
  }
`

/**
 * 新しい商品更新コンポーネント
 * @returns {JSX.Element}
 */
const FreshShoveler = (): JSX.Element => {
  return (
    <div className={rootStyle}>
      <div className="fresh-shoveler-card">
        <h2 className="fresh-shoveler-title">
          お客様が閲覧した商品に関連する商品
        </h2>
        <ul className="fresh-shoveler-ul">
          <li className="fresh-shoveler-li">
            <span className="fresh-shoveler-span">
              <a className="fresh-shoveler-a">
                <img
                  className="fresh-shoveler-img"
                  src={CoffeeMachine2}
                  alt="お客様が閲覧した商品に関連する商品"
                />
              </a>
            </span>
          </li>
          <li className="fresh-shoveler-li">
            <span className="fresh-shoveler-span">
              <a className="fresh-shoveler-a">
                <img
                  className="fresh-shoveler-img"
                  src={Keyboard3}
                  alt="お客様が閲覧した商品に関連する商品"
                />
              </a>
            </span>
          </li>
          <li className="fresh-shoveler-li">
            <span className="fresh-shoveler-span">
              <a className="fresh-shoveler-a">
                <img
                  className="fresh-shoveler-img"
                  src={PowerBelt}
                  alt="お客様が閲覧した商品に関連する商品"
                />
              </a>
            </span>
          </li>
          <li className="fresh-shoveler-li">
            <span className="fresh-shoveler-span">
              <a className="fresh-shoveler-a">
                <img
                  className="fresh-shoveler-img"
                  src={CoffeeMachine2}
                  alt="お客様が閲覧した商品に関連する商品"
                />
              </a>
            </span>
          </li>
          <li className="fresh-shoveler-li">
            <span className="fresh-shoveler-span">
              <a className="fresh-shoveler-a">
                <img
                  className="fresh-shoveler-img"
                  src={PowerBelt}
                  alt="お客様が閲覧した商品に関連する商品"
                />
              </a>
            </span>
          </li>
          <li className="fresh-shoveler-li">
            <span className="fresh-shoveler-span">
              <a className="fresh-shoveler-a">
                <img
                  className="fresh-shoveler-img"
                  src={TrackballMouse}
                  alt="お客様が閲覧した商品に関連する商品"
                />
              </a>
            </span>
          </li>
        </ul>
      </div>
      {/* チェックした関連商品 */}
      <div className="fresh-shoveler-card">
        <h2 className="fresh-shoveler-title">
          この商品をチェックした人はこんな商品もチェックしています
        </h2>
        <ul className="fresh-shoveler-ul">
          <li className="fresh-shoveler-li">
            <span className="fresh-shoveler-span">
              <a className="fresh-shoveler-a">
                <img
                  className="fresh-shoveler-img"
                  src={CoffeeMachine}
                  alt="お客様が閲覧した商品に関連する商品"
                />
              </a>
            </span>
          </li>
          <li className="fresh-shoveler-li">
            <span className="fresh-shoveler-span">
              <a className="fresh-shoveler-a">
                <img
                  className="fresh-shoveler-img"
                  src={Keyboard3}
                  alt="お客様が閲覧した商品に関連する商品"
                />
              </a>
            </span>
          </li>
          <li className="fresh-shoveler-li">
            <span className="fresh-shoveler-span">
              <a className="fresh-shoveler-a">
                <img
                  className="fresh-shoveler-img"
                  src={Keyboard2}
                  alt="お客様が閲覧した商品に関連する商品"
                />
              </a>
            </span>
          </li>
          <li className="fresh-shoveler-li">
            <span className="fresh-shoveler-span">
              <a className="fresh-shoveler-a">
                <img
                  className="fresh-shoveler-img"
                  src={TrackballMouse}
                  alt="お客様が閲覧した商品に関連する商品"
                />
              </a>
            </span>
          </li>
          <li className="fresh-shoveler-li">
            <span className="fresh-shoveler-span">
              <a className="fresh-shoveler-a">
                <img
                  className="fresh-shoveler-img"
                  src={PowerBelt}
                  alt="お客様が閲覧した商品に関連する商品"
                />
              </a>
            </span>
          </li>
          <li className="fresh-shoveler-li">
            <span className="fresh-shoveler-span">
              <a className="fresh-shoveler-a">
                <img
                  className="fresh-shoveler-img"
                  src={Keyboard1}
                  alt="お客様が閲覧した商品に関連する商品"
                />
              </a>
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default FreshShoveler
