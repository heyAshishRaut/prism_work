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

    const dashCount = useMemo(() => {
        switch (device) {
            case "mobile":
                return 10
            case "tablet":
                return 16
            case "laptop":
                return 24
        }
    }, [device])

    const dashedLines = Array.from({ length: dashCount })

    const TOTAL_DURATION = 3
    const STAGGER = TOTAL_DURATION / dashedLines.length
    const GLOW_DURATION = 0.25

    return (
        <div className="w-[50px] laptop:w-[130px] h-[3px] flex items-center gap-x-[3px]">
            {dashedLines.map((_, index) => (
                <motion.div
                    key={index}
                    className="w-[4px] bg-[#2e2e2e]"
                    style={{ height: "1.5px", transformOrigin: "center" }}
                    animate={
                        active
                            ? {
                                backgroundColor: ["#2e2e2e", "#ffffff", "#ffffff"],
                                scaleY: [1, 2, 1],
                            }
                            : {
                                backgroundColor: "#2e2e2e",
                                scaleY: 1,
                            }
                    }
                    transition={
                        active
                            ? {
                                backgroundColor: {
                                    duration: GLOW_DURATION,
                                    delay: index * STAGGER,
                                    ease: "linear",
                                },
                                scaleY: {
                                    duration: GLOW_DURATION,
                                    delay: index * STAGGER,
                                    ease: "easeInOut",
                                },
                                repeat: Infinity,
                                repeatDelay: TOTAL_DURATION - STAGGER,
                            }
                            : { duration: 0 }
                    }
                />
            ))}
        </div>
    )
}

export default SvgForHowItWorksSection
