import React from 'react';
import './styles.css';

const Animation = () =>{

    setTimeout(() =>{
        // lógica
        document.getElementById('bg-animation').style="display: none";

    },3000)

    return(
        <div>
            <div className="bg-animation" id="bg-animation">
                 <div className="animation">
                     <h2>Luke Code</h2>
                 </div>
            </div>
        </div>
    );
}

export default Animation;

