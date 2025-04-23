import React from 'react'
import {assets} from '../../assets/assets'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Contact = ({ Darkmode }) => {
  return (
    <div id='contact' className='flex md:flex-row flex-col  justify-between items-center my-10 md:px-5 px-0'>
      <div className='' >
        <img className='md:w-[900px] w-[300px] rounded-2xl' src={assets.contact} alt="" />
      </div>
      <div className='w-full flex  flex-col  justify-center items-center gap-5' >
        <h1 className={`text-5xl font-bold ${Darkmode ? "text-white" : ""} md:mt-0 mt-4 `} >Let's Connect🤝</h1>
        <div className='flex justify-center items-center gap-5' >
          <a href="http://wa.me/919307220120" target="_blank" ><FaWhatsapp className={`text-5xl ${Darkmode ? "text-gray-500" : ""} hover:text-green-500 `} /></a>         
          <a href="www.linkedin.com/in/amey-powar-a85869332"><FaLinkedin className={`text-5xl ${Darkmode ? "text-gray-500" : ""} hover:text-blue-500 `} /></a>
          <a href="https://github.com/Amey2815"><FaGithub className={`text-5xl ${Darkmode ? "text-gray-500 hover:text-white " : " "}  `} /></a>
          <a href=""><FaTwitter className={`text-5xl ${Darkmode ? "text-gray-500" : ""} hover:text-blue-500 `} /></a>
        </div>

        <div>

        </div>
      </div>
    </div>
  )
}

export default Contact
