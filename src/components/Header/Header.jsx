import React from 'react'
import {assets} from '../../assets/assets'
const Header = ({Darkmode}) => {
    return (
        <div className='md:h-[80vh] h-[70vh] flex flex-col md:flex-row justify-center items-center gap-5 ' >
            <div className='sm:w-[600px] w-full flex flex-col justify-center items-center md:items-start text-center md:text-left' >
                <h1 className='lg:text-6xl md:text-5xl  text-4xl font-bold  mb-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse'>Full-Stack Developer & Tech Innovator </h1>
                <p className={`${Darkmode ? "text-white" : ""} ml-2 mb-5 lg:text-[16px] md:text-[12px] hidden sm:flex `} >I'm a full-stack developer from Kolhapur, passionate about building web applications, AI, and problem-solving.</p>
                <div className='flex gap-5 ml-2' >
                    <a className='text-white px-3 py-2 bg-violet-500 hover:bg-violet-800 rounded-[6px] ' href='' >View Projects</a>
                    <a className='text-white px-3 py-2 bg-violet-500 hover:bg-violet-800 rounded-[6px] ' href='#contact' >Contact me</a>
                </div>
            </div>
            <div className='drop-shadow-xl'>
                <img className=' w-70 md:w-85  lg:w-95 rounded-2xl' src={assets.pic} alt="" />
            </div>
        </div>
    )
}

export default Header
