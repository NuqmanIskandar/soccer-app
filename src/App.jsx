import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Start from './pages/start/Start'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/start' element={<Start/>}/>
      </Routes>
    </Router>
  )
}

export default App
