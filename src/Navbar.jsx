import react from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';


const Navbar=() =>{


    return (
        <>
            <div className="nav">
                <h1>shubham sahoo</h1>
                <div className="nav_list">
                    <NavLink exact activeClassName="active_class" to="/" className="nav_text">Home</NavLink>
                    <NavLink exact activeClassName="active_class" to="/service" className="nav_text">Services</NavLink>
                    <NavLink exact activeClassName="active_class" to="/about" className="nav_text">About</NavLink>
                    <NavLink exact activeClassName="active_class" to="/contact" className="nav_text">Contact</NavLink>
                </div>
            </div>
        </>
    )
}

export default Navbar;