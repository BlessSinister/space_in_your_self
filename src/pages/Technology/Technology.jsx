import React from 'react'
import style from './technology.module.css'
import Header from '../../components/Header'
import Main from './Main'

export default function Technology() {
  return (
    <div className={style.container}>
      <Header />
      <Main />
    </div>
  )
}
