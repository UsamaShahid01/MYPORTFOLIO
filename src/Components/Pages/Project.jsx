// import React from 'react'

// const About = () => {
//   return (
//     <div>


//     </div>
//   )
// }

// export default About



import { useState, useCallback, useEffect, useRef } from "react";
import "./Project.css";



const App = () => {

  const password = () => {
    window.open("https://password112233.netlify.app/", "_blank");
  }

  const tictactoe = () => {
    window.open("https://tictactoe0012.netlify.app/", "_blank");
  }

  const bgchanger = () => {
    window.open("https://bg-changer0012.netlify.app/", "_blank");
  }


  return (
    <div className="project-one">


      <div className="cards">


        {/* .,.,.,.,.,.,new.,.,.,.,., */}


        <div  class="max-w-sm  overflow-hidden shadow-lg m-6 rounded-2xl  ">
          <img onClick={password} class="w-full h-60 cursor-pointer" src="../public/Screenshot_40.png" />
          <div class="px-6 py-4">
            <div onClick={password} class="font-bold text-xl mb-2 cursor-pointer underline" className="pass">
              Password Generator
              </div>

            <p class="text-gray-700 text-base">
              A Password Generator is a simple yet highly useful project that focuses on creating secure, random
              passwords for users. The primary goal is to help users enhance their online security by generating
              passwords that are difficult to guess or crack.
            </p>
          </div>
        </div>
        {/* .,.,.,.,.,.,.,end.,.,.,.,.,.,.,., */}

        {/* .,.,.,.,.,.,.,.,.,new.,.,.,.,.,.,.,.,.,.,., */}

        <div className='second-image' class="max-w-sm  overflow-hidden shadow-lg m-6 rounded-2xl">
          <img onClick={tictactoe} class="w-full h-60 cursor-pointer" src="../public/Screenshot_42.png" />
          <div class="px-6 py-4">
            <div onClick={tictactoe} class="font-bold text-xl mb-2 cursor-pointer underline" >
              Tic Tac Toe </div>
            <p class="text-gray-700 text-base">
              Tic Tac Toe is a classic two-player game that combines strategy and fun. Played on a 3x3 grid,
              the objective is to align three of your symbols (X or O) horizontally, vertically, or diagonally
              before your opponent does.
            </p>
          </div>
        </div>
        
        {/* .,.,.,.,.,.,.,.,.end.,.,.,.,.,.,.,.,.,.,., */}


        {/* .,.,.,.,.,.,.,.,.,new.,.,.,.,.,.,.,.,.,.,., */}

        <div className='third-image' class="max-w-sm overflow-hidden shadow-lg m-6 rounded-2xl">
          <img onClick={bgchanger} class="w-full h-60 cursor-pointer" src="../public/Screenshot_12.png" />
          <div class="px-6 py-4">
            <div onClick={bgchanger} class="font-bold text-xl mb-2 cursor-pointer underline">Background Changer</div>
            <p class="text-gray-700 text-base">
              A background color changer is a simple yet interactive feature that allows users to change the
              background color of a webpage by clicking on buttons. Each button is labeled or styled to represent
              a specific color, such as red, blue, green, or yellow.
            </p>
          </div>
          {/* <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        </div> */}
        </div>
        {/* .,.,.,.,.,.,.,.,.end.,.,.,.,.,.,.,.,.,.,., */}
      </div >


    </div>
  )
}

export default App



