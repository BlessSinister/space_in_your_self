import React from 'react'
import style from './main.module.css'

export default function Main({ data, handleClick, activeEl }) {
  if (data === undefined) {
    return
  }
  console.log(activeEl)
  return (
    <main>
      <h2 className={style.subtitle}>
        <span className={style.planet_number}>01</span>
        Pick your destination
      </h2>
      <div className={style.img_container}>
        <img src={data[0].images.png} alt="" className={style.moon_img} />
      </div>
      <nav className={style.nav_bar}>
        <a
          href="#"
          onClick={handleClick}
          className={activeEl === 'moon' ? style.nav_active : ''}
          id="moon"
        >
          MOON
        </a>
        <a
          href="#"
          onClick={handleClick}
          id="mars"
          className={activeEl === 'mars' ? style.nav_active : ''}
        >
          MARS
        </a>
        <a
          href="#"
          onClick={handleClick}
          id="europa"
          className={activeEl === 'europa' ? style.nav_active : ''}
        >
          EUROPA
        </a>
        <a
          href="#"
          onClick={handleClick}
          id="titan"
          className={activeEl === 'titan' ? style.nav_active : ''}
        >
          TITAN
        </a>
      </nav>
      <h1 className={style.title}>{data[0].name.toUpperCase()}</h1>
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
