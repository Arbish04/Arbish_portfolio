import Image from "next/image";
import Hero from "./component/hero";
import Contact from "./component/contact";
import Project from "./component/project";
import About from "./component/about";
import Skill from "./component/skill"; // ✅ Import Skill component

export default function Home() {
  return (
    <div>
      <Hero />
      <Contact />
      <Project />
      <About />
      <Skill /> {/* ✅ Corrected component name */}
    </div>
  );
}
