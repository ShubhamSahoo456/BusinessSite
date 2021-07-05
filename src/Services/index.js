import react from 'react';
import Data from '../Data';
import Card from './Card';
import './style.css';

const Service=()=>{


    return (
        <>
        <div className="service_div">

        {
            Data.map((val ,index)=>{
                return(
                <Card 
                    key={index}
                    Img={val.Img}
                    Title={val.Title}
                    Para={val.Para}
                />
                )

            })
        }
           
        </div> 
        </>
    )
}

export default Service;