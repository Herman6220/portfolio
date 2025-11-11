import Link from "next/link";


export default function Navbar() {
    return (
        <nav className="absolute top-0 z-50 w-full">
            <div className=" md:px-4 px-2 h-16 flex items-center justify-between">
                <div className="flex items-center">
                    <h1 className="italic font-black text-xl font-shareTech text-green-200"></h1>
                    <h1 className="italic font-black text-xl font-shareTech text-green-200"></h1>
                </div>
                <div className="h-full flex items-center justify-center md:px-4">
                    <div className="flex md:gap-4 gap-2">
                        <Link href='/#about-section' className="nav-link md:text-sm text-xs text-gray-800 font-shareTech transition-normal duration-300">
                            <div className="h-full md:w-24 w-18 py-2 flex items-center justify-center bg-gray-400 [clip-path:polygon(0%_0%,90%_0%,100%_20%,100%_100%,10%_100%,0%_80%)] hover:[clip-path:none]">
                                About
                            </div>
                        </Link>
                        <Link href='/#skills-section' className="nav-link md:text-sm text-xs text-gray-800 font-shareTech transition-normal duration-300">
                            <div className="h-full md:w-24 w-18 py-2 flex items-center justify-center bg-gray-400 [clip-path:polygon(0%_0%,90%_0%,100%_20%,100%_100%,10%_100%,0%_80%)] hover:[clip-path:none]">
                                Skills
                            </div>
                        </Link>
                        <Link href='/#projects-section' className="nav-link md:text-sm text-xs text-gray-800 font-shareTech transition-normal duration-300">
                            <div className="h-full md:w-24 w-18 py-2 flex items-center justify-center bg-gray-400 [clip-path:polygon(0%_0%,90%_0%,100%_20%,100%_100%,10%_100%,0%_80%)] hover:[clip-path:none]">
                                Projects
                            </div>
                        </Link>
                        <Link href='/#contact-section' className="nav-link md:text-sm text-xs text-gray-800 font-shareTech transition-normal duration-300">
                            <div className="h-full md:w-24 w-18 py-2 flex items-center justify-center bg-gray-400 [clip-path:polygon(0%_0%,90%_0%,100%_20%,100%_100%,10%_100%,0%_80%)] hover:[clip-path:none]">
                                Contact
                            </div>
                        </Link>
                    </div>
                </div>
                {/* <style>
                    {`
                        .nav-link{
                            text-shadow: 0 0 5px #0f0;
                        }
                        .nav-link:hover{
                            text-shadow: 0 0 10px #0f0, 0 0 20px #0f0, 0 0 30px #0f0;
                        }
                    `}
                </style> */}
            </div>
        </nav>
    )
}