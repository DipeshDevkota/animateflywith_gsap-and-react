// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

// import {
//   faInstagram,
//   faWhatsapp,
//   faLinkedin,
// } from "@fortawesome/free-brands-svg-icons"; // Add these imports
// const Contact = () => {
//   return (
//     <div className="mt-40 flex justify-evenly bg-customBlack h-full ">
//       <div className="firstcon flex flex-col  h-max w-96 text-white  mt-32 ">
//         <h2 className="  mb-4 text-white  bg-black font-serif text-5xl">CONTACT <span className=" text-sky-500 text-5xl  font-serif">ME</span></h2>
//         <p className="text-lg mb-4">
//           I`m always open to discussing new projects, creative ideas, or
//           opportunities to be part of your visions. Feel free to get in touch
//           with me through any of the following methods:
//         </p>
//       </div>
//       <div className="seccon flex flex-col  h-96 w-1/4 gap-2 mt-4 mb-4">
//         <div className="email h-[22vh] w-auto p-7 bg-oxford flex flex-col justify-center items-center gap-2 border rounded-xl ">
//           <FontAwesomeIcon
//             icon={faEnvelope}
//             className="text-white text-3xl mt-2 cursor-pointer"
//           />
//           <h4 className="text-white cursor-pointer">Email</h4>
//           <h5 className="text-white cursor-pointer">devkotadipesh12@gmail.com</h5>
           
//         </div>
//         <div className="insta h-[20vh] w-auto p-6 bg-oxford  flex flex-col  justify-center items-center gap-2 border rounded-xl">
//           <FontAwesomeIcon icon={faInstagram} className="text-white text-3xl cursor-pointer" />

//           <h4 className="text-white cursor-pointer">Insta</h4>

//           <a href="https://www.instagram.com/_dipeshhhh_/" className="text-white">Send a message</a>
//         </div>
//         <div className="whatsapp h-[20vh] w-auto p-6 bg-oxford flex flex-col  justify-center items-center gap-2 border rounded-xl">
//           <FontAwesomeIcon icon={faWhatsapp} className="text-white text-3xl  cursor-pointer" />
//           <h4 className="text-white cursor-pointer">WhatsApp</h4>
//           <h5 className="text-white cursor-pointer">+977 9845945202</h5>
//         </div>

//         <div className="linkedin h-[20vh] w-auto p-6 bg-oxford  flex flex-col  justify-center items-center gap-2 border rounded-xl">
//           <FontAwesomeIcon icon={faLinkedin} className="text-white text-3xl cursor-pointer" />
//           <h4 className="text-white cursor-pointer">LinkedIn</h4>
//           <a href="#" className="text-white cursor-pointer">Check Out</a>
//         </div>
//       </div>


//       <div className="thirdcon flex flex-col gap-2 mt-32">
//       <input
//         type="text"
//         placeholder="Full Name"
       
//         className="input-field bg-oxford p-3 border rounded-2xl w-[23vw] text-white"
//       />
//       <input
//         type="email"
//         placeholder="Your Email"
      
//         className="input-field bg-oxford p-3 border rounded-2xl text-white"
//       />
//       <textarea
//         placeholder="Your Message"

//         className="input-field bg-oxford p-3 h-32 border rounded-2xl text-white"
//       />
//       <button className="btn bg-customviolet mt-[12vw] p-2 border rounded-2xl hover:bg-violet-950 duration-150 text-white"  >
//         Send Message
//       </button>
//     </div>
//     </div>
//   );
// };

// export default Contact;
import React, { useEffect, useState } from 'react';
// // Import Bootstrap CSS
// import 'bootstrap/dist/css/bootstrap.min.css'; 
const skillsData = [
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 80 },
  { name: 'JavaScript', level: 70 },
  // Add more skills as needed
];

const Contact = () => {
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    setAnimationTriggered(true);
  }, []);

  return (
    <div className="containerrr my-5">
      <h2 className="text-2xl font-bold mb-4">My Skills</h2>
      {skillsData.map((skill) => (
        <div key={skill.name} className="skill mb-4">
          <h5 className="text-lg font-medium">{skill.name}</h5>
          <div className="progress" style={{ height: '30px' }}>
            <div
              className={`progress-bar ${animationTriggered ? 'progress-bar-animated-custom' : ''}`}
              role="progressbar"
              style={{ width: `${skill.level}%` }}
              aria-valuenow={skill.level}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {skill.level}%
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contact;
