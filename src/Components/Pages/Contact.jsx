import React, { useState, useEffect, useRef } from 'react';
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  let isFormSubmit = false;
  const form = useRef();

  const nameValidation = () => {
    if (isFormSubmit) {
      let name = document.getElementById("nameField");
      let nameError = document.getElementById("nameError");
      if (name.value.length === 0) {
        nameError.innerHTML = 'name is required';
        return false;
      } else if (!name.value.match(/^[A-Za-z\s.'-]{3,50}$/)) {
        nameError.innerHTML = 'name is not correct';
        return false;
      } else {
        nameError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
        return true;
      }
    }
  };

  const phoneValidation = () => {
    if (isFormSubmit) {
      let phone = document.getElementById("numberField");
      let phoneError = document.getElementById("phoneError");
      if (phone.value.length === 0) {
        phoneError.innerHTML = 'number is required';
        return false;
      } else if (!phone.value.match(/^\d{11}$/)) {
        phoneError.innerHTML = 'number is not correct';
        return false;
      } else {
        phoneError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
        return true;
      }
    }
  };

  const emailValidation = () => {
    if (isFormSubmit) {
      let email = document.getElementById("emailField");
      let emailError = document.getElementById("emailError");
      if (email.value.length === 0) {
        emailError.innerHTML = 'email is required';
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

  const msgValidation = () => {
    if (isFormSubmit) {
      let msg = document.getElementById("msgField");
      let msgError = document.getElementById("msgError");
      if (msg.value.length === 0) {
        msgError.innerHTML = 'message is required';
        return false;
      } else if (!msg.value.match(/^[A-Za-z0-9\s.'-]{3,100}$/)) {
        msgError.innerHTML = 'msg is not correct';
        return false;
      } else {
        msgError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
        return true;
      }
    }
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    isFormSubmit = true;
    phoneValidation();
    emailValidation();
    msgValidation();
    if (nameValidation() && phoneValidation() && emailValidation() && msgValidation()) {
      openPopup();
      sendEmail();
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

  const sendEmail = () => {
    emailjs.sendForm(
      "service_7bhm68w",
      "template_tohilmi",
      form.current,
      "oSdzCbWiTvQ4jut8b"
    ).then(
      (result) => {
        console.log("Success:", result.text);
        alert("Message sent successfully!");
      },
      (error) => {
        console.log("Error:", error.text);
        alert("Failed to send message.");
      }
    );
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
            <p className='email'><i className="fa-solid fa-envelope-open-text"> </i> usamashahidrandhawa1@gmail.com</p>
            <p className='number'><i class="fa-sharp fa-solid fa-phone"></i> +92-313-7793410</p>
            <p className='address'><i class="fa-solid fa-location-dot"></i> Faisalabad, Pakistan</p>
          </div>
        </div>
        <div className='section-two'>
          <form ref={form} onSubmit={onSubmitForm}>
            <div className='your-name'>
              <h1>Your Name</h1>
              <input type="text" placeholder='Enter your name' className='Enter-your-name' id='nameField' onKeyUp={nameValidation} name="name" />
              <span id='nameError'></span>
            </div>
            <div className='your-phonenumber'>
              <h1>Phone Number</h1>
              <input type="number" id="numberField" name="phone" placeholder="03701111444" onKeyUp={phoneValidation} className='Enter-your-mobile-number' />
              <span id='phoneError'></span>
            </div>
            <div className='your-email'>
              <h1>Your Email</h1>
              <input type="email" placeholder='test@gmail.com' className='Enter-your-emailid' id='emailField' onKeyUp={emailValidation} name="email" />
              <span id='emailError'></span>
            </div>
            <div className='write-yourmessage'>
              <h1>Write your messages here</h1>
              <textarea name="message" id="msgField" rows='2' placeholder='Write your message' className='Enter-your-message' onKeyUp={msgValidation}></textarea>
              <span id='msgError'></span>
            </div>
            <div className='buttonsubmit'>
              <button type="submit" className='submit'>Submit <i class="fa-solid fa-arrow-right"></i></button>
            </div>
          </form>
          <div className="popup" id="popup">
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



