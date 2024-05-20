import React from 'react'
import style from './destination.module.css'
import Header from '../../components/Header'
import Main from './Main'
import { useDispatch, useSelector } from 'react-redux'
import { filterDestinaton, setActive } from '../../store/destinationSlice'

export default function Destination() {
  const data = useSelector((state) => state.getData.destinations)
  const data1 = useSelector((state) => state.currentPlanet)
  const activeEl = useSelector((state) => state.activeDest)
  const dispatch = useDispatch()

  const handleClick = (e) => {
    dispatch(filterDestinaton([data, e.target.id]))
    dispatch(setActive(e.target.id))
  }

  return (
    <div className={style.container}>
      <Header />
      <Main data={data1} handleClick={handleClick} activeEl={activeEl} />
    </div>
  )
}
