import React from 'react'
import {MdExpandMore} from 'react-icons/md'
import Link from 'next/link'
const About = () => {
  return (
    <div id='about me' className='w-full '>
    <div className='max-w-screen-xl mx-auto md:text-left text-center px-4 py-8'>
   <h2 className='text-5xl md:text-7xl tracking-wider text-green-600 capitalize '>About Me</h2>
   <div className='shadow-md shadow-sky-400 my-5 '>
    <div className='py-4 max-w-2xl mx-auto '>I&apos;m a third year undergratuate pursuing B.tech in information technology from Harcout Butler Technical University.I have a keen interset in problem solving,data structure and algorithms (dsa) and in web developement.
    
    </div>
   </div>
   <div className='flex justify-center items center gap-x-4  '>
    <Link href='apnaa(1).pdf' download={true}>
<div className='bg-green-500 p-2 font-semibold uppercase flex justify-center items-center text-white rounded-md px-7 my-6 tracking-wider group cursor-pointer '>Resume
  <span className='-rotate-90 group-hover:translate-x-3'><MdExpandMore size={25}></MdExpandMore></span>
  </div>
  </Link>
</div>
   </div>
   </div>
  )
}

export default About
