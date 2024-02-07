import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './signup'
import Login from './login'
import Home from './home'
import StudyMaterial from './studyMaterial/studyMaterial'
import OtpVerify from './auth/otpVerify'
import{BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
    
        <Route path='/register' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/verification' element={<OtpVerify/>}></Route>
        <Route path='/studyMaterial' element={<StudyMaterial/>}></Route>

      </Routes>
    
    </BrowserRouter>
    
  )
}

export default App
