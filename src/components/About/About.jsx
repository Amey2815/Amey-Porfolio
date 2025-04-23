import React from 'react'
import {assets} from '../../assets/assets.js'
const About = ({ Darkmode }) => {
    return (
        <div id='about' className=' flex flex-col justify-center items-center'>
            <div className='w-[80%]'>
                <h1 className={` ${Darkmode ? "text-white" : ""} font-bold md:text-4xl text-2xl text-center uppercase`} >About me</h1>
                <div className='flex flex-col md:mt-10 mt-3 mb-7' >
                    <p className={`${Darkmode ? "text-white" : "text-black"} text-3xl uppercase text-center md:text-left font-semibold mb-4`} >Amey Powar</p>
                    <p className={`${Darkmode ? "text-gray-50" : "text-black"} text-[17px] text-center md:text-left  mb-5`} >I'm a full-stack developer from <span className='text-violet-500' >Kolhapur, India</span>, passionate <span className='text-violet-500' >about React, Node.js, and modern web technologies.
                    </span>I completed my degree from <span className='text-violet-500' >D.Y.Patil ATU Talsande</span> with a 6.58 CGPA. I have a deep interest in <span className='text-violet-500' >AI, problem-solving</span>. Besides coding, I'm passionate about <span className='text-violet-500' >fitness</span> and love working on innovative projects to enhance my skills.
                    </p>
                    <p className={`${Darkmode ? "text-white" : "text-black"} text-2xl uppercase font-semibold`} >My Skiils</p>
                    <div className='grid grid-cols-2 md:grid-cols-3 p-5 gap-2' >
                        <div className={`sm:px-4 px-10 py-3 flex justify-center items-center ${Darkmode ? "bg-gray-700 text-gray-300 border-gray-600 hover:bg-gray-300 hover:text-gray-800 " : "bg-gray-300 text-gray-800 border-gray-800 hover:bg-gray-800 hover:text-gray-300 "} border  text-center rounded-[8px] gap-2`} ><img className='w-5' src={assets.react} alt="" /><p>react.js</p></div>
                        <div className={`sm:px-4 px-10 py-3 flex justify-center items-center ${Darkmode ? "bg-gray-700 text-gray-300 border-gray-600 hover:bg-gray-300 hover:text-gray-800 " : "bg-gray-300 text-gray-800 border-gray-800 hover:bg-gray-800 hover:text-gray-300 "} border  text-center rounded-[8px] gap-2`} ><img className='w-5' src={assets.node} alt="" /><p>Node.js</p></div>
                        <div className={`sm:px-4 px-10 py-3 flex justify-center items-center ${Darkmode ? "bg-gray-700 text-gray-300 border-gray-600 hover:bg-gray-300 hover:text-gray-800 " : "bg-gray-300 text-gray-800 border-gray-800 hover:bg-gray-800 hover:text-gray-300 "} border  text-center rounded-[8px] gap-2`} ><img className='w-5' src={assets.nextjs} alt="" /><p>Next.js</p></div>
                        <div className={`sm:px-4 px-10 py-3 flex justify-center items-center ${Darkmode ? "bg-gray-700 text-gray-300 border-gray-600 hover:bg-gray-300 hover:text-gray-800 " : "bg-gray-300 text-gray-800 border-gray-800 hover:bg-gray-800 hover:text-gray-300 "} border  text-center rounded-[8px] gap-2`} ><img className='w-5' src={assets.express} alt="" /><p>Express.js</p></div>
                        <div className={`sm:px-4 px-10 py-3 flex justify-center items-center ${Darkmode ? "bg-gray-700 text-gray-300 border-gray-600 hover:bg-gray-300 hover:text-gray-800 " : "bg-gray-300 text-gray-800 border-gray-800 hover:bg-gray-800 hover:text-gray-300 "} border  text-center rounded-[8px] gap-2`} ><img className='w-5' src={assets.mongodb} alt="" /><p>MongoDB</p></div>
                        <div className={`sm:px-4 px-10 py-3 flex justify-center items-center ${Darkmode ? "bg-gray-700 text-gray-300 border-gray-600 hover:bg-gray-300 hover:text-gray-800 " : "bg-gray-300 text-gray-800 border-gray-800 hover:bg-gray-800 hover:text-gray-300 "} border  text-center rounded-[8px] gap-2`} ><img className='w-5' src={assets.mysql} alt="" /><p>MySQL</p></div>
                        <div className={`sm:px-4 px-10 py-3 flex justify-center items-center ${Darkmode ? "bg-gray-700 text-gray-300 border-gray-600 hover:bg-gray-300 hover:text-gray-800 " : "bg-gray-300 text-gray-800 border-gray-800 hover:bg-gray-800 hover:text-gray-300 "} border  text-center rounded-[8px] gap-2`} ><img className='w-5' src={assets.js} alt="" /><p>Javascript</p></div>
                        <div className={`sm:px-4 px-10 py-3 flex justify-center items-center ${Darkmode ? "bg-gray-700 text-gray-300 border-gray-600 hover:bg-gray-300 hover:text-gray-800 " : "bg-gray-300 text-gray-800 border-gray-800 hover:bg-gray-800 hover:text-gray-300 "} border  text-center rounded-[8px] gap-2`} ><img className='w-5' src={assets.java} alt="" /><p>java</p></div>
                        <div className={`sm:px-4 px-10 py-3 flex justify-center items-center ${Darkmode ? "bg-gray-700 text-gray-300 border-gray-600 hover:bg-gray-300 hover:text-gray-800 " : "bg-gray-300 text-gray-800 border-gray-800 hover:bg-gray-800 hover:text-gray-300 "} border  text-center rounded-[8px] gap-2`} ><img className='w-5' src={assets.Postman} alt="" /><p>Postman</p></div>
                        <div className={`sm:px-4 px-10 py-3 flex justify-center items-center ${Darkmode ? "bg-gray-700 text-gray-300 border-gray-600 hover:bg-gray-300 hover:text-gray-800 " : "bg-gray-300 text-gray-800 border-gray-800 hover:bg-gray-800 hover:text-gray-300 "} border  text-center rounded-[8px] gap-2`} ><img className='w-5' src={assets.Tailwind} alt="" /><p>Tailwind CSS</p></div>
                        <div className={`sm:px-4 px-10 py-3 flex justify-center items-center ${Darkmode ? "bg-gray-700 text-gray-300 border-gray-600 hover:bg-gray-300 hover:text-gray-800 " : "bg-gray-300 text-gray-800 border-gray-800 hover:bg-gray-800 hover:text-gray-300 "} border  text-center rounded-[8px] gap-2`} ><img className='w-5' src={assets.Bootstrap} alt="" /><p>Bootstrap</p></div>
                    </div>
                    <div className='flex md:justify-start justify-center items-center mt-2'>
                    <a className='text-white px-3 py-2 bg-violet-500 hover:bg-violet-800 rounded-[6px] ' href="../public/Amey_Powar.pdf" download="Amey_Powar_Resume.pdf" >Download Resume</a>
                    </div>
                </div>

                

            </div>
        </div>
    )
}

export default About
