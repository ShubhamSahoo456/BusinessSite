import react, { useState } from 'react';
import './style.css';


const Contact=()=>{

    const[data,setData] = useState({
        fullName :"",
        phone : "",
        email : "",
        message : ""
    })

    const inputEvent=(event)=>{
        const {name ,value} = event.target;
        
        setData((prevData) =>{
            return {
                ...prevData,
                [name] : value
            }
        })
        
    }

    const submitForm =(e)=>{
        e.preventDefault();
        alert(`${data.fullName} ${data.phone} ${data.email} ${data.message}`);
    }

    return (
        <>
            <div className="contact_div">
                <div className="contact_head">
                    <h1>CONTACT US</h1>
                </div>
                <div className="contact_form">
                    <form onSubmit={submitForm}>
                        <div className="input">
                            <label htmlFor="name">Full Name</label>
                            <input type="text"
                                    name="fullName"
                                    autoComplete="off"
                                    value={data.fullName}
                                    onChange={inputEvent} />
                        </div>

                        <div className="input">
                            <label htmlFor="phone">Phone Number</label>
                            <input type="text"
                                    name="phone"
                                    autoComplete="off"
                                    value={data.phone}
                                    onChange={inputEvent}
                                    />
                        </div>

                        <div className="input">
                            <label htmlFor="email">Email</label>
                            <input type="text"
                            name="email"
                            autoComplete="off"
                            value={data.email}
                            onChange={inputEvent}
                            />
                        </div>

                        <div className="input">
                            <label htmlFor="message">Message</label>
                            <textarea name="message"
                                     rows="10"
                                     value={data.message}
                                     onChange={inputEvent}>

                            </textarea>
                        </div>
                        <div className="input">
                            <button className="btn" type="submit">Submit</button>
                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}

export default Contact;