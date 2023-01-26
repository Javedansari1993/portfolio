import React from "react";
import arrayDestruct from "../assets/portfolio/cryptoDashboard.jpg";
import installNode from "../assets/portfolio/blog-app.png";
import navbar from "../assets/portfolio/Quiz-App.png";
import reactParallax from "../assets/portfolio/e-commerce.png";
import reactSmooth from "../assets/portfolio/youtube-subs.png";
import reactWeather from "../assets/portfolio/workout-baddy.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
      demoLink:"https://javed-crypto-dashboard.netlify.app/",
      githubLink:"https://github.com/Javedansari1993/Crypto-dashboard",
      about:
        "This dashboard using Reactjs provides information about your favourite Crypto Currencies, their trends and past prices in the form of a well organised graph including Line Chart as well as Bar Charts.",
    },
    {
      id: 2,
      src: reactParallax,
      demoLink:"https://javed-ecommerce.netlify.app/",
      githubLink:"https://github.com/Javedansari1993/e-commarce",
      about:"This E-commerce App using Reactjs you can add and remove your product where you can see all product added with total price in your Card tab all data are dummy these come from API",
    },
    {
      id: 3,
      src: navbar,
      demoLink:"https://javed-qiuz-app.netlify.app/",
      githubLink:"https://github.com/Javedansari1993/Quiz_app",
      about:"This Quiz-App using Reactjs you can play quiz and having a functionality such as reset quiz,save and next, and exit from the quiz and if completed the quiz then you can see your over all marks on screen "
    },
    {
      id: 4,
      src: reactSmooth,
      demoLink:"https://drive.google.com/file/d/1jYGspRzzJojKfMVnDZwXkXyykVc73r2b/view?usp=sharing",
      githubLink:"https://github.com/Javedansari1993/Youtube-Subscriber",
      about:"This project using NodeJS, Express, MongoDB Atlas database, Mongoose and dotenv for setting Environment varialbles and including perticular routes end point in the URL, through this users can access all subscribers."
    },
    {
      id: 5,
      src: installNode,
      demoLink:"https://github.com/Javedansari1993/Express-blog-A",
      githubLink:"https://github.com/Javedansari1993/Express-blog-A",
      about:"This project using NodeJS, Express, MongoDB Atlas database, Mongoose and you can create a custome blog where you can see all blog with diffrent diffrent routes and you see your contact and aboute page also",
    },
    {
      id: 6,
      src: reactWeather,
      demoLink:"https://github.com/Javedansari1993/Mern-stack-Workout-buddy",
      githubLink:"https://github.com/Javedansari1993/Mern-stack-Workout-buddy",
      about:"This project using Reactjs for fort-End and for Back-End using NodeJS, Express, Mongoose and users can access all workouts,access particular workouts, add workouts, delete, update workouts by perticular IDs."
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-fit"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src ,about,demoLink,githubLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <p className="text-white p-4 max-w-md">{about}</p>
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  onClick={() => {
                    window.open(
                      `${demoLink}`,"_blank"
                    );
                  }}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </button>
                <button
                  onClick={() => {
                    window.open(
                      `${githubLink}`,"_blank"
                    );
                  }}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
