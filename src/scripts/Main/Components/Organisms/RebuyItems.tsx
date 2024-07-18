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
    &.re-buy-card-body {
      gap: 40px;
    }
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
    }
  }
`

/**
 * 再び購入商品コンポーネント
 * @returns {JSX.Element}
 */
const RebuyItems = (): JSX.Element => {
  return (
    <div className={rootStyle}>
      <h2 className="card-title">再び購入</h2>
      <div className={'card-body re-buy-card-body'}>
        <a className="card-a re-buy-card-a">
          <img className="card-image" src={Keyboard3} alt="再び購入商品" />
        </a>
        <a className="card-a re-buy-card-a">
          <img className="card-image" src={CoffeeMachine} alt="再び購入商品" />
        </a>
        <a className="card-a re-buy-card-a">
          <img className="card-image" src={PowerBelt} alt="再び購入商品" />
        </a>
        <a className={'card-a re-buy-card-a'}>
          <img className="card-image" src={CoffeeMachine2} alt="再び購入商品" />
        </a>
      </div>
    </div>
  )
}

export default RebuyItems
