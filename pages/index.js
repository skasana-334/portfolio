
import About from '../components/About'
import Experience from '../components/Experience'
import Homepage from '../components/Homepage'
import Portfolio from '../components/Portfolio'
import React, { useEffect, useState } from 'react'
import Contact from '../components/Contact'

export default function Home() {
  const[pgscroll,setpgscroll]=useState(false);
useEffect(()=>{
  const page=window.addEventListener('scroll',()=>
  setpgscroll(window.scrollY>=10))
  return page;
})

  return (
   <div className={`${pgscroll&&'bg-gradient-to-b from-gray-800 to-black text-[#bfbed8]'}`}>
    <Homepage></Homepage>
   <Portfolio/>
   <Experience/>
  <About/>
  <Contact/>
   </div>
  )
}
