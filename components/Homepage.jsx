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
<h1 className='text-7xl text-gray-500 '>“Hi <span className='text-cyan-600'>there!</span>”</h1>
<p className='max-w-sm text-xl text-center t'>“Welcome to my portfolio! I am an engineering student with a strong understanding of Data Structures and Algorithms and  interested in front-end development. Please take a look at my work to see what I am capable of.”</p>
<div className='flex justify-center items center gap-x-4  '>
    <Link href='/myresume.pdf' download={true}>
<div className='bg-green-500 p-2 font-semibold uppercase flex justify-center items-center text-white rounded-md px-7 my-6 tracking-wider group cursor-pointer '>Resume
  <span className='-rotate-90 group-hover:translate-x-3'><MdExpandMore size={25}></MdExpandMore></span>
  </div>
  </Link>
</div>
      </div>
    
    </div>
  )
}

export default Homepage
