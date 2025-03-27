'use client';
import React from 'react';
import Image from 'next/image';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Project 01: Ecommerce Store',
      description: 'A modern e-commerce store built with Next.js, Tailwind, and Stripe.',
      imageUrl: '/project1.jpg',
      projectLink: 'https://project-01-ecommerce-arbish.vercel.app/'
    },
    {
      id: 2,
      title: 'Project 02: Portfolio Website',
      description: 'A sleek and responsive personal portfolio website.',
      imageUrl: '/project2.jpg',
      projectLink: 'https://project-02-portfolio-arbish.vercel.app/'
    },
    {
      id: 3,
      title: 'Project 03: Task Manager',
      description: 'A to-do list app with drag-and-drop features.',
      imageUrl: '/project3.jpg',
      projectLink: 'https://project-03-taskmanager-arbish.vercel.app/'
    },
    {
      id: 4,
      title: 'Project 04: Library Manager',
      description: 'A book management system with user authentication.',
      imageUrl: '/project4.jpg',
      projectLink: 'https://project-04-library-manager-arbish.streamlit.app/'
    }
  ];

  return (
    <section id="projects" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="relative group rounded-lg shadow-lg overflow-hidden">
              <Image 
                src={project.imageUrl} 
                alt={project.title} 
                width={400} 
                height={250} 
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 text-white">
                <h3 className="text-lg font-bold">{project.title}</h3>
                <p className="text-sm mb-2">{project.description}</p>
                <a 
                  href={project.projectLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
