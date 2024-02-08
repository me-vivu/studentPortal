import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './signup'
import Login from './login'
import Home from './home/home'
import OtpVerify from './auth/otpVerify'
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import Career from './career/career'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
    
        <Route path='/register' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/verification' element={<OtpVerify/>}></Route>
        <Route path='/studyMaterial' element={<StudyMaterial/>}></Route>
        <Route path='/projects' element={<Project/>}></Route>
        <Route path='/post' element={<Post/>}></Route>
        <Route path='/career' element={<Career/>}></Route>

      </Routes>
    
    </BrowserRouter>
    
  )
}

export default App
