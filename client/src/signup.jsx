import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import background from "./assets/background.jpg"
import './signup.css'



function Signup() {

    const[firstName, setfName] = useState()
    const[lastName, setlName] = useState()
    const[emailId, setEmail] = useState()
    const[password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:3001/register', {firstName,lastName, emailId, password})
        .then(result => {console.log(result)
        navigate('/login')
        })
        .catch(err=> console.log(err))

    }
    


    return(
        <div className="signup-main">
            <img src={background} className="signup-img"/>
            <div className="register-container">
                <h2>Register</h2>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" id="firstName" name="firstName"  onChange={(e) => setfName(e.target.value)} required />

                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" id="lastName" name="lastName" onChange={(e) => setlName(e.target.value)} required />

                    <label htmlFor="emailId">Email:</label>
                    <input type="email" id="emailId" name="emailId" onChange={(e) => setEmail(e.target.value)} required />

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} required />


                    <button type="submit">Register</button>
                </form>
            

            </div>
        </div>
    )

}


export default Signup