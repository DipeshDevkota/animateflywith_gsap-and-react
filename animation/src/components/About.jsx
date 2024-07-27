import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'; // Import ScrollTrigger from gsap
import { Tilt } from 'react-tilt';
import Myself from './Myself';

// GSAP animation for scrolling

const About = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
       var tl= gsap.timeline();
       tl.to(".title",{

        x:-10,
        scrollTrigger: {
          trigger: '.about',
          start:"top center",
          // scrub:true,
          duration:2.5,
          ease: "power2.out",
          // markers:true,

       }})

      
        window.addEventListener("wheel", function (dets) {
          if (dets.deltaY > 0) {
            gsap.to(".marquee", {
              x: '-200%',
              duration: 4,
              repeat: -1,
              ease: "none"
            });
            gsap.to(".marquee img", {
              rotate: 180,
            });
          } else {
            gsap.to(".marquee", {
              x: '0%',
              duration: 4,
              repeat: -1,
              ease: "none"
            });
            gsap.to(".marquee img", {
              rotate: 0
            });
          }
        });
      }, []);
      
  const skills = [
    {
      title: "Frontend",
      skills: [
        { name: "React Js", img: "https://imgs.search.brave.com/jto_-xdAsrgKycsWTc4Y-BVG2Tpfjgfwj3CLnNzaJjA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9icmFu/ZHNsb2dvcy5jb20v/d3AtY29udGVudC91/cGxvYWRzL2ltYWdl/cy9yZWFjdC1sb2dv/LTEucG5n" },
        { name: "Redux", img: "https://imgs.search.brave.com/Eigw7xYFQSqNFQhxxHde3hkdrP6Z2KHAInq2-yUxCO4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODQ4MzA5YmNlZjEw/MTRjMGI1ZTRhOWEu/cG5n" },
        { name: "GSAP", img: "https://imgs.search.brave.com/WA2Ii5mTDS-Qy6JrHCkqL9i52b_h3s7Gv6Ao04xdek8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0LzI1/MlVTRndoVWFWZUZt/NjY0aFd6RkEtMzIw/LTgwLmpwZw" },
        { name: "HTML", img: "https://imgs.search.brave.com/np9Suzrp_3kNkWQhHCshEnLZq-1foqWL_DUMi9XXyWE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8z/LzM4L0hUTUw1X0Jh/ZGdlLnN2Zw.svg" },
        { name: "CSS", img: "https://imgs.search.brave.com/n6sk9aO0T-1rgDm3Wv-L7kZgnzAAYUJXJh80H3x6NBU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvc29jaWFsLW1l/ZGlhLWxvZ29zLTYv/NTEyLzEyMS1jc3Mz/LTUxMi5wbmc" },
        { name: "JavaScript", img: "https://imgs.search.brave.com/XVx3WyaXSz_IcTpX6PT7bANhw9PITQVPdyGkbUFS1b8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL0ovamF2YXNj/cmlwdC1qcy1sb2dv/LTI5NDk3MDE3MDIt/c2Vla2xvZ28uY29t/LnBuZw" },
        { name: "TAILWIND", img: "https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg" }
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node Js", img: "https://imgs.search.brave.com/YCrguU05HM-b6HNYo5pnX0ZZJJQM0lZcHb7u0qI9NPE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/d29ybGR2ZWN0b3Js/b2dvLmNvbS9sb2dv/cy9ub2RlanMtMS5z/dmc.svg" },
        { name: "Express Js", img: "https://imgs.search.brave.com/dYOC8zWGw9HfWegfPLqE6kjIzG2RgPSySVu8jae78Ss/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/Z3VheWVyZC5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjEv/MDQvZXhwcmVzc2pz/LWxvZ28uc3Zn.svg" },
        { name: "MongoDB", img: "https://imgs.search.brave.com/5ObEOUzAQOQFuon-ArJGt6R2_AwtIKsarrf_TMWpsxo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODQ4MTAyMWNlZjEw/MTRjMGI1ZTQ5NGIu/cG5n" }
      ],
    },
    {
      title: "Others",
      skills: [
        { name: "Git", img: "https://imgs.search.brave.com/1irJ_nXZTo4XxIMbaQKsfKRRTMXtU9sI44PTlnK-a84/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9naXRo/dWIuZ2l0aHViYXNz/ZXRzLmNvbS9hc3Nl/dHMvR2l0SHViLU1h/cmstZWEyOTcxY2Vl/Nzk5LnBuZw" },
        { name: "Postman", img: "https://imgs.search.brave.com/QY6aAzMOfs2wxOkVDVVMjCLG8qlUH41bdcjTjrEI7TU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy82/MmNjMWIzYTE1MGQ1/ZGU5YTNkYWQ1Zjcu/cG5n" }
      ],
    },
  ];

  return (
    <>
      <div>
        <Myself />
        <div className="bg-skyblue flex py-8 overflow-hidden" id="move">
          {Array(8).fill().map((_, i) => (
            <div className="flex-shrink-0 flex gap-6 px-6 items-center marquee" key={i}>
              <h1 className="text-2xl md:text-4xl font-light">LETS START</h1>
              <img className="h-8 md:h-12" src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg" alt="arrow" />
            </div>
          ))}
        </div>

        <div className="flex flex-col relative z-10 justify-center items-center" id="Skills">
          <div className="skills-1 relative flex flex-col justify-between items-center w-full gap-3">
            <div className="title text-2xl md:text-4xl xl:text-6xl font-medium mt-5 text-center">SKILLS</div>
            <div className="desc text-lg md:text-xl xl:text-2xl text-cyan-500 text-center">
              Here are some of my skills for web development:
            </div> <div className="skillscontainer w-full flex flex-wrap mt-5 gap-9 justify-center bg-customnone border-black border-2">
              {skills.map((category, index) => (
                <div key={index} className="flex flex-col items-center border border-black bg-customnone p-9 mt-2 w-full md:w-1/2 lg:w-1/3">
                  <h2 className="text-xl font-semibold text-slate-100">{category.title}</h2>
                  <Tilt>
                    <div className="flex flex-wrap gap-5 justify-center">
                      {category.skills.map((skill, i) => (
                        <div key={i} className="skill flex flex-col items-center p-4">
                          <img src={skill.img} alt={skill.name} className="h-[4vw] mt-3" />
                          <div className="skilltitle text-center text-white mt-2">{skill.name}</div>
                        </div>
                      ))}
                    </div>
                  </Tilt>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;