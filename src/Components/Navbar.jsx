// import React from 'react';
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// import { Link, NavLink } from "react-router-dom"
// import "./Navbar.css";




// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const navigate = useNavigate();

//   const myprojectsstarted = () => {
//     navigate("/Project");
//   }

//   const servicesstarted = () => {
//     navigate("/Services");
//   }

//   const contactstarted = () => {
//     navigate("/Contact");
//   }



//   return (

//     <nav>
//       <Link to="/" className='title'>Website</Link>

//       <ul className='headings'>
//         <li> <NavLink to="/project">My Projects</NavLink> </li>

//         <li> <NavLink to="/services">Services</NavLink> </li>

//         <li> <NavLink to="/contact">Contact</NavLink>  </li>
//       </ul>


//       <ul className="headings-icon">
//         <i onClick={toggleMenu} className="fa-solid fa-bars"></i>
//       </ul>

//       {isOpen && (
//         <ul className="dropdown-menu">
//           {/* <li onClick={myprojectsstarted} > My Projects</li>
//           <li onClick={servicesstarted}>Services</li>
//           <li onClick={contactstarted}>Contact</li> */}

//           {/* my project etc ko click krien aur wo column disappear hjaye uske lye ye neeche wala kaam kia */}
//           {/* jahan onclick ma arrow function lgaya warna upar wala hy sahy tha  */}

//           <li onClick={() => { myprojectsstarted(); setIsOpen(false); }}>My Projects</li>
//           <li onClick={() => { servicesstarted(); setIsOpen(false); }}>Services</li>
//           <li onClick={() => { contactstarted(); setIsOpen(false); }}>Contact</li>
//         </ul>
//       )}

//     </nav>

//   )
// }

// export default Navbar

// .,.,.,.,.,.,new code se jb hum navbar ma kahin bhi click krien gay to jo open dropdown hoga wo bnd hojaiega.,.,
// upar wale se sirf dropdown k andar click karne k dropdown bn horha tha .,.,.,.,.,.,.,.,.,.,.,.,.,

import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();

  const myprojectsstarted = () => {
    navigate("/Project");
    setIsOpen(false);
  };

  const servicesstarted = () => {
    navigate("/Services");
    setIsOpen(false);
  };

  const contactstarted = () => {
    navigate("/Contact");
    setIsOpen(false);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav>
      <Link to="/" className="title">Website</Link>

      <ul className="headings">
        <li><NavLink to="/project">My Projects</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>

      <ul className="headings-icon">
        <i onClick={toggleMenu} className="fa-solid fa-bars"></i>
      </ul>

      {isOpen && (
        <ul className="dropdown-menu" ref={dropdownRef}>
          <li onClick={myprojectsstarted}>My Projects</li>
          <li onClick={servicesstarted}>Services</li>
          <li onClick={contactstarted}>Contact</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;



