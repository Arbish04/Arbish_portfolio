"use client";

import React from "react";
import Image from "next/image"; 
import Typewriter from "typewriter-effect";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="text-gray-600 body-font bg-gradient-to-r from-gray-100 to-gray-200 bg-fixed">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                {/* Left Section - Text Content */}
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        I am <br className="hidden lg:inline-block" />
                        <Typewriter
                            options={{
                                strings: ["Web Developer", "Finance Student"],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h1>

                    {/* Decorative Line */}
                    <div className="w-[40px] h-[2px] bg-blue-700"></div>

                    <p className="mb-8 leading-relaxed">
                        I build responsive and dynamic websites with a focus on user experience and modern design trends. Let&apos;s create something amazing together!
                    </p>

                    {/* Buttons */}
                    <div className="flex justify-center gap-4">
                        <Link href="#Contact">
                            <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                                Contact
                            </button>
                        </Link>

                        <Link href="https://github.com/dashboard" target="_blank" rel="noopener noreferrer">
                            <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                                GitHub
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Right Section - Image */}
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <Image
                        className="object-cover object-center rounded mx-auto w-[22rem]"
                        alt="hero"
                        width={600}
                        height={600}
                        src="/mypic.jpg" // Ensure this image exists in "public" folder
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
