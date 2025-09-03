import Link from "next/link";


export default function Navbar(){
    return(
        <nav className="shadow-2xl sticky top-0 bg-green-950/10 backdrop-blur-xl z-50">
            <div className="py-4 px-4 h-16 flex items-center justify-between">
                <div className="flex items-center">
                    <h1 className="italic font-black text-xl font-shareTech text-green-200"></h1>
                    <h1 className="italic font-black text-xl font-shareTech text-green-200"></h1>
                </div>
                <div className="flex sm:gap-14 gap-4">
                    <Link href='#about-section' className="nav-link text-sm text-green-200 font-shareTech">About</Link>
                    <Link href='#skills-section' className="nav-link text-sm text-green-200 font-shareTech">Skills</Link>
                    <Link href='#projects-section' className="nav-link text-sm text-green-200 font-shareTech">Projects</Link>
                    <Link href='#contact-section' className="nav-link text-sm text-green-200 font-shareTech">Contact</Link>
                </div>
                <style>
                    {`
                        .nav-link{
                            text-shadow: 0 0 5px #0f0;
                        }
                        .nav-link:hover{
                            text-shadow: 0 0 10px #0f0, 0 0 20px #0f0, 0 0 30px #0f0;
                        }
                    `}
                </style>
            </div>
        </nav>
    )
}