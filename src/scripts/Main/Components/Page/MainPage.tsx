import { css } from '@emotion/css'
import NewHeader from '../../../Tops/Components/Organisms/NewHeader '
import FatherDaySale from '../../../assets/images/FatherDaySale.jpg'
import TrackballMouse from '../../../assets/images/TrackballMouse.jpg'
import Keyboard1 from '../../../assets/images/Keyboard1.jpg'
import Keyboard2 from '../../../assets/images/Keyboard2.jpg'
import Mouse1 from '../../../assets/images/Mouse1.jpg'
import Keyboard3 from '../../../assets/images/Keyboard3.jpg'
import CoffeeMachine from '../../../assets/images/CoffeeMachine.jpg'
import CoffeeMachine2 from '../../../assets/images/CoffeeMachine2.jpg'
import PowerBelt from '../../../assets/images/PowerBelt.jpg'
import NextButtonSvg from '../../../Cores/Svgs/Icons/NextButtonSvg'
import PreviousButtonSvg from '../../../Cores/Svgs/Icons/PreviousButtonSvg '
import classNames from 'classnames'

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
  .card-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;

    .card-area {
      height: 450px;
      width: 400px;
      border: 1px solid #ebebeb;
      margin-top: 20px;

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
          &.re-buy-card-a {
            background: rgba(0, 0, 0, 0.03);
          }
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
            .card-title-txt {
              padding: 5px 7px;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
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
    }
  }
`

/**
 * メイン画面
 */
const MainPage = (): JSX.Element => {
  return (
    <div className={rootStyle}>
      {/* ヘッダー */}
      <NewHeader />
      {/* スライドコンテンツ */}
      <div>
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
      <div className="card-container">
        {/* セール商品 */}
        <div className="card-area">
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
        {/* 閲覧履歴のおすすめ */}
        <div className="card-area">
          <h2 className="card-title">閲覧履歴に基づくおすすめ商品</h2>
          <div className="card-body">
            <a className="card-a">
              <img
                className="card-image"
                src={Keyboard3}
                alt="閲覧履歴に基づくおすすめ商品"
              />
              <div className="card-product">
                <span className="card-title-txt">
                  HHKB Professional HYBRID Type-S
                  英語配列／雪、無刻印キートップセット
                </span>
              </div>
            </a>
            <a className="card-a">
              <img
                className="card-image"
                src={CoffeeMachine}
                alt="閲覧履歴に基づくおすすめ商品"
              />
              <div className="card-product">
                <span className="card-title-txt">
                  ネスカフェ ゴールドブレンド バリスタアイ レッド SPM9635-R
                </span>
              </div>
            </a>
            <a className="card-a">
              <img
                className="card-image"
                src={PowerBelt}
                alt="閲覧履歴に基づくおすすめ商品"
              />
              <div className="card-product">
                <span className="card-title-txt">
                  ウェイトリフティングベルト レザー メンズ ジムベルト
                  レバーバックル トレーニングベルト バックサポート
                  パワーリフティング 筋力トレーニング スクワット デッドリフト
                  (Color : Green, Size : 70-80cm)
                </span>
              </div>
            </a>
            <a className="card-a">
              <img
                className="card-image"
                src={CoffeeMachine2}
                alt="閲覧履歴に基づくおすすめ商品"
              />
              <div className="card-product">
                <span className="card-title-txt">
                  シロカ 全自動コーヒーメーカー アイスコーヒー対応 静音
                  コンパクト ミル2段階 豆/粉両対応 蒸らし ガラスサーバー SC-A211
                  ステンレスシルバー
                </span>
              </div>
            </a>
          </div>
        </div>
        {/* 再び購入商品 */}
        <div className="card-area">
          <h2 className="card-title">再び購入</h2>
          <div className="card-body">
            <a className="card-a re-buy-card-a">
              <img className="card-image" src={Keyboard3} alt="再び購入商品" />
            </a>
            <a className="card-a re-buy-card-a">
              <img
                className="card-image"
                src={CoffeeMachine}
                alt="再び購入商品"
              />
            </a>
            <a className="card-a re-buy-card-a">
              <img className="card-image" src={PowerBelt} alt="再び購入商品" />
            </a>
            <a className={classNames('card-a', 're-buy-card-a')}>
              <img
                className="card-image"
                src={CoffeeMachine2}
                alt="再び購入商品"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPage
