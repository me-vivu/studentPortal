import React from 'react'
import './post.css'

function Post(){
    return (
        <div className="container">
            <h2>Posts </h2>
            <form method="POST">

                <label htmlFor="description">Description:</label>
                <textarea id="description" className="description" rows="4" required></textarea>

                <label htmlFor="author_name">author_name</label>
                <input type="text" id="author_name" className="author_name" required/>

                <label htmlFor="file">File</label>
                <input type="file" id="file" className="file" required/>

                <label htmlFor="tag">tag</label>
                <input type="text" id="tag" className="tag" required/>

                <button type="submit" id= "submit_button">Submit</button>
            </form>
        </div>
    )
}

export default Post;