import React from 'react'
import{ useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './login.css'


function Login(){

    const navigate = useNavigate()
    const[emailId, setEmailId] = useState()
    const[password, setPassword] = useState()

    const handleSubmit = (e) =>{
        e.preventDefault()
        
        axios.post('http://localhost:3001/login', {emailId, password})
        .then(result => {
            console.log(result)
            if(result.data === 'success'){
                navigate('/home')
            }
            
        })
        .catch(err=> console.log(err))
    }

    return(
        <div className="login-container">
            <h2>Login✌️</h2>
            <form onSubmit={handleSubmit}>
                
                <label htmlFor="username" >Username:</label>
                <input type="text" id="username" name="username" onChange={(e)=> setEmailId(e.target.value)} required/>
                
                <br/>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" onChange={(e)=> setPassword(e.target.value)} required/>
                

                <button type="submit">Login</button>
            </form>
        </div>
    )

}

export default Login 

