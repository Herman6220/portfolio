'use client'
import { useEffect, useRef, useState } from "react";
import MatrixRain from "./components/MatrixRain";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useToast } from "./hooks/useToast";
import Link from "next/link";
import { HiArrowDown } from "react-icons/hi";
import Image from "next/image";

export default function Home() {

  type FormData = {
    name: string,
    email: string,
    message: string
  }

  const [text, setText] = useState("Software Developer");
  const animating = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { showToast } = useToast();
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>();


  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
      const ans = await response.json();
      console.log(ans);
      showToast(ans.message);
      reset();
    } catch (error) {
      console.log(error);
      reset();
    }
  }

  const scrambleText = (text: string) => {
    if (animating.current) return;
    animating.current = true;

    let randomChars = "!@#$%^&*_+=-<>";
    let iterations = 0;

    const step = () => {
      setText(
        text.split("").map((char, index) => {
          if (char === " ") return " ";
          return index < iterations
            ? char
            : randomChars[Math.floor(Math.random() * randomChars.length)];
        }).join(""));

      if (iterations++ < text.length) setTimeout(step, 50);
      else animating.current = false;
    };

    step();
  }


  return (
    <>
      <div className="w-full h-[100vh] flex gap-4 items-start justify-between relative">
        <div className="flex flex-col justify-center h-full w-3/4 sm:pl-20 pl-8 pb-36">
          <div>
            <p className="text-sm text-green-200 font-shareTech">I&apos;m a</p>
            <h1 className="w-90 text-2xl sm:text-4xl text-green-200 font-shareTech" onMouseEnter={() => scrambleText(text)}>{text}</h1>
            <div className="flex sm:flex-row flex-col gap-4 sm:items-center py-4">
              <p className="font-shareTech text-sm sm:text-md text-green-200" style={{ textShadow: "0 0 5px #0f0" }}>sankalpkrpoddar000@gmail.com</p>
              <Link href="#contact-section">
                <button
                  className="shad w-40 h-10 text-green-200 font-shareTech rounded-full bg-gradient-to-b from-red-800 via-red-900/20 to-red-700/50 cursor-pointer transition-normal duration-300"
                  style={{ textShadow: "0 0 5px #0f0" }}
                >Get in touch</button>
              </Link>
              <style>
                {`
                  .shad{
                    box-shadow: 0 10px 100px 0px rgba(255, 0, 0, 0.7), 0 20px 50px -16px #f00;
                  }
                  .shad:hover{
                    box-shadow: 0 10px 100px 5px rgba(255, 0, 0, 0.7), 0 20px 70px -12px #f00;
                  }
                `}
              </style>
            </div>
            <div className="flex gap-4 mt-8 sm:mt-4">
              <Link href="https://github.com/Herman6220" className="cursor-pointer"><FaGithub className="text-green-300 size-6 sm:size-9" /></Link>
              <Link href="https://linkedin.com/in/sankalp6220"><FaLinkedin className="text-green-300 size-6 sm:size-9" /></Link>
              <Link href="https://x.com/sankalp6220"><FaTwitter className="text-green-300 size-6 sm:size-9" /></Link>
            </div>
          </div>
        </div>
        <div
          ref={containerRef}
          className="h-full w-1/4 relative">
          <MatrixRain containerRef={containerRef} />
          <div className="absolute bottom-0 h-full w-full bg-gradient-to-b from-transparent via-transparent to-[#000000]"></div>
        </div>
      </div>
      {/* 2nd page */}
      <div id="projects-section" className="h-full pt-20">
        <div className="py-10 px-2 sm:py-4 sm:px-4 w-full h-full sm:h-[80vh] flex sm:flex-row flex-col gap-4 items-center justify-center sm:items-center sm:justify-between relative">
          <div className="absolute mb-4 top-0 left-8 sm:left-20"><h1 className="font-shareTech text-xl sm:text-3xl font-black text-green-300">Projects</h1></div>
          <div className="w-full h-44 sm:w-3/5 sm:h-3/4 sm:p-2 relative">
            <svg
              viewBox="0 0 100 102"
              className="w-full h-full"
              preserveAspectRatio="none"
              filter="drop-shadow(0 0 20px #7bf1a8)"
            >
              <polygon
                points="0,10 6,0 60,0 63,5 97,5 100,10 100,90 94,100 40,100 37,95 3,95 0,90"
                fill="rgba(0, 255, 0, 0.05)"
                stroke="#7bf1a8"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
              />
              <polygon
                points="0,10 6,0 60,0 63,5 97,5 100,10 100,90 94,100 40,100 37,95 3,95 0,90"
                fill="none"
                stroke="#7bf1a8"
                strokeWidth="0.2"
                transform="scale(0.99, 0.975)"
                transform-origin="center"
                vectorEffect="non-scaling-stroke"
              />
              {/* //lower chips */}
              <polygon points="37,100 34.6,96.2 36.6,96.2 39,100" fill="#7bf1a8" />
              <polygon points="34,100 31.6,96.2 33.6,96.2 36,100" fill="#7bf1a8" />
              <polygon points="31,100 28.6,96.2 30.6,96.2 33,100" fill="#7bf1a8" />
              <polygon points="28,100 25.6,96.2 27.6,96.2 30,100" fill="#7bf1a8" />
              <polygon points="25,100 22.6,96.2 24.6,96.2 27,100" fill="#7bf1a8" />
              <polygon points="22,100 19.6,96.2 21.6,96.2 24,100" fill="#7bf1a8" />
              <polygon points="19,100 16.6,96.2 18.6,96.2 21,100" fill="#7bf1a8" />
              <polygon points="16,100 13.6,96.2 15.6,96.2 18,100" fill="#7bf1a8" />
              <polygon points="13,100 10.6,96.2 12.6,96.2 15,100" fill="#7bf1a8" />
              <polygon points="10,100 7.6,96.2 9.6,96.2 12,100" fill="#7bf1a8" />

              {/* //upper chips */}
              <polygon points="61,0 63.4,3.8 65.4,3.8 63,0" fill="#7bf1a8" />
              <polygon points="64,0 66.4,3.8 68.4,3.8 66,0" fill="#7bf1a8" />
              <polygon points="67,0 69.4,3.8 71.4,3.8 69,0" fill="#7bf1a8" />
              <polygon points="70,0 72.4,3.8 74.4,3.8 72,0" fill="#7bf1a8" />
              <polygon points="73,0 75.4,3.8 77.4,3.8 75,0" fill="#7bf1a8" />
              <polygon points="76,0 78.4,3.8 80.4,3.8 78,0" fill="#7bf1a8" />
              <polygon points="79,0 81.4,3.8 83.4,3.8 81,0" fill="#7bf1a8" />
              <polygon points="82,0 84.4,3.8 86.4,3.8 84,0" fill="#7bf1a8" />
              <polygon points="85,0 87.4,3.8 89.4,3.8 87,0" fill="#7bf1a8" />
              <polygon points="88,0 90.4,3.8 92.4,3.8 90,0" fill="#7bf1a8" />


            </svg>
            <div className="absolute sm:top-14 -top-2 -left-8 sm:left-14 sm:w-120 sm:h-66 scale-66 sm:scale-100">
              <svg viewBox="0 0 120 66" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <pattern id="bias" patternUnits="userSpaceOnUse" width="120" height="66">
                    <image href="/p1.png" x="0" y="0" width="120" height="66" preserveAspectRatio="xMidYMid slice" />
                  </pattern>
                </defs>
                <polygon
                  points="0,4 5,0 115,0 120,4 120,62 115,66 5,66 0,62"
                  fill="url(#bias)"
                  stroke="#7bf1a8"
                  strokeWidth="1"
                  vectorEffect="non-scaling-stroke"
                  preserveAspectRatio="xMidYMid slice"
                />
              </svg>
            </div>
            <div className="absolute top-4 sm:top-13 left-58 sm:left-140 w-28 sm:w-72 sm:h-72 flex flex-col gap-2 sm:gap-4">
              <div>
                <h1 className="font-shareTech font-black text-sm sm:text-xl text-green-200">Hermano.</h1>
                <h2 className="font-shareTech text-[10px] sm:text-lg text-green-200">service provider app</h2>
              </div>
              <div className="w-full h-full sm:h-8 border border-green-500/20 bg-green-700/20 px-1 sm:py-2 sm:px-2">
                <p className="font-shareTech text-[10px] sm:text-xs text-green-200">•Next.js, MongoDB, NextAuth, Razorpay </p>
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <Link href="https://hermano-nu.vercel.app/">
                  <div className="w-full h-6 sm:h-8 text-xs sm:text-sm border border-blue-300/40 bg-black px-1 py-2 font-shareTech flex items-center justify-center text-green-200" style={{ boxShadow: "0 0 2px #f0f" }}>Visit</div>
                </Link>
                <Link href="https://github.com/Herman6220/Hermano">
                  <div className="w-full h-6 sm:h-8 text-xs sm:text-sm border border-blue-300/40 bg-black px-1 py-2 font-shareTech flex items-center justify-center text-green-200" style={{ boxShadow: "0 0 2px #f0f" }}>Repository</div>
                </Link>
              </div>
            </div>

          </div>
          <div className="w-full sm:w-2/5 h-full relative">
            <div className="w-full sm:h-1/2 h-40 sm:p-2 relative">
              <svg
                viewBox="0 0 101 102"
                className="w-full h-full"
                preserveAspectRatio="none"
                filter="drop-shadow(0 0 20px #7bf1a8)"
              >
                <polygon points="0,5 2,0 30,0 32,5 46,5 48,10 98,10 100,15 100,90 98,95 78,95 76,100 2,100 0,95"
                  fill="rgba(0, 255, 0, 0.05)"
                  stroke="#7bf1a8"
                  strokeWidth="1"
                  vectorEffect="non-scaling-stroke"
                />
                <polygon points="78.4,96.6 77,100 78.5,100 79.9,96.6" fill="#7bf1a8" />
                <polygon points="80.4,96.6 79,100 80.5,100 81.9,96.6" fill="#7bf1a8" />
                <polygon points="82.4,96.6 81,100 82.5,100 83.9,96.6" fill="#7bf1a8" />
                <polygon points="84.4,96.6 83,100 84.5,100 85.9,96.6" fill="#7bf1a8" />
                <polygon points="86.4,96.6 85,100 86.5,100 87.9,96.6" fill="rgba(0, 255, 0, 0.01)" stroke="#7bf1a8" strokeWidth="1" vectorEffect="non-scaling-stroke" />
                <polygon points="88.4,96.6 87,100 88.5,100 89.9,96.6" fill="rgba(0, 255, 0, 0.01)" stroke="#7bf1a8" strokeWidth="1" vectorEffect="non-scaling-stroke" />
                <polygon points="90.4,96.6 89,100 90.5,100 91.9,96.6" fill="rgba(0, 255, 0, 0.01)" stroke="#7bf1a8" strokeWidth="1" vectorEffect="non-scaling-stroke" />
                <polygon points="1,50 1,6 2.5,2 29.8,2 30.2,3 2.8,3 1.5,6 1.5,49" fill="none" stroke="#7bf1a8" strokeWidth="1" vectorEffect="non-scaling-stroke" />
                <polygon points="31,0 32.4,3.4 46.4,3.4 48.5,8.6 51.2,8.6 48,0" fill="#7bf1a8" />
              </svg>
              <div className="absolute -top-3 -left-12 sm:top-12 sm:left-8 sm:w-80 h-48 scale-60 sm:scale-100 ">
                <svg
                  viewBox="0 0 80 48"
                  className="w-full h-full"
                  preserveAspectRatio="none"
                >
                  <polygon
                    points="0,4 4,0 76,0 80,4 80,44 76,48 4,48 0,44"
                    fill="none"
                    stroke="#7bf1a8"
                    strokeWidth="1"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </div>

              <div className="absolute top-6 left-56 sm:top-12 sm:left-94 w-30 h-30 sm:w-44 sm:h-48 flex flex-col gap-2 sm:gap-4 ">
                <div>
                  <h1 className="font-shareTech font-black text-sm sm:text-base text-green-200">Project 2</h1>
                  <h2 className="font-shareTech text-[10px] sm:text-sm text-green-200">project desc</h2>
                </div>
                <div className="w-full h-8 border border-green-500/20 bg-green-700/20 px-1 sm:py-2 sm:px-2">
                  <p className="font-shareTech text-[10px] sm:text-xs text-green-200">•Tech stack</p>
                </div>
                <div className="flex flex-col gap-1 sm:gap-2">
                  <Link href="#">
                    <div className="w-full h-6 sm:h-8 text-xs sm:text-sm border border-blue-300/40 bg-black px-1 py-2 font-shareTech flex items-center justify-center text-green-200" style={{ boxShadow: "0 0 2px #f0f" }}>Visit</div>
                  </Link>
                  <Link href="#">
                    <div className="w-full h-6 sm:h-8 text-xs sm:text-sm border border-blue-300/40 bg-black px-1 py-2 font-shareTech flex items-center justify-center text-green-200" style={{ boxShadow: "0 0 2px #f0f" }}>Repository</div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-full sm:h-1/2 h-40 sm:p-2 mt-4 sm:mt-0 relative">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full"
                preserveAspectRatio="none"
                filter="drop-shadow(0 0 20px #7bf1a8)"
              >
                <polygon points="1.2,12.5 5.2,2.5 98,2.5 98,78.5 89,95 6.2,95 1.2,84.5"
                  fill="rgba(0, 255, 0, 0.05)"
                  stroke="#7bf1a8"
                  strokeWidth="1"
                  vectorEffect="non-scaling-stroke"
                />
                <polygon points="1.2,12.5 5.2,2.5 98,2.5 98,78.5 89,95 6.2,95 1.2,84.5"
                  fill="none"
                  stroke="#7bf1a8"
                  strokeWidth="0.2"
                  vectorEffect="non-scaling-stroke"
                  transform="scale(0.98, 0.96)"
                  transform-origin="center"
                />
                <polygon points="0,20 0,15 0,10 4,0 16,0 17,2.5 5.2,2.5 1.2,12.5 1.2,22" fill="#7bf1a8" />
                <polygon points="86,100 92,100 96,92.5 96,87.5 100,80 100,70 98,65 98,78.5 89,95 84,95" fill="#7bf1a8" />
              </svg>

              <div className="absolute -top-5 -left-11 sm:top-10 sm:left-10 scale-60 sm:scale-100 w-80 h-48  ">
                <svg
                  viewBox="0 0 80 48"
                  className="w-full h-full"
                  preserveAspectRatio="none"
                >
                  <polygon
                    points="0,4 4,0 76,0 80,4 80,44 76,48 4,48 0,44"
                    fill="none"
                    stroke="#7bf1a8"
                    strokeWidth="1"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </div>
              <div className="absolute top-4 left-56 sm:top-10 sm:left-94 w-30 h-30 sm:w-44 sm:h-40 flex flex-col gap-2 sm:gap-3 scale-100">
                <div>
                  <h1 className="font-shareTech font-black text-sm sm:text-base text-green-200">Project 3</h1>
                  <h2 className="font-shareTech text-[10px] sm:text-sm text-green-200">project desc</h2>
                </div>
                <div className="w-full h-8 border border-green-500/20 bg-green-700/20 px-1 sm:py-2 sm:px-2">
                  <p className="font-shareTech text-[10px] sm:text-xs text-green-200">•Tech stack</p>
                </div>
                <div className="flex flex-col gap-1 sm:gap-2">
                  <Link href="#">
                    <div className="w-full h-6 sm:h-8 text-xs sm:text-sm border border-blue-300/40 bg-black px-1 py-2 font-shareTech flex items-center justify-center text-green-200" style={{ boxShadow: "0 0 2px #f0f" }}>Visit</div>
                  </Link>
                  <Link href="#">
                    <div className="w-full h-6 sm:h-8 text-xs sm:text-sm border border-blue-300/40 bg-black px-1 py-2 font-shareTech flex items-center justify-center text-green-200" style={{ boxShadow: "0 0 2px #f0f" }}>Repository</div>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* 3rd page */}
      <div id="skills-section" className="h-full pt-10 sm:pt-20">
        <div className="p-2 w-full h-full my-10 flex items-center justify-center rounded-4xl bg-gradient-to-b from-green-400/70 via-green-800/20 to-green-400/40">
          <div className="w-full h-full bg-black rounded-3xl flex flex-col md:flex-row items-center justify-center py-8 px-12 gap-4">
            <div className="w-full h-full">
              <h1 className="font-shareTech  text-xl sm:text-3xl font-black text-green-300 mb-2">Skills and Tech stack</h1>
              <div>
                <div>
                  <h4 className="font-shareTech sm:text-lg font-bold text-green-300">Frontend</h4>
                  <p className="font-shareTech text-sm sm:text-md pl-4 text-green-100">•  Responsive, accessible UI development.</p>
                  <p className="font-shareTech text-sm sm:text-md pl-4 text-green-100">•  State management for complex apps.</p>
                </div>
                <div>
                  <h4 className="font-shareTech sm:text-lg font-bold text-green-300">Backend</h4>
                  <p className="font-shareTech text-sm sm:text-md pl-4 text-green-100">•  REST & GraphQL API design.</p>
                  <p className="font-shareTech text-sm sm:text-md pl-4 text-green-100">•  Secure authentication & authorization.</p>
                  <p className="font-shareTech text-sm sm:text-md pl-4 text-green-100">•  Database architecture & management, & payment gateway integration.</p>
                </div>
                <div>
                  <h4 className="font-shareTech sm:text-lg font-bold text-green-300">Fullstack</h4>
                  <p className="font-shareTech text-sm sm:text-md pl-4 text-green-100">•  Scalable application architecture.</p>
                  <p className="font-shareTech text-sm sm:text-md pl-4 text-green-100">•  Cloud storage & media integration.</p>
                  <p className="font-shareTech text-sm sm:text-md pl-4 text-green-100">•  Modern deployment & hosting, & Seamless frontend–backend integration.</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col scale-50 sm:scale-80 md:scale-100 items-center justify-center gap-2">
              <div className="flex gap-6">
                <div className="animateSvg h-24 w-24 relative flex items-center justify-center">
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full"
                    preserveAspectRatio="none"
                  >
                    <polygon points="30,1 70,1 99,30 99,70 70,99 30,99 1,70 1,30"
                      fill="rgba(0, 255, 0, 0.12)"
                      stroke="#7bf1a8"
                      strokeWidth="1"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                  <Image alt="c++" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" width={60} height={60} className="absolute w-15 h-15" />
                </div>
                <div className="animateSvg h-24 w-24 relative flex items-center justify-center">
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full"
                    preserveAspectRatio="none"
                  >
                    <polygon points="30,1 70,1 99,30 99,70 70,99 30,99 1,70 1,30"
                      fill="rgba(0, 255, 0, 0.12)"
                      stroke="#7bf1a8"
                      strokeWidth="1"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                  <Image alt="nextjs" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" width={60} height={60} className="absolute w-15 h-15" />
                </div>
                <div className="animateSvg h-24 w-24 relative flex items-center justify-center">
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full"
                    preserveAspectRatio="none"
                  >
                    <polygon points="30,1 70,1 99,30 99,70 70,99 30,99 1,70 1,30"
                      fill="rgba(0, 255, 0, 0.12)"
                      stroke="#7bf1a8"
                      strokeWidth="1"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                  <i className="devicon-typescript-plain colored text-5xl text-green-200 absolute"></i>
                </div>
                <div className="animateSvg h-24 w-24 relative flex items-center justify-center">
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full"
                    preserveAspectRatio="none"
                  >
                    <polygon points="30,1 70,1 99,30 99,70 70,99 30,99 1,70 1,30"
                      fill="rgba(0, 255, 0, 0.12)"
                      stroke="#7bf1a8"
                      strokeWidth="1"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                  <i className="devicon-javascript-plain colored text-5xl absolute"></i>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="animateSvg h-24 w-24 relative flex items-center justify-center">
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full"
                    preserveAspectRatio="none"
                  >
                    <polygon points="30,1 70,1 99,30 99,70 70,99 30,99 1,70 1,30"
                      fill="rgba(0, 255, 0, 0.12)"
                      stroke="#7bf1a8"
                      strokeWidth="1"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                  <i className="devicon-react-original colored text-5xl text-green-200 absolute"></i>
                </div>
                <div className="animateSvg h-24 w-24 relative flex items-center justify-center">
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full"
                    preserveAspectRatio="none"
                  >
                    <polygon points="30,1 70,1 99,30 99,70 70,99 30,99 1,70 1,30"
                      fill="rgba(0, 255, 0, 0.12)"
                      stroke="#7bf1a8"
                      strokeWidth="1"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                  <Image alt="mongo-db" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" width={60} height={60} className="absolute w-15 h-15" />
                </div>
                <div className="animateSvg h-24 w-24 relative flex items-center justify-center">
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full"
                    preserveAspectRatio="none"
                  >
                    <polygon points="30,1 70,1 99,30 99,70 70,99 30,99 1,70 1,30"
                      fill="rgba(0, 255, 0, 0.12)"
                      stroke="#7bf1a8"
                      strokeWidth="1"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                  <i className="devicon-express-original text-5xl absolute"></i>
                </div>


                <div className="animateSvg h-24 w-24 relative flex items-center justify-center">
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full"
                    preserveAspectRatio="none"
                  >
                    <polygon points="30,1 70,1 99,30 99,70 70,99 30,99 1,70 1,30"
                      fill="rgba(0, 255, 0, 0.12)"
                      stroke="#7bf1a8"
                      strokeWidth="1"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                  <Image alt="nodejs" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" width={60} height={60} className="absolute w-15 h-15" />
                </div>
                <div className="animateSvg h-24 w-24 relative flex items-center justify-center">
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full"
                    preserveAspectRatio="none"
                  >
                    <polygon points="30,1 70,1 99,30 99,70 70,99 30,99 1,70 1,30"
                      fill="rgba(0, 255, 0, 0.12)"
                      stroke="#7bf1a8"
                      strokeWidth="1"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                  <Image alt="solidity" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/solidity/solidity-original.svg" width={60} height={60} className="absolute w-15 h-15 invert" />
                </div>
              </div>
              <div className="flex gap-6">
                <div className="animateSvg h-24 w-24 relative flex items-center justify-center">
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full"
                    preserveAspectRatio="none"
                  >
                    <polygon points="30,1 70,1 99,30 99,70 70,99 30,99 1,70 1,30"
                      fill="rgba(0, 255, 0, 0.12)"
                      stroke="#7bf1a8"
                      strokeWidth="1"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                  <i className="devicon-tailwindcss-original colored text-5xl text-green-200 absolute"></i>
                </div>
                <div className="animateSvg h-24 w-24 relative flex items-center justify-center">
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full"
                    preserveAspectRatio="none"
                  >
                    <polygon points="30,1 70,1 99,30 99,70 70,99 30,99 1,70 1,30"
                      fill="rgba(0, 255, 0, 0.12)"
                      stroke="#7bf1a8"
                      strokeWidth="1"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                  <Image alt="html" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" width={60} height={60} className="absolute w-15 h-15" />
                </div>
                <div className="animateSvg h-24 w-24 relative flex items-center justify-center">
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full"
                    preserveAspectRatio="none"
                  >
                    <polygon points="30,1 70,1 99,30 99,70 70,99 30,99 1,70 1,30"
                      fill="rgba(0, 255, 0, 0.12)"
                      stroke="#7bf1a8"
                      strokeWidth="1"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                  <Image alt="css" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" width={60} height={60} className="absolute w-15 h-15" />
                </div>
                <div className="animateSvg h-24 w-24 relative flex items-center justify-center">
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full ease-in-out"
                    preserveAspectRatio="none"
                  >
                    <polygon points="30,1 70,1 99,30 99,70 70,99 30,99 1,70 1,30"
                      fill="rgba(0, 255, 0, 0.12)"
                      vectorEffect="non-scaling-stroke"
                      stroke="#7bf1a8"
                      strokeWidth="1"
                    />
                  </svg>
                  <i className="devicon-git-plain-wordmark colored text-7xl absolute"></i>
                </div>
              </div>
            </div>
          </div>
          <style jsx>{`
          .animateSvg{
            stroke-dasharray:384;
            stroke-dashoffset:0;
            transition: stroke-dasharray 0.8s, stroke-dashoffset 0.8s, transform 0.2s, scale 0.5s;
          }
          .animateSvg:hover{
            stroke-dasharray:384;
            stroke-dashoffset:768;
            transform: translateY(-5px);
            transform: scale(1.05);
          }
        `}
          </style>
        </div>
      </div>
      {/* about section */}
      <div id="about-section" className="w-full h-120 sm:h-[60vh] pt-20 p-4 flex items-center justify-center relative">
        <svg
          className="w-full h-full"
        >
          <rect
            width="100%"
            height="100%"
            fill="none"
            stroke="#b9f8cf"
            strokeWidth="1"
            strokeDasharray="12 4"
          />
        </svg>
        <div className="absolute flex flex-col gap-2 sm:gap-4 top-24 left-8 w-78 sm:w-364 sm:h-77 font-shareTech text-green-200 sm:p-4">
          <p>
            I&apos;m <span className="text-xl sm:text-3xl font-bold text-green-300 ">Sankalp</span>
          </p>
          <p className="text-xs sm:text-base">
            — a developer driven by curiosity, creativity, and the thrill of problem-solving. I thrive on building things that feel alive on the web — experiences that aren’t just functional, but engaging and impactful.
          </p>
          <p className="text-xs sm:text-base">
            What excites me most is taking an idea and transforming it into something tangible, whether that’s a polished interface, a seamless interaction, or a system that works quietly but powerfully in the background. I’m constantly experimenting, pushing boundaries, and finding smarter ways to make technology feel effortless.
          </p>
          <p className="text-xs sm:text-base">
            I approach my work with adaptability and ambition — quick to learn, unafraid of challenges, and always focused on crafting solutions that stand out. For me, coding isn’t just about writing logic; it’s about shaping experiences that leave a mark.
          </p>
        </div>
      </div>
      {/* 4th page */}
      <div className="h-full py-10 pt-20" id="contact-section">
        <div className="w-full h-[80vh] flex items-center justify-center p-4" >
          <div className="bg-black flex flex-col sm:flex-row gap-4  w-3xl h-full sm:h-96 p-14" style={{ boxShadow: "0 0px 20px 0px #7bf1a8" }}>
            <div className="flex sm:flex-col w-full gap-4 h-full justify-between">
              <div>
                <h1 className="text-2xl sm:text-4xl font-shareTech font-black text-green-300">Got an Idea, Let&apos;s Connect</h1>
                <div className="mt-4 sm:pr-18 pr-6"><div className="border border-red-700 appear"></div></div>
                <style>
                  {`
                .appear{
                  animation: growLine 2s;
                  animation-timeline: view();
                  animation-range: entry 20% exit 50%;
                }
                @keyframes growLine{
                  from{
                    width: 0;
                  }
                  to{
                    width: 100%;
                  }
                }
              `}
                </style>
                {/* <p className="font-shareTech mt-8 text-green-200">herman@gmail.com</p> */}
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                <Link href="https://github.com/Herman6220" className="cursor-pointer"><FaGithub className="text-green-300 size-6 sm:size-9" /></Link>
                <Link href="https://linkedin.com/in/sankalp6220"><FaLinkedin className="text-green-300 size-6 sm:size-9" /></Link>
                <Link href="https://x.com/sankalp6220"><FaTwitter className="text-green-300 size-6 sm:size-9" /></Link>
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full gap-4 h-full relative">
              <input
                {...register("name", { required: "Name is required!" })}
                placeholder={`${errors.name ? errors.name.message : "name"}`}
                className={`px-4 py-2 border ${errors.name ? "border-red-500" : ""} border-green-200/50 font-shareTech focus:outline-none text-green-200`}
                style={{ boxShadow: errors.name ? "0 0px 10px 0px #fb2c36" : "0 0px 5px 0px #7bf1a8" }} />
              <input
                {...register("email", {
                  required: "Email is required!",
                  pattern: {
                    value: /^\S+@\S+$/i, message: "Invalid email"
                  }
                })}
                placeholder={`${errors.email ? errors.email.message : "email@email.com"}`}
                className={`px-4 py-2 border ${errors.email ? "border-red-900" : ""} border-green-200/50 font-shareTech focus:outline-none text-green-200`}
                style={{ boxShadow: errors.email ? "0 0px 10px 0px #fb2c36" : "0 0px 5px 0px #7bf1a8" }} />
              <textarea
                {...register("message", { required: "Message is required!" })}
                className={`px-4 py-2 h-full ${errors.message ? "border-red-500" : ""} text-green-200 border border-green-200/50 font-shareTech overflow-hidden resize-none focus:outline-none`}
                placeholder={`${errors.message ? errors.message.message : "Your message..."}`}
                style={{ boxShadow: errors.message ? "0 0px 10px 0px #fb2c36" : "0 0px 5px 0px #7bf1a8" }} />


              <button
                type="submit"
                disabled={isSubmitting}
                className="group px-2 py-1 h-18 font-shareTech text-green-200 cursor-pointer border border-red-700/50 relative overflow-hidden"
                style={{ textShadow: "0 0 5px #0f0" }}
              >
                <div className="absolute bg-red-500 top-1/2 left-1/2 -translate-x-1/2  w-56 h-28 z-0 blur-lg group-hover:scale-x-150 group-hover:blur-xl transition-transform duration-1000 ease-in-out" style={{ borderRadius: "50%" }}></div>
                <span className="relative z-10">Send Message</span>
              </button>
              <Image alt="wr" className="absolute w-10 h-10 invert bottom-14 right-2 opacity-50" width={40} height={40} src="/animal.png" />
            </form>
            {/* <style>
              {`
                .grad{
                  background: radial-gradient(ellipse at bottom, rgba(255, 0, 0, 0.5) 10%, transparent 70%);
                  transition: all 1s ease-in-out;
                }
                .grad:hover{
                  background: radial-gradient(ellipse at bottom, rgba(255, 0, 0, 0.5) 30%, transparent 90%);
                }
              `}
            </style> */}


          </div>

        </div>
      </div>
      <div className="fixed scale-80 sm:scale-100 bottom-0 right-0">
        <div className="w-64 h-16 fixed bottom-4 right-4 ">
          <svg
            viewBox="0 0 64 16"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <defs>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#0f0" floodOpacity="1" />
              </filter>
            </defs>

            <polygon
              points="1,4 4,1 63,1 63,12 59,15 1,15"
              stroke="red"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
              fill="black"
            />

            <text
              x="55%"
              y="65%"
              fill="#b9f8cf"
              fontSize="8"
              fontFamily="Share Tech Mono"
              textAnchor="middle"
              filter="url(#glow)"
            >

              <a href="/api/downloadResume" download="Sankalp_Kumar_Resume.pdf">Resume</a>
            </text>
          </svg>

        </div>
        <div className="w-20 h-20 fixed bottom-6 right-47 hover:scale-105 transition-transform duration-300">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="red"
              strokeWidth="3"
              strokeDasharray="8 3"
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="black"
              stroke="red"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
              transform="scale(0.90)"
              transform-origin="center"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="red"
              strokeWidth="2"
              strokeDasharray="30 20"
              vectorEffect="non-scaling-stroke"
              transform-origin="center"
              className="scroll-rotate scale-78"
            />
          </svg>
          <a href="/api/downloadResume" download="Sankalp_Kumar_Resume.pdf">
            <HiArrowDown className="absolute inset-0 m-auto w-5 h-5 text-green-200" filter="drop-shadow(0 0 5px #0f0)" />
          </a>
        </div>
        <style>
          {`
          .scroll-rotate{
            transform-box: fill-box;
            transform-origin: center;
            animation: spin linear both;
            animation-timeline: scroll();
            animation-range: entry 0% exit 100%;
          }
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(720deg);
            }
          }
        `}
        </style>
      </div>
    </>
  );
}
