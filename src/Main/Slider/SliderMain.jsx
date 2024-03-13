import React from 'react'
import Slider from 'react-slick'
import s from './SliderMain.module.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const SliderMain = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }

  return (
    <div className={s.sliderContainer} >
      <h1  id='slider' className={s.sliderDescription}>Фотогалерея</h1>
      <Slider {...settings}>
        <div >
          <img className={s.image} src='https://milocostudios.com/wp-content/themes/miloco/timthumb.php?src=https://milocostudios.com/admin/uploads/201506100820422390247201505261155492312200img_studio1_control_11.jpg&w=1600&h=900&zc=1&q=100' alt='slide-1' />
        </div>
        <div>
          <img className={s.image} src='https://milocostudios.com/wp-content/themes/miloco/timthumb.php?src=https://milocostudios.com/admin/uploads/201503231725452743391StudioAfront.jpg&w=1600&h=900&zc=1&q=100' alt='slide-2' />
        </div>
        <div>
          <img className={s.image} src='https://hssbend.com/wp-content/uploads/2018/05/music-studio_1-e1552418350765.jpg' alt='slide-3' />
        </div>
      </Slider>
    </div>
  )
}

export default SliderMain