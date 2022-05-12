import React,  {useState } from "react";
import './ContactMe.css'
import Heading from "../Heading/Heading";
import mailsrc from '../../assets/ContactMe/mail.jpeg';
import emailjs from "emailjs-com"
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import Swal from "sweetalert2";

const SERVICE_ID = "service_8840ijv";
const TEMPLATE_ID = "template_dynteja";
const USER_ID = "JuZ41Wl3HgEDVsHx4";

function ContactMe() {
    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
          .then((result) => {
            console.log(result.text);
            Swal.fire({
              icon: 'success',
              title: 'Message Sent Successfully'
            })
          }, (error) => {
            console.log(error.text);
            Swal.fire({
              icon: 'error',
              title: 'Ooops, something went wrong',
              text: error.text,
            })
          });
        e.target.reset()
      };
    return (
        <div className='main-container  fade-in' id="ContactMe" style={{opacity: 5, transform: "translateY(1)"}}>
            <Heading head ='Contact Me' title = 'Lets Keep In Touch'/>
            <div className="central-form">
                <div className="col">
                    <h2>Get In Touch📩</h2>
                    <a href='https://www.linkedin.com/in/nvard-asryan-24b6a21bb'>
                        <i className='fa fa-linkedin-square'></i>
                    </a>
                    <a href='https://twitter.com/nvardasryan'>
                        <i className='fa fa-twitter-square'></i>
                    </a>
                </div>
                <div className="back-form">
                    <div className="img-back">
                        <h4>Send Your Email Here!</h4>
                        <img src={mailsrc} alt="a"/>
                    </div>
                    <Form onSubmit={handleOnSubmit}>
                        <Form.Field
                            id="form-input-control-email"
                            control={Input}
                            label="Email"
                            name="user_email"
                            placeholder="Email…"
                            required
                            icon="mail"
                            iconPosition="left"
                        />
                        <Form.Field
                            id="form-input-control-last-name"
                            control={Input}
                            label="Name"
                            name="user_name"
                            placeholder="Name…"
                            required
                            icon="user circle"
                            iconPosition="left"
                        />
                        <Form.Field
                            id="form-textarea-control-opinion"
                            control={TextArea}
                            label="Message"
                            name="user_message"
                            placeholder="Message…"
                            required
                        />
                        <Button type="submit" color="green" >Send<i className="fa fa-paper-plane"></i></Button>
                    </Form>
                </div>
            </div>
        </div>
    ); 
}

export default ContactMe;