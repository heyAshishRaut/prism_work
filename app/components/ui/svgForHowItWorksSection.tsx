"use client"

import { motion } from "framer-motion"

const SvgForHowItWorksSection = ({ active }: { active: boolean }) => {
    const dashedLines = Array.from({ length: 20 })

    const TOTAL_DURATION = 3
    const STAGGER = TOTAL_DURATION / dashedLines.length // 0.15s
    const GLOW_DURATION = 0.25

    return (
        <div className="w-[100px] laptop:w-[130px] h-[3px] flex items-center gap-x-[3px]">
            {dashedLines.map((_, index) => (
                <motion.div
                    key={index}
                    className="w-[4px] bg-[#2e2e2e]"
                    style={{
                        height: "1.5px",
                        transformOrigin: "center",
                    }}
                    animate={
                        active
                            ? {
                                backgroundColor: [
                                    "#2e2e2e",
                                    "#ffffff",
                                    "#ffffff", // stays white
                                ],
                                scaleY: [1, 2, 1], // 🔥 1.5px → 3px → 1.5px
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
