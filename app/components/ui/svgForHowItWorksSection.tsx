"use client"
import { motion } from "framer-motion"
import { useEffect, useState, useMemo } from "react"

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

    const dashedLines = Array.from({ length: 24 })

    const containerWidth = 110
    const glowWidth = 15

    const startX = -glowWidth
    const endX = containerWidth + glowWidth

    return (
        <div className="relative shrink-0 w-[80px] laptop:w-[130px] h-[5px] flex items-center gap-x-[3px] overflow-hidden">
            {dashedLines.map((_, index) => (
                <div
                    key={index}
                    className="w-[4px] bg-[#2e2e2e]"
                    style={{ height: "1.5px" }}
                />
            ))}

            {active && (
                <motion.div
                    className="absolute h-[5px] w-[15px] rounded-full bg-[linear-gradient(to_left,white_0%,rgba(255,255,255,0.6)_40%,rgba(255,255,255,0)_100%)]"
                    initial={{ x: startX, opacity: 1 }}
                    animate={{ x: endX, opacity: 1 }}
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
