import React, { useState, useEffect } from 'react';
import axios from 'axios';
import profileImg from '../../assets/img.jpg'
import hamImg from "../../assets/dots.png"
import like from "../../assets/like.png";
import love from "../../assets/love.png";
import comment from "../../assets/comment.png"
import car from "../../assets/car01.jpg"
import './postTemp.css'

function PostTemp({ post }) {
    const [showComments, setShowComments] = useState(false);
    const [liked, setLike] = useState(false);

    const handleCommentClick = () => {
        setShowComments(!showComments);
    };

    const handleLike = () => {
        setLike(!liked);
    };

    return (
        <div className='post-temp'>
            <div className="info-sec">
                <div className="info-sec-d">
                    <div className="profil-img-d" >
                        <img src={profileImg} alt="Img" className="profile-img" />
                    </div>
                    <div className="info-details">
                        <h5 className="name-txt">{post.userName}</h5>
                        <h7 className="time-txt">{post.timeAgo}</h7>
                    </div>
                </div>
                <div className="ham-img-d">
                    <img src={hamImg} alt="img" className="ham-img"></img>
                </div>
            </div>
            <div>
                <p className="msg-text">
                    {post.caption}
                </p>
            </div>
            <div className="img-container">
                <img src={post.file} alt="image" className="disp-img" />
            </div>
            <div className="action-btns">
                <button id="like-btn" className="like-btn">
                    {liked ?(
                        <div>
                            <img src={love} alt="like" className="like-btn-img" onClick={handleLike}/>
                            Like
                        </div>
                        
                        
                        
                    ):(
                        <div>
                            <img src={like} alt="like" className="like-btn-img" onClick={handleLike}/>
                            Like

                        </div>
                        
                    )}
                    
                    
                </button>
                <button id="cmnt-btn" className="like-btn" onClick={handleCommentClick}>

                    <img src={comment} alt="Comment" className="like-btn-img" />
                    Comment
                </button>
            </div>
            {showComments && (
                <div className="comments-section">
                    <h5>Comments:</h5>
                    {post.comments.map(comment => (
                        <div key={comment._id}>
                            <p>{comment.text}</p>
                            <p>By: {comment.user}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Fetch posts from the database
        axios.get('http://localhost:5001/posts') // Update the endpoint as per your backend API
            .then(response => {
                
                const sortedPosts = response.data.sort((a, b) => new Date(b.datePosted) - new Date(a.datePosted));
                
                const postsWithTimeAgo = sortedPosts.map(post => {
                    const timeDifference = new Date() - new Date(post.datePosted);
                    
                    if (timeDifference < 60000) {
                        post.timeAgo = 'Just now';
                    } else if (timeDifference < 3600000) { // Less than an hour
                        post.timeAgo = Math.floor(timeDifference / 60000) + ' minutes ago';
                    } else if (timeDifference < 86400000) { // Less than a day
                        post.timeAgo = Math.floor(timeDifference / 3600000) + ' hours ago';
                    } else { // More than a day
                        post.timeAgo = Math.floor(timeDifference / 86400000) + ' days ago';
                    }
                    return post;
                });

                Promise.all(postsWithTimeAgo.map(post => fetchUserName(post)))
                    .then(posts => {
                        setPosts(posts);
                    })
                    .catch(error => {
                        console.error('Error fetching user names:', error);
                    });

                
                
                
            })
            .catch(error => {
                console.error('Error fetching posts:', error);
            });
    }, posts);

    const fetchUserName = async (post) => {
        try {
            const response = await axios.post('http://localhost:5001/username', { userId: "65c2814d8772ce43a44623c6" });
            const userName = response.data.userName;
            
            return { ...post, userName }; // Merge user name with post object
        } catch (error) {
            console.error('Error fetching user name:', error);
            return post; // Return post without user name
        }
    };

    return (
        
        <div className='post-view'>
            {posts.map(post => (
                <PostTemp key={post._id} post={post} />
            ))}
        </div>
    );
}

export default Posts;