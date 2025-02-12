// import { useRef } from "react";
// import emailjs from "@emailjs/browser";

// const ContactForm = () => {
//     const form = useRef();

//     const sendEmail = (e) => {
//         e.preventDefault();
//         console.log('form.current', form.current)
//         emailjs.sendForm(
//             "service_7bhm68w",
//             "template_tohilmi",
//             form.current,
//             "oSdzCbWiTvQ4jut8b"
//         ).then(
//             (result) => {
//                 console.log("Success:", result.text);
//                 alert("Message sent successfully!");
//             },
//             (error) => {
//                 console.log("Error:", error.text);
//                 alert("Failed to send message.");
//             }
//         );
//     };

//     return (
//         <form ref={form} onSubmit={sendEmail}>
//             <input type="text" name="name" placeholder="Your Name" required />
//             <input type="email" name="email" placeholder="Your Email" required />
//             <textarea name="message" placeholder="Your Message" required></textarea>
//             <button type="submit">Send</button>
//         </form>
//     );
// };

// export default ContactForm;