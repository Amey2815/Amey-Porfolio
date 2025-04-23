import React from 'react'
import { IoSunnySharp } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";
const Navbar = ({ Darkmode, setDarkmode }) => {
    return (
        <div className={`flex justify-between m-5 sticky top-0  items-center  px-7 h-[80px] z-50 ${Darkmode ? "bg-gray-900/80 border-gray-700" : "bg-gray-900/80"} backdrop-blur-sm   border-b border-gray-200`} >
            <h1 className=' text-2xl font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>Amey</h1>
            <div className='flex gap-5 justify-center items-center ' >
                <ul className=' hidden md:flex justify-center items-center gap-3 text-white ' >
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact" >Contact</a></li>
                    <li><a href="#projects">Projects</a></li>
                </ul>
                {Darkmode ? (<button onClick={()=>setDarkmode(false)} className='w-9 bg-[#878787ac] h-9 flex justify-center items-center rounded-full ' ><IoSunnySharp className='text-xl text-yellow-500' /></button>)
                 :
                  (<button onClick={()=>setDarkmode(true)} className='w-9 bg-[#878787ac] h-9 flex justify-center items-center rounded-full ' ><IoMoon className='text-xl ' /></button>) 
                
                 
                }


            </div>


        </div>
    )
}

export default Navbar
