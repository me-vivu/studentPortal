import React from "react";
import './display.css'


function ShowDesc(desc){
    
    
    return(
        <div className="descContainer">
            <h5 className="descText">
                {desc.message}
            </h5>

        </div>

    )
}


export default ShowDesc;