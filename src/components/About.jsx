import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I am Javed Ansari With a knack of learning of full stack developer, I
          have joined Almabetter community where I gained proficiency in
          Reactjs, Javascript, DOM, Jquery, Express, Node, MongoDB, Tailwind,
          Bootstrap and expanded my knowledge to the concepts of full stack
          developer. I worked on several Reactjs projects, Express projects and
          have demonstrated analytical, technical and communication skills and
          have also completed relevant courses and certifications to leverage my
          knowledge in this field.
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
