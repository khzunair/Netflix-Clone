import React, { useState } from 'react';
import { useEffect } from 'react';
import "./Navbar.css"

const Navbar = () => {
    const [show, handleShow] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll",()=>{

            if(window.scrollY >100){
                handleShow(true);
            }
            else handleShow(false);
            return () =>{
    
                window.removeEventListener("scroll");
            }
        });
    })
    
  return (
    <div className={`nav ${show && "navBlack" }`} >
      <img className='navLogo' src='https://pngimg.com/uploads/netflix/small/netflix_PNG32.png' alt='Netflix' />
         <img className='navAvatar' src='https://ia803404.us.archive.org/31/items/profiles_202104/penguin.png'alt='Avatar' />
    </div>
  );
}

export default Navbar;
