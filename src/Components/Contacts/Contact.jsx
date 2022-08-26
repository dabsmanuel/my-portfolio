import React, { useRef } from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_h95dn7d",
      "template_fylp5y7",
      form.current,
      "CoAzqHiRPEwpQrPkR"
    );
      
      e.target.reset()
  };

  return (
    <section
      id="contact"
    >
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact-options">
          <div className="contact-option">
            <MdOutlineEmail className="contact-icon" />
            <h4>Email</h4>
            <h5>dabsoyibo@gmail.com</h5>
            <a href="mailto:dabsoyibo@gmail.com" target="_blanc">
              Send a Message
            </a>
          </div>

          <div className="contact-option">
            <RiMessengerLine className="contact-icon" />
            <h4>Messenger</h4>
            <h5>Dabs Manuel Oyibo</h5>
            <a href="https://www.facebook.com/dabsmanueloyibo" target="_blanc">
              Send a Message
            </a>
          </div>

          <div className="contact-option">
            <BsWhatsapp className="contact-icon" />
            <h4>Whatsapp</h4>
            <h5>+2348158106602</h5>
            <a href="https://wa.me/+2348158106602" target="_blanc">
              Send a Message
            </a>
          </div>
        </div>
        {/* END OF CONTACT OPTION */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="Message"
            rows="7"
            placeholder="Your Message"
            required>
          </textarea>
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
