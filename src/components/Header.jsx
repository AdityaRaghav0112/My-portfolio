import React from 'react'
import {Linkedin, Github} from 'lucide-react'

const Header = () => {

    const navLinks = [
        {id: "about", title:"About"},
        {id:'projects', title:"Projects"},
        {id: 'contact', title:"Contact"},
    ]

  return (
    <> 
    <div className='flex justify-between py-7 items-center px-10 mx-10 text-white'>
      <div className="main">
        <h1 className='font-semibold text-xl'>Aditya Raghav</h1>
      </div>
      <ul className='flex justify-evenly space-x-15 font-medium text-gray-200'>
        {navLinks.map((link) => (
            <li key={link.id}>
                <a href={`#${link.id}`}>{link.title}</a>
            </li>
        ))}
      </ul>
      <div className="btns flex space-x-3">
        <button onClick={() => window.open("https://linkedin.com/in/aditya-raghav-958247259")} className='w-10 h-10 flex items-center justify-center bg-cyan-950 rounded-full hover:scale-120 duration-100 hover:border-2 hover:border-blue-400 '><Linkedin/></button>
        <button onClick={() => window.open("https://github.com/AdityaRaghav0112", "_blank")} className='w-10 h-10 flex items-center justify-center bg-cyan-950 rounded-full hover:scale-120 hover:border-2 hover:border-blue-400 duration-100'><Github/></button>
      </div>
    </div>
    <hr className='text-blue-400' />
    </>
  )
}

export default Header
