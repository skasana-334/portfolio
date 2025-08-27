import Link from 'next/link'
import React from 'react'
import {IoMdArrowRoundBack} from 'react-icons/io'
import {BiRightArrow} from 'react-icons/bi'
import {   FaGithub } from 'react-icons/fa'
import Image from 'next/image'
const portfolios=[
  {
 id: 1,
title: 'IPL Auction',
src: '/iplauction.jpg',
name: 'iplauction',
git: 'https://github.com/Sammykhan214/ipl_bidding',
des: '👉🏻 IPL Auction is a full-stack web application that simulates the Indian Premier League player auction. Built with React.js for the frontend and Spring Boot with MySQL for the backend, it enables real-time bidding, team management, and player statistics tracking. With live auction updates and an interactive UI, it provides an engaging experience for both admins and viewers.'
  },
    { id:2,
    title:'Resume Builder',
  src:'/resumebuild.png',
  name:'resumebuild',
  url:'https://resumebuild334.netlify.app/',
  git:'https://github.com/skasana-334/ResumeBuild',
des:'👉🏻Resume Builder is a web application that helps users create professional resumes quickly and easily. With its user-friendly interface and various color options for downloading, users can build a resume that highlights their skills, experience, and achievements.  With Resume Builder, users can create a polished and professional resume in just a few clicks. '
    },
{
  id:3,
  title:'Videomeet',
src:'/meet.png',
name:'meet',
url:'https://videomeet334.netlify.app/',
git:'https://github.com/skasana-334/videomeet',
des:'➡ A video chat application allows users to communicate with each other through real-time video and audio. With its  easy-to-use features, users can connect with friends, family, or colleagues from anywhere in the world. The application typically includes features such as group video calls, screen sharing, and instant messaging, making it a versatile tool for both personal and professional communication. With a video chat application, users can stay connected and collaborate effectively, no matter where they are.'
},
  {
    id:4,
    title:'Tower Of Hanoi',
  src:'/toh.jpg',
  name:'toh334',
  url:'https://toh334.netlify.app/',
  git:'https://github.com/skasana-334/Towerofhonoi-334',
des:'👉🏻It is basically a animated site in which user can get the visual idea of the one of the famous problem of recursion known as Tower Of Honoi.In this site there are two buttons one for moving the disks and one for to know the future valid moves.'
},
{
    id:5,
    title:'Weather App',
  src:'/weather.jpg',
  name:'weather',
  url:'https://weather334.netlify.app/',
  git:'https://github.com/skasana-334/Weather-334',
  des:'➡️ This is basically a weather website in which user can get the current temperature of the desired city by searching the city name.In this website user can also get the maximum and minimum temperature of the city.'
},
{
    id:6,
    title:'My Portfolio',
  src:'/portfolio.png',
  name:'myportfolio',
  url:'https://portfolio334.vercel.app/',
  git:'https://github.com/skasana-334/portfolio',
  des:'❕This is my personal portfolio website which contains all the information about me such as my skills,projects and education.'
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
        <div className='mx-auto my-8 rounded-lg'>
           <Image src={src} alt='toh' width='700' height='400' ></Image>
        </div>
        <h2 className='text-blue font-semibold text-3xl md:text-left text-blue-400 my-4'>
          Description
        </h2>
        <p className='py-4 text-xl'>{des}</p>
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
