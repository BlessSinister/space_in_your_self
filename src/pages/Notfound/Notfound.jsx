import React from 'react'
import style from './notfound.module.css'
import Header from '../../components/Header'

export default function Notfound() {
  return (
    <>
      <div className={style.container}>
        <Header />
        404
      </div>
    </>
  )
}
