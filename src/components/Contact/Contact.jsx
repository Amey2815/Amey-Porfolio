import React from 'react'
import { assets } from '../../assets/assets'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { PinContainer } from '../ui/3d-pin';
const Contact = ({ Darkmode }) => {
  return (
    <div id='contact' className='flex md:flex-row flex-col h-96 justify-between items-center my-10 md:px-5 px-0'>
      <div className='w-full h-full' >
        <PinContainer
          title='Amey Powar'
          href="https://www.instagram.com/powaramey1?igsh=dHQ0MDJ3N3E4Ynhi&utm_source=qr"
        >
          <div className='flex  flex-col w-96  ' >
            <img className='md:w-[900px] w-[300px] h-full rounded-2xl' src={assets.contact} alt="" />
          </div>
        </PinContainer>

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
