"use client"

import ProjectPlaceholder from '@/components/ProjectPlaceholder'
import React, { useState } from 'react'

const Page = () => {
    const [bars, setBars] = useState([10, 82, 33, 14, 54]);

    const projectPageLink = "https://hal-7000.vercel.app/"
    const githubRepoLink = "https://github.com/Herman6220/HAL7000"

    const signatureText = "Wanna_cry?"

    const description = [
    "HAL 7000 at your service",
    "Gemini based AI chatbot",
    "Context-aware responses, maintaining conversational memory for coherent, multi-turn interactions.",
    "Persistent memory",
    "Chat history",
    "",
  ]

    const mainImage = "/hal7000main.png";

    const secondaryImages = [
    "/hal1.png",
    "/hal2.png",
    "/hal3.png",
  ]

    const techStack = [
    "LangGraph",
    "Next.js",
    "Express.js",
    "PostgreSQL",
    "Better Auth",
    "",
    "",
    "",
  ];

    const ascii = `
##   ##  #####  ##          #######  #####    #####    #####
##   ## ##   ## ##              ## ##  #### ##  #### ##  ####   
####### ####### ##             ##  ## ## ## ## ## ## ## ## ##     
##   ## ##   ## ##            ##   ####  ## ####  ## ####  ##  
##   ## ##   ## #######_______##    #####    #####    #####
                `

    return (
        <div>
            <ProjectPlaceholder ascii={ascii} fileLocationString="AI_chatbot" mainImage={mainImage} secondaryImages={secondaryImages} projectPageLink={projectPageLink} githubRepoLink={githubRepoLink} bars={bars} setBars={setBars} description={description} techStack={techStack} signatureText={signatureText} />
        </div>
    )
}

export default Page