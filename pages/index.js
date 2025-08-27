import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Experience from '../components/Experience'
import Homepage from '../components/Homepage'
import Portfolio from '../components/Portfolio'
import Coding from '../components/Coding'
import React, { useEffect, useState } from 'react'
import Contact from '../components/Contact'
import Skills from '../components/Skills'

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
    <About/>
     <Experience/>
   <Portfolio />
   <Coding></Coding>
   <Skills/>
  <Contact/>
   </div>
  )
}
