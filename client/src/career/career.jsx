import React from 'react'
import './career.css'

function Career(){
    return (
        <div className="container">
            <h2>Careers </h2>
            <form method="POST">

                <label htmlFor="title">Title:</label>
                <input type="text" id="title" className="title" required/>

                <label htmlFor="description">Description:</label>
                <textarea id="description" className="description" rows="4" required></textarea>

                <label htmlFor="author_name">author_name</label>
                <input type="text" id="author_name" className="author_name" required/>

                <label htmlFor="file">File: (Paste the GitHub Link)</label>
                <input type="text" id="file" className="file" required/>

                <button type="submit" id= "submit_button">Submit</button>
            </form>
        </div>
    )
}

export default Career;