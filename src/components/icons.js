import React from "react";
import {FaTimes,FaPen,FaRegCircle, FaCircle} from "react-icons/fa"

const Icon = ({name}) =>{
    switch(name){
        case 'circle':
            return <FaRegCircle className="icons" />
        case 'cross':
            return <FaTimes className="icons" />
        default :
            return <FaPen className="icons" />
            
    }
    // return(
    //     <div>
    //         <FaTimes className="icons" />
    //         <FaPen className="icons" />
    //         <FaCircle className="icons" />
    //     </div>
        
    // )
}

export default Icon;