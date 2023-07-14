import Image from 'next/image'
import React from 'react'
import contact from '../public/exp/contact.jpg'
import { FaGithub,  FaLinkedin } from 'react-icons/fa'
import {IoMdCall} from 'react-icons/io'
import {SiGmail} from 'react-icons/si'
import Link from 'next/link'
const Contact = () => {
  return (
      <div id='contact me' className='w-full'>
        <div className='max-w-screen-xl mx-auto text-center md:text-left px-4 py-8'>
       <h2 className='text-5xl md:text-7xl tracking-wider text-green-600 capitalize '>contact me</h2>
       <div className='flex flex-col md:flex-row gap-8 mt-4 shadow-lg shadow-blue-400'>
        <div className='w-full md:w-1/2 h-full rounded-xl p-4 mt-4 flex flex-col'>
            <Image src={contact}  alt='no pic' width='450' height='300 ' className='rounded-2xl'/>
            <p className='text-2xl pt-2 pb-3'>I am open to talk regarding internships or full-time opportunities.
            <div>
            Feel free to contact me using your preferred medium.</div></p>
          
       </div>
       
     
 
      <div className='my-auto mx-auto '>
      <Link href="tel:+919999572480">
      <a>
        <IoMdCall size={25} className='ease-in duration-75 hover:scale-125 cursor-pointer inline' />
      </a>
    </Link>
<h1 className=' px-8 text-xl'>9999572480</h1>
<button onClick={() => window.location = 'mailto:sagarkasana482@gmail.com'} className='ease-in duration-75 hover:scale-125'>
<SiGmail size={25}></SiGmail></button>
<h1 className='px-2 text-xl'>sagarkasana482@gmail.com</h1>
</div>
      </div>    

               <div className='w-full md:w-1/2 h-full rounded-xl p-4 mt-4 flex flex-col mx-auto'>
       <div className='grid grid-cols-2 gap-10 mx-auto w-4/5 pt-8 '>
        <Link href='https://www.linkedin.com/in/sagar-kasana-49a493216/'>
      <div className='flex  items-center justify-center rounded-full shadow-md shadow-green-300 p-3 cursor-pointer hover:scale-105 ease-out duration-200'><FaLinkedin size={25}></FaLinkedin></div>
      </Link>
      <Link href='https://github.com/skasana-334'>
      <div className='flex  items-center justify-center rounded-full shadow-md shadow-green-300  p-3 cursor-pointer  hover:scale-105 ease-out duration-200'><FaGithub size={25}></FaGithub></div>
      </Link>
      
      </div>
      </div> 
       
            </div>
        </div>

   
  )
}

export default Contact
