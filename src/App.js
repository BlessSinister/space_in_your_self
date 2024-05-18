import Destination from './pages/Destination/Destination'
import Home from './pages/Home/Home'
import Crew from './pages/Crew/Crew'
import Technology from './pages/Technology/Technology'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { data } from './data'
import { getData } from './store/dataSlice'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getData(data))
  }, [])
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <Destination /> */}
      <Crew />
      {/* <Technology /> */}
    </div>
  )
}

export default App
