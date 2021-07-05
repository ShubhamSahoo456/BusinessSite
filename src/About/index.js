import react from 'react';
import img from './bg_2.svg'
import Component from '../Component';


const About=()=>{


    return (
        <>
              <Component Img={img}
                    Title="Welcome To About Page"   
                    Name="SUBHAM SAHOO"   
                    Para="We are team of talented developer making websites" 
                    Anchor="Contact here"  
                    link="/contact"           
            />
        </>
    )
}

export default About;