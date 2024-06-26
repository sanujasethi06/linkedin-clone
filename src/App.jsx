
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Login from './components/Login'
import Home from './components/Home'

function App() {
  

  return (
    <>
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Login />} />
            <Route path='/home' element={<Home />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
