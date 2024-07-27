import { RiInstagramLine, RiLinkedinBoxFill, RiGithubFill, RiPhoneLine } from 'react-icons/ri';
import './styles.css'; // Import the custom CSS file

const New = () => {
  return (
    <>
      <div className="bg-green">
        <div className="upperpart flex flex-col sm:flex-row justify-evenly bg-green h-auto sm:h-80">
          <img
            src="https://imgs.search.brave.com/7FKdEMGvXuy4IKlkN0bNlNg4g0XtN3dtJEnYZIA3b3M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtcGxhdGZvcm0u/OTlzdGF0aWMuY29t/Ly9mcWZtSW81ZVFQ/LTN6VjQxOGkxUHgy/WWp4UFU9LzQxNng4/MzI6MTIzOHgxNjU0/L2ZpdC1pbi81MDB4/NTAwLzk5ZGVzaWdu/cy1jb250ZXN0cy1h/dHRhY2htZW50cy83/MC83MDk4Ny9hdHRh/Y2htZW50XzcwOTg3/MTA5"
            className="h-40 w-40 sm:h-[15vh] sm:w-[13vw] object-cover mt-10 mx-auto sm:mx-0"
          />
          <h1 className="title text-center sm:text-left w-full sm:w-[30vw] h-auto sm:h-20 text-white text-4xl sm:text-6xl mt-10">
            LET`S TALK ABOUT THE NEXT BIG THING
          </h1>
        </div>
        <div className="middlepart flex flex-col sm:flex-row justify-center gap-4 sm:gap-11 mt-10 sm:mt-0">
          <a href="https://mail.google.com/mail">
            <button className="btn2 w-full sm:w-auto px-12 sm:px-48 py-4 sm:py-9 text-xl sm:text-2xl text-white border border-white rounded-full">
              Send Message
            </button>
          </a>
          <button className="btn2 w-full sm:w-auto px-12 sm:px-48 py-4 sm:py-9 text-xl sm:text-2xl text-white border border-white rounded-full">
            Discuss Project
          </button>
        </div>

        <div className="lower flex flex-col sm:flex-row justify-evenly bg-green mt-10 sm:mt-20 gap-4 sm:gap-0">
          <div className="relative w-full sm:w-auto">
            <div id="div1" className="opinsta h-20 p-2 text-white bg-green flex gap-14 border-t-2 z-10 relative">
              <div className="opinsta1">
                <h1>LinkedIn</h1>
                <h2>Dipesh Devkota</h2>
              </div>
              <div className="logo ">
                <a href="https://np.linkedin.com/in/dipesh-devkota-180b05253?trk=people-guest_people_search-card&original_referer=https%3A%2F%2Fwww.linkedin.com%2F">
                  <RiLinkedinBoxFill className="text-white text-4xl" />
                </a>
              </div>
            </div>
            <div className="backinsta absolute top-0 left-0 h-20 w-full bg-slate-600 z-0"></div>
          </div>
          <div className="relative w-full sm:w-auto">
            <div id="div2" className="opinsta h-20 p-2 text-white bg-green flex gap-14 border-t-2 z-10 relative">
              <div className="opinsta1">
                <h1>Instagram</h1>
                <h2>@_dipeshhhh_</h2>
              </div>
              <div className="logo ">
                <a href="https://www.instagram.com/_dipeshhhh_/">
                  <RiInstagramLine className="text-white text-4xl" />
                </a>
              </div>
            </div>
            <div className="backinsta absolute top-0 left-0 h-20 w-full bg-slate-600 z-0"></div>
          </div>
          <div className="relative w-full sm:w-auto">
            <div id="div3" className="opinsta h-20 p-2 text-white bg-green flex gap-14 border-t-2 z-10 relative">
              <div className="opinsta1">
                <h1>GitHub</h1>
                <h2>Dipesh Devkota</h2>
              </div>
              <div className="logo ">
                <a href="#">
                  <RiGithubFill className="text-white text-4xl" />
                </a>
              </div>
            </div>
            <div className="backinsta absolute top-0 left-0 h-20 w-full bg-slate-600 z-0"></div>
          </div>
          <div className="relative w-full sm:w-auto">
            <div id="div4" className="opinsta h-20 p-2 text-white bg-green flex gap-14 border-t-2 z-10 relative">
              <div className="opinsta1">
                <h1>Phone</h1>
                <h2>+977 9845945202</h2>
              </div>
              <div className="logo ">
                <RiPhoneLine className="text-white text-4xl" />
              </div>
            </div>
            <div className="backinsta absolute top-0 left-0 h-20 w-full bg-slate-600 z-0"></div>
          </div>
        </div>
        <div className="copyright text-center text-white py-4 mt-9 opacity-55">
          &copy; Copyright by Dipesh Devkota 2024
        </div>
      </div>
    </>
  );
};

export default New;
