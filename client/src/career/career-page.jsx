import React, {useState, useEffect}from "react";
import "../projects/project-page.css"
import Navigation from "../home/navigation/nav";
import axios from 'axios';
import { Link } from 'react-router-dom';


function ProjectPage(){

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
          try {
            const response = await axios.get("http://localhost:5001/blogs");
            setProjects(response.data);
          } catch (error) {
            console.error("Error fetching projects:", error);
          }
        };
    
        fetchProjects();
    }, []);

    return(

        <div className="project-view">
                <Navigation/>

                <div className='project-list'>
                    <h2>Blog List</h2>
                    <div className="projects-container"> 

                        {projects.map(blog => (
                            <div key={blog.project_id} className="project-item">
                                <h3>{blog.title}</h3>
                                <p>{blog.description}</p>
                                <a href={blog.link}>View all </a>
                            </div>
                        ))}
                    </div>
                </div>
                
            </div>

        

       
    )
}

export default ProjectPage;