import React from 'react'
import style from './home.module.css'
import Header from '../../components/Header'
import Main from './Main'

export default function Home() {
  return (
    <div className={style.container}>
      <Header />
      <Main />
    </div>
  )
}
