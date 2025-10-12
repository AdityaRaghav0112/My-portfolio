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
        <button className='w-10 h-10 flex items-center justify-center bg-cyan-950 rounded-full'><Linkedin/></button>
        <button className='w-10 h-10 flex items-center justify-center bg-cyan-950 rounded-full'><Github/></button>
      </div>
    </div>
    <hr className='text-blue-400' />
    </>
  )
}

export default Header
