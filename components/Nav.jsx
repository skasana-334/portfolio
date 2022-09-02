import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { FaBars, FaEnvelopeSquare,  FaGithub,  FaInstagram,  FaLinkedin, FaTimes } from 'react-icons/fa'
const Nav = () => {
  const[bar,setbar]=useState(false);
  const[pgscroll,setpgscroll]=useState(false);
  useEffect(()=>{
    const page=window.addEventListener('scroll',()=>
    setpgscroll(window.scrollY>=10))
    return page;
  })
  const nav=[
    {
      id:1,
      link:'home'
    },
     {
      id:2,
      link:'projects'
    },
    {
      id:3,
      link:'skills'
    },
     {
      id:4,
      link:'about me'
    },
    
     {
      id:5,
      link:'contact me'
    },
  ]
  return (
    <div className={`w-full h-20 z-10 fixed bg-white text-black  ${pgscroll&&'bg-[#3D3C42] text-[#fff]'}`}>
      <div className='flex justify-between items-center p-4 w-full h-full max-w-screen-xl mx-auto'>
        <Link href='/'><h1 className='text-3xl lg:text-4xl uppercase underline underline-offset-2 cursor-pointer tracking-wider '>sagar</h1></Link>
        <div>

            <ul className='hidden md:flex'>
            {
  nav.map(({id,link})=>(
    <Link key={id} href={`/#${link}`}>
    <li  className='ml-10 uppercase text-sm  tracking-wider cursor-pointer ease-out duration-200 hover:scale-105 '>{link}</li> 
     </Link>)
  )
}
            </ul>
            {
              !bar&&(<div className='md:hidden cursor-pointer' onClick={()=>{setbar(true)}}>
              <FaBars size={30}/>
              </div>)//it is like if else
            }
            
        </div>
      </div>
      <div className={bar?'md:hidden fixed w-full h-full bg-black/70 backdrop-blur left-0 top-0':""}>
<div className={bar?'fixed left-0 top-0 w-4/5 h-full bg-gradient-to-r from-gray-600 to-blue-300 text-white p-8 ease-in duration-500':'fixed top-0 left-[-100%]'}>
  <div>
    <div className='flex w-full justify-between items-center'>
      <Link href='/#home'>
        <h2 onClick={()=>setbar(false)}  className='text-3xl font-semibold uppercase cursor-pointer underline underline-offset-2 tracking-wider ease-in duration-100 hover:text-blue-300 '>sagar</h2>
      </Link>
      <div className='cursor-pointer' onClick={()=>{setbar(false)}}><FaTimes size={30}></FaTimes></div>
    </div>
  </div>
<div className='flex flex-col h-fit gap-20 mt-24'>
  <ul >
    {
      nav.map(({id,link})=>(
        <Link key={id} href={`/#${link}`}>
          <li onClick={()=>setbar(false)} className='uppercase cursor-pointer tracking-wider  py-4 text-2xl ease-out duration-100 hover:scale-90  '>{link}</li>
        </Link>
      ))
    }

  </ul>
  <div>
    <div className='grid grid-cols-2 gap-10 mx-auto w-4/5 '>
      <Link href='https://www.linkedin.com/in/sagar-kasana-49a493216/'>
      <div className='flex  items-center justify-center rounded-full shadow-md shadow-green-300 p-3 cursor-pointer hover:scale-105 ease-out duration-200'><FaLinkedin size={25}></FaLinkedin></div>
      </Link>
      <Link href='https://github.com/skasana-334'>
      <div className='flex  items-center justify-center rounded-full shadow-md shadow-green-300  p-3 cursor-pointer  hover:scale-105 ease-out duration-200'><FaGithub size={25}></FaGithub></div>
      </Link>
      </div>
      <Link href='https://www.instagram.com/'>
      <div className='grid grid-cols-1 gap-10 mx-auto w-2/5 py-4'>
      <div className='flex justify-center items-center rounded-full shadow-md shadow-green-300  p-3 cursor-pointer  hover:scale-105 ease-out duration-200'><FaInstagram size={25}></FaInstagram></div>
  
      </div>
      </Link>
  </div>
</div>
</div>
</div>
    </div>
  )
}

export default Nav
