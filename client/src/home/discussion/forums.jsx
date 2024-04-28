import React from "react";
import ShowDesc from "./display";
import './forums.css'


function Forums(){
    return(
        <div>
            <ul className="no-bullets">
                <li>
                    <a href="https://www.quora.com/Why-dont-some-people-love-reading-books-What-is-in-their-mind" target="_blank"><ShowDesc message = "Why people not falling in love with books"></ShowDesc></a>
                </li>
                <li>
                <a href="https://www.quora.com/Do-you-think-technology-is-useful-or-useless-and-why" target="_blank"><ShowDesc message = "Why do you think that the technology is just bad?"></ShowDesc></a>
                </li>
                <li>
                <a href="https://nitandhra.ac.in/main/director_profile.php" target="_blank"><ShowDesc message = "When the director of this college is coming?"></ShowDesc></a>
                </li>
                

            </ul>
        
        </div>
    )
}

export default Forums