import React from 'react'
import html from '../public/exp/html.png'
import css from '../public/exp/css.png'
import react from '../public/exp/react.png'
import bootstrap from '../public/exp/bootstrap.jpeg'
import figma from '../public/exp/figma.png'
import node from '../public/exp/node.jpg'
import sql from '../public/exp/sql.png'
import js from '../public/exp/js.png'
import cpp from '../public/exp/cpp.png'
import next from '../public/exp/next.png'
import tailwind from '../public/exp/tailwind.png'

import Image from 'next/image'
const Experience = () => {
  const lang=[
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
      title:"C++",
      src:cpp,
      clr:'shadow-blue-800'
    },
    {
      id:5,
      title:"SQL",
      src:sql,
      clr:'shadow-sky-500'
    },
  ]
  const frame=[
    {
      id:1,
      title:"React",
      src:react,
      clr:'shadow-green-300'
    },
    {
      id:2,
      title:"Tailwind",
      src:tailwind,
      clr:'shadow-teal-500'
    },
    {
      id:3,
      title:"Next.js",
      src:next,
      clr:'shadow-white-500'
    },
    {
      id:4,
      title:"Bootstrap",
      src:bootstrap,
      clr:'shadow-violet-800'
    },
    {
      id:5,
      title:"Node.js",
      src:node,
      clr:'shadow-green-800'
    },
    {
      id:6,
      title:"figma",
      src:figma,
      clr:'shadow-orange-700'
    },
  ]
  return (
    <div id='skills' className='w-full '>
        <div className='max-w-screen-xl mx-auto text-center md:text-left px-4 py-8'>
       <h2 className='text-5xl md:text-7xl tracking-wider text-green-600 capitalize '>Skills</h2>
       <p className='py-4 max-w-3xl text-xl'>These are the technologies i&apos;ve worked with.<br></br>
       I have explored range of technologies in front-end developement.
     </p>
     <div >
     <h4 className='text-5xl md:text-7xl tracking-wider text-center text-green-600 capitalize mb-4'>Languages</h4>
       <div className='grid md:grid-cols-4 gap-3 mb-4 pb-4'>
       {
        lang.map(({id,title,src,clr})=>(
         <div key={id} className={`flex flex-col lg:flex-row gap-10 lg:gap-2 items-center justify-between shadow-lg  ${clr} rounded-xl hover:scale-105 ease-in duration-300 p-6 mt-2 `}>
<Image src={src}  width='72' height='72' alt={title}></Image>
<h3 className='font-semibold capitalize text-white'>{title}</h3>
          </div>
        ))
       }
       </div>
       <h4 className='text-5xl md:text-7xl tracking-wider text-center text-green-600 capitalize mt-4 mb-4'>Frameworks & Others</h4>
       <div className='grid md:grid-cols-3 gap-3'>
       {
        frame.map(({id,title,src,clr})=>(
         <div key={id} className={`flex flex-col lg:flex-row gap-10 lg:gap-2 items-center justify-between shadow-lg  ${clr} rounded-xl hover:scale-105 ease-in duration-300 p-6 mt-2 `}>
<Image src={src}  width='72' height='72' alt={title}></Image>
<h3 className='font-semibold capitalize text-white'>{title}</h3>
          </div>
        ))
       }
       </div>
      </div>
    </div>
    </div>
  )
}

export default Experience
