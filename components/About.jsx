import React from 'react'
import {MdExpandMore} from 'react-icons/md'
import Link from 'next/link'
const About = () => {
  return (
    <div id='about' className='w-full '>
    <div className='max-w-screen-xl mx-auto md:text-left text-center px-4 py-8'>
   <h2 className='text-7xl md:text-7xl tracking-wider text-green-600 capitalize  '>About Me</h2>
   <div className='shadow-md shadow-sky-400 my-5 '>
    <div className='py-4 max-w-2xl mx-auto text-xl'>I&apos;m a Final year undergratuate pursuing B.Tech in Information Technology from Harcout Butler Technical University.<br></br>
    I am good in problem solving and in DSA(Data Structures & Algorithms) and excel in problem-solving.<br></br>
    I am interested in Front-End Developement also and i have knowledge of Html,Css and Frameworks of Javascript such as React.js and Tailwind css.
    
    </div>
   </div>

   </div>
   </div>
  )
}

export default About
