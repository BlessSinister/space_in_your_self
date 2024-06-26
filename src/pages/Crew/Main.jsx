import React from 'react'
import style from './main_crew.module.css'
import { useResize } from '../../custom-hooks/use-resiz'
export default function Main({ data, handleClick, activeEl }) {
  const sizeScreen = useResize()
  const currentImg =
    sizeScreen.width > 375 ? data[0].images.webp : data[0].images.png
  console.log(sizeScreen.width)
  if (!data) {
    return
  }
  return (
    <main className={style.main_crew_wrapper}>
      <p className={style.subtitle}>
        <span className={style.span_decor}>02</span>
        Meet your crew
      </p>
      <div className={style.img_wrapper}>
        <img src={currentImg} alt="" className={style.img_crew} />
      </div>
      <nav>
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            opacity={activeEl === 'commander' ? '1' : '0.174363'}
            cx="5"
            cy="5"
            r="5"
            fill="white"
            id="commander"
            onClick={handleClick}
          />
        </svg>

        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            opacity={activeEl === 'mission specialist' ? '1' : '0.174363'}
            cx="5"
            cy="5"
            r="5"
            fill="white"
            id="mission specialist"
            onClick={handleClick}
          />
        </svg>
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            opacity={activeEl === 'pilot' ? '1' : '0.174363'}
            cx="5"
            cy="5"
            r="5"
            fill="white"
            id="pilot"
            onClick={handleClick}
          />
        </svg>
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            opacity={activeEl === 'flight engineer' ? '1' : '0.174363'}
            cx="5"
            cy="5"
            r="5"
            fill="white"
            id="flight engineer"
            onClick={handleClick}
          />
        </svg>
      </nav>
      <div className={style.blog_info_wrapper}>
        <p className={style.rank_team}>{data[0].role}</p>
        <h2 className={style.name_team}>{data[0].name}</h2>
        <p className={style.about_team}>{data[0].bio}</p>
      </div>
    </main>
  )
}
