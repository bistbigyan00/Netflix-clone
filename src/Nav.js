import React, {useState,useEffect} from 'react'
import './Nav.css'

function Nav() {

    const [show,handleShow] = useState(false);

    //when black bgcolor is added, once scroll is done
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
                handleShow(true);
            } else handleShow(false);
        });
        //once scroll is finished, remove listener
        return () => {
            window.removeEventListener("scroll");
        }
    },[]);

    return (
        //initially show is false, once scrolled, show is true and new class is added
        <div className={`nav ${show && "nav__black"}`}>
            <img 
                className="nav__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
                alt="Netflix Logo" 
            />

            <img 
                className="nav__avatar"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
                alt="Netflix Logo" 
            />
        </div>
    );
}

export default Nav
