import react, { useEffect } from 'react';
import Tilt from 'react-vanilla-tilt';
import 'tilt.js';

const Card =(props)=>{
 
	
	
    return(
        <>
        <Tilt className="tilt">
            <div className="cards">
                    <div className="card_img">
                         <img src={props.Img} />
                    </div>
                    <div className="card_title">
                        <h2>{props.Title}</h2>
                    </div>
                    <div className="card_para">
                        <p>{props.Para}</p>
                        <button>CHECK NOW</button>
                    </div>
                </div>
        `</Tilt>
        
        </>
    )
}

export default Card;