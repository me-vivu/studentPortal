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

            <div className='post-display'>
                <ShareNow/>
                <PostTemp/>
             
            </div>
            

            <div className='others-display'>
                <h5 className="text">Discussion Panel</h5>
                <Forums/>
                <button className='disc-btn'>Read More Query</button>

                <div className='upload-sec'>
                    <h5 className="text">Recent Notes</h5>
                    <Forums/>
                    <button className='disc-btn' >Read More Notes</button>
                </div>
            </div>
        </div>

    );
}

export default Home;
