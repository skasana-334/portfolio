import Image from 'next/image'
import React from 'react'
import sagar from '/public/sagar.jpg'
import Link from 'next/link'
import {MdExpandMore} from 'react-icons/md'
const Homepage = () => {
  return (
    <div id='home' className='w-full '>
    <div className='max-w-screen-xl mx-auto text-center md:text-left px-4 py-8'>
   <div className='flex flex-col md:flex-row gap-4 mt-8 '>
    <div className='w-full md:w-1/2 h-full rounded-xl p-4 mt-8 flex flex-col'>
        <Image src={sagar}  alt='no pic' width='300' height='350 ' className='rounded-2xl'/>
      
   </div>
   
   <div className='max-w-screen-xl mx-auto w-full h-full pt-24 p-4 flex flex-col justify-around items-center'>
<h1 className='text-7xl text-gray-500 '>“Hi <span className='text-cyan-600'>there!</span>”</h1>
<p className='max-w-sm text-xl text-center t'>“Welcome to my portfolio! I’m an engineering student with a good knowledge of DSA and interseted front-end development. Take a look at my work and see what I can do.”</p>
<div className='flex justify-center items center gap-x-4  '>
<Link href='/Resume_Sagar_Kasana.pdf' download={true}>
<div className='bg-green-500 p-2 font-semibold uppercase flex justify-center items-center text-white rounded-md px-7 my-6 tracking-wider group cursor-pointer '>Resume
<span className='-rotate-90 group-hover:translate-x-3'><MdExpandMore size={25}></MdExpandMore></span>
</div>
</Link>
</div>
  </div>


 
  </div>    
   
        </div>
    </div>

  )
}

export default Homepage
