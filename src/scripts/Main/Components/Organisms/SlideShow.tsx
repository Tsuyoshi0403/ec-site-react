import { css } from '@emotion/css'
import { Navigation, Pagination } from 'swiper/modules'
import FatherDaySale from '../../../assets/images/FatherDaySale.jpg'
import SlideShow1 from '../../../assets/images/SlideShow.jpg'
import SlideShow2 from '../../../assets/images/SlideShow2.jpg'
import SlideShow3 from '../../../assets/images/SlideShow3.jpg'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const rootStyle = css`
  position: relative;
  .slideshow-item-image {
    max-height: 100%;
    max-width: 100%;
    height: 300px;
    width: 2000px;
  }
  .swiper-button-prev {
    left: 60px;
    color: #0d0d0d;
    --swiper-navigation-size: 30px;
    font-weight: 1000;
    width: 65px;
    height: 65px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 50px;
  }
  .swiper-button-next {
    right: 60px;
    color: #0d0d0d;
    --swiper-navigation-size: 30px;
    font-weight: 1000;
    width: 65px;
    height: 65px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 50px;
  }
`

/**
 * スライドショーコンポーネント
 * @returns {JSX.Element}
 */
const SlideShow = (): JSX.Element => {
  return (
    <div className={rootStyle}>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          prevEl: '#button-prev',
          nextEl: '#button-next',
        }}
      >
        <SwiperSlide>
          <img
            className="slideshow-item-image"
            src={FatherDaySale}
            alt="キャンペーン"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="slideshow-item-image"
            src={SlideShow1}
            alt="キャンペーン"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="slideshow-item-image"
            src={SlideShow2}
            alt="キャンペーン"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="slideshow-item-image"
            src={SlideShow3}
            alt="キャンペーン"
          />
        </SwiperSlide>
      </Swiper>
      <div id="button-prev" className="swiper-button-prev"></div>
      <div id="button-next" className="swiper-button-next"></div>
    </div>
  )
}

export default SlideShow
