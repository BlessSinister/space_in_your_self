import Destination from './pages/Destination/Destination'
import Home from './pages/Home/Home'
import Crew from './pages/Crew/Crew'
import Technology from './pages/Technology/Technology'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { data } from './data'
import { getData } from './store/dataSlice'
import { Routes, Route } from 'react-router-dom'
import Notfound from './pages/Notfound/Notfound'
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getData(data))
  }, [])
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  )
}

export default App
