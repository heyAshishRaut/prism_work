"use client"

import { motion } from "framer-motion"
import { useState, useRef } from "react"
import btn from "@/public/images/btn.png"

const ArrowSVG = () => (
    <svg width="9" height="15" viewBox="0 0 9 15" fill="none">
        <path
            d="M2.00033 14.6667H1.33366V14H0.666993V13.3333H0.000326037V12.6667H0.666993V12H1.33366V11.3333H2.00033V10.6667H2.66699V10H3.33366V9.33333H4.00033V8.66667H4.66699V8H5.33366V6.66667H4.66699V6H4.00033V5.33333H3.33366V4.66667H2.66699V4H2.00033V3.33333H1.33366V2.66667H0.666993V2H0.000326037V1.33333H0.666993V0.666667H1.33366V0L2.00033 0V0.666667L2.66699 0.666667V1.33333L3.33366 1.33333V2H4.00033V2.66667H4.66699V3.33333L5.33366 3.33333V4H6.00033V4.66667H6.66699V5.33333H7.33366V6H8.00033V6.66667H8.66699V8H8.00033V8.66667H7.33366V9.33333H6.66699V10H6.00033V10.6667H5.33366V11.3333H4.66699V12H4.00033V12.6667H3.33366V13.3333H2.66699V14H2.00033V14.6667Z"
            fill="white"
        />
    </svg>
)

const ArrowSwapButton = () => {
    const [hovered, setHovered] = useState(false)
    const hasMounted = useRef(false)

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="
            z-10 cursor-pointer pl-[16px] py-[4px] pr-[4px]
            flex items-center gap-x-[10px]
            rounded-full bg-white
            transition-colors duration-75
            text-black font-work-sans font-medium
            text-[14px] tablet:text-[15px] laptop:text-[16px]
            leading-[125%] tracking-[-4%]">
            <div>Start Learning Free</div>

            <div style={{ backgroundImage: `url(${btn.src})` }} className="relative bg-contain h-[36px] w-[36px] flex items-center justify-center overflow-hidden">
                <motion.div
                    initial={false}
                    animate={{
                        x: hovered ? 24 : 0,
                    }}
                    transition={{
                        duration: 0.18,
                        ease: "linear",
                    }}
                    className="absolute"
                    onAnimationComplete={() => {
                        hasMounted.current = true
                    }}
                >
                    <ArrowSVG />
                </motion.div>

                <motion.div
                    initial={false}
                    animate={{
                        x: hovered ? 0 : -24,
                    }}
                    transition={{
                        duration: 0.1,
                        ease: "linear",
                    }}
                    className="absolute"
                >
                    <ArrowSVG />
                </motion.div>
            </div>
        </div>
    )
}

export default ArrowSwapButton
