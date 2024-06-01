import React from 'react'
import style from './main.module.css'
import { Link } from 'react-router-dom'
import { useResize } from '../../custom-hooks/use-resiz'
export default function Main() {
  const sizeScreen = useResize()

  return (
    <>
      <div className={style.decro_1440_view_container}>
        <section className={style.main_container}>
          <p className={style.subtitle}>SO, YOU WANT TO TRAVEL TO</p>
          <h1 className={style.main_title}>SPACE</h1>
          <p className={style.description}>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </section>
        <Link to="/destination" style={{ textDecoration: 'none' }}>
          <div className={style.explore}>Explore</div>
        </Link>
      </div>
    </>
  )
}
