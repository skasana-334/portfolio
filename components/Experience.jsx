import React from 'react'
import html from '../public/exp/html.png'
import css from '../public/exp/css.png'
import react from '../public/exp/react.png'
import bootstrap from '../public/exp/bootstrap.jpeg'
import js from '../public/exp/js.png'
import next from '../public/exp/next.png'
import tailwind from '../public/exp/tailwind.png'

import Image from 'next/image'
const Experience = () => {
  const exp=[
    {
      id:1,
      title:"html",
      src:html,
      clr:'shadow-orange-500'
    },
    {
      id:2,
      title:"css",
      src:css,
      clr:'shadow-blue-500'
    },
    {
      id:3,
      title:"javasript",
      src:js,
      clr:'shadow-yellow-500'
    },
    {
      id:4,
      title:"react js",
      src:react,
      clr:'shadow-sky-500'
    },
    {
      id:5,
      title:"next.Js",
      src:next,
      clr:'shadow-white'
    },
    {
      id:6,
      title:"tailwind css",
      src:tailwind,
      clr:'shadow-green-400'
    },
    {
      id:7,
      title:"bootstrap",
      src:bootstrap,
      clr:'shadow-violet-700'
    },
     
  ]
  return (
    <div id='experience' className='w-full '>
        <div className='max-w-screen-xl mx-auto text-center md:text-left px-4 py-8'>
       <h2 className='text-5xl md:text-7xl tracking-wider text-green-600 capitalize '>Tech stacks</h2>
       <p className='py-4 max-w-3xl'>Thaese are the technologies i&apos;ve worked with.I have explored range of technologies in front-end developement.
     </p>
       <div className='grid md:grid-cols-3 gap-10'>
       {
        exp.map(({id,title,src,clr})=>(
         <div key={id} className={`flex flex-col lg:flex-row gap-10 lg:gap-2 items-center justify-between shadow-lg  ${clr} rounded-xl hover:scale-105 ease-in duration-300 p-6 mt-2 `}>
<Image src={src}  width='72' height='72' alt={title}></Image>
<h3 className='font-semibold capitalize text-white'>{title}</h3>
          </div>
        ))
       }
       </div>
      </div>
    </div>
  )
}

export default Experience
