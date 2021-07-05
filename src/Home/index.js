import react from 'react';
import './style.css';
import img from './bg_1.svg';
import Component from '../Component';


const Home=()=>{


    return (
        <>
            <Component Img={img}
                    Title="grow your business with"   
                    Name="SUBHAM SAHOO"   
                    Para="We are team of talented developer making websites" 
                    Anchor="Get Started"  
                    link="/service"           
            />
        </>
    )
}

export default Home;