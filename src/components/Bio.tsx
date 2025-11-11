import Image from "next/image"
import { useEffect, useRef, useState } from "react";


const Bio = () => {
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

    return (
        <div className="w-full md:h-[100vh]  h-[100vh] md:p-8 p-4 flex flex-col border-b border-gray-800 font-oxanium">
            < div className="flex max-w-fit" ref={titleRef}>
                <div className="border-l border-t border-b border-red-500 w-2" style={{animation: `${unveil ? "slideLeft 0.5s ease-out forwards" : ""}`}}></div>
                <h1 className="md:text-3xl text-2xl text-red-200 px-4 max-w-fit" style={{animation: `${unveil ? "appear 2s ease-out forwards" : ""}`}}>ABOUT</h1>
                <div className="border-r border-t border-b border-red-500 w-2" style={{animation: `${unveil ? "slideRight 0.5s ease-out forwards" : ""}`}}></div>
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
            <div className="w-full h-full py-8 flex md:flex-row flex-col gap-2 items-center justify-center">
                <div className="flex gap-2 md:h-120 h-50 w-full md:w-100">
                    <div className="w-full h-full border border-gray-500 overflow-hidden relative">
                        <svg className="absolute z-10 w-full h-full top-0 left-0 hidden md:block transition-opacity duration-300" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <polygon
                                points="50,30 46,32 46,50 50,52 47,50 47,32"
                                stroke=""
                                strokeWidth="1px"
                                fill="#bbb"
                                vectorEffect="non-scaling-stroke"
                            />
                            <polygon
                                points="87,30 91,32 91,50 87,52 90,50 90,32"
                                stroke=""
                                strokeWidth="1px"
                                fill="#bbb"
                                vectorEffect="non-scaling-stroke"
                            />
                            <polygon
                                points="52,30 48,32 48,50 52,52 85,52 89,50 89,32 85,30"
                                stroke=""
                                strokeWidth="1px"
                                fill="#bbbbbb22"
                                vectorEffect="non-scaling-stroke"
                            />
                            <polygon
                                points="20,10 16,12 16,18 20,20 78,20 82,18 82,12 78,10"
                                stroke="gray"
                                strokeWidth="1px"
                                fill="#00000099"
                                vectorEffect="non-scaling-stroke"
                            />
                            <polyline
                                points="20,20 20,24 28,28 46,28 54,32"
                                stroke="gray"
                                strokeWidth="1px"
                                fill="none"
                                vectorEffect="non-scaling-stroke"
                            />
                            <polygon
                                points="52,31 56,31 56,32.7 52,32.7"
                                stroke=""
                                strokeWidth="1px"
                                fill="gray"
                                vectorEffect="non-scaling-stroke"
                            />
                            <polygon
                                points="2,92 60,92 60,99 2,99"
                                stroke="gray"
                                strokeWidth="1px"
                                fill="#00000055"
                                vectorEffect="non-scaling-stroke"
                            />
                            <polygon
                                points="1,0.5 4,0.5 1,2"
                                stroke=""
                                strokeWidth="1px"
                                fill="gray"
                                vectorEffect="non-scaling-stroke"
                            />
                            <polygon
                                points="99,0.5 96,0.5 99,2"
                                stroke=""
                                strokeWidth="1px"
                                fill="gray"
                                vectorEffect="non-scaling-stroke"
                            />
                            <polygon
                                points="99,99.5 96,99.5 99,98"
                                stroke=""
                                strokeWidth="1px"
                                fill="gray"
                                vectorEffect="non-scaling-stroke"
                            />

                            <text x={8.5} y={14} fontSize={2} fill="#ddd" transform="scale(2.5 1)" className="font-extralight">FACIAL RECOGNITION: </text>
                            <text x={8.5} y={18} fontSize={3} fill="white" transform="scale(2.5 1)">SDK789W5Y670</text>
                            <text x={2} y={96} fontSize={1.8} fill="#ddd" transform="scale(2.5 1)" className="font-extralight">19-09-2022</text>
                            <text x={2} y={98} fontSize={2} fill="white" transform="scale(2.5 1)">189.764.657.90</text>
                        </svg>
                        <Image src="/ghostSide.png" alt="" fill className="object-cover [filter:brightness(0.7)]" />
                    </div>
                    <div className="w-full h-full border border-red-500 overflow-hidden relative bg-red-700/10 md:hover:bg-red-700/20">
                        <Image src="/alex.jpg" alt="" fill className="-z-10 object-cover [filter:blur(5)]" />
                        <div className="absolute bottom-0 left-0 w-full h-10 flex items-center justify-center bg-red-900 text-red-400">
                            ACCESS DENIED
                        </div>
                    </div>
                </div>

                <div className="w-full h-full border-0 md:py-10 flex flex-1 gap-2 flex-col md:px-4">
                    <div className="w-full flex gap-4">
                        <div className="w-full min-h-30 flex-1 flex-col py-1 text-red-100">
                            <div className="w-full h-full border border-gray-500 flex-1 flex-col md:p-8 p-2 text-red-100">
                                <div className="md:text-2xl text-sm mb-4 flex md:gap-2 gap-1"><span className="text-red-500">NAME: </span>SANKALP KUMAR</div>
                                <div className="md:text-lg text-xs"><span className="text-red-500">CODENAME: </span>GHOST</div>
                                <div className="md:text-lg text-xs"><span className="text-red-500">ID: </span>HJ3224S6220</div>
                            </div>
                        </div>
                        <div className="md:w-60 w-40 md:h-60 h-40 relative">
                            <svg className="absolute w-full h-full top-0 left-0 group" viewBox="0 0 100 100" preserveAspectRatio="none">
                                <defs>
                                    <pattern id="proth" patternUnits="userSpaceOnUse" width="100" height="100">
                                        <image href="/ghostHeadshot.png" x="0" y="0" width="100" height="100" preserveAspectRatio="xMidYMid slice" className="[filter:grayscale(100%)_brightness(0.8)] group-hover:[filter:grayscale(0%)_brightness(1)]" />
                                    </pattern>
                                </defs>
                                <polygon
                                    points="1,6 6,1 94,1 99,6 99,69 94,74 94,94 89,99 6,99 1,94"
                                    stroke="#6a7282"
                                    strokeWidth="1px"
                                    fill="url(#proth)"
                                    vectorEffect="non-scaling-stroke"
                                />

                                <polygon
                                    points="3,70 30,70 30,97 7,97 3,93"
                                    stroke="#6a7282"
                                    strokeWidth="1px"
                                    fill="#00000099"
                                    vectorEffect="non-scaling-stroke"
                                />

                                <text x={10} y={95} fill="white" fontSize={10} className="font-extralight">HJ3</text>

                                <polygon
                                    points="3,6 6,3 6,6"
                                    stroke=""
                                    strokeWidth="1px"
                                    fill="#6a7282"
                                    vectorEffect="non-scaling-stroke"
                                />

                                <polygon
                                    points="94,3 97,6 94,6"
                                    stroke=""
                                    strokeWidth="1px"
                                    fill="#6a7282"
                                    vectorEffect="non-scaling-stroke"
                                />

                                <polygon
                                    points="92,94 89,97 89,94"
                                    stroke=""
                                    strokeWidth="1px"
                                    fill="#6a7282"
                                    vectorEffect="non-scaling-stroke"
                                />
                            </svg>
                        </div>
                    </div>

                    <div className="w-full h-full flex gap-2 ">
                        <div className="w-full h-full text-gray-200 border border-gray-500 relative flex flex-col items-center overflow-y-auto">
                            <div className="absolute w-full text-gray-800 max-h-fit font-shareTech top-0 left-0 bg-gray-500 px-2">C:/user/specializations</div>
                            <div className="text-xs border-b border-gray-500 mt-6 pt-2 pb-1 w-[94%]">&gt; Instant implementation</div>
                            <div className="text-xs border-b border-gray-500 pt-2 pb-1 w-[94%]">&gt; MVP development and rapid prototyping</div>
                            <div className="text-xs border-b border-gray-500 pt-2 pb-1 w-[94%]">&gt; Edge cases handling</div>
                            <div className="text-xs border-b border-gray-500 pt-2 pb-1 w-[94%]">&gt; Problem solving</div>
                            <div className="text-xs border-b border-gray-500 pt-2 pb-1 w-[94%]">&gt; </div>
                        </div>
                        <div className="md:w-full h-full flex md:flex-row flex-col md:gap-2 gap-1">
                            <div className="w-full h-full flex items-center justify-center border p-2 border-gray-500">
                                <div className="md:w-40 w-20 aspect-square flex items-center justify-center md:p-5 overflow-hidden rounded-full relative">
                                    <div className="absolute z-10 w-[50%] h-[50%] top-0 left-0 origin-bottom-right [animation:spin_10s_linear_infinite]" style={{ background: "linear-gradient(50deg, rgba(0,0,0, 0) 52%, #999)" }}></div>
                                    <svg className="absolute w-full h-full top-0 left-0" viewBox="0 0 100 100" preserveAspectRatio="none">
                                        <defs>
                                            <radialGradient id="grad" cx="50%" cy="50%" r="50%">
                                                <stop offset="0%" stopColor="#555" stopOpacity="0.8" />
                                                <stop offset="100%" stopColor="#777" stopOpacity="0" />
                                            </radialGradient>
                                        </defs>

                                        <polyline
                                            points="0,50 100,50"
                                            stroke="#333"
                                            strokeWidth="1px"
                                            fill="none"
                                            vectorEffect="non-scaling-stroke"
                                        />
                                        <polyline
                                            points="50,0 50,100"
                                            stroke="#333"
                                            strokeWidth="1px"
                                            fill="none"
                                            vectorEffect="non-scaling-stroke"
                                        />
                                        <circle cx="50" cy="50" r="50" stroke="#888" strokeWidth="4px" fill="url(#grad)" />
                                        <circle cx="50" cy="50" r="50" stroke="#000" strokeWidth="2px" strokeDasharray="2 0.5" fill="none" />
                                        <circle cx="50" cy="50" r="40" stroke="#888" strokeWidth="0.7px" fill="none" />
                                        <circle cx="50" cy="50" r="30" stroke="#888" strokeWidth="0.7px" fill="none" />
                                        <circle cx="50" cy="50" r="20" stroke="#888" strokeWidth="0.7px" fill="none" />
                                    </svg>
                                </div>
                            </div>
                            <div className="w-full h-full flex flex-col md:gap-2 gap-1">
                                <div className="w-full h-full flex md:gap-2 gap-1">
                                    <div className="w-full h-full border border-gray-500">

                                    </div>
                                    <div className="w-full h-full max-w-14 border border-gray-500 md:block hidden">

                                    </div>
                                </div>
                                <div className="w-full h-full flex-1 md:py-10 py-4 border border-gray-500 overflow-hidden flex gap-1 items-center justify-center">
                                    <div className="md:text-3xl font-light text-red-500 text-xs">HASTA LAVISTA!!!</div>
                                    <style>
                                        {`
                                            @media(min-width:768px){
                                                @keyframes slide{
                                                    from{
                                                        transform: translateX(260px);
                                                        }to{
                                                        transform: translateX(-260px);
                                                    }
                                                }
                                            }
                                            @media(max-width:768px){
                                                @keyframes slide{
                                                    from{
                                                        transform: translateX(100px);
                                                        }to{
                                                        transform: translateX(-100px);
                                                    }
                                                }
                                            }
                                            
                                        `}
                                    </style>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bio