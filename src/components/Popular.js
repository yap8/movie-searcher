import React, { useEffect } from 'react'
import Swiper from 'swiper'
import styled from 'styled-components'
import 'swiper/css/swiper.css'

const Container = styled.section`

`

const Title = styled.h1`
  text-align: center;
`

const Carousel = styled.div`
  width: 600px;
  height: 300px;
`

const Popular = () => {
  useEffect(() => {
    new Swiper('.swiper-container', {
      slidesPerView: 3,
      slidesPerGroup: 3,
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    })
  }, [])

  return (
    <Container>
      <Title>Popular Movies</Title>
      {/* <!-- Slider main container --> */}
      <Carousel className="swiper-container">
          {/* <!-- Additional required wrapper --> */}
          <div className="swiper-wrapper">
              {/* <!-- Slides --> */}
              <div className="swiper-slide">Card 1</div>
              <div className="swiper-slide">Card 2</div>
              <div className="swiper-slide">Card 3</div>
              <div className="swiper-slide">Card 4</div>
              <div className="swiper-slide">Card 5</div>
              <div className="swiper-slide">Card 6</div>
              <div className="swiper-slide">Card 7</div>
              <div className="swiper-slide">Card 8</div>
              <div className="swiper-slide">Card 9</div>
          </div>
          {/* <!-- If we need pagination --> */}
          <div className="swiper-pagination"></div>
          {/* <!-- If we need navigation buttons --> */}
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
      </Carousel>
    </Container>
  )
}

export default Popular
