import React from 'react'
import style from './destination.module.css'
import Header from '../../components/Header'
import Main from './Main'
export default function Destination() {
  return (
    <div className={style.container}>
      <Header />
      <Main />
    </div>
  )
}
