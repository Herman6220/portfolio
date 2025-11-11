"use client"

import ProjectPlaceholder from '@/components/ProjectPlaceholder'
import React, { useState } from 'react'

const Page = () => {
    const [bars3, setBars3] = useState([80, 70, 60, 50, 40])

    const signatureText3 = "Catharsis.";

    const description3 = [
        "Video streaming platform",
        "Video processing through Mux",
        "tRPC for APIs",
        "Studio management",
        "AI background jobs",
        "",
    ];

    const mainImage3 = "/project2.png";

    const secondaryImages3 = ["", "", ""]

    const techStack3 = [
        "Mux",
        "Next.js",
        "Express.js",
        "PostgreSQL",
        "tRPC",
        "Upstash",
        "UploadThing",
        "Clerk",
        "",
    ];

    const ascii3 = `
##   ## ####### ##   ## ###### ##   ## #####  #######   
 ## ##  ##   ## ##   ##   ##   ##   ## ##  ## ##      
  ##    ##   ## ##   ##   ##   ##   ## #####  #######       
  ##    ##   ## ##   ##   ##   ##   ## ##  ## ##   
  ##    ####### #######   ##   ####### #####  ####### 
                `

    return (
        <div>
            <ProjectPlaceholder ascii={ascii3} fileLocationString="Video_streaming" mainImage={mainImage3} secondaryImages={secondaryImages3} bars={bars3} setBars={setBars3} description={description3} techStack={techStack3} signatureText={signatureText3} />
        </div>
    )
}

export default Page