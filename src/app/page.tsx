'use client'
import { useEffect, useRef, useState } from "react";
import MatrixRain from "../components/MatrixRain";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useToast } from "./hooks/useToast";
import Link from "next/link";
import Image from "next/image";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import Projects from "@/components/Projects-2";
import ResumeDownloader from "@/components/ResumeDownloader";

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
  const [typing, setTyping] = useState(false);
  const typeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!typeRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && typeRef.current) {
          setTyping(true);
          observer.unobserve(typeRef.current);
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(typeRef.current);

    return () => observer.disconnect();
  }, [])


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

    const randomChars = "<-=%&#`*123!--$____dave";
    let iterations = 0;

    const step = () => {
      setText(
        text.split("").map((char, index) => {
          if (char === " ") return " ";
          return index < iterations
            ? char
            : randomChars[Math.floor(Math.random() * randomChars.length)];
        }).join(""));

      if (iterations++ < text.length) setTimeout(step, 70);
      else animating.current = false;
    };

    step();
  }


  return (
    <>
      <div className="w-full h-[100vh] flex gap-4 items-start justify-between relative">
        <div className="flex flex-col justify-center h-full w-3/4 sm:pl-20 pl-8">
          <div>
            <p className="text-sm text-green-200 font-shareTech">I&apos;m a</p>
            <h1 className="w-full sm:w-90 text-2xl sm:text-4xl text-green-200 font-shareTech cursor-default" onMouseEnter={() => scrambleText(text)}>{text}</h1>
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
      <div className="md:px-10 px-4">
        <h1 className="text-5xl font-black font-shareTech" style={{textShadow: "0 0 5px #aaf, 0 0 10px #aaf"}}>PROJECTS</h1>
      </div>
      <Projects />

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

            <div className="flex flex-col items-center justify-center gap-2 md:scale-100 scale-50 scaleAnimation">
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
                  <i className="devicon-express-original text-5xl absolute text-white"></i>
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
          .scaleAnimation{
            animation: scaleUp;
            animation-timeline: view();
            animation-range: entry 0% exit 10%;
            }
            @keyframes scaleUp{
              from{
                scale: 0.2;
              }
              to{
                scale: 0.5;
              }
            }
          @media(min-width: 768px){
            @keyframes scaleUp{
              from{
                scale: 0.5;
              }
              to{
                scale: 1;
              }
            }
          }
        `}
          </style>
        </div>
      </div>
      {/* about section */}
      <div id="about-section" ref={typeRef} className="w-full h-120 md:h-90 pt-20 p-4 flex items-center justify-center relative">
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
        <div className="absolute flex flex-col gap-2 sm:gap-4 font-shareTech text-green-200 px-10">
          <div className="flex">
            <p className={`w-30 sm:w-30 typewriter ${typing ? "animate" : ""}`}>
              I&apos;m <span className="text-xl sm:text-3xl font-bold text-green-300">Sankalp Kumar</span>
            </p>
            <span className="cursor w-2 sm:w-3"></span>
          </div>

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
        <style>
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
              border: 1px solid #7bf1a8;         
              background-color: transparent; 
              vertical-align: bottom;
              animation: blink-caret 1s step-end infinite;
            }

            @keyframes typing{
                  from{width: 0}
                  to{width: 58%}
            }
            @media(min-width: 768px){
              @keyframes typing{
                  from{width: 0}
                  to{width: 18%}
              }
            }
            @keyframes blink-caret{
              0%,100% { background-color: transparent}
              50% { background-color: #7bf1a8 }
            }
          `}
        </style>
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
                className="group px-2 py-1 h-18 font-shareTech text-green-200 cursor-pointer border border-red-700/50 relative overflow-hidden disabled:animate-pulse"
                style={{ textShadow: "0 0 5px #0f0" }}
              >
                <div className="absolute bg-red-500 top-1/2 left-1/2 -translate-x-1/2  w-56 h-28 z-0 blur-lg group-hover:scale-x-150 group-hover:blur-xl transition-transform duration-1000 ease-in-out" style={{ borderRadius: "50%" }}></div>
                <span className="relative z-10">{isSubmitting ? "Sending..." : "Send Message"}</span>
              </button>
              <div className="absolute bottom-14 right-2 w-10 h-10">
                <Tooltip >
                  <TooltipTrigger asChild>
                    <Image alt="wr" className="w-10 h-10 invert opacity-50" width={40} height={40} src="/animal.png" />
                  </TooltipTrigger>
                  <TooltipContent side="right">Follow the white rabbit</TooltipContent>
                </Tooltip>
              </div>
            </form>

          </div>

        </div>
      </div>

      <ResumeDownloader />
    </>
  );
}
