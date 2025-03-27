import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../../../public/project1.png";
import project2 from "../../../public/project2.png";
import project3 from "../../../public/project3.png";
import project4 from "../../../public/project4.png";
import project5 from "../../../public/project5.png";
import project6 from "../../../public/project6.png";

const projects = [
  {
    img: project1,
    title: "Resume Builder Project",
    subtitle: "Resume Builder",
    desc: "Dynamic Responsive Resume Generator Project",
    link: "https://dynamic-resume-generator-tau.vercel.app/",
  },
  {
    img: project2,
    title: "Convertor Project",
    subtitle: "Unit Convertor Project",
    desc: "A Python and Streamlit-based Unit Converter allowing users to convert units of length, weight, temperature, and more.",
    link: "https://project-02-unit-converter-arbish.streamlit.app/",
  },
  {
    img: project3,
    title: "Personal Library Manager",
    subtitle: "Library Manager Project",
    desc: "A web app to easily add, remove, search, and manage books, saving data even after closing the app!",
    link: "https://project-04-library-manager-arbish.streamlit.app/",
  },
  {
    img: project4,
    title: "Password Strength Checker",
    subtitle: "Password Strength Checker Project",
    desc: "Password Strength Checker - Your Security Matters! 🚀",
    link: "https://project-03-password-strength-checker-arbish.streamlit.app/",
  },
  {
    img: project5,
    title: "Modern Blog",
    subtitle: "Modern Blog Website",
    desc: "A modern blog application built with Next.js and Sanity!",
    link: "https://text-sanity-70zfo28du-arbish-mohiuddins-projects.vercel.app/",
  },
  {
    img: project6,
    title: "File Convertor and Cleaner",
    subtitle: "File Convertor and Cleaner Project",
    desc: "A web app for uploading, cleaning, and converting CSV/Excel files with ease.",
    link: "https://project-01-growth-mindset-arbish.streamlit.app/",
  },
];

const Project = () => {
  return (
    <div id="project">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              My Projects
            </h1>
          </div>
          <div className="flex flex-wrap -m-5 -mt-[5rem]">
            {projects.map((project, index) => (
              <div key={index} className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
                <div className="flex relative">
                  <Image
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src={project.img}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                      {project.title}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      {project.subtitle}
                    </h1>
                    <p className="leading-relaxed line-clamp-2">
                      {project.desc}
                    </p>
                    <Link href={project.link} target="_blank">
                      <p className="leading-relaxed text-blue-500 hover:underline">View Project..</p>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
