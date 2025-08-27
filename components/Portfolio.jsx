import React from 'react'
import {MdExpandMore} from 'react-icons/md'
import Link from 'next/link'
import Image from 'next/image'
const Portfolio = () => {
  const portfolios=[
    
    {
        id:1,
        title:'Ipl Auction Management',
      src:'/iplauction.jpg',
      url:'https://github.com/Sammykhan214/ipl_bidding/',
    },
    {
      id:2,
      title:'Resume Builder',
    src:'/resumebuild.png',
    url:'https://resumebuild334.netlify.app/',
  },
  {
    id:3,
    title:'Videomeet',
  src:'/meet.png',
  url:'https://videomeet334.netlify.app/',
},
 
  ]
  return (
  <div id='projects' className='w-full'>
  <div className='max-w-screen-xl mx-auto px-4 py-8 text-center md:text-left'>
    <h2 className='text-5xl md:text-7xl tracking-wider text-green-600 capitalize'>
      Projects
    </h2>
    <p className='py-4 max-w-3xl mx-auto md:mx-0 text-xl leading-relaxed'>
      These are some of my projects showcasing my skills in Backend Development with Java & Spring Boot, 
      as well as Frontend technologies like React.js, Next.js, and Tailwind CSS.
      <br />
      To explore all my projects, click on the "All Projects" button.
    </p>
  
       <div className='max-w-5xl  grid md:grid-cols-2 gap-20'>
      {
        portfolios.map(({id,title,src,url})=>(
          <Link key={id} href={`${url}`}>
            <div className='cursor-pointer   group shadow-md shadow-sky-600 overflow-hidden rounded-md '>
              <Image src={src} alt={title} width='900' height='400' className='rounded-md duration-200 hover:scale-110 ' ></Image>
              <h2 className='text-center text-base capitalize  group-hover:underline underline-offset-4 duration-200 my-2 text-violet-500'>{title}</h2>
              
            </div>
           
          </Link>
        ))
      }
     <div className='flex justify-center items-center'>
     <Link href='/portfolio'>
  <div className='bg-green-500 p-2 font-semibold uppercase flex justify-center items-center text-white rounded-md px-3 my-6 tracking-wider group cursor-pointer'>All Projects
  <span className='-rotate-90 group-hover:translate-x-3'><MdExpandMore size={25}></MdExpandMore></span>
  </div>
  
</Link>
      
     </div>

       </div>
       </div>
    </div>
  )
}

export default Portfolio
