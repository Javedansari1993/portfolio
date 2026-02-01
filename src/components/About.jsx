import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I am Javed Ansari, a results-driven Full Stack Developer with 4 years
          of professional experience in designing, developing, and delivering
          scalable web applications. I have strong hands-on expertise in
          React.js, Next.js, JavaScript (ES6+), Node.js, Express, MongoDB, SQL
          Server, and modern UI frameworks such as Material-UI, Tailwind CSS,
          and Bootstrap.
        </p>

        <br />

        <p className="text-xl">
          I am also a Web 3.0 Enthusiast and a learner and deeply passionate
          about Software Development & Innovations. I enjoy turning complex
          problems into simple, beautiful and intuitive designs. I also love the
          logic and structure of coding and always strive to write elegant and
          efficient code.
        </p>
      </div>
    </div>
  );
};

export default About;
