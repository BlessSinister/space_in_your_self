import React from 'react'
import style from './technology.module.css'
import Header from '../../components/Header'
import Main from './Main'
import { useDispatch, useSelector } from 'react-redux'
import { filterTech } from '../../store/techSlice'

export default function Technology() {
  const data = useSelector((state) => state.getData.technology)
  const dispatch = useDispatch()
  const currentTech = useSelector((state) => state.currentTech)

  const handleClick = (e) => {
    dispatch(filterTech([data, e.target.id]))
  }

  return (
    <div className={style.container}>
      <Header />
      <Main data={currentTech} handleClick={handleClick} />
    </div>
  )
}
