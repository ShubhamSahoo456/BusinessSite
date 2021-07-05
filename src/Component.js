import react from 'react';


const Component =(props)=>{


    return (
        <>
            <div className="home_div">
                <div className="home_text">
                    <h1>{props.Title}<br />
                    <strong><span>{props.Name}</span></strong></h1>
                    <br />
                    <h3>{props.Para}</h3>
                    <a href={props.link}>{props.Anchor}</a>
                </div>
                <div className ="home_img">
                    <img src={props.Img}/>
                </div>
            </div>
        </>
    )
}

export default Component;