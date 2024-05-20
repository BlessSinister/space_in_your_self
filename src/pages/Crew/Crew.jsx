import React from 'react'
import style from './crew.module.css'
import Header from '../../components/Header'
import Main from './Main'
import { useDispatch, useSelector } from 'react-redux'
import { filterCrew } from '../../store/crewSlice'
export default function Crew() {
  const data = useSelector((state) => state.getData.crew)
  const currentCrewMember = useSelector((state) => state.currentCrew)
  const dispatch = useDispatch()
  const handleClick = (e) => {
    console.log(e.target)
    dispatch(filterCrew([data, e.target.id]))
  }

  return (
    <div className={style.container}>
      <Header />
      <Main data={currentCrewMember} handleClick={handleClick} />
    </div>
  )
}
