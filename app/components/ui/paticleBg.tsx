"use client"

import Script from "next/script"
import { useId } from "react"

type ParticlesBackgroundProps = {
    className?: string
}

const ParticlesBackground = ({ className = "" }: ParticlesBackgroundProps) => {
    const containerId = useId().replace(/:/g, "")

    const initParticles = () => {
        // @ts-ignore
        window.particlesJS(containerId, {
            particles: {
                number: {
                    value: 300,
                    density: { enable: true, value_area: 800 },
                },
                color: { value: "#ffffff" },
                opacity: { value: 0.4 },
                size: { value: 1, random: true },
                move: {
                    enable: true,
                    speed: 2,
                    out_mode: "out",
                },
                line_linked: { enable: false },
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: false },
                    onclick: { enable: false },
                    resize: false,
                },
            },
            retina_detect: true,
        })
    }

    return (
        <>
            <Script
                src="/particles/particles.min.js"
                strategy="afterInteractive"
                onLoad={initParticles}
            />
            <div
                id={containerId}
                className={`absolute bottom-0 z-20 w-full h-[200px] tablet:h-[300px] pointer-events-none ${className}`}
            />
        </>
    )
}

export default ParticlesBackground
