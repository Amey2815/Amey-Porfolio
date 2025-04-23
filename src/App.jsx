import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Header from './components/Header/Header.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Projects from './components/Projects/Projects.jsx'

function App() {
   const [Darkmode, setDarkmode] = useState(true)

  return (
    <>
      <div className={`min-h-screen flex  justify-center items-start transition-colors duration-300 ${Darkmode ? "bg-gray-900" : "bg-gray-50"}`} >
        <div className='w-[80%]'>
          <Navbar Darkmode={Darkmode} setDarkmode={setDarkmode} />
          <Header Darkmode={Darkmode} />
          <About Darkmode={Darkmode} />
          <Projects Darkmode={Darkmode} />
          <Contact Darkmode={Darkmode} />
        </div>
      </div>
    </>
  )
}

export default App
