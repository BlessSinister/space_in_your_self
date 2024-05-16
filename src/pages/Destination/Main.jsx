import React from 'react'
import style from './main.module.css'
import img from './image-moon.webp'
export default function Main() {
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
          MOON
        </a>
        <a href="#">MARS</a>
        <a href="#">EUROPA</a>
        <a href="#">TITAN</a>
      </nav>
      <h1 className={style.title}>MOON</h1>
      <p className={style.descritpion}>
        See our planet as you’ve never seen it before. A perfect relaxing trip
        away to help regain perspective and come back refreshed. While you’re
        there, take in some history by visiting the Luna 2 and Apollo 11 landing
        sites.
      </p>
      <div className={style.line_decoration}></div>
      <div className={style.avg_wrapper}>
        AVG. DISTANCE <span className={style.span_decoration}>384,400 km</span>
      </div>
      <div className={style.avg_wrapper}>
        Est. travel time <span className={style.span_decoration}>3 days</span>
      </div>
    </main>
  )
}
