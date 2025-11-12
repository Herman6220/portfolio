
import { useEffect, useRef, useState } from "react"
import Image from "next/image";
import Link from "next/link";
import { ArrowUp } from "lucide-react";



const Projects = () => {

  const [unveil, setUnveil] = useState(false);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!titleRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && titleRef.current) {
          setUnveil(true);
          observer.unobserve(titleRef.current);
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(titleRef.current);

    return () => observer.disconnect();
  }, [])

  const projects = [
    {
      image: "/p1.webp",
      title: "Hermano",
      description: "E-commerce application",
      projectPageLink: "/hermano",
    },
    {
      image: "/hal7000main.png",
      title: "HAL 7000",
      description: "AI chatbot",
      projectPageLink: "/hal7000",
    },
    {
      image: "/project2.png",
      title: "Youtube",
      description: "Video streaming application",
      projectPageLink: "/youtube",
    },
  ]

  return (
    <div className="w-full md:h-[100vh] h-full md:p-8 p-4 flex flex-col border-b border-gray-800">
      < div className="flex max-w-fit" ref={titleRef}>
        <div className="border-l border-t border-b border-red-500 w-2" style={{ animation: `${unveil ? "slideLeft 0.5s ease-out forwards" : ""}` }}></div>
        <h1 className="md:text-3xl text-2xl font-oxanium text-red-200 px-4 max-w-fit" style={{ animation: `${unveil ? "appear 2s ease-out forwards" : ""}` }}>PROJECTS</h1>
        <div className="border-r border-t border-b border-red-500 w-2" style={{ animation: `${unveil ? "slideRight 0.5s ease-out forwards" : ""}` }}></div>
        <style>
          {`
              @keyframes slideLeft{
                  from{
                      transform: translateX(20px);
                  }to{
                      transform: translateX(0);
                  }
              }
              @keyframes slideRight{
                  from{
                      transform: translateX(-20px);
                  }to{
                      transform: translateX(0);
                  }
              }
              @keyframes appear{
                  from{
                      opacity: 0;
                  }to{
                      opacity: 1;
                  }
              }
          `}
        </style>
      </div >

      <div className="w-full h-full flex items-center justify-center py-6">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-2 gap-y-4 items-center">
          {projects.map((project, i) => (
            <div key={i} className="p-2 flex flex-col relative">
              <svg className="absolute w-full h-full top-0 left-0 -z-10" viewBox="0 0 100 100" preserveAspectRatio="none">
                <polygon
                  points="0.5,0.5 99.5,0.5 99.5,82 83.5,99.5 0.5,99.5"
                  stroke="gray"
                  strokeWidth="1px"
                  fill="none"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
              
                <svg className="absolute w-full h-full top-0 left-0" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <Link href={project.projectPageLink} className="group">
                  <polygon
                    points="85,99.5 99.5,83.5 99.5,99.5"
                    stroke="gray"
                    strokeWidth="1px"
                    fill="black"
                    vectorEffect="non-scaling-stroke"
                    className="group-hover:fill-gray-500/50 transition-all duration-300"
                    />
                    </Link>
                </svg>
                <ArrowUp className="absolute text-white md:bottom-2 bottom-1 md:right-2 right-1 size-5 rotate-45 pointer-events-none"/>
              <div className="aspect-video overflow-hidden border border-gray-500 bg-black">
                <Image src={project.image} alt="hermano" width={800} height={400} />
              </div>
              <div className="p-2 pt-4 text-white font-oxanium">
                <h4>{project.title}</h4>
                <p className="text-sm font-light mb-4">{project.description}</p>
                {/* <Link href={project.projectPageLink} onClick={() => console.log("Hello")}><button className="absolute bottom-1.5 right-1.5 rounded-full p-1 bg-white text-black hover:bg-gray-200"><ArrowUp size={20} /></button></Link> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects