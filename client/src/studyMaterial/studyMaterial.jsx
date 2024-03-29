import React from 'react';
import './studyMaterial.css'

function StudyMaterial() {
    return (
        <div className='studyMat-main'>
            <h2>Study Material</h2>
            <form className='studyMat'>
                <div>
                    
                    <label htmlFor="branch">Branch:</label>
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
                <br />

                <div>
                    <label htmlFor="semester">Semester:</label>
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
                <br />

                <div>
                    <label htmlFor="subject">Subject:</label>
                    <input type="text" id="subject" className="formInput" />
                </div>
                <br />

                <div>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" className="formInput" />
                </div>
                <br />

                <div>
                    <label htmlFor="file">File Upload:</label>
                    <input type="file" id="file" className="formInput" />
                </div>
                <br />

                <input className='submitBtn' type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default StudyMaterial;
