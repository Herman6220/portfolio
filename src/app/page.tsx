'use client'
import { useEffect, } from "react";
import Image from "next/image";
import Projects from "@/components/Projects-2";
import ResumeDownloader from "@/components/ResumeDownloader";
import Skills from "@/components/Skills";
import Bio from "@/components/Bio";
import Contact from "@/components/Contact";

export default function Home() {


  useEffect(() => {
    console.log(`%c
███████╗ █████╗ ███╗   ██╗██╗  ██╗ █████╗ ██╗     ██████╗ 
██╔════╝██╔══██╗████╗  ██║██║ ██╔╝██╔══██╗██║     ██╔══██╗
███████╗███████║██╔██╗ ██║█████╔╝ ███████║██║     ██████╔╝
╚════██║██╔══██║██║╚██╗██║██╔═██╗ ██╔══██║██║     ██╔═══╝ 
███████║██║  ██║██║ ╚████║██║  ██╗██║  ██║███████╗██║     
╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝
%c
██╗  ██╗██╗   ██╗███╗   ███╗ █████╗ ██████╗ 
██║ ██╔╝██║   ██║████╗ ████║██╔══██╗██╔══██╗
█████╔╝ ██║   ██║██╔████╔██║███████║██████╔╝
██╔═██╗ ██║   ██║██║╚██╔╝██║██╔══██║██╔══██╗
██║  ██╗╚██████╔╝██║ ╚═╝ ██║██║  ██║██║  ██║
╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝
%c%c      `, "color: #aaaaff; font: 400 1em monospace;", "", "background-color: #d2ff00; color: black; font: 400 1em monospace; padding: 0.5em 0; font-weight: bold;", "")
    console.log(`                  
      `)
  }, [])


  return (
    <>
      {/* <HeroSection /> */}
      <div className="w-full h-[100vh] flex md:items-center items-start md:pt-0 pt-20 justify-center relative border-b border-gray-800">
        <div className="absolute md:w-140 w-full bottom-0 left-0 -z-10" style={{ animation: "slideRight 1s ease-out forwards" }}>
          <Image src="/ghost4.jpg" alt="hero" width={800} height={400} priority />
          <div className="absolute w-full h-full [box-shadow:inset_0_0_40px_20px_#000,inset_0_0_20px_10px_#000] inset-0"></div>
        </div>
        <style>
          {`
            @keyframes slideRight {
              from {
                opacity: 0;
                transform: translateX(-20px) translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateX(0) translateY(0);
              }
            }
          `}
        </style>

        {/* <div
          ref={containerRef}
          className="h-full w-1/4 relative">
          <MatrixRain containerRef={containerRef} /> 
          <div className="absolute bottom-0 h-full w-full bg-gradient-to-b from-transparent via-transparent to-[#000000]"></div>
        </div> */}

        <div className="max-w-fit w-full flex flex-col md:ml-100 md:mt-0 mt-8 md:py-14 py-8 md:px-20 px-10 relative">
          <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon
              points="1,12 5,3 95,3 99,12 95,4 5,4"
              stroke=""
              strokeWidth="1px"
              fill="#8B0000"
              vectorEffect="non-scaling-stroke"
              style={{ animation: "slideUp 0.5s ease-out forwards" }}
            />
            <polygon
              points="1,88 5,97 95,97 99,88 95,96 5,96"
              stroke=""
              strokeWidth="1px"
              fill="#8B0000"
              vectorEffect="non-scaling-stroke"
              style={{ animation: "slideDown 0.5s ease-out forwards" }}
            />
            {/* <polygon
              points="1,10 5,1 95,1 99,10 95,2 5,2"
              stroke=""
              strokeWidth="1px"
              fill="red"
              vectorEffect="non-scaling-stroke"
            /> */}
          </svg>
          <style>
            {`
              @keyframes slideUp{
                from {
                  transform: translateY(20px);
                }
                to {
                  transform: translateY(0);
                }
              }

              @keyframes slideDown{
                from {
                  transform: translateY(-20px);
                }
                to {
                  transform: translateY(0);
                }
              }

              @keyframes appear{
                from {
                  opacity: 0;
                }
                to {
                  opacity: 1;
                }
              }
            `}
          </style>
          <div className="font-oxanium font-extralight md:text-2xl text-red-200 md:px-4 px-2 w-full" style={{ animation: "appear 2s ease-out forwards" }}>CALL SIGN</div>
          <div className="text-red-00 font-echocore font-black md:text-9xl text-5xl text-center" style={{ textShadow: "1.5px 1.5px 0px #f99, 0 0 10px #f00, 0 0 60px #f00", animation: "appear 2s ease-out forwards" }}>GHOST</div>
        </div>

      </div >


      {/* 2nd page */}
      <div className="h-full" id="projects-section">
      <Projects />
      </div>

      {/* 3rd page */}
      <div className="h-full" id="skills-section">
      <Skills />
      </div>



      {/* 4th page */}
      <div className="h-full" id="about-section">
      <Bio />
      </div>
      {/* <style>
        {`
          .typewriter{
            overflow: hidden;
            white-space: nowrap;
            width: 0;
          }
          .typewriter.animate{
            animation: typing 3s steps(20, end) forwards;
          }
          .cursor {
            border: 1px solid #aaf;         
            background-color: transparent; 
            vertical-align: bottom;
            animation: blink-caret 1s step-end infinite;
          }

          @keyframes typing{
                from{width: 0}
                to{width: 68%}
          }
          @media(min-width: 768px){
            @keyframes typing{
                from{width: 0}
                to{width: 42%}
            }
          }
          @keyframes blink-caret{
            0%,100% { background-color: transparent}
            50% { background-color: #aaf }
          }
        `}
      </style> */}

      {/* 5th page */}
      <div className="h-full" id="contact-section">
        <Contact />
      </div>

      <ResumeDownloader />
    </>
  );
}
