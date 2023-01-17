import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { RiLinkedinBoxFill } from "react-icons/ri";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7i2s6dy', 'template_p5ja37c', form.current, '6RmRA_6_P0WHD7W87')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

      e.target.reset();
  }
    return (
      <section id="contact">
        <h5>Get in touch</h5>
        <h2>Contact me</h2>

        <div className="container contact-container">
          <div className="contact-options">
            <article className="contact-option">
              <MdOutlineEmail className="contact-option-icon" />
              <h4>Email</h4>
              <h5 className="text-light">Petter.bakke77@gmail.com</h5>
              <a href="mailto:petter.bakke77@gmail.com">Send a message</a>
            </article>
            <article className="contact-option">
              <RiMessengerLine className="contact-option-icon" />
              <h4>Messenger</h4>
              <h5 className="text-light">Petter Bjørnstad Bakke</h5>
              <a href="https://m.me/petter.b.bakke">Send a message</a>
            </article>
            <article className="contact-option">
              <RiLinkedinBoxFill className="contact-option-icon" />
              <h4>Linkedin</h4>
              <h5 className="text-light">Petter Bjørnstad Bakke</h5>
              <a href="https://www.linkedin.com/in/petterbb/">Send a message</a>
            </article>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Full name" required />
            <input type="email" name="email" placeholder="Email" required />
            <textarea name="message" rows="7" placeholder="Message" required />
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </section>
    )
}
  export default Contact;