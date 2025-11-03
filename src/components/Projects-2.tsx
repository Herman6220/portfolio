
import { useState } from "react"
import ProjectPlaceholder from "./ProjectPlaceholder";



const Projects = () => {

  const [bars, setBars] = useState([10, 82, 33, 14, 54])
  const [bars2, setBars2] = useState([80, 32, 33, 4, 74])
  const [bars3, setBars3] = useState([80, 70, 60, 50, 40])

  const [signatureText, setSignatureText] = useState("Wanna_cry?");
  const [signatureText2, setSignatureText2] = useState("Ice_cream?");
  const [signatureText3, setSignatureText3] = useState("Catharsis.");

  const [description, setDescription] = useState([
    "HAL 7000 at your service",
    "Gemini based AI chatbot",
    "Context-aware responses, maintaining conversational memory for coherent, multi-turn interactions.",
    "Persistent memory",
    "Chat history",
    "",
  ]);
  const [description2, setDescription2] = useState([
    "Ecommerce application",
    "Role based access through Next Auth",
    "LocalStorage for cart management",
    "Razorpay for secure transactions.",
    "Cron jobs for email notifications, and unverified user deletion.",
    "",
  ]);
  const [description3, setDescription3] = useState([
    "Video streaming platform",
    "Video processing through Mux",
    "tRPC for APIs",
    "Studio management",
    "AI background jobs",
    "",
  ]);

  const [mainImage, setMainImage] = useState("/hal7000main.png");
  const [mainImage2, setMainImage2] = useState("/p1.webp");
  const [mainImage3, setMainImage3] = useState("/project2.png");

  const [secondaryImages, setSecondaryImages] = useState([
    "/hal1.png",
    "/hal2.png",
    "/hal3.png",
  ])

  const [secondaryImages2, setSecondaryImages2] = useState([
    "/hermano1.webp",
    "/hermano2.webp",
    "/hermano3.webp",
  ])

  const [secondaryImages3, setSecondaryImages3] = useState([
    
  ])

  const [techStack, setTechStack] = useState([
    "LangGraph",
    "Next.js",
    "Express.js",
    "PostgreSQL",
    "Better Auth",
    "",
  ]);
  const [techStack2, setTechStack2] = useState([
    "Next.js",
    "Express.js",
    "PostgreSQL",
    "MongoDB",
    "RazorPay",
    "Next Auth",
    "",
  ]);
  const [techStack3, setTechStack3] = useState([
    "Mux",
    "Next.js",
    "Express.js",
    "PostgreSQL",
    "tRPC",
    "Upstash",
    "UploadThing",
    "Clerk",
    "",
  ]);

  const ascii = `
##   ##  #####  ##          #######  #####    #####    #####
##   ## ##   ## ##              ## ##  #### ##  #### ##  ####   
####### ####### ##             ##  ## ## ## ## ## ## ## ## ##     
##   ## ##   ## ##            ##   ####  ## ####  ## ####  ##  
##   ## ##   ## #######_______##    #####    #####    #####
                `

  const ascii2 = `
##   ## ####### #####  ##   ## ####### ##   ## #######    
##   ## ##      ##  ## ### ### ##   ## ###  ## ##   ##   
####### ####### ####   ## # ## ####### ## # ## ##   ##      
##   ## ##      ## ##  ##   ## ##   ## ##  ### ##   ## 
##   ## ####### ##  ## ##   ## ##   ## ##   ## ####### 
                `

  const ascii3 = `
##   ## ####### ##   ## ###### ##   ## #####  #######   
 ## ##  ##   ## ##   ##   ##   ##   ## ##  ## ##      
  ##    ##   ## ##   ##   ##   ##   ## #####  #######       
  ##    ##   ## ##   ##   ##   ##   ## ##  ## ##   
  ##    ####### #######   ##   ####### #####  ####### 
                `


  return (
    <div>
      <ProjectPlaceholder ascii={ascii} fileLocationString="AI_chatbot" mainImage={mainImage} secondaryImages={secondaryImages} bars={bars} setBars={setBars} description={description} techStack={techStack} signatureText={signatureText}/>
      <div className="md:my-8 my-4 border-t border-gray-500"></div>
      <ProjectPlaceholder ascii={ascii2} fileLocationString="E_commerce" mainImage={mainImage2} secondaryImages={secondaryImages2} bars={bars2} setBars={setBars2} description={description2} techStack={techStack2} signatureText={signatureText2}/>
      <div className="md:my-8 my-4 border-t border-gray-500"></div>
      <ProjectPlaceholder ascii={ascii3} fileLocationString="Video_streaming" mainImage={mainImage3} secondaryImages={secondaryImages3} bars={bars3} setBars={setBars3} description={description3} techStack={techStack3} signatureText={signatureText3}/>
    </div>
  )
}

export default Projects