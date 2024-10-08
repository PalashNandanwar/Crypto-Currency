import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </div>

    </>
  )
}

export default App
