import React from 'react'
import style from './main.module.css'
import { useResize } from '../../custom-hooks/use-resiz'
// import img from './assets/image-launch-vehicle-landscape.jpg'

export default function Main({ data, handleClick, activeEl }) {
  const sizeScreen = useResize()
  const sizeScreenImg =
    sizeScreen.width < 1440 ? data[0].images.landscape : data[0].images.portrait
  if (!data) {
    return
  }

  return (
    <main>
      <p className={style.sbutitle}>
        <span className={style.subtitle_span}>03</span>
        SPACE LAUNCH 101
      </p>
      <div className={style.img_wrapper}>
        <img src={sizeScreenImg} alt="" />
      </div>
      <nav className={style.nav_wrapper}>
        <a
          href="#"
          className={`${style.nav_link} ${
            activeEl === 'launch vehicle' ? style.active_link : ''
          }`}
          id="launch vehicle"
          onClick={handleClick}
        >
          1
        </a>
        <a
          href="#"
          className={`${style.nav_link} ${
            activeEl === 'spaceport' ? style.active_link : ''
          }`}
          id="spaceport"
          onClick={handleClick}
        >
          2
        </a>
        <a
          href="#"
          className={`${style.nav_link} ${
            activeEl === 'space capsule' ? style.active_link : ''
          }`}
          id="space capsule"
          onClick={handleClick}
        >
          3
        </a>
      </nav>
      <div className={style.description_wrapper}>
        <p className={style.description_subtitle}>THE TERMINOLOGY…</p>
        <h2 className={style.description_title}>{data[0].name}</h2>
        <p className={style.description_content}>{data[0].description}</p>
      </div>
    </main>
  )
}
