import React from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import './otpVerify.css'



function otpVerify(){

    
    const enteredVal = [];
    const navigate = useNavigate();

    const verify = (e) =>{
        e.preventDefault();
        if(enteredVal.length === 4){
            const otp = enteredVal.join('')
            console.log(otp)
            axios.post('http://localhost:3001/verify', {otp:otp})
            .then(result => {
                console.log(result.data)
                if(result.data === 'success'){
                    navigate('/login')

                }
            })
            .catch(err=> console.log(err))


        }

        

        
    }

    function handleChange(event) {
        const form = event.target.form;
        const index = Array.prototype.indexOf.call(form, event.target);
        enteredVal[index] = event.target.value;
        
        if (index < form.elements.length - 1) {
            // Check if the parsed integer value of the input is greater than or equal to 0
            if (parseInt(event.target.value, 10) >= 0) {
                
                
                form.elements[index + 1].focus();
                event.preventDefault();
            }
        }
        
        
    }


    return(
        <div className='otp-main'>
            <div id="otpContainer" className='otpContaier'>
                <h2>OTP Verification</h2>
                <form onSubmit={verify}>
                    
                    <input className="otpInput" type="text" maxLength="1" required onChange={handleChange}/>
                    <input className="otpInput" type="text" maxLength="1" required onChange={handleChange}/>
                    <input className="otpInput" type="text" maxLength="1" required onChange={handleChange}/>
                    <input className="otpInput" type="text" maxLength="1" required onChange={handleChange}/>
                    <br/>
                    <button id="verifyButton"  >Verify OTP</button>
                    <p id="message"></p>
                </form>
                
            </div>

        </div>
        
    )
}

export default otpVerify;