import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
// import './Project.css'
const items = [
  {
    id: 1,
    title: 'MERN E-COMMERCE',
    img: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/289574016/original/af61ab53b1e67d04a932ba19ba773b2d6ae32d6e/create-ecommerce-site-with-html-css-javascript.jpg",
    desc: "An E-commerce Website for purchasing different dresses of different size for male,femal,and children.Admin can add and delete the products and all of the data are stored in MONGODB",
    tools:"REACTJS NODEJS MONGODB EXPRESSJS ",
    link:"https://github.com/DipeshDevkota/merncommerec"

  },
  {
    id: 2,
    title: 'MERN SPOTIFY CLONE',
    img: "https://images.unsplash.com/photo-1504509546545-e000b4a62425?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "A Spotify clone built with MERN stack, offering features such as music streaming, playlist management, and a user-friendly interface designed using TailwindCSS. It replicates core functionalities of Spotify for a seamless music experience.",
    tools:"REACTJS NODEJS TAILWINDCSS MONGODB EXPRESSJS ",
    link:"https://github.com/DipeshDevkota/spotify"
  },


  {
    id: 3,
    title: 'CONTACT HANDLER',
    img: "https://plus.unsplash.com/premium_photo-1682125235036-d1ab54136ff4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "A dynamic menu application built with the MERN stack. Users can explore a variety of food items organized into categories, view detailed descriptions, and filter options based on their preferences.",
    tools:"REACTJS TAILWINDCSS ",
     link:' https://github.com/DipeshDevkota/contactbackend'


  },

  {
    id: 4,
    title: 'FOODY ZONE',
    img: "https://colorlib.com/wp/wp-content/uploads/sites/2/marco-free-template.jpg",
    desc: "A dynamic menu application built with the MERN stack. Users can explore a variety of food items organized into categories, view detailed descriptions, and filter options based on their preferences.",
    tools:"REACTJS TAILWINDCSS EXPRESSJS FIREBASE  ",
    link:"https://github.com/DipeshDevkota/foodyzone"

  },
  {
    id: 5,
    title: 'DICE GAME',
    img: "https://images.unsplash.com/photo-1522069213448-443a614da9b6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGljZSUyMGdhbWV8ZW58MHx8MHx8fDA%3D",
    desc: "An interactive dice game developed with React and styled using TailwindCSS. The game allows users to roll virtual dice, displaying results dynamically with engaging animations. It’s a fun way to demonstrate React’s state management and rendering capabilities",
    tools:"REACTJS TAILWINDCSS  ",
    link:"https://github.com/DipeshDevkota/reacidice"
  },
  {
    id: 6,
    title: 'REDUX TOOLKIT',
    img: "https://th.bing.com/th/id/OIP.4ASGHX8yq7YDtQu95vLRywHaE8?rs=1&pid=ImgDetMain",
    desc: "A project utilizing Redux Toolkit to manage application state in a structured and efficient manner. This project showcases how Redux Toolkit simplifies the process of state management in complex applications, making it easier to handle and update application state.",

    tools:"REACTJS REDUXJS",
    link:"https://github.com/DipeshDevkota/reduxtoolkit"

  },
  {
    id: 7,
    title: 'ADVENTURE WEBISTE',
    img: "https://images.unsplash.com/reserve/91JuTaUSKaMh2yjB1C4A_IMG_9284.jpg?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "A visually stunning frontend project designed to showcase adventurous destinations and activities. Built with CSS, GSAP, and LocomotiveJS, this website features smooth animations and dynamic scrolling effects that enhance the user experience. ",

    tools:"CSS GSAP LOCOMOTIVEJS  ",
    link:"https://github.com/DipeshDevkota/travellagency",
  }
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref,
    // offset:['start start','end start']
   });
  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const handleClick = () => {
    window.open(item.link, '_blank');
  };
  return (
    <section  className="relative mb-16">
      <div className="overflow-hidden h-[100%] w-[100%] mx-auto flex items-center justify-center">
        <div className="wrapper flex flex-col lg:flex-row gap-8 items-center justify-center max-w-6xl mx-auto p-4">
          <div className="imageContainer flex-1" ref={ref}>
            <img className='w-full h-full object-cover border-slate-300 border-2 rounded-lg' src={item.img} alt={item.title} />
          </div>
          <motion.div className="textContainer flex flex-col gap-4 flex-1" style={{ y }}>
            <h2 className='text-4xl text-gray-500  font-bold'>{item.title}</h2>
            <p className='text-gray-500'>{item.desc}</p>
            <p className='text-gray-500'>{item.tools}</p>
            <button onClick={handleClick} className='bg-slate-500 text-white border-none px-4 py-2 rounded hover:bg-slate-400 transition cursor-pointer'>GoTo GitHub</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Project = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className='project relative bg-slate-300' ref={ref}>
      <div className="progress sticky top-0 left-0 pt-8 text-center text-orange-400 text-3xl z-50 bg-slate-300">
        <h1 className='text-white text-6xl' >PROJ<span className='text-blue text-6xl'>ECTS</span></h1>
        <motion.div style={{ scaleX }} className="progressBar h-1 bg-white" />
      </div>
      {items.map(item => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Project;
