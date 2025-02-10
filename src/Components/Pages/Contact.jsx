// // import React from 'react'
// import React, { useState, useEffect, } from 'react';

// import "./Contact.css";



// const Contact = () => {

//   let isFormSubmit = false

//   // const aaa = () => {
//   //   return 'usa'
//   // }

//   const nameValidation = () => {
//     if (isFormSubmit) {
//       let name = document.getElementById("nameField");
//       let nameError = document.getElementById("nameError");
//       if (name.value.length === 0) {
//         nameError.innerHTML = 'name is required'
//         return false
//       }
//       else if (!name.value.match(/^[A-Za-z\s.'-]{3,50}$/)) {
//         nameError.innerHTML = 'name is not correct';
//         return false
//       } else {
//         nameError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
//         return true
//       };
//     }
//   }

//   const phoneValidation = () => {
//     if (isFormSubmit) {
//       let phone = document.getElementById("numberField");
//       let phoneError = document.getElementById("phoneError");
//       if (phone.value.length === 0) {
//         phoneError.innerHTML = 'number is required'
//         return false
// }
//       else if (!phone.value.match(/^\d{11}$/)) {
//         phoneError.innerHTML = 'number is not correct'
//         return false;
//       } 
//       else {
//         phoneError.innerHTML = '<i class="fa-regular fa-circle-check"></i>'
//         return true

//       };
//     }
//   }

//   const emailValidation = () => {
//     if (isFormSubmit) {
//       let email = document.getElementById("emailField");
//       let emailError = document.getElementById("emailError");
//       if (email.value.length === 0) {
//         emailError.innerHTML = 'email is required'
//         return false
//       }

//       else if (!email.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {

//         emailError.innerHTML = 'Email Invalid'
//         return false
//       } else {
//         emailError.innerHTML = '<i class="fa-regular fa-circle-check"></i>'
//         return true
//       };
//     }
//   }

//   const onSubmitForm = () => {
//     isFormSubmit = true
//     phoneValidation()
//     emailValidation()
//     if (nameValidation() && phoneValidation() && emailValidation()) {
//       openPopup()
//     }
//   }

//   const openPopup = () => {
//     let popup = document.getElementById("popup");
//     popup?.classList?.add("open-popup");
//   }

//   const closePopup = () => {
//     let popup = document.getElementById("popup");
//     popup?.classList?.remove("open-popup");
//   }

//   return (
    

//     <div className='contact-page'>

//       <div className='main-contact'>
//         <p className='get-in-touch'>Get in touch</p>
//       </div>

//       <div className='contain'>

//         <div className='section-one'>
//           <div className='inner-section-one'>
//             <h1 className='my-contact-details'>My Contact Details</h1>
//             <p className='email'><i className="fa-solid fa-envelope-open-text"> </i> usamashahidrandhawa1@gmail.com</p>
//             <p className='number'><i class="fa-sharp fa-solid fa-phone"></i> +92-313-7793410</p>
//             <p className='address'><i class="fa-solid fa-location-dot"></i> Faisalabad,Pakistan</p>
//           </div>
//         </div>

//         <div className='section-two'>
//           <div className='your-name'>
//             <h1>Your Name</h1>
//             <input type="text" placeholder='Enter your name' className='Enter-your-name' id='nameField' onKeyUp={nameValidation} />
//             <span id='nameError'></span>
//           </div>

//           <br />

//           <div className='your-phonenumber'>
//             <h1>Phone Number</h1>
//             <input type="number" id="numberField" name="phone" placeholder="03701111444" onKeyUp={phoneValidation} className='Enter-your-mobile-number' pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}" required />
//             <span id='phoneError'></span>
//           </div>

//           <br />

//           <div className='your-email'>
//             <h1>Email</h1>
//             <input type="" placeholder='test@gmail.com' className='Enter-your-emailid' id='emailField' onKeyUp={emailValidation} />
//             <span id='emailError'></span>
//           </div>


//           <br />

//           <div className='write-yourmessage'>
//             <h1>Write your messages here</h1>
//             <textarea name="" id="" rows='2' placeholder='Write your message' className='Enter-your-message'>
//             </textarea>
//           </div>

//           <br />

//           <div className='buttonsubmit'>
//           <button onClick={onSubmitForm} className='submit'>Submit <i class="fa-solid fa-arrow-right"></i></button>

//           </div>


//           <div className="popup" id="popup">
//             <img src="./public/404-tick.png" />
//             <h2>Thank You!</h2>
//             <p>Developer will contact you soon.Thanks!</p>
//             <button type="button" onClick={closePopup}>OK</button>
//           </div>
//         </div>

//       </div>

//     </div>
//   )
// }
// export default Contact

import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css";

const Contact = () => {
  const [isFormSubmit, setIsFormSubmit] = useState(false);
  const form = useRef(null);

  const validateName = () => {
    if (isFormSubmit) {
      let name = form.current['user_name'];
      let nameError = document.getElementById("nameError");

      if (name.value.length === 0) {
        nameError.innerHTML = 'Name is required';
        return false;
      } else if (!name.value.match(/^[A-Za-z\s.'-]{3,50}$/)) {
        nameError.innerHTML = 'Name is not correct';
        return false;
      } else {
        nameError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
        return true;
      }
    }
  };

  const validatePhone = () => {
    if (isFormSubmit) {
      let phone = form.current['user_phone'];
      let phoneError = document.getElementById("phoneError");

      if (phone.value.length === 0) {
        phoneError.innerHTML = 'Number is required';
        return false;
      } else if (!phone.value.match(/^\d{11}$/)) {
        phoneError.innerHTML = 'Number is not correct';
        return false;
      } else {
        phoneError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
        return true;
      }
    }
  };

  const validateEmail = () => {
    if (isFormSubmit) {
      let email = form.current['user_email'];
      let emailError = document.getElementById("emailError");

      if (email.value.length === 0) {
        emailError.innerHTML = 'Email is required';
        return false;
      } else if (!email.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        emailError.innerHTML = 'Email Invalid';
        return false;
      } else {
        emailError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
        return true;
      }
    }
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    setIsFormSubmit(true);

    if (validateName() && validatePhone() && validateEmail()) {
      emailjs.sendForm(
        'service_tx4yjp6',
        'template_tohilmi',
        form.current,
        'oSdzCbWiTvQ4jut8b'
      ).then((result) => {
        console.log('Email sent:', result.text);
        openPopup();
      }).catch((error) => {
        console.error('Error sending email:', error);
      });
    }
  };

  const openPopup = () => {
    let popup = document.getElementById("popup");
    popup?.classList?.add("open-popup");
  };

  const closePopup = () => {
    let popup = document.getElementById("popup");
    popup?.classList?.remove("open-popup");
  };

  return (
    <div className='contact-page'>
      <div className='main-contact'>
        <p className='get-in-touch'>Get in touch</p>
      </div>

      <div className='contain'>
        <div className='section-one'>
          <div className='inner-section-one'>
            <h1 className='my-contact-details'>My Contact Details</h1>
            <p className='email'><i className="fa-solid fa-envelope-open-text"></i> usamashahidrandhawa1@gmail.com</p>
            <p className='number'><i className="fa-sharp fa-solid fa-phone"></i> +92-313-7793410</p>
            <p className='address'><i className="fa-solid fa-location-dot"></i> Faisalabad, Pakistan</p>
          </div>
        </div>

        <div className='section-two'>
          <form ref={form} onSubmit={onSubmitForm}>
            <div className='your-name'>
              <h1>Your Name</h1>
              <input type="text" name="user_name" placeholder='Enter your name' className='Enter-your-name' onKeyUp={validateName} />
              <span id='nameError'></span>
            </div>

            <br />

            <div className='your-phonenumber'>
              <h1>Phone Number</h1>
              <input type="text" name="user_phone" placeholder="03701111444" className='Enter-your-mobile-number' onKeyUp={validatePhone} required />
              <span id='phoneError'></span>
            </div>

            <br />

            <div className='your-email'>
              <h1>Email</h1>
              <input type="email" name="user_email" placeholder='test@gmail.com' className='Enter-your-emailid' onKeyUp={validateEmail} />
              <span id='emailError'></span>
            </div>

            <br />

            <div className='write-yourmessage'>
              <h1>Write your messages here</h1>
              <textarea name="message" rows='2' placeholder='Write your message' className='Enter-your-message'></textarea>
            </div>

            <br />

            <div className='buttonsubmit'>
              <button type="submit" className='submit'>Submit <i className="fa-solid fa-arrow-right"></i></button>
            </div>
          </form>

          <div className="popup" id="popup">
            <img src="./public/404-tick.png" alt="Success" />
            <h2>Thank You!</h2>
            <p>Developer will contact you soon. Thanks!</p>
            <button type="button" onClick={closePopup}>OK</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;



