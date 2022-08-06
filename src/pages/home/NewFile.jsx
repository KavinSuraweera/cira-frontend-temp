import React from 'react';
import {Link} from "react-router-dom";

const NewFile = () => {

    return (
        <>
           <div>
               <h1>Cira New File</h1>
               <Link to="/">
                   <button className="btn">
                       back
                   </button>
               </Link>

           </div>
        </>
    );

}

export default NewFile;
