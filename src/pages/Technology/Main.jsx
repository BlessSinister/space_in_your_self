import React from 'react'
import style from './main.module.css'
import img from './image-launch-vehicle-landscape.jpg'

export default function Main() {
  return (
    <main>
      <p className={style.sbutitle}>
        <span className={style.subtitle_span}>03</span>
        SPACE LAUNCH 101
      </p>
      <div className={style.img_wrapper}>
        <img src={img} alt="" />
      </div>
      <nav className={style.nav_wrapper}>
        <a href="#" className={`${style.nav_link} ${style.active_link}`}>
          1
        </a>
        <a href="#" className={style.nav_link}>
          2
        </a>
        <a href="#" className={style.nav_link}>
          3
        </a>
      </nav>
      <div className={style.description_wrapper}>
        <p className={style.description_subtitle}>THE TERMINOLOGY…</p>
        <h2 className={style.description_title}>LAUNCH VEHICLE</h2>
        <p className={style.description_content}>
          A launch vehicle or carrier rocket is a rocket-propelled vehicle used
          to carry a payload from Earth's surface to space, usually to Earth
          orbit or beyond. Our WEB-X carrier rocket is the most powerful in
          operation. Standing 150 metres tall, it's quite an awe-inspiring sight
          on the launch pad!
        </p>
      </div>
    </main>
  )
}
