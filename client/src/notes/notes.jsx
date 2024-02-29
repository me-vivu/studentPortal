import React from 'react';
import './notes.css'

function Notes() {
    return (
        <div>
            <div id ="container" className='container'>
                <div className ="note" id="note">
                        <label>Select Branch:</label>
                        <select id="branch" className="branch">
                            <option value="Computer Science Engineering">Computer Science</option>
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
                    <select id="semester" className="semester">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                    </select>
                </div>
            </div>

            {/* <div  id = "subjects" className='subjects'> 
                <object className="pdf" data= 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210101201653/PDF.pdf'>hii </object>
                
                
                    
            </div> */}
        </div>

        
        
    );
}

export default Notes;
