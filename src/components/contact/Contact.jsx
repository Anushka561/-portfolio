import React, { useState ,useRef} from 'react'
// import {send} from 'emailjs-com';
import './contact.css'
import emailjs from '@emailjs/browser';
// import {MdOutlineEmail} from 'react-icons/md'

import { FaLinkedin} from 'react-icons/fa'
import {FiGithub} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import {AiOutlineMedium} from 'react-icons/ai'

const Contact = () => {
  
//   const form = useRef();
//   const [toSend,setToSend]=useState({

//     name:'',
//     email:'',
//     message:''
//   })
//   // const [isDisabled,setIsDisabled]=useState(false);
// const valid={
//   email:false,
//   rest:false
// }

// const validation=(email,name,message,subject)=>{
//   const acceptedEmail=['gmail.com','yahoo.com','outlook.com','protomail.com','aol.com','icloud.com','me.com','mac.com','gmx.com','hey.com']

// if(email.match(/^[a-zA-Z0-9.!#$%&*`'+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
//   acceptedEmail.includes(email.split('@')[1])?
//   valid.email=true:valid.email=false;
// }else{
//  valid.email=false
// }

// if(name && message.length>100 ){
//     valid.rest=true;
//   console.log('here')
// }
// else{
//    valid.rest=false;
// }

// }

// const reset=()=>{
//   setToSend({
  
//     name:'',
//     email:'',
//     message:''
//   })
// }
// const handleClick=(e)=>{
//   e.preventDefault();
//   validation(toSend.email,toSend.name,toSend.message,toSend.subject)
//   const condition=Object.values(valid).every((value)=>value===true)
//   if(!condition){
//     error.current.style.display='block'
//     setTimeout(()=>{
//       error.current.style.display='none'
//     },4000)
//   }else{
//     error.current.style.display='none'
//     alert('sent')
//     // emailjs.sendForm(process.env.YOUR_SERVICE_ID,
//     //   process.env.YOUR_TEMPLATE_ID,
//     //   form.current,
//     //   process.env.YOUR_PUBLIC_KEY)
//     //   .then((result) => {
//     //     console.log(result.text);
//     //     alert('message sent')
//     //   }, (error) => {
//     //       console.log(error.text);
//     //   });

//     reset();
//   }
// }
// const handleChange=(e)=>{
// setToSend({...toSend,[e.target.name]:e.target.value})
// } 


  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
       
{/*      
        <form action="https://getform.io/f/5b44b455-4fe2-474a-867f-520259806013" ref={form} onSubmit={handleClick} method='POST'>
          <input type="text" name='name' value={toSend.name}  onChange={handleChange} placeholder='Your Full Name' required />
          <input type="text" name='email' value={toSend.email} onChange={handleChange} placeholder='Your Email' required />
          <textarea name="message" rows="7" value={toSend.message} onChange={handleChange} placeholder='Your message(more than 100 characters)' required></textarea> */}
            <form action="https://getform.io/f/5b44b455-4fe2-474a-867f-520259806013"   method='POST'>
          <input type="text" name='name'placeholder='Your Full Name' required />
          <input type="text" name='email'  placeholder='Your Email' required />
          <textarea name="message" rows="7"  placeholder='Your message' required></textarea>
          
          <div className="contact_socials">
          <button   type='submit' className='btn btn-primary'>Send Message</button>
          <div className='social'>
     
    <a href="https://www.linkedin.com/in/anushka-sahu-bb8bb3227/"><FaLinkedin/></a>
    <a href="https://github.com/Anushka561"><FiGithub/></a>
    <a href="https://twitter.com/CODEYko"><IoLogoTwitter/></a>
    <a href="https://medium.com/@anushka3935"><AiOutlineMedium/></a></div>
      </div>

        </form>
        {/* <p id='err' style={{color:'red',display:'none',margin:'10px'}} ref={error}>invalid input</p> */}
      </div>
    </section>
  )
}

export default Contact