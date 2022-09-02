import Link from 'next/link'
import React from 'react'
import {IoMdArrowRoundBack} from 'react-icons/io'
import {BiRightArrow} from 'react-icons/bi'
import {   FaGithub } from 'react-icons/fa'
import Image from 'next/image'
const portfolios=[
  {
    id:1,
    title:'Tower Of Hanoi',
  src:'/toh.jpg',
  name:'toh334',
  url:'https://toh334.netlify.app/',
  git:'https://github.com/skasana-334/Towerofhonoi-334',
des:'👉🏻It is basically a animated site in which user can get the visual idea of the one of the famous problem of recursion known as Tower Of Honoi.In this site there are two buttons one for moving the disks and one for to know the future valid moves.'
},
{
    id:2,
    title:'Dhoondo',
  src:'/google.jpg',
  name:'dhoondo',
  url:'https://dhoondo.netlify.app/',
  git:'https://github.com/skasana-334/Dhoondo-334',
  des:'👉 Dhoondo is a google clone which is based on react js in which we can search anything and get the data in form of images,videos ,links etc.'
},
{
    id:3,
    title:'Weather App',
  src:'/weather.jpg',
  name:'weather',
  url:'https://weather334.netlify.app/',
  git:'https://github.com/skasana-334/Weather-334',
  des:'➡️ This is basically a weather website in which user can get the current temperature of the desired city by searching the city name.In this website user can also get the maximum and minimum temperature of the city.'
},
{
    id:4,
    title:'Weather App',
  src:'/weather.jpg',
  name:'weather',
  url:'https://weather334.netlify.app/',
  git:'https://github.com/skasana-334/Weather-334',
  des:'➡️ This is basically a weather website in which user can get the current temperature of the desired city by searching the city name.In this website user can also get the maximum and minimum temperature of the city.'
}
] 

const getHelp = (name) => portfolios.filter((p) => p.name === name)[0];

export async function getStaticPaths() {
  const paths = portfolios.map((p) => ({
    params: { project: p.name },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const portfolio = getHelp(params.project);

  return {
    props: { portfolio },
  };
}


const project = ({ portfolio: { title, src,url,git,des} }) => {
  return (
    <div className='w-full h-fit text-center'>
    <div className='max-w-screen-xl mx-auto w-full h-full pt-24 p-8 flex flex-col'>
        <div className='flex'>
            <Link href='/portfolio'>
                <div className='flex items-center justify-center my-4 text-xl text-green-400 font-bold capitalize cursor-pointer'>
                <IoMdArrowRoundBack size={25}></IoMdArrowRoundBack>back
                </div>
            </Link>
        </div>
        <h1 className='text-2xl font-bold text-blue-400 capitalize md:text-left text-center mt-2'>{title}</h1>
        <div className='mx-auto my-8'>
           <Image src={src} alt='toh' width='700' height='400' className='rounded-lg'></Image>
        </div>
        <h2 className='text-blue font-semibold text-3xl md:text-left text-blue-400 my-4'>
          Description
        </h2>
        <p className='py-4 '>{des}</p>
        <div className='flex justify-center items center gap-x-4  '>
            <Link href={`${url}`}>
<div className='bg-green-500 p-2 font-semibold uppercase flex justify-center items-center text-white rounded-md px-5 my-6 tracking-wider group cursor-pointer '>demo
  <span className='group-hover:scale-125 duration-200 '><BiRightArrow size={20}></BiRightArrow></span>
  </div>
  </Link>
  <Link href={`${git}`}>
  <div className='bg-green-500 p-2 font-semibold uppercase flex justify-center items-center text-white rounded-md px-3 my-6 tracking-wider group cursor-pointer'>github
  <span className='group-hover:scale-125 duration-200 '><FaGithub size={20}></FaGithub></span>
  </div>
  </Link>
</div>
    </div>

    </div>
  )
}

export default project
