import React from "react";
import './Contact.css';

function Contact(){
    return(
        <div class="main-con" id="contact-me-form">
 
    <div class="contact-container" >
    <h1 class="con-txt"> Contact Me</h1>
    
      <form action="https://formsubmit.co/rohankapadiya29@gmail.com" method="POST" >


        <label for="name">Name:</label><br />
        <input type="text" id="name" name="name" placeholder="Your Full Name...." required/><br />
        <label for="email">Email:</label><br />
        <input type="email" id="email" name="email" placeholder="Your Email..." required/><br />
        
        <label for="message">Message:</label>
        <textarea id="message " name="message " rows="5" cols="50"  required></textarea> <br/>
        <div className="final-buttons">
        <input value="Reset" type="reset" class="btn-reset"/>
        <input id="submit" type="submit" class="sub-btn"/>
        </div>
      </form>

    </div>
  </div>
    );
}

export default Contact;