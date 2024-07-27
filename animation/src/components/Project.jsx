import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';

const Project = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [showFixedImage, setShowFixedImage] = useState(false);

  const projects = [
    {
      title: 'AdVENTURE',
      link: "https://github.com/DipeshDevkota/TIC-TAC-TOE",
      image: 'https://images.unsplash.com/photo-1528543606781-2f6e6857f318?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'FOODY-ZONE',
      link: "https://github.com/DipeshDevkota/foodyzone",
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'DICE-GAME',
      link: "https://github.com/DipeshDevkota/reacidice",
      image: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHZpZGVvJTIwZ2FtZXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      title: 'TIC-TAC-TOE',
      link: "https://github.com/DipeshDevkota/TIC-TAC-TOE",
      image: 'https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'FLY_GAME',
      link: "https://github.com/DipeshDevkota/animateflywith_gsap-and-react/tree/main/animation",
      image: 'https://images.unsplash.com/photo-1593010932917-92bd21088dee?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  const handleMouseEnter = (image) => {
    setImageUrl(image);
    setShowFixedImage(true);
  };

  const handleMouseLeave = () => {
    setShowFixedImage(false);
  };

  const handleMouseClick = (link) => {
    window.open(link, '_blank'); // Open the project link in a new tab
  };

  return (
    <div className="project h-screen w-full mt-[1h] bg-black border-t-2 border-slate-50 mb-36">
  <h2 className="projtitle bg-customnone p-7 text-4xl sm:text-6xl md:text-8xl text-white mb-10 ml-3">PROJECTS</h2>

      <div className="elem-container">
        {projects.map((project, index) => (
          <div
            key={index}
            className="elem bg-white relative flex items-center p-9 cursor-pointer border-t border-gray-400 overflow-hidden border-b border-gray-300"
            onMouseEnter={() => handleMouseEnter(project.image)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleMouseClick(project.link)} // Pass project link to handleMouseClick
          >
            <div className="overlay absolute inset-0 bg-orange-300 opacity-0 transition-opacity ease-in duration-300 hover:opacity-100">
              <FaGithub size={24} />
            </div>
            <h2 className="text-4xl z-10 relative">{project.title}</h2>
          </div>
        ))}
      </div>
      {showFixedImage && (
        <div
          id="fixed-image"
          className="h-80 w-60 bg-red-500 rounded-lg fixed z-50 left-1/2 transform -translate-x-1/2 top-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
      )}
    </div>
  );
};

export default Project;
