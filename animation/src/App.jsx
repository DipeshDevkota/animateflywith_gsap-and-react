import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import  { useRef,useState } from 'react';

const App = () => {
  
// const gsapref=useRef();

// useGSAP(()=>
// {
//   gsap.from(gsapref.current,{
//     y:300,
//     opacity:0,
//     rotate:360,
//     duration:1,
//     delay:0.5,
//   })
// })

const [golo, setGolo] = useState(0)
const [rotate, setRotate] = useState(0)
const [rotateY, setRotateY] = useState(0)


const random= gsap.utils.random(-500,500,100)
 const random2=gsap.utils.random(-360,360,60)
const random3=gsap.utils.random(-200,200,10)


const gsapref=useRef()
useGSAP(()=>
{
  gsap.to(gsapref.current,{
    x:golo,
    y:rotateY,
    duration:0.5,
    rotate:rotate,
  })
},[golo,rotate])




  return (
    <main className='flex flex-col items-center justify-center h-screen bg-black pt-32 pl-32 '>


     {/* <div className="container p-2 border border-solid  border-white ">
            
          <div  ref={gsapref} className="circle h-48 w-48 bg-red-500 border border-black rounded-full"></div>
           
          <div ref={gsapref} className="box h-48 w-48 bg-slate-400 border border-black "></div>
     </div>

     <div className="container p-2 border border-solid  border-black ">

          <div className="circle h-48 w-48 bg-red-500 border border-black rounded-full"></div>
          <div className="box h-48 w-48 bg-slate-400 border border-black "></div>
          
          
     </div> */}
  



  <button className=' btn-1 mb-40 p-5 transform active:scale-75 border border-black rounded-3xl px-9 bg-slate-500 '
  onClick={()=>
    {
      setGolo(random)
      setRotate(random2)
      setRotateY(random3)
      console.log(golo)
      console.log(rotate)
    }
  }>
Animate
  </button > 
 <img  ref={gsapref}src="https://imgs.search.brave.com/X_K6xjys_10i7SY-OoGASSrSoYPIkS2HNzQ2BqYlmtY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL2ltZy8yMDQz/ODc4LnBuZw" className="img-2 h-60 w-60 border border-black  "></img>

  
  </main>


  );
};

export default App;
