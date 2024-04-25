import React from "react";
import profileImg from '../../assets/img.jpg'
import hamImg from "../../assets/dots.png"
import like from "../../assets/like.png";
import comment from "../../assets/comment.png"
import car from "../../assets/car01.jpg"
import './postTemp.css'

function PostTemp(){
    return(
        <div className="post-temp">
            
            <div className="info-sec">

                <div className="info-sec-d">    
                    <div className="profil-img-d" >
                        <img src={profileImg} alt="Img" className="profile-img" />
                    </div>
                    
                    <div className="info-details">
                        <h5 className="name-txt">Vivek Ranjan</h5>
                        <h7 className= "time-txt">8 minutes ago</h7>
                    </div>

                </div>

                

                <div className="ham-img-d">
                    <img src={hamImg} alt="img" className="ham-img"></img>
                </div>
                
            </div>

            <div>
                <p className="msg-text">
                    Such a beautiful car ❤️✌️ 
                </p>
            </div>

            <div className="img-container">
                <img src={car} alt="image" className="disp-img" />
                
            </div>
            <div className="action-btns">
                <button id= "like-btn" className="like-btn">
                    <img src={like} alt="like" className="like-btn-img" />
                    Like
                </button>

                <button id="cmnt-btn" className="like-btn">
                    <img src={comment} alt="Comment" className="like-btn-img" />
                    Comment
                </button>
            </div>
            
            
        </div>
    )
}

export default PostTemp;