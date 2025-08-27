import React from 'react'
import Image from 'next/image'

// Images (add correct paths in public/skill folder)
import java from '../public/skill/java.png'
import cpp from '../public/skill/cpp.png'
import js from '../public/skill/js.png'
import sql from '../public/skill/sql.png'
import html from '../public/skill/html.png'
import css from '../public/skill/css.png'
import react from '../public/skill/react.png'
import next from '../public/skill/next.png'
import tailwind from '../public/skill/tailwind.png'
import bootstrap from '../public/skill/bootstrap.jpeg'
import spring from '../public/skill/spring.png'
import mysql from '../public/skill/mysql.png'
import rest from '../public/skill/rest.png'
import github from '../public/skill/github.png'
import postman from '../public/skill/postman.png'
import figma from '../public/skill/figma.png'
import oracle from '../public/skill/oracle.png'

const Skills = () => {
  const languages = [
    { id: 1, title: "Java", src: java, clr: 'shadow-orange-500' },
    { id: 2, title: "C++", src: cpp, clr: 'shadow-blue-800' },
    { id: 3, title: "JavaScript", src: js, clr: 'shadow-yellow-500' },
    { id: 4, title: "SQL", src: sql, clr: 'shadow-sky-500' },
  ]

  const frontend = [
    { id: 1, title: "HTML", src: html, clr: 'shadow-orange-600' },
    { id: 2, title: "CSS", src: css, clr: 'shadow-blue-500' },
    { id: 3, title: "React", src: react, clr: 'shadow-green-300' },
    { id: 4, title: "Next.js", src: next, clr: 'shadow-gray-500' },
    { id: 5, title: "Tailwind", src: tailwind, clr: 'shadow-teal-500' },
    { id: 6, title: "Bootstrap", src: bootstrap, clr: 'shadow-violet-800' },
  ]

  const backend = [
    { id: 1, title: "Spring Boot", src: spring, clr: 'shadow-green-600' },
    { id: 2, title: "REST APIs", src: rest, clr: 'shadow-yellow-600' },
    { id: 3, title: "MySQL", src: mysql, clr: 'shadow-blue-600' },
    { id: 4, title: "Oracle", src: oracle, clr: 'shadow-red-600' },
  ]

  const tools = [
    { id: 1, title: "GitHub", src: github, clr: 'shadow-gray-700' },
    { id: 2, title: "Postman", src: postman, clr: 'shadow-orange-400' },
    { id: 3, title: "Figma", src: figma, clr: 'shadow-pink-400' },
  ]

  const renderSection = (title, items) => (
    <>
      <h4 className='text-4xl md:text-5xl tracking-wider text-center text-green-600 capitalize mt-8 mb-4'>{title}</h4>
      <div className='grid md:grid-cols-4 gap-3'>
        {items.map(({ id, title, src, clr }) => (
          <div key={id} className={`flex flex-col lg:flex-row gap-4 items-center justify-center shadow-lg ${clr} rounded-xl hover:scale-105 ease-in duration-300 p-6`}>
            <Image src={src} width={72} height={72} alt={title} />
            <h3 className='font-semibold capitalize text-white'>{title}</h3>
          </div>
        ))}
      </div>
    </>
  )

  return (
    <div id='skills' className='w-full'>
      <div className='max-w-screen-xl mx-auto text-center md:text-left px-4 py-8'>
        <h2 className='text-5xl md:text-7xl tracking-wider text-green-600 capitalize'>Skills</h2>
        <p className='py-4 max-w-3xl text-xl'>
          These are the technologies I&apos;ve worked with.<br />
          I have explored a wide range of technologies in both Frontend and Backend development.
        </p>

        {renderSection("Languages", languages)}
        {renderSection("Frontend", frontend)}
        {renderSection("Backend", backend)}
        {renderSection("Tools", tools)}
      </div>
    </div>
  )
}

export default Skills
