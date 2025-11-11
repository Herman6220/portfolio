"use client"

import ProjectPlaceholder from '@/components/ProjectPlaceholder'
import React, { useState } from 'react'

const Page = () => {
    const [bars2, setBars2] = useState([80, 32, 33, 4, 74])

    const signatureText2 = "Ice_cream?";

    const description2 = [
        "Ecommerce application",
        "Role based access through Next Auth",
        "LocalStorage for cart management",
        "Razorpay for secure transactions.",
        "Cron jobs for email notifications, and unverified user deletion.",
        "",
    ];

    const mainImage2 = "/p1.webp";

    const secondaryImages2 = [
        "/hermano1.webp",
        "/hermano2.webp",
        "/hermano3.webp",
    ];

    const techStack2 = [
        "Next.js",
        "Express.js",
        "PostgreSQL",
        "MongoDB",
        "RazorPay",
        "Next Auth",
        "",
    ];

    const ascii2 = `
##   ## ####### #####  ##   ## ####### ##   ## #######    
##   ## ##      ##  ## ### ### ##   ## ###  ## ##   ##   
####### ####### ####   ## # ## ####### ## # ## ##   ##      
##   ## ##      ## ##  ##   ## ##   ## ##  ### ##   ## 
##   ## ####### ##  ## ##   ## ##   ## ##   ## ####### 
                `

    return (
        <div>
            <ProjectPlaceholder ascii={ascii2} fileLocationString="E_commerce" mainImage={mainImage2} secondaryImages={secondaryImages2} bars={bars2} setBars={setBars2} description={description2} techStack={techStack2} signatureText={signatureText2} />
        </div>
    )
}

export default Page