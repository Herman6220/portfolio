import { useEffect, useRef, useState } from "react";

const Skills = () => {
    const [unveil, setUnveil] = useState(false);
    const [enlarge, setEnlarge] = useState(false);
    const titleRef = useRef<HTMLDivElement>(null);
    const tsRef = useRef<HTMLDivElement>(null);

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

    useEffect(() => {
        if (!tsRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && tsRef.current) {
                    setEnlarge(true);
                    observer.unobserve(tsRef.current);
                }
            },
            { threshold: 0.2 }
        )

        observer.observe(tsRef.current);

        return () => observer.disconnect();
    }, [])

    const techStack = [
        {
            classAddOn: "devicon-typescript-plain",
            title: "TypeScript",
        },
        {
            classAddOn: "devicon-javascript-plain",
            title: "JavaScript",
        },
        {
            classAddOn: "devicon-react-original",
            title: "React.js",
        },
        {
            classAddOn: "devicon-express-original",
            title: "Express.js",
        },
        {
            classAddOn: "devicon-tailwindcss-original",
            title: "Tailwind",
        },
        {
            classAddOn: "devicon-git-plain-wordmark",
            title: "Git",
        },
        {
            classAddOn: "devicon-cplusplus-plain",
            title: "C++",
        },
        {
            classAddOn: "devicon-nextjs-plain",
            title: "NextJs",
        },
        {
            classAddOn: "devicon-postgresql-plain",
            title: "postgreSQL",
        },
        {
            classAddOn: "devicon-mongodb-plain",
            title: "mongoDB",
        },
        {
            classAddOn: "devicon-nodejs-plain",
            title: "NodeJs",
        },
        {
            classAddOn: "devicon-html5-plain",
            title: "HTML",
        },
    ]

    return (
        <div className="w-full md:h-[100vh] h-full md:p-8 p-4 border-b border-gray-800">
            < div className="flex max-w-fit" ref={titleRef}>
                <div className="border-l border-t border-b border-red-500 w-2" style={{ animation: `${unveil ? "slideLeft 0.5s ease-out forwards" : ""}` }}></div>
                <h1 className="md:text-3xl text-2xl font-oxanium text-red-200 px-4 max-w-fit" style={{ animation: `${unveil ? "appear 2s ease-out forwards" : ""}` }}>SKILLS & TECH-STACK</h1>
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
            <div className="w-full h-full flex md:flex-row flex-col gap-4 py-8">
                <div className="w-full h-full text-white font-oxanium flex flex-col justify-center gap-4 items-center">
                    <div className="w-full flex flex-col gap-2 p-4 border border-gray-500">
                        <div className="px-4 py-2 w-60 bg-gray-400 text-center" style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 70%, 94% 100%, 0% 100%)" }}>
                            Full Stack Development
                        </div>
                        <div className="px-4 py-2 text-sm">
                            Building end to end solutions, whether it&apos;s SAAS, web apps or mobile apps - integrated with authentication, databases and impeccable UI/UX.
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-2 p-4 border border-gray-500" >
                        <div className="px-4 py-2 w-60 bg-gray-400 text-center" style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 70%, 94% 100%, 0% 100%)" }}>
                            AI Integration
                        </div>
                        <div className="px-4 py-2 text-sm">
                            Apps integrated with Generative AI, Agentic AI. With RAG implementation using vector databases.
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-2 p-4 border border-gray-500">
                        <div className="px-4 py-2 w-60 bg-gray-400 text-center" style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 70%, 94% 100%, 0% 100%)" }}>
                            Cloud & DevOps
                        </div>
                        <div className="px-4 py-2 text-sm">
                            Ensuring robust deployment and scalability of applications, using CI/CD pipelines, docker and kubernetes.
                        </div>
                    </div>
                </div>
                <div className="h-full min-w-fit flex items-center justify-center">


                    <div className={`p-2 min-w-fit max-h-fit relative ${enlarge ? "scale-100 opacity-100" : "scale-80 opacity-0"} transition-all duration-300`} ref={tsRef}>
                        <svg className="absolute w-full h-full top-0 left-0" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <polyline
                                points="0,3 0,0 5,0"
                                stroke="#fff"
                                strokeWidth="2px"
                                fill="none"
                                vectorEffect="non-scaling-stroke"
                            />
                            <polyline
                                points="100,3 100,0 95,0"
                                stroke="#fff"
                                strokeWidth="2px"
                                fill="none"
                                vectorEffect="non-scaling-stroke"
                            />
                            <polyline
                                points="100,97 100,99.9 95,99.9"
                                stroke="#fff"
                                strokeWidth="2px"
                                fill="none"
                                vectorEffect="non-scaling-stroke"
                            />
                            <polyline
                                points="0,97 0,99.9 5,99.9"
                                stroke="#fff"
                                strokeWidth="2px"
                                fill="none"
                                vectorEffect="non-scaling-stroke"
                            />
                        </svg>
                        <div className={`grid grid-cols-3 gap-4  bg-black/20 max-w-fit p-8 border border-gray-500 ${enlarge ? "scale-100 opacity-100" : "scale-80 opacity-0"} transition-all duration-600`}>
                            {techStack.map((ts, i) => (
                                <div key={i} className="text-white flex flex-col gap-2 items-center justify-center border border-gray-500 p-2 pt-4 w-20">
                                    <i className={`${ts.classAddOn} text-5xl`}></i>
                                    <p className="font-oxanium font-extralight text-xs">{ts.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Skills