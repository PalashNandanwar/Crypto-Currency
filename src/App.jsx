import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import PageCoin from './pages/PageCoin'

const App = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/coins/:id' element={<PageCoin />} />
          </Routes>
        </BrowserRouter>
      </div>

    </>
  )
}

export default App
