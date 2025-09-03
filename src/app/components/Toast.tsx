"use client"
import { useEffect } from "react";

interface ToastProps{
    message: string,
    onClose: () => void;
    duration?: number;
}

export default function Toast({message, onClose, duration = 10000}: ToastProps){

    useEffect(() => {
        const timer = setTimeout(() => onClose(), duration);
        return () => clearTimeout(timer);
    }, [duration, onClose])

    return (
      <>
        <div className="animate-slideup fixed bottom-4 right-4 overflow-hidden w-72 h-16 bg-black [background-size:12px_12px] hover:[background-size:16px_16px] transition-all duration-300 ease-in-out border-2 border-red-500 flex items-center justify-center text-center"
            style={{
              backgroundImage: "linear-gradient(to right, rgba(255,0,0,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,255,0,0.2) 1px, transparent 1px)",
              backgroundPosition: "center",
              boxShadow: "inset 0 0 30px rgba(255,0,0,0.8)"
            }}
          >
            <h1 className="font-shareTech text-green-200" style={{textShadow: "0 0 5px #0f0"}}>{message}</h1>
          </div>
          <style>
            {`
              .animate-slideup{
                animation: slideup 0.2s ease-in-out;
              }
              @keyframes slideup{
                from{
                  opacity: 0;
                  transform: translateY(20px);
                }
                to{
                  opacity: 1;
                  transform: translate(0);
                }
              }
            `}
          </style>
      </>
    )
}