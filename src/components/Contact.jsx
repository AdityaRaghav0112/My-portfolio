import React from 'react'
import ContactForm from './ContactForm'
import {Mail} from 'lucide-react';

const Contact = () => {
  return (
    <div className='grid grid-cols-2 grid-rows-1 place-items-stretch mx-[10rem] gap-5'>
        <div className="item1 h-[40rem]">
            <h1 className='text-white font-semibold text-5xl py-2'>Get in Touch</h1>
            <p className='text-gray-400 font-semibold py-3'>I'm always open to discussing new projects, creative ideas or opportunities. Feel free to reach out.</p>
            <h2 className='text-white font-semibold text-xl py-2 mt-8'>Contact Information</h2>
            <div className='flex gap-3 items-center'>
                <Mail className='text-white size-10 bg-blue-950 p-1 rounded-lg'/>
                <div>
                    <h5 className='text-white '>Email</h5>
                    <p className='text-gray-400 text-sm'>adityaraghav239@gmail.com</p>
                </div>
            </div>
            <div>
                <h2 className='text-white font-semibold text-xl mt-10'>Contact with me</h2>
            </div>

        </div>
        <div className="item2 h-[40rem]">
            <ContactForm/>
        </div>

    </div>
  )
}

export default Contact
