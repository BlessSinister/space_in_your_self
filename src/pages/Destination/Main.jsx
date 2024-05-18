import React from 'react'
import style from './main.module.css'
import img from './image-moon.webp'
export default function Main({ data }) {
  if (data == undefined) {
    return
  }
  console.log(data[0])
  return (
    <main>
      <h2 className={style.subtitle}>
        <span className={style.planet_number}>01</span>
        Pick your destination
      </h2>
      <div className={style.img_container}>
        <img src={img} alt="" className={style.moon_img} />
      </div>
      <nav className={style.nav_bar}>
        <a href="#" className={style.nav_active}>
          {data[0].name}
        </a>
        <a href="#">MARS</a>
        <a href="#">EUROPA</a>
        <a href="#">TITAN</a>
      </nav>
      <h1 className={style.title}>MOON</h1>
      <p className={style.descritpion}>{data[0].description}</p>
      <div className={style.line_decoration}></div>
      <div className={style.avg_wrapper}>
        AVG. DISTANCE{' '}
        <span className={style.span_decoration}>{data[0].distance}</span>
      </div>
      <div className={style.avg_wrapper}>
        Est. travel time{' '}
        <span className={style.span_decoration}>{data[0].travel}</span>
      </div>
    </main>
  )
}
