import React from 'react';

import './styles.css';

// const CardCourse = (props) =>{

//     return(
//         <>
//                     <article>
//                             <img src={props.image} alt={props.alt} />
//                             <h4>{props.children}</h4>
//                     </article>
                        
//         </>
//     );
// }


const CardCourse = ({image, alt, children}) =>{ // Também tem o spreed

        return(
            <>
                        <article>
                                <img src={image} alt={alt} />
                                <h4>{children}</h4>
                        </article>
                            
            </>
        );
    }
export default CardCourse;