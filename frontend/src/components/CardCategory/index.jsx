import React from 'react';
import './styles.css';

const CardCategory = (props) => {

    return(
        
        <div className="category-card">                  {/*objeto literal*/}
            <div className="category-card-image"  style={{background: props.color}} > {/* ou cria uma classe*/}
                <img src={props.image} alt="" style={{"margin-top":" 4px"}} />
            </div>
            <div className="category-card-content">
                <h4>{props.title}</h4>
                <p>{props.courses}</p>
            </div>
     </div>   
    );
}

export default CardCategory;