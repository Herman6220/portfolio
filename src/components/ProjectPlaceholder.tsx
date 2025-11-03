import { ArrowUpIcon } from "lucide-react";
import { Dispatch, SetStateAction, useEffect } from "react";


interface ProjectPlaceholderProps {
    mainImage: string;
    fileLocationString: string;
    secondaryImages: string[];
    ascii: string;
    description: string[];
    techStack: string[];
    bars: number[];
    setBars: Dispatch<SetStateAction<number[]>>;
    signatureText: string;
}

const ProjectPlaceholder = ({
    mainImage,
    fileLocationString,
    secondaryImages,
    ascii,
    description,
    techStack,
    bars,
    setBars,
    signatureText,
}: ProjectPlaceholderProps) => {

    useEffect(() => {
        const interval = setInterval(() => {
            setBars(bars.map(() => Math.floor(Math.random() * 80) + 10));
        }, 1500)
        return () => clearInterval(interval);
    }, [bars])

    return (
        <>
            <div className="w-full max-w-screen h-full md:h-screen overflow-hidden flex md:flex-row flex-col items-center justify-center gap-2 md:px-10 p-4">
                <div className="w-full h-full flex flex-col gap-2">
                    <div className="w-full aspect-video border border-gray-500 overflow-hidden flex items-center justify-center relative group">
                        <img src={mainImage} alt="HAL-7000" className="object-cover object-left-top" />
                        <div className="absolute w-full h-full [box-shadow:inset_0_0_20px_#559] group-hover:[box-shadow:inset_0_0_80px_#559] transition-all duration-300"></div>
                        <ArrowUpIcon className="absolute text-white rotate-45 -bottom-8 -right-8 opacity-0 group-hover:opacity-100 group-hover:bottom-2 group-hover:right-2 transition-all duration-300 hover:bg-blue-500 rounded-full p-1 cursor-pointer" size={30} />
                    </div>
                    <div className="flex items-center justify-center gap-2 w-full h-full flex-1">
                        {secondaryImages && secondaryImages.slice(0, 3).map((secImg, i) => (
                            <div key={i} className="w-full max-w-78 aspect-video  border border-gray-500 overflow-hidden flex items-center group relative">
                                <img src={secImg || ""} alt="HAL-7000" className="object-cover object-left-top" />
                                <div className="absolute w-full h-full [box-shadow:inset_0_0_10px_#559] group-hover:[box-shadow:inset_0_0_40px_#559] transition-all duration-300"></div>
                            </div>
                        ))}
                        {secondaryImages.length < 3 && ([...Array(3 - secondaryImages.length)]).map((_, i) => (
                            <div key={i} className="w-full max-w-78 aspect-video  border border-gray-500 overflow-hidden flex items-center group relative"></div>
                        ))}
                    </div>
                </div>

                <div className="w-full h-full md:max-w-[32vw] flex flex-col gap-2 font-shareTech">
                    <div className="border-2 border-gray-500 h-full flex flex-col">
                        <div className="bg-gray-500/60 flex items-center max-h-7">
                            <p className="px-4 text-black"> C:/Projects/<span className="bg-blue-400">{fileLocationString}</span></p>
                        </div>
                        <div className="text-gray-200 px-4 h-full text-sm overflow-hidden">
                            <div className="max-h-fit leading-[9px] -tracking-[2px] pt-2 border-b border-gray-500 text-xs" style={{ whiteSpace: "pre" }}>
                                {ascii}
                            </div>
                            {description.map((desc, i) => (
                                <p key={i} className="py-1 border-b border-gray-500">&gt; {desc} </p>
                            ))}
                        </div>
                    </div>
                    <div className="flex gap-2 h-full">
                        <div className="border border-gray-500 w-full flex flex-col">
                            <div className="bg-gray-400/50 max-h-7">
                                <p className="px-4 text-gray-400">Tech stack</p>
                            </div>
                            <div className="h-full text-gray-200 text-sm px-4">
                                {techStack.map((ts, i) => (
                                    <p key={i} className="py-1 border-b border-gray-600">&gt; {ts}</p>
                                ))}
                            </div>
                        </div>
                        <div className="w-full flex flex-col gap-1">
                            <div className="border border-gray-500 w-full flex items-end justify-center gap-2 px-8 md:px-14 pt-1 h-full">
                                {bars.map((height, i) => (
                                    <div key={i} className="h-full w-full max-w-5 flex flex-col gap-1 group">
                                        <div
                                            className="border border-gray-500 min-h-0 flex-1 group-hover:border-blue-500 group-hover:bg-blue-400/20"
                                        ></div>
                                        <div className={`bg-gray-500 group-hover:bg-blue-400 transition-all duration-300 w-full`} style={{ height: `${height}%` }}>

                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="h-full flex flex-col gap-1">
                                <div className="border border-gray-500 h-full flex items-center justify-center overflow-hidden">
                                    <div className="relative md:size-26 size-16 rotate-23" style={{ perspective: '400px' }}>
                                        <div
                                            className="absolute inset-0 md:top-8 top-5"
                                            style={{ transformStyle: "preserve-3d", transform: "", animation: 'spin3d 20s linear infinite' }}>
                                            {[...Array(15)].map((_, i) => (
                                                <div
                                                    key={i}
                                                    className="absolute md:size-26 size-16 rounded-full border border-blue-300"
                                                    style={{ transform: `rotateY(${i * 12}deg)` }}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                    <style jsx>{`
                                        @keyframes spin3d {
                                        0%   { transform: rotateX(-60deg) rotateY(0); }
                                        100% { transform: rotateX(-60deg) rotateY(360deg); }
                                        }
                                    `}</style>
                                </div>
                                <div className="border border-gray-500 h-full flex items-center justify-center overflow-hidden">
                                    <h1 className="text-red-500 md:text-2xl font-black" style={{ textShadow: "0 0 10px #f00" }}>{signatureText}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectPlaceholder