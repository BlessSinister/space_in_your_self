import React from 'react'
import style from './main.module.css'
import img_dug from './image-douglas-hurley.webp'
export default function Main({ data }) {
  console.log(data)
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
        <img src={data[0].images.png} alt="" />
      </div>
      <nav>
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="5" cy="5" r="5" fill="white" />
        </svg>
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle opacity="0.174363" cx="5" cy="5" r="5" fill="white" />
        </svg>
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle opacity="0.174363" cx="5" cy="5" r="5" fill="white" />
        </svg>
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle opacity="0.174363" cx="5" cy="5" r="5" fill="white" />
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
