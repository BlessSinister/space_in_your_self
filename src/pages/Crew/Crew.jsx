import React from 'react'
import style from './crew.module.css'
import Header from '../../components/Header'
import Main from './Main'
export default function Crew() {
  return (
    <div className={style.container}>
      <Header />
      <Main />
    </div>
  )
}
