// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router'

const Navbar = () => {
  const history = useHistory();
  const [Show, setShow] = useState(false);

  const transitionNavbar = () => {
    if (window.scrollY >= 200) {
      setShow(true);
    } else {
      setShow(false);
    }
  };



  //!! ONE LINE CODE
  window.addEventListener("scroll", transitionNavbar);

  // //!! MORE THAN one LINE
  // useEffect( ()=>{
  //     window.addEventListener('scroll',transitionNavbar);
  //     //*work with out above line
  //     // return ()=> window.removeEventListener('scroll',transitionNavbar);
  // },[])

  return (
    <div className={`nav ${Show && "nav__black"} sticky-top`}>
      <div className="nav__content d-flex justify-content-between">
        
        <img
          onClick={()=>history.push('/')}
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
          className="nav__logo"
        />
        <img
          onClick={()=>history.push("/profile")}
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
          className="nav__logo__avatar"
        />
      </div>
    </div>
  );
};

export default Navbar;
