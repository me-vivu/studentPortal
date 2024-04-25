import React from 'react';
import Navigation from './navigation/nav';
import Forums from './discussion/forums';
import ShareNow from './share/share';
import PostTemp from './postTemp/postTemp';
import ProjectPage from '../projects/project-page';
import './home.css'

function Home() {
    return (
        <div className='home-screen'>
           
           <div className='nav'>
            <Navigation/>
           </div>
            

            
            

            {/* Home page is built from here */}

            <div className='post-display'>
                <ShareNow/>
                <PostTemp/>
                <PostTemp/>
                <PostTemp/>
                               
             
            </div>
            

            <div className='others-display'>
                <h5 className="text">Discussion Panel</h5>
                <Forums/>
                <button className='disc-btn'>Add Your Query</button>

                <div className='upload-sec'>
                    <h5 className="text">Recent Notes</h5>
                    <Forums/>
                    <button className='disc-btn' >Upload Notes</button>
                </div>
            </div>
        </div>

    );
}

export default Home;
