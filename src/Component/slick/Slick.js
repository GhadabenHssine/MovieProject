import React, { useState } from 'react'
import style from "./slick.module.css"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const SlickS = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    lazyLoad: false,
    slidesToScroll: 1,
    initialSlide: 1,
    appendDots: dots => (
      <div
        style={{
          backgroundColor: "transparant",
          bottom: '-40px'
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: 10,
          background: "rgb(150,20, 20)",
          height: 10,

          borderRadius: '50%',

        }}
      >
        {/* {i + 1} */}
      </div>
    )
  };

  return (

    <div className={style.blocslick} >


      <Slider {...settings}>


        <div>
          <div >
            <img src="https://cdn1.webmanagercenter.com/tekiano/wp-content/uploads/2022/10/film-kadar-affiche.jpg" alt="" className={style.imginvestor} />
          </div>
        </div>

        <div >
          <div >
            <img src="https://fr.web.img6.acsta.net/pictures/22/12/02/16/03/2536613.jpg" alt="" className={style.imginvestor} />
          </div>
        </div>

        <div>
          <div >
            <img src="https://fr.web.img5.acsta.net/pictures/15/11/13/17/11/538881.jpg" alt="" className={style.imginvestor} />
          </div>
        </div>
        <div >
          <div >
            <img src="https://flxt.tmsimg.com/assets/p162876_p_v8_ab.jpg" alt="" className={style.imginvestor} />
          </div>
        </div>

        <div >
          <div >
            <img src="https://www.enmodebasque.com/wp-content/uploads/2022/02/a-37.jpeg" alt="" className={style.imginvestor} />
          </div>
        </div>
        <div >
          <div >
            <img src="https://m.media-amazon.com/images/M/MV5BMTc0YzA4YjQtZGZkMi00ZmRjLWFmM2ItMDcxZTYzZGU3ZTI1XkEyXkFqcGdeQXVyNDQ2MTMzODA@._V1_.jpg" alt="" className={style.imginvestor} />
          </div>
        </div>

        <div >
          <div >
            <img src="https://lumiere-a.akamaihd.net/v1/images/image_ab4b216d.jpeg?region=0,0,540,810&width=480" alt="" className={style.imginvestor} />
          </div>
        </div>

        <div >
          <div >
            <img src="https://img4.cdn.cinoche.com/images/2ce27edf61110ec7c1879771dc6e46eb.jpg" alt="" className={style.imginvestor} />
          </div>
        </div>

        <div >
          <div >
            <img src="https://resize.elle.fr/portrait/var/plain_site/storage/images/loisirs/cinema/news/5-bonnes-raisons/us-le-nouveau-film-de-jordan-peele-va-vous-plonger-dans-l-horreur-3783413/90369318-1-fre-FR/Us-le-nouveau-film-de-Jordan-Peele-va-vous-plonger-dans-l-horreur.jpg" alt="" className={style.imginvestor} />
          </div>
        </div>
        <div >
          <div >
            <img src="https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg" alt="" className={style.imginvestor} />
          </div>
        </div>
        <div >
          <div >
            <img src="https://c8.alamy.com/compfr/2k4tmh0/titanic-1997-affiche-du-film-titanic-2k4tmh0.jpg" alt="" className={style.imginvestor} />
          </div>
        </div>
      </Slider>


    </div >

  )
}

export default SlickS
