import { useToast } from "@/app/hooks/useToast";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";


const Contact = () => {
    type FormData = {
        name: string | "",
        email: string,
        message: string | "",
    }

    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>();
    const { showToast } = useToast();

    const onSubmit = async (data: FormData) => {
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            })
            const ans = await response.json();
            console.log(ans);
            showToast(ans.message);
            reset();
        } catch (error) {
            console.log(error);
            reset();
        }
    }

    return (
        <div className="w-full h-full min-h-[100vh] flex items-center justify-center font-oxanium">
            <div className="w-full h-full flex items-center justify-center p-4" >
                <div
                    className="md:max-h-96 border border-gray-500 bg-[#560809] max-h-140 flex flex-col sm:flex-row gap-4 md:max-w-4xl h-full p-14 md:px-24 relative"
                    style={{ boxShadow: "inset 0 0 70px #000,inset 0 0 50px #000, inset 0 0 30px #000" }}
                >
                    <div className="flex sm:flex-col w-full gap-4 h-full justify-between">
                        <div>
                            <h1 className="text-2xl sm:text-4xl font-light text-gray-200">Got an Idea, Let&apos;s Connect</h1>
                            <div className="mt-4 sm:pr-18 pr-6"><div className="border border-red-700 appear"></div></div>
                            <style>
                                {`
                                .appear{
                                animation: growLine 2s;
                                animation-timeline: view();
                                animation-range: entry 20% exit 50%;
                                }
                                @keyframes growLine{
                                from{
                                    width: 0;
                                }
                                to{
                                    width: 100%;
                                }
                                }
                                `}
                            </style>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                            <Link href="https://github.com/Herman6220" className="cursor-pointer"><FaGithub className="text-gray-300 size-6 sm:size-9" /></Link>
                            <Link href="https://linkedin.com/in/sankalp6220"><FaLinkedin className="text-gray-300 size-6 sm:size-9" /></Link>
                            <Link href="https://x.com/sankalp6220"><FaTwitter className="text-gray-300 size-6 sm:size-9" /></Link>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full gap-4 h-full relative">
                        <input
                            // {...register("name", { required: "Name is required!" })}
                            placeholder={`${errors.name ? errors.name.message : "name"}`}
                            className={`px-4 py-2 border ${errors.name ? "border-red-500" : ""} border-gray-500 text-sm focus:outline-none text-gray-200 shadow-md shadow-black`}
                        />
                        <input
                            {...register("email", {
                                required: "Email is required!",
                                pattern: {
                                    value: /^\S+@\S+$/i, message: "Invalid email"
                                }
                            })}
                            placeholder={`${errors.email ? errors.email.message : "email@email.com"}`}
                            className={`px-4 py-2 border ${errors.email ? "border-red-900" : ""} border-gray-500 text-sm focus:outline-none text-gray-200 shadow-md shadow-black`}
                        />
                        <textarea
                            // {...register("message", { required: "Message is required!" })}
                            className={`px-4 py-2 h-full ${errors.message ? "border-red-500" : ""} text-gray-200 text-sm border border-gray-500 overflow-hidden resize-none focus:outline-none shadow-md shadow-black`}
                            placeholder={`${errors.message ? errors.message.message : "Your message..."}`}
                            rows={3}
                        />


                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="group px-2 py-0.5 pt-1 text-white cursor-pointer border border-red-700/50 bg-[#1f000099] relative overflow-hidden disabled:animate-pulse shadow-lg hover:shadow-md transition-shadow duration-300 shadow-black"
                            style={{ textShadow: "0 0 5px #0f0" }}
                        >
                            <div className="absolute bg-red-500 top-1/2 left-1/2 -translate-x-1/2  w-56 h-28 z-0 blur-lg group-hover:scale-x-150 group-hover:blur-xl transition-transform duration-1000 ease-in-out" style={{ borderRadius: "50%" }}></div>
                            <span className="relative z-10 font-light">{isSubmitting ? "Submitting..." : "Submit"}</span>
                        </button>
                    </form>

                </div>

            </div>
        </div>
    )
}

export default Contact