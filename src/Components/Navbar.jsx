import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";


import { Link, NavLink } from "react-router-dom"
import "./Navbar.css";




const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();

  const myprojectsstarted = () => {

    navigate("/Project");
  }

  const servicesstarted = () => {

    navigate("/Services");
  }

  const contactstarted = () => {

    navigate("/Contact");
  }







  return (

    <nav>
      <Link to="/" className='title'>Website</Link>

      <ul className='headings'>
        <li> <NavLink to="/project">My Projects</NavLink> </li>

        <li> <NavLink to="/services">Services</NavLink> </li>

        <li> <NavLink to="/contact">Contact</NavLink>  </li>
      </ul>

      {/* <ul className='headings-icon'>
        <i  class="fa-solid fa-bars" ></i>
      </ul> */}

      <ul className="headings-icon">
        <i onClick={toggleMenu} className="fa-solid fa-bars"></i>
      </ul>
      {isOpen && (
        <ul className="dropdown-menu">
          {/* <li onClick={myprojectsstarted} > My Projects</li>
          <li onClick={servicesstarted}>Services</li>
          <li onClick={contactstarted}>Contact</li> */}

          {/* my project etc ko click krien aur wo column disappear hjaye uske lye ye neeche wala kaam kia */}
          {/* jahan onclick ma arrow function lgaya warna upar wala hy sahy tha  */}

          <li onClick={() => { myprojectsstarted(); setIsOpen(false); }}>My Projects</li>
          <li onClick={() => { servicesstarted(); setIsOpen(false); }}>Services</li>
          <li onClick={() => { contactstarted(); setIsOpen(false); }}>Contact</li>
        </ul>
      )}






    </nav>

  )
}

export default Navbar

// .,.,.,.,.,.,.,.,.,.,.,.,.neeche wale ko dekh k sahi karna upar wala icon p click .,.,.,.,.,.,.,.,.,.,.,.,.,

// import { useState } from "react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav>
//       <ul className="headings-icon">
//         <i onClick={toggleMenu} className="fa-solid fa-bars"></i>
//       </ul>
//       {isOpen && (
//         <ul className="dropdown-menu">
//           <li>Home</li>
//           <li>Projects</li>
//           <li>Services</li>
//           <li>Contact</li>
//         </ul>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

