import React from 'react'
import Link from 'next/link'

import Image from 'next/image'
export const getStaticProps=async()=>{
  const portfolios=[
    {
      id:1,
      title:'Ipl Auction Management',
    src:'/iplauction.jpg',
    name:'iplauction',
  },
    {
      id:2,
      title:'Resume Builder',
    src:'/resumebuild.png',
    name:'resumebuild',
  },
  {
    id:3,
    title:'Videomeet',
  src:'/meet.png',
  name:'meet',
},
    {
        id:4,
        title:'Tower Of Hanoi',
      src:'/toh.jpg',
      name:'toh334',
    },
    
    {
        id:5,
        title:'Weather App',
      src:'/weather.jpg',
      name:'weather',
    },
    {
        id:6,
        title:'My Portfolio',
      src:'/portfolio.png',
      name:'myportfolio',
    }
]
return{
  props:{portfolios},
}
}
const ourportfolio = ({portfolios}) => {
  return (
    <div id='portfolio' className='w-full'>
        <div className='max-w-screen-xl mx-auto text-center md:text-left pt-24 p-4'>
       <h2 className='text-5xl md:text-7xl tracking-wider text-green-600 capitalize font-bold pb-8 '>projects</h2>
       
       <div className='max-w-5xl  grid md:grid-cols-2 gap-20'>
      {
        portfolios.map(({id,title,src,name})=>(
          <Link key={id} href={`/portfolio/${name}`}>
            <div className='cursor-pointer   group shadow-md shadow-sky-600 overflow-hidden rounded-md  '>
              <Image src={src} alt={title} width='900' height='400' className='rounded-md duration-200 hover:scale-110 ' ></Image>
              <h2 className='text-center text-base capitalize  group-hover:underline underline-offset-4 duration-200 my-2 text-violet-500'>{title}</h2>
              
            </div>
           
          </Link>
        ))
      }
   

       </div>
       </div>
    </div>
  
  )
}

export default ourportfolio
