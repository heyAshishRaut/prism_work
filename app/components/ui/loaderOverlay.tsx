"use client"

import {motion} from "framer-motion"

export const LoaderOverlay = ({active}: { active: boolean }) => {
    return (
        <motion.div
            className="
        absolute inset-0
        bg-[linear-gradient(180deg,#333333_0%,#262626_100%)]
        origin-left
        z-10
        pointer-events-none"
            initial={{scaleX: 0, opacity: 0}}
            animate={
                active
                    ? {scaleX: 1, opacity: 1}
                    : {opacity: 0}
            }
            transition={{
                scaleX: {duration: 3, ease: "linear"},
                opacity: {duration: 0.15},
            }}
        />
    )
}