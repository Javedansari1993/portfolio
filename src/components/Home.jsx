import React from "react";
import HeroImage from "../assets/hero.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Experienced Software Developer with 4 years of expertise in
            React.js, Next.js, TypeScript, JavaScript, SQL Server, REST API, and
            modern UI frameworks such as Material-UI, Bootstrap, and Tailwind
            CSS. Skilled in building responsive, user- friendly web and mobile
            applications, integrating robust database solutions, and delivering
            scalable products in Agile environments. Strong background in full-
            stack development with Node.js, Express, and MongoDB.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="mb-2">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-72 md:w-96"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
