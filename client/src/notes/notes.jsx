
import './notes.css'
import axios from 'axios';
import React, { useState, useEffect } from 'react';


function Notes() {

  const[branch, setBranch] = useState(null);
  const[semester, setSemester] = useState(null);
  const [branchList, setBranchList] = useState([]);

  function getData(){
    console.log(branch, semester);
    console.log(branchList);
    if(branch && semester){

      axios.get('http://localhost:3001/get-data/'+ branch +'/' + semester) // Corrected URL
      .then(response => {
        console.log(response.data)
        setBranchList(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
          });
      }

    }

  const handleChangeBranch = async (e)=>{
    const  value = e.target.value;
    setBranch(value);
  }
  const handleChangeSemester = async (e)=>{
    const  value = e.target.value;
    setSemester(value);
    getData();

  }

  
    



  

    


    
    return (
        <div>
            <div id="firstyear" className="firstyear" >
                <div id="PhysicsCycle" className="PhysicsCycle" >
                <h5>Physics  Cycle:</h5> 
                <div class="container1">

                  <div class="item">
                    <a href="https://drive.google.com/drive/folders/1T0_NEyH9F_Z8oMLcsrxOeFyZ83AnQnuY?usp=sharing">
                    <p>MA101</p>
                    </a>
                  </div>

                  <div class="item">
                    <a href="#">
                    <p>HS151</p>
                    </a>
                  </div>

                  <div class="item">
                    <a href="https://drive.google.com/drive/folders/1oqoXrtakMxkjR9lWkQM2ZaDYiX446vM4?usp=sharing">
                    <p>PH101</p>
                    </a>
                  </div>

                  <div class="item">
                    <a href="https://drive.google.com/drive/folders/1DIRtWbzZqKu7I2DGuHVvAUAk77mewCyF?usp=sharing">
                    <p>EC101</p>
                    </a>
                  </div>

                  <div class="item">
                    <a href="https://drive.google.com/drive/folders/1KpENY8bKn50qoyHkJDUNROd3gomr4jFu?usp=sharing">
                    <p>CE102</p>
                    </a>
                  </div>
                  
                  <div class="item">
                    <a href="https://drive.google.com/drive/folders/1DIRtWbzZqKu7I2DGuHVvAUAk77mewCyF?usp=sharing">
                    <p>CS101</p>
                    </a>
                  </div>

                  <div class="item">
                    <a href="https://drive.google.com/drive/folders/1DIRtWbzZqKu7I2DGuHVvAUAk77mewCyF?usp=sharing">
                    <p>CS102</p>
                    </a>
                  </div>

                  <div class="item">
                    <a href="https://drive.google.com/drive/folders/1Ii5QsxBIOUweMXbohS8k04lnqJvYDR7B?usp=sharing">
                    <p>PH102</p>
                    </a>
                  </div>

                </div>
                </div>
                <div id="chemistryCycle" className="chemistryCycle" >
                <h4>Chemistry  Cycle:</h4> 
                <div class="container1">
                  <div class="item">
                    <a href="https://drive.google.com/drive/folders/1T0_NEyH9F_Z8oMLcsrxOeFyZ83AnQnuY?usp=sharing">
                    <p>MA151</p>
                    </a>
                  </div>

                  <div class="item">
                    <a href="https://drive.google.com/drive/folders/18wIJzbGlMK4fKYhEAtx4FQn_FyIbAVla?usp=sharing">
                    <p>ME102</p>
                    </a>
                  </div>

                  <div class="item">
                    <a href="https://drive.google.com/drive/folders/1UZcG8c3qebCjxHNMBv_JZFWT26I03iJm?usp=drive_link">
                    <p>CY101</p>
                    </a>
                  </div>

                  <div class="item">
                    <a href="https://drive.google.com/drive/folders/1F6kKR0Lv7O56sn89Hcm_Sl-y4jHCM_yc?usp=sharing">
                    <p>EE101</p>
                    </a>
                  </div>

                  <div class="item">
                    <a href="https://drive.google.com/drive/folders/1tB-Pn3T8Gu4wwL05AiHYcYYVbcyOSGXY?usp=drive_link">
                    <p>BT101</p>
                    </a>
                  </div>

                  <div class="item">
                    <a href="https://drive.google.com/drive/folders/1OaElo8HLWgRPZHLldlY2JyIGHcWHlzbQ?usp=sharing">
                    <p>ME101</p>
                    </a>
                  </div>

                  <div class="item">
                    <a href="https://drive.google.com/drive/folders/1l7OtBn3Da2GbvUJtsDy-BhTyN9_mSlp-?usp=drive_link">
                    <p>CE101</p>
                    </a>
                  </div>

                  <div class="item">
                    <a href="https://drive.google.com/drive/folders/12Zfk8frtOtRmikv62mrcptcytTeF3kP_?usp=sharing">
                    <p>ME103</p>
                    </a>
                  </div>

                  <div class="item">
                    <a href="https://drive.google.com/drive/folders/1UDH2QUn8QEZNuUzAxcfLV_Tp2uowt9Xt?usp=sharing">
                    <p>CY102</p>
                    </a>
                  </div>

                </div>
                </div>
                
            </div>
            <div id ="container" className='container'>
                <div className ="note" id="note">
                        <label>Select Branch:</label>
                        <select id="branch" className="branch"onChange={handleChangeBranch}>
                            <option value="Computer Science">Computer Science</option>
                            <option value="Electronics and Communication Engineering">Electronics and Communication Engineering</option>
                            <option value="Electrical Engineering">Electrical Engineering</option>
                            <option value="Civil Engineering">Civil Engineering</option>
                            <option value="Mechanical Engineering">Mechanical Engineering</option>  
                            <option value="Chemical Engineering">Chemical Engineering</option>
                            <option value="Biotechnology">Biotechnology </option>
                            <option value="Metallurgical & Material Engineering">Metallurgical & Material Engineering</option>
                            

                        </select>
                </div>
                

                <div className ="note" >
                    <label >Select Semester:</label>
                    <select id="semester" className="semester" onChange={handleChangeSemester}>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                    </select>
                </div>
            </div>
      <div>
      <h1>Branch List</h1>
      <ul>
        {branchList.map(branch => (
          <li key={branch._id}>{branch.subject}: {branch.title}</li>
        ))}
      </ul>
    </div>
            
        </div>

    );

}

export default Notes;
