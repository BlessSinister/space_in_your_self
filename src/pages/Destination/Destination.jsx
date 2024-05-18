import React from 'react'
import style from './destination.module.css'
import Header from '../../components/Header'
import Main from './Main'
import { useSelector } from 'react-redux'
export default function Destination() {
  const data = useSelector((state) => state.getData.destinations)

  return (
    <div className={style.container}>
      <Header />
      <Main data={data} />
    </div>
  )
}
