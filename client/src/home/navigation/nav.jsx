import React from 'react'
import homeImg from '../../assets/home.png'
import careerImg from '../../assets/career.png'
import discImg from '../../assets/discussion.png'
import notesImg from '../../assets/notes.png'
import profileImg from '../../assets/profile.png'
import projectImg from '../../assets/project.png'
import './nav.css'


function Navigation(){


    


    return(
        <div className='navigation-cnt'>

            <div className='profile-container'>
                <img src={profileImg} alt='Profile Image' className ="profileImg"></img>
                <h6 className='textName'>Vivek Ranjan</h6>
                <h6 className='tag'>@me-vivu</h6>
            </div>

            <div className = "divContainer">
                
                <button className='nav-btn'> 
                    <img src = {homeImg} className = "btn-img"/>
                    Home 
                </button>

                <button className='nav-btn'> 
                    <img src = {careerImg} className = "btn-img"/>
                    Career 
                </button>

                <button className='nav-btn'> 
                    <img src = {discImg} className = "btn-img"/>
                    Discussion
                </button>

                <button className='nav-btn'> 
                    <img src = {projectImg} className = "btn-img"/>
                    Projects
                </button>

                <button className='nav-btn'> 
                    <img src = {notesImg} className = "btn-img"/>
                    Notes 
                </button>

            </div>
        </div>
    )
}

export default Navigation