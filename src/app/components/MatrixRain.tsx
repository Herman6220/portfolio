'use client'
import React, {useEffect, useRef } from 'react';
import { Share_Tech_Mono } from "next/font/google";

const shareTechMono = Share_Tech_Mono({
  weight: "400",
  subsets: ["latin"],
})

interface particleType{
    x: number;
    y: number;
    size: number;
}

class RainChar{
    constructor(container: HTMLDivElement, canvas: HTMLCanvasElement, font: string, charSize: number, chars: string, bg: string, fg: string){
        this.container = container;
        this.canvas = canvas;
        this.context = canvas.getContext("2d")!;
        this.font = font;
        this.charSize = charSize;
        this.chars = chars;
        this.bg = bg;
        this.fg = fg;

        this.resize();
        this.particles = [];
        const particleCount = (this.size[0]*this.size[1])/this.charSize**2/10;
        for(let i = 0; i<particleCount; i++){
            this.particles.push(this.newParticle());
        }

        window.addEventListener("resize", () => this.resize());
    }

    container: HTMLDivElement;
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    font: string;
    charSize: number;
    chars: string;
    bg: string;
    fg: string;
    size!: [number, number];
    particles: particleType[];
    filter!: string;

    resize(){
        this.size = [this.container.clientWidth, this.container.clientHeight];
        this.canvas.width = this.size[0];
        this.canvas.height = this.size[1];
        this.context.fillRect(0, 0, ...this.size);
    }

    newParticle(){
        return {
            x: Math.random()* this.size[0],
            y: -Math.random()* this.size[1],
            size: Math.floor(Math.random() * (this.charSize * 2 - this.charSize / 2) + (this.charSize / 2)),
        }
    }

    drawParticles(){
        this.context.fillStyle = this.fg;
        this.particles.forEach((particle) => {
            this.context.font = `${particle.size}px ${shareTechMono.style.fontFamily}`;
            const randomChar = this.chars[Math.floor(Math.random()* this.chars.length)];
            this.context.fillText(randomChar, particle.x, particle.y);
        });
    }

    updateParticles(){
        this.particles.forEach((particle, i) => {
            if(particle.y > this.size[1]){
                this.particles[i] = this.newParticle();
            }else{
                particle.y += particle.size;
            }
        })
    }

    clearCanvas(){
        this.context.globalAlpha = 0.25;
        this.context.fillStyle = this.bg;
        this.context.fillRect(0, 0, ...this.size);
        this.context.globalAlpha = 1;
    }

    play(){
        this.clearCanvas();
        this.drawParticles();
        this.updateParticles();
        setTimeout(() => {
            this.play();
        }, 100);
    }

    destroy(){
        window.removeEventListener("resize", () => this.resize);
    }

}



function MatrixRain({containerRef}: {containerRef: React.RefObject<HTMLDivElement | null>}) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if(!containerRef.current || !canvasRef.current) return;
        const chars = "アイウエオカキクケコサシスセソタチツテトナニヌネハヒフヘホマミムメモヤユヨラリルレロワヲンABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        const rain = new RainChar(containerRef.current, canvasRef.current, "monospace", 14, chars, "#000", "#7bf1a8");

        rain.play();
        return () => rain.destroy();
    }, [containerRef])

  return (
    <canvas 
        ref={canvasRef}
        id="rain"
        className='w-full h-full'
    />
  )
}

export default MatrixRain