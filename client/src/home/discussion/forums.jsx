import React from "react";
import ShowDesc from "./display";
import './forums.css'


function Forums(){
    return(
        <div>
            <ul className="no-bullets">
                <li>
                    <ShowDesc message = "Why people fall in love and Regret?"></ShowDesc>
                </li>
                <li>
                    <ShowDesc message = "Why do you think that the technology is just bad?"></ShowDesc>
                </li>
                <li>
                    <ShowDesc message = "When the director of this college is coming?"></ShowDesc>
                </li>
                

            </ul>
        
        </div>
    )
}

export default Forums