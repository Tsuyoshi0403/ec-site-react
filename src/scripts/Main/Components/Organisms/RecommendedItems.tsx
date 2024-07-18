import { css } from '@emotion/css'
import Keyboard3 from '../../../assets/images/Keyboard3.jpg'
import CoffeeMachine from '../../../assets/images/CoffeeMachine.jpg'
import CoffeeMachine2 from '../../../assets/images/CoffeeMachine2.jpg'
import PowerBelt from '../../../assets/images/PowerBelt.jpg'

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
        .card-title-txt {
          padding: 5px 7px;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          font-size: 12px;
          font-weight: 600;
        }
      }
    }
  }
`
/**
 * 閲覧履歴のおすすめコンポーネント
 * @returns {JSX.Element}
 */
const RecommendedItems = (): JSX.Element => {
  return (
    <div className={rootStyle}>
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
              ウェイトリフティングベルト レザー メンズ ジムベルト レバーバックル
              トレーニングベルト バックサポート パワーリフティング
              筋力トレーニング スクワット デッドリフト (Color : Green, Size :
              70-80cm)
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
              シロカ 全自動コーヒーメーカー アイスコーヒー対応 静音 コンパクト
              ミル2段階 豆/粉両対応 蒸らし ガラスサーバー SC-A211
              ステンレスシルバー
            </span>
          </div>
        </a>
      </div>
    </div>
  )
}

export default RecommendedItems
