import React from 'react'
import './project.css'

function Project(){
    return (
        <div className='project-main'>
            <div className="container">
                <h2>Projects </h2>
                <form method="POST">

                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" className="title" required/>

                    <label htmlFor="description">Description:</label>
                    <textarea id="description" className="description" rows="4" required></textarea>

                    <label htmlFor="domain">Domain:</label>
                    <select id="domain" name="domain" required>
                        <option value="" disabled selected>Select Domain</option>
                        <option value="Machine Learning and AI">Machine Learning and AI</option>
                        <option value="Web Development">Web Development</option>
                        <option value="App Development">App Development</option>
                        <option value="Micro-processor">Micro-processor</option>
                        <option value="Civil Projects">Civil Projects</option>
                        <option value="Others">others</option>
                        
                    </select>

                    <label htmlFor="report">Report (PDF):</label>
                    <input type="file" id="report" className="report" accept=".pdf" required/>

                    <label htmlFor="file">File: (Paste the GitHub Link)</label>
                    <input type="text" id="file" className="file" required/>

                    <button type="submit" id= "submit_button">Submit</button>
                </form>
            </div>

        </div>
    )
}

export default Project;