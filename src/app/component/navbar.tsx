import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineCloudDownload } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="bg-white z-50 sticky top-0 shadow-md">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-4 md:p-2 flex-col md:flex-row items-center">
          
          {/* Logo */}
          <Link href={"/"} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image alt="Arbish's Portfolio" src="/logo.png" width={90} height={90} />
            <span className="ml-1 text-xl">Arbish&apos;s Portfolio</span>
          </Link>
          
          {/* Navigation Links */}
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center space-x-4">
            <Link href={"#"} className="hover:text-blue-600">Home</Link>
            <Link href={"#about"} className="hover:text-blue-600">About</Link>
            <Link href={"#skills"} className="hover:text-blue-600">Skills</Link>
            <Link href={"#project"} className="hover:text-blue-600">Projects</Link>
            <Link href={"#Contact"} className="hover:text-blue-600">Contact</Link>
          </nav>
          
          {/* Download CV Button */}
          <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
            <button className="inline-flex items-center bg-gray-100 border-0 py-2 px-4 focus:outline-none hover:bg-gray-200 rounded text-base">
              Download CV
              <AiOutlineCloudDownload className="text-xl ml-2" />
            </button>
          </a>
        
        </div>
      </header>
    </div>
  )
}

export default Navbar
