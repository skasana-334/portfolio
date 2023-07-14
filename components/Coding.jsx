import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import gfg from '../public/exp/gfg.png'
import leetcode from '../public/exp/leetcode.png'
import hackerrank from '../public/exp/hackerrank.png'
const Coding = () => {
    const profile=[
    {
      id:1,
      title:"Leetcode",
      src:leetcode,
      clr:'shadow-orange-300',
      url:"https://leetcode.com/skasana334/",
    },
    {
      id:2,
      title:"gfg",
      src:gfg,
      clr:'shadow-green-500',
      url:"https://auth.geeksforgeeks.org/user/skasana334/practice",

    },
    {
      id:3,
      title:"HackerRank",
      src:hackerrank,
      clr:'shadow-teal-500',
      url:"https://www.hackerrank.com/skasana334?hr_r=1",
    },
 
  ]
  return (
    <div id='coding' className='w-full '>
        <div className='max-w-screen-xl mx-auto text-center md:text-left px-4 py-8'>
       <h2 className='text-5xl md:text-7xl tracking-wider text-green-600 capitalize '>Coding Profiles</h2>
       <p className='py-4 max-w-3xl text-xl'>I have solved more than 1000 questions across different platforms which shows my knowledge in DSA and my agility in problem-solving. 
     </p>
     <div >
  
       <div className='grid md:grid-cols-3 gap-3 mb-4 pb-4'>
       {
        profile.map(({id,title,src,clr,url})=>(
          <Link key={id} href={`${url}`}>
         <div key={id} className={`flex flex-col lg:flex-row gap-10 lg:gap-2 items-center justify-between shadow-lg  ${clr} rounded-xl hover:scale-105 ease-in duration-300 p-6 mt-2 cursor-pointer`}>
<Image src={src}  width='72' height='72' alt={title}></Image>
<h3 className='font-semibold capitalize text-white'>{title}</h3>
          </div>
          </Link>
        ))
       }
       </div>
       </div>
    </div>
    </div>
  )
}

export default Coding
