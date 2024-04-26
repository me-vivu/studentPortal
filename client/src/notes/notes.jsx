
import './notes.css'
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Navigation from '../home/navigation/nav';

function Notes() {

  const[branch, setBranch] = useState("");
  const[semester, setSemester] = useState("");
  const [branchList, setBranchList] = useState([]);

  function getData({semester, branch}){
    console.log(branch, semester);
    console.log("Here:",branchList);
    if(branch && semester){

      axios.get('http://localhost:5001/get-data/'+ branch +'/' + semester) // Corrected URL
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
    getData({semester:semester, branch: value});
  }
  const handleChangeSemester = async (e)=>{
    const  value = e.target.value;
    setSemester(value);
    getData({semester:value, branch: branch});

  }

  useEffect (()=>{
    getData({semester, branch});
  },[])

    
    return (
        <div className="main">
          <div className='notes-nav'>
            <Navigation/>
          </div>
          <div className='others'>
          <div id="firstyear" className="firstyear" >
                <div id="PhysicsCycle" className="PhysicsCycle" >
                <h4>Physics  Cycle:</h4> 
                <div class="container1">

                  <div class="item">
                    <a href="https://drive.google.com/drive/folders/1T0_NEyH9F_Z8oMLcsrxOeFyZ83AnQnuY?usp=sharing" target="_blank">
                    <p>MA101</p>
                    </a>
                  </div>

                  <div class="item">
                    <a href="#">
                    <p>HS151</p>
                    </a>
                  </div>

                  <div class="item">
                    <a href="https://drive.google.com/drive/folders/1oqoXrtakMxkjR9lWkQM2ZaDYiX446vM4?usp=sharing" target="_blank">
                    <p>PH101</p>
                    </a>
                  </div>

                  <div class="item">
                    <a href="https://drive.google.com/drive/folders/1DIRtWbzZqKu7I2DGuHVvAUAk77mewCyF?usp=sharing" target="_blank">
                    <p>EC101</p>
                    </a>
                  </div>

                  <div class="item">
                    <a href="https://drive.google.com/drive/folders/1KpENY8bKn50qoyHkJDUNROd3gomr4jFu?usp=sharing" target="_blank">
                    <p>CE102</p>
                    </a>
                  </div>
                  
                  <div class="item">
                    <a href="https://drive.google.com/drive/folders/1DIRtWbzZqKu7I2DGuHVvAUAk77mewCyF?usp=sharing" target="_blank">
                    <p>CS101</p>
                    </a>
                  </div>

                  <div class="item">
                    <a href="https://drive.google.com/drive/folders/1DIRtWbzZqKu7I2DGuHVvAUAk77mewCyF?usp=sharing" target="_blank">
                    <p>CS102</p>
                    </a>
                  </div>

                  <div class="item">
                    <a href="https://drive.google.com/drive/folders/1Ii5QsxBIOUweMXbohS8k04lnqJvYDR7B?usp=sharing" target="_blank">
                    <p>PH102</p>
                    </a>
                  </div>

                </div>
                </div>
                <div id="chemistryCycle" className="chemistryCycle" >
                <h4>Chemistry  Cycle:</h4> 
                <div class="container1">
                  <div class="item">
                    <a href="https://drive.google.com/drive/folders/1T0_NEyH9F_Z8oMLcsrxOeFyZ83AnQnuY?usp=sharing" target="_blank">
                    <p>MA151</p>
                    </a>
                  </div>

                  <div class="item">
                    <a href="https://drive.google.com/drive/folders/18wIJzbGlMK4fKYhEAtx4FQn_FyIbAVla?usp=sharing" target="_blank">
                    <p>ME102</p>
                    </a>
                  </div>

                  <div class="item">
                    <a href="https://drive.google.com/drive/folders/1UZcG8c3qebCjxHNMBv_JZFWT26I03iJm?usp=drive_link" target="_blank">
                    <p>CY101</p>
                    </a>
                  </div>

                  <div class="item">
                    <a href="https://drive.google.com/drive/folders/1F6kKR0Lv7O56sn89Hcm_Sl-y4jHCM_yc?usp=sharing" target="_blank">
                    <p>EE101</p>
                    </a>
                  </div>

                  <div class="item">
                    <a href="https://drive.google.com/drive/folders/1tB-Pn3T8Gu4wwL05AiHYcYYVbcyOSGXY?usp=drive_link" target="_blank">
                    <p>BT101</p>
                    </a>
                  </div>

                  <div class="item">
                    <a href="https://drive.google.com/drive/folders/1OaElo8HLWgRPZHLldlY2JyIGHcWHlzbQ?usp=sharing" target="_blank">
                    <p>ME101</p>
                    </a>
                  </div>

                  <div class="item">
                    <a href="https://drive.google.com/drive/folders/1l7OtBn3Da2GbvUJtsDy-BhTyN9_mSlp-?usp=drive_link" target="_blank">
                    <p>CE101</p>
                    </a>
                  </div>

                  <div class="item">
                    <a href="https://drive.google.com/drive/folders/12Zfk8frtOtRmikv62mrcptcytTeF3kP_?usp=sharing" target="_blank">
                    <p>ME103</p>
                    </a>
                  </div>

                  <div class="item">
                    <a href="https://drive.google.com/drive/folders/1UDH2QUn8QEZNuUzAxcfLV_Tp2uowt9Xt?usp=sharing" target="_blank">
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
                            <option value="default">Select Branch</option>
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
                        <option value="default">Select Semseter</option>
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
      <h1>Subject List</h1>
      <ul className='container2'>
        {branchList.map(branch => (
          
          <li key={branch._id} className='item2'><a href={branch.file_url} target="_blank"><p className='sub'>{branch.subject}</p></a></li>
        ))}
      </ul>
    </div>
          </div>
        </div>

    );

}

export default Notes;
