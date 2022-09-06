// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'
import { connect } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade } from 'swiper'

import B1 from '../../assets/img/banner/b1.jpg'
import B2 from '../../assets/img/banner/b2.jpg'
import B3 from '../../assets/img/banner/b3.jpg'
import B4 from '../../assets/img/banner/b4.jpg'
import B5 from '../../assets/img/banner/b5.jpg'
import B6 from '../../assets/img/banner/b6.jpg'
import B7 from '../../assets/img/banner/b7.jpg'
import B8 from '../../assets/img/banner/b8.jpg'
import B9 from '../../assets/img/banner/b9.jpg'
import B10 from '../../assets/img/banner/b10.jpg'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-fade'

import './style/index.scss'
import { useEffect, useState } from 'react'

function EliSwiper(props) {
  const bannerImgs = [
    {
      url: B1,
      alt: 'b1'
    },
    {
      url: B2,
      alt: 'b2'
    },
    {
      url: B3,
      alt: 'b3'
    },
    {
      url: B4,
      alt: 'b4'
    },
    {
      url: B5,
      alt: 'b5'
    },
    {
      url: B6,
      alt: 'b6'
    },
    {
      url: B7,
      alt: 'b7'
    },
    {
      url: B8,
      alt: 'b8'
    },
    {
      url: B9,
      alt: 'b9'
    },
    {
      url: B10,
      alt: 'b10'
    }
  ]
  function getImageColor(img) {
    if (!img) return
    const currentSrc = img.currentSrc || img.src
    console.log(currentSrc,{ img })
    const newImg = new Image()
    newImg.src = currentSrc
    newImg.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = 730
      canvas.height = 285
      const context = canvas.getContext('2d')
      newImg.crossOrigin = 'Anonymous'
      context.drawImage(newImg, 0, 0, 730, 285)

      // 获取像素数据
      const pixelData = context.getImageData(0, 0, 730, 285).data
      const bgcolor = `rgba(${pixelData[0]},${pixelData[1]},${pixelData[2]},${pixelData[3]})`
      // eslint-disable-next-line react/prop-types
      props.changeBgColor(bgcolor)
    }
  }
  const [refresh, setRefresh] = useState(0)
  useEffect(() => {
    const imgParent = document.getElementsByClassName('swiper-slide-active')
    const img = imgParent[0]?.firstChild
    console.log(img)
    getImageColor(img)
  }, [refresh])
  const handleSideChange = () => {
    setRefresh(Date.now)
  }

  return (
    <div style={{ flexGrow: 1, maxWidth: '5840px' }}>
      <Swiper
        // install Swiper modules
        modules={[Pagination, Scrollbar, A11y, EffectFade, Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        loop={true}
        effect={'fade'}
        // navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: true
        }}
        // scrollbar={{ draggable: true }}
        onSlideChange={() => handleSideChange()}

      >
        {
          bannerImgs.map((item) => {
            return (<SwiperSlide key={item.url} >
              <img src={item.url} alt={item.alt} style={{ width: '730px', height: '285px' }} />
            </SwiperSlide>)
          })
        }

      </Swiper>
    </div>

  )
}
const mapStateToProps = ({ bgColorReducer: { bgcolor } }) => ({ bgcolor })
const mapDispatchToProps = {
  changeBgColor(val) {
    return {
      type: 'change-bgcolor',
      payload: val
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(EliSwiper)
