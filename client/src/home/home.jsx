import React from 'react'
import './home.css'

function Home(){
    return(
        <div class="container">
        <div class="header">
            <div class="logo">
                {/* <img src="logo.png" alt="Logo"> */}
            </div>
            <div class="nav">
                <ul>
                    <li><a href="#">Feeds</a></li>
                    <li><a href="#">Recents</a></li>
                    <li><a href="#">Friends</a></li>
                    <li><a href="#">Popular</a></li>
                    <li><a href="#">Stories</a></li>
                </ul>
            </div>
        </div>
        <div class="main">
            <div class="sidebar">
                <div class="profile">
                    {/* <img src="profile.png" alt="Profile picture"> */}
                    <h2>George Lobko</h2>
                </div>
                <div class="menu">
                    <ul>
                        <li><a href="#">News Feed</a></li>
                        <li><a href="#">Messages</a></li>
                        <li><a href="#">Forums</a></li>
                        <li><a href="#">Media</a></li>
                        <li><a href="#">Settings</a></li>
                    </ul>
                </div>
                <div class="download">
                    <a href="#">Download the App</a>
                </div>
            </div>
            <div class="content">
                <div class="post">
                    <div class="user">
                        {/* <img src="user1.png" alt="User profile picture"> */}
                        <h2>Bogdan Nikitin</h2>
                        <span>2 hours ago</span>
                    </div>
                    <div class="text">
                        <p>Hi everyone, today I was on the most beautiful mountain in the world, I also want to say hi to Silena, Olya and Davis!</p>
                    </div>
                    <div class="actions">
                        <button>Like</button>
                        <button>Comment</button>
                        <button>Share</button>
                    </div>
                </div>
                <div class="post">
                    <div class="user">
                        {/* <img src="user2.png" alt="User profile picture"> */}
                        <h2>Vitaliy Boyko</h2>
                        <span>Recommendations</span>
                    </div>
                    <div class="text">
                        <p>I chose a wonderful coffee today, I wanted to tell you what product they have in stock - it's a latte with coconut milk... delicious... it's really incredibly tasty!!!</p>
                    </div>
                    <div class="actions">
                        <button>Like</button>
                        <button>Comment</button>
                        <button>Share</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Home