import React from 'react'
import './social.css'
import { FaLinkedin} from 'react-icons/fa'
import {FiGithub} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import {AiOutlineMedium} from 'react-icons/ai'
const Social = () => {
  return (
    <div className='social_nav'>
    
    <a href="https://www.linkedin.com/in/anushka-sahu/"><FaLinkedin/></a>
    <a href="https://github.com/Anushka561"><FiGithub/></a>
    <a href="https://twitter.com/CODEYko"><IoLogoTwitter/></a>
    <a href="https://medium.com/@anushka3935"><AiOutlineMedium/></a>
    </div>
   

  )
}

export default Social
