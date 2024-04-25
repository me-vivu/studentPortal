import React from "react";
import './project-page.css'
import Navigation from "../home/navigation/nav";
import ProjectDomain from "./project-domain";

function ProjectPage(){
    return(

        <div className="project-view">
            <div className='nav'>
                <Navigation/>
        
            </div>

            <div className="project-content">
                Hello World
                <ProjectDomain/>
            </div>

        </div>

        

       
    )
}

export default ProjectPage;