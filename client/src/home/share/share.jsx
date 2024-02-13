import React from 'react';
import img from '../../assets/profile.png'
import photos from '../../assets/images.png'
import './share.css'

function ShareNow(){
    return(
        <div className='share-container'>
            <input type='text' placeholder='Share something' className= 'share-cont'>
                
            </input> 

            <div className='share-elem'>
                <div>
                    <img src={photos} alt="photos" className='dis-img'/>
                </div>

                <div>
                    <button className='post-btn'>Post Now</button>
                </div>

            </div>

        </div>
    )
}



export default ShareNow;