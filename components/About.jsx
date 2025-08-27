import React from 'react'
import { MdExpandMore } from 'react-icons/md'
import Link from 'next/link'

const About = () => {
  return (
    <div id="about" className="w-full">
      <div className="max-w-screen-xl mx-auto md:text-left text-center px-4 py-8">
        <h2 className="text-7xl md:text-7xl tracking-wider text-green-600 capitalize">
          about
        </h2>

        <div className="shadow-md shadow-sky-400 my-5">
          <div className="py-6 max-w-4xl mx-auto text-lg leading-relaxed space-y-4">
            <p>
              Hi, I’m <span className="font-semibold">Sagar Kasana</span>.
            </p>
            <p>
              I’m a B.Tech graduate in Information Technology from Harcourt
              Butler Technical University with 1+ years of experience.
            </p>
            <p>
              I have a strong foundation in Data Structures & Algorithms (DSA)
              and problem-solving.
            </p>
            <p>
              I specialize in Backend Development using{" "}
              <span className="font-medium">Java, Spring Boot, and MySQL</span>,
              and also explore Frontend with React.js, HTML, CSS, and Tailwind
              CSS to build full-stack, scalable, and user-friendly applications.
            </p>
            <p>
              Passionate about clean code, solving complex problems, and
              continuously learning to grow as a developer. 🚀
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
