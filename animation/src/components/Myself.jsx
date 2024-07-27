import React from 'react';

const Myself = () => {
  return (
    <div
      
      className="about bg-black flex flex-col lg:flex-row justify-between items-center p-6"
    >
      <div className="aboutphoto mb-6 lg:mb-0 lg:ml-40">
        <img
          src="http://dipeshdevkota.com.np/gallery_gen/3f917bd2f95051b5afe97dd0bf071908_608x606_fit.jpg?ts=1718682507"
          className="h-[40vh] w-[80vw] sm:w-[40vw] md:w-[30vw] lg:w-[20vw] border-2 -rotate-12 hover:rotate-0 duration-150 ease-linear mb-4 border-cyan-600 rounded-xl bg-cover"
          alt="Profile"
        />
      </div>
      <div className="aboutsecond w-full sm:w-3/4 md:w-2/3 lg:w-1/2 px-4 md:px-6 lg:px-8 lg:mr-24">
        <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl mb-4">
          About <span className="text-sky-500">Me</span>
        </h1>
        <p className="text-white text-sm sm:text-base lg:text-lg mb-4">
          I am a passionate MERN STACK fresher with decent knowledge in Tailwind, GSAP, JavaScript, Redux Toolkit, ReactJS, MongoDB, NodeJS, and ExpressJS. I am looking forward to working on good products by solving problems and creating user-friendly experiences. All my personal and academic details are available on my CV down below. You can check it out.
        </p>
        <button className="text-white bg-sky-700 hover:bg-sky-950 duration-150 ease-linear p-2 sm:p-3 md:p-4 lg:p-[1vw] rounded-3xl">
          Download CV
        </button>
      </div>
    </div>
  );
};

export default Myself;
