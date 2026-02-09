"use client"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

type Device = "mobile" | "tablet" | "laptop"

const SvgForHowItWorksSection = ({ active }: { active: boolean }) => {
    const [device, setDevice] = useState<Device>("mobile")

    useEffect(() => {
        const update = () => {
            const w = window.innerWidth
            if (w < 810) setDevice("mobile")
            else if (w < 1200) setDevice("tablet")
            else setDevice("laptop")
        }

        update()
        window.addEventListener("resize", update)
        return () => window.removeEventListener("resize", update)
    }, [])

    const containerWidth = device === "laptop" ? 130 : 70
    const dashCount = device === "laptop" ? 24 : 14

    const glowWidth = 15
    const startX = -glowWidth
    const endX = containerWidth

    return (
        <div
            className="relative shrink-0 h-[5px] flex gap-x-[3px] items-center overflow-hidden"
            style={{ width: containerWidth }}
        >
            {Array.from({ length: dashCount }).map((_, i) => (
                <div
                    key={i}
                    className="w-[4px] h-[1.5px] bg-[#2e2e2e]"
                />
            ))}

            {active && (
                <motion.div
                    key={device}
                    className="absolute h-[5px] w-[15px] rounded-full
                    bg-[linear-gradient(to_left,white_0%,rgba(255,255,255,0.6)_40%,rgba(255,255,255,0)_100%)]"
                    initial={{ x: startX }}
                    animate={{ x: endX }}
                    transition={{
                        duration: 2,
                        ease: "linear",
                    }}
                />
            )}
        </div>
    )
}

export default SvgForHowItWorksSection
