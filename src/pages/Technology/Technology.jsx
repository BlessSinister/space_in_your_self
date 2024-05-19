import React from 'react'
import style from './technology.module.css'
import Header from '../../components/Header'
import Main from './Main'
import { useSelector } from 'react-redux'

export default function Technology() {
  const data = useSelector((state) => state.getData.technology)
  return (
    <div className={style.container}>
      <Header />
      <Main data={data} />
    </div>
  )
}
