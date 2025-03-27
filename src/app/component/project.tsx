import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import project2 from "../../../public/project2.png";
import project1 from "../../../public/project1.png";
import project3 from "../../../public/project3.png";
import project4 from "../../../public/project4.png";
import project5 from "../../../public/project5.png";
import project6 from "../../../public/project6.png";
const Project = () => {
  return (
    <div id="project"><section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          My Projects
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
        ✅ "Here are some of the projects I have worked on, showcasing my skills and expertise
        </p>
      </div>
      <div className="flex flex-wrap -m-5 -mt-[5rem]">
        <div className="lg:w-1/3 sm:w-1/2 p-4">
          <div className="flex relative">
            <Image
              alt="gallery"
              className="absolute inset-0 w-full h-full object-cover object-center"
              src={project1}
            />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
               Resume Builder Project
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
           Resume Builder 
              </h1>
              <p className="leading-relaxed line-clamp-2">
                Dynamic Responsive Resume Generator Project
              </p>
            <Link href="https://dynamic-resume-generator-tau.vercel.app/" target="_blank" rel="noopener noreferrer">
  <p className="leading-relaxed text-blue-500 hover:underline">View Project..</p>
</Link>

            </div>
          </div>
        </div>
        <div className="lg:w-1/3 sm:w-1/2 p-4">
          <div className="flex relative">
          <Image
              alt="gallery"
              className="absolute inset-0 w-full h-full object-contain object-center"
              src={project2}
            />
            
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                Convertor project
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                Unit Convertor Project
              </h1>
              <p className="leading-relaxed line-clamp-2">
              I’ve developed a Unit Converter using Python and Streamlit that allows users to easily convert units of length, weight, temperature, and more with a simple interface
              </p>
              <Link href="https://project-02-unit-converter-arbish.streamlit.app/" target="_blank" rel="noopener noreferrer">
  <p className="leading-relaxed text-blue-500 hover:underline">View Project..</p>
</Link>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 sm:w-1/2 p-4">
          <div className="flex relative">
          <Image
              alt="gallery"
              className="absolute inset-0 w-full h-full object-contain object-center"
              src={project3}
            />
            
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                Personal Library Manager
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                Library Manager Project
              </h1>
              <p className="leading-relaxed line-clamp-2">
              This web app makes it super easy to add, remove, search, and manage books in your personal collection. It also saves data, so your library remains intact even after closing the app! 💾
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 sm:w-1/2 p-4">
          <div className="flex relative">
            <img
              alt="gallery"
              className="absolute inset-0 w-full h-full object-cover object-center"
              src="https://project-04-library-manager-arbish.streamlit.app/"
            />
             <Image
              alt="gallery"
              className="absolute inset-0 w-full h-full object-cover object-center"
              src={project4}
            />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              Password Strength checker
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                Password Strength Checker project
              </h1>
              <p className="leading-relaxed">
              Password Strength Checker Your Security Matters! 🚀
              </p>
              <Link href="https://project-03-password-strength-checker-arbish.streamlit.app/" target="_blank" rel="noopener noreferrer">
              <p className="leading-relaxed text-blue-500 hover:underline">View Project..</p>
</Link>

            </div>
          </div>
        </div>
        <div className="lg:w-1/3 sm:w-1/2 p-4">
          <div className="flex relative">
          <Image
              alt="gallery"
              className="absolute inset-0 w-full h-full object-cover object-center"
              src={project5}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                Modern Blog
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                Modern Blog Website
              </h1>
              <p className="leading-relaxed">
                A modern blog application built with Next.js and Sanity! 
              </p>
              <Link href="https://text-sanity-70zfo28du-arbish-mohiuddins-projects.vercel.app" target="_blank" rel="noopener noreferrer">
                <p className="leading-relaxed text-blue-500 hover:underline">View Project..</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 sm:w-1/2 p-4">
          <div className="flex relative">
          <Image
              alt="gallery"
              className="absolute inset-0 w-full h-full object-cover object-center"
              src={project6}
              />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                File Convertor and Cleaner
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              File Convertor and Cleaner Project
              </h1>
              <p className="leading-relaxed">
              I built a web app that helps users upload, clean, and convert CSV/Excel files with ease.
              </p>
              <Link href="https://project-01-growth-mindset-arbish.streamlit.app/" target="_blank" rel="noopener noreferrer">
                <p className="leading-relaxed text-blue-500 hover:underline">View Project..</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
  )
}

export default Project