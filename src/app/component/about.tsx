import Image from "next/image";
import React from "react";
import myPic from "../../../public/mypic.jpg"; // ✅ Correct way to import image

const About = () => {
  return (
    <div id="about">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          {/* Image Section */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded mx-auto"
              alt="hero"
              src={myPic} // ✅ Use imported image
              width={400} // ✅ Add width
              height={400} // ✅ Add height
            />
          </div>

          {/* Text Section */}
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              About Me
            </h1>

            <p className="mb-5 leading-relaxed">
              <strong>Email:</strong> arbishmohiuddin@gmail.com
            </p>

            <p className="mb-5 leading-relaxed">
              I am a 3rd-year <strong>BS Economics and Finance</strong> student at <strong>NED University</strong> and a <strong>cloud computing</strong> student at <strong>GIAIC</strong>.  
              I am also exploring <strong>web development</strong>, learning <strong>HTML, CSS, JavaScript, Python, TypeScript, and Next.js</strong>, while working on an <strong>e-commerce homepage project</strong>.  
              Passionate about <strong>tech, marketing, and finance</strong>, I balance studies, internships, and professional projects.
            </p>

            {/* View CV Button */}
            <div className="flex justify-center">
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
              >
                View CV
              </a>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
