import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {MdExpandMore} from 'react-icons/md'
const Homepage = () => {
  return (
    <div id='home' className='h-screen w-full text-center'>
      <div className='max-w-screen-xl mx-auto w-full h-full pt-24 p-4 flex flex-col justify-around items-center'>
        <div className='mx-auto overflow-hidden rounded-full'>
<Image src='/sagar.jpg' alt='no pic' width='256' height='300'/>
</div>
<h1 className='text-7xl text-gray-500 '>Front-End Developer</h1>
<p className='max-w-sm text-xl text-center t'>I am a front-end developer who loves to work in the field of Software Developement using React Tailwind and Next.js</p>
<Link href='/#about me'>
  <div className='bg-green-500 p-2 font-semibold uppercase flex justify-center items-center text-white rounded-md px-3 my-6 tracking-wider group cursor-pointer'>Know more
  <span className='-rotate-90 group-hover:rotate-0 '><MdExpandMore size={25}></MdExpandMore></span>
  </div>
  
</Link>
      </div>
    
    </div>
  )
}

export default Homepage
