import React from 'react'
import './contact.css'
import { Envelope } from "phosphor-react";
import { Phone } from "phosphor-react";
import { House } from "phosphor-react";
const Contact = () => {
  return (
    <div className='contact'>
      <div class="sectionheader">
        <h2>Contact Us</h2>
        <span> Get in touch with our support team for any inquiries or issues. Reach out via email, phone, or our online form for prompt and friendly assistance. Your satisfaction is our top priority.</span>
    </div>
   
    <div class="containercontact">

      <div class="row">

        <div class="contactinformation">
          <div class="contactinfoitem">
            <div class="contactinfoicon">
            <House size={32} />
            </div>
            <div class="contactinfocontent">  
              <h4>Address</h4>
              <span>CUSAT Campus Road, Ernakulam,
               Kochi, Kerala,682022</span>
           </div>


          </div>
          
          <div class="contactinfoitem">
            <div class="contactinfoicon">
            <Phone size={32} />
            </div>
            
            <div class="contactinfocontent">
              <h4>Phone</h4>
              <span>+918911233488</span>
            </div>
          </div>
          
          <div class="contactinfoitem">
            <div class="contactinfoicon">
            <Envelope size={32} />
            </div>
            
            <div class="contactinfocontent">
              <h4>Email</h4>
             <span>electrobaazar@gmail.com</span>
            </div>
          </div>
        </div>
        </div>

        <div class="contactform">
          <form action="" id="contactform">
            <h3>Send Message</h3>
            <div class="inputbox">
            <span>Full Name</span>
            <input type="text" required="true" name="" placeholder='Your full name here'/>
            </div>
            
            <div class="inputbox">
            <span>Email</span>
              <input type="email" required="true" name="" placeholder='Type you email'/>
              
            </div>
            
            <div class="inputbox">
            <span>Type your Message...</span>
             <textarea required="true" name=" "placeholder='type here...'></textarea>
             
            </div>
            
            <div class="buttonclass">
              <button>Send</button>
            </div>
          </form>
        </div>
    
     
    </div>
  
    </div>
  )
}

export default Contact
