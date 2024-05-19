import React from 'react'
import style from './crew.module.css'
import Header from '../../components/Header'
import Main from './Main'
import { useSelector } from 'react-redux'
export default function Crew() {
  const data = useSelector((state) => state.getData.crew)
  return (
    <div className={style.container}>
      <Header />
      <Main data={data} />
    </div>
  )
}
