import React from 'react';
import { useNavigate } from "react-router-dom";
import "./Home.css"


const Home = () => {
  const navigate = useNavigate();
  const getstarted =() => {
    // window .open ka mtb aik aur tab open hojaiegy 
    // window.open("http://localhost:5173/contact", "_blank");
    
    // navigate aur react router dom ka mtlb use page p jis page p jana hai open hojaiega 
    navigate("/Contact");
  }


  return (
    <div className='home'>

      <div className='main-parent'>
        <div className='child-one'>
          <div>
            <p>
              <span className='welcome-to'>Welcome to</span>  <span className='usr'>Usama Shahid's website</span> your trusted source for innovative and secure web solutions.
              With a passion for excellence, I specialize in crafting dynamic, user-friendly websites that deliver
              outstanding performance across all interfaces. My expertise in React front-end development ensures
              seamless, responsive, and visually engaging digital experiences.Explore my work and discover how I
              can bring your vision to life with precision, creativity, and reliability.
            </p>
          </div>

          <div className='getstarted'>
            <button onClick={getstarted}>Get Started</button>
          </div>
        </div>


        <div className='child-two'>
          <img src="/boy.png" />
        </div>
      </div>


    </div>
  )
}

export default Home
