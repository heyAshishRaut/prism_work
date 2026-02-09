"use client"
import seeIt from "@/public/images/seeIt.webp"
import understandItActive from "@/public/images/understandItActive.png"
import buildItActive from "@/public/images/buildItActive.png"
import Image from "next/image"
import {useEffect, useRef, useState} from "react"
import {motion} from "framer-motion"
import {LoaderOverlay} from "@/app/components/ui/loaderOverlay"
import SvgForHowItWorksSection from "@/app/components/ui/svgForHowItWorksSection";

const TOTAL_STEPS = 5

const ShimmerText = ({text, active,}: { text: string; active: boolean }) => {
    return (
        <span className="relative inline-block">
        <span className="text-[#8a8a8a]">{text}</span>
            {
                active && (
                    <motion.span className="absolute inset-0 text-white pointer-events-none"
                                 style={{
                                     WebkitMaskImage:
                                         "linear-gradient(110deg, transparent 35%, white 50%, transparent 65%)",
                                     WebkitMaskSize: "300% 100%",
                                     maskImage:
                                         "linear-gradient(110deg, transparent 35%, white 50%, transparent 65%)",
                                     maskSize: "300% 100%",
                                     filter: "drop-shadow(0 0 6px rgba(255,255,255,0.65))",
                                 }}
                                 initial={{
                                     opacity: 0,
                                     // @ts-ignore
                                     WebkitMaskPosition: "200% 0%",
                                     maskPosition: "200% 0%",
                                 }}
                                 animate={{
                                     opacity: 1,
                                     // @ts-ignore
                                     WebkitMaskPosition: "-200% 0%",
                                     maskPosition: "-200% 0%",
                                 }}
                                 transition={{
                                     delay: 0.4,
                                     duration: 5,
                                     ease: "linear",
                                 }}
                    >
                        {text}
                    </motion.span>
                )
            }
    </span>
    )
}


const HowItWorksSectionComponent = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    const delayMap = [3000, 2000, 3000, 2000, 3000]
    const delay = delayMap[activeIndex]

    const isMobile =
        typeof window !== "undefined" && window.innerWidth < 810

    useEffect(() => {
        const timeout = setTimeout(() => {
            setActiveIndex((prev) => (prev + 1) % TOTAL_STEPS)
        }, delay)

        return () => clearTimeout(timeout)
    }, [activeIndex, delay])


    return (
        <div className="thin-scrollbar scroll-smooth relative w-full h-[40px] tablet:h-[50px] laptop:h-[61px] flex items-center overflow-x-auto tablet:overflow-hidden flex-nowrap [-webkit-overflow-scrolling:touch]">

            {/* CARD 1 */}
            <div className="z-20 relative shrink-0 tablet:shrink h-full px-[30px] tablet:px-0 tablet:w-[280px] rounded-[10px] bg-[#1e1e1e] border-b border-[#2e2e2e] overflow-hidden">
                <LoaderOverlay active={activeIndex === 0}/>
                <div className="relative z-10 flex items-center justify-center gap-x-[6px] h-full">
                    <Image src={seeIt} alt="" height={28} width={28}
                           className={`${activeIndex === 0 ? "grayscale-0" : "grayscale"} w-[18px] h-[18px] tablet:w-[20px] tablet:h-[20px] laptop:w-[28px] laptop:h-[28px]`}/>
                    <div
                        className="
                        font-archivo font-medium
                        text-[15px] tablet:text-[18px] laptop:text-[24px]
                        leading-[120%] tracking-[-2%]
                        "
                    >
                        <ShimmerText
                            text="See it"
                            active={activeIndex === 0}
                        />
                    </div>
                </div>
            </div>

            {/* SVG 1 */}
            <SvgForHowItWorksSection active={activeIndex === 1}/>

            {/* CARD 2 */}
            <div
                className="relative shrink-0 tablet:shrink h-full px-[30px] tablet:px-0 tablet:w-[280px] rounded-[10px] bg-[#1e1e1e] border-b border-[#2e2e2e] overflow-hidden">
                <LoaderOverlay active={activeIndex === 2}/>
                <div className="relative z-10 flex items-center justify-center gap-x-[6px] h-full">
                    <Image src={understandItActive} alt="" height={28} width={28}
                           className={`${activeIndex === 2 ? "grayscale-0" : "grayscale"} w-[18px] h-[18px] tablet:w-[20px] tablet:h-[20px] laptop:w-[28px] laptop:h-[28px]`}/>
                    <div
                        className="
                        font-archivo font-medium
                        text-[15px] tablet:text-[18px] laptop:text-[24px]
                        leading-[120%] tracking-[-2%]
                        "
                    >
                        <ShimmerText
                            text="Understand it"
                            active={activeIndex === 2}
                        />
                    </div>
                </div>
            </div>

            {/* SVG 2 */}
            <SvgForHowItWorksSection active={activeIndex === 3}/>

            {/* CARD 3 */}
            <div
                className="relative shrink-0 tablet:shrink h-full px-[30px] tablet:px-0 tablet:w-[280px] rounded-[10px] bg-[#1e1e1e] border-b border-[#2e2e2e] overflow-hidden">
                <LoaderOverlay active={activeIndex === 4}/>
                <div className="relative z-10 flex items-center justify-center gap-x-[6px] h-full">
                    <Image src={buildItActive} alt="" height={28} width={28}
                           className={`${activeIndex === 4 ? "grayscale-0" : "grayscale"} w-[18px] h-[18px] tablet:w-[20px] tablet:h-[20px] laptop:w-[28px] laptop:h-[28px]`}/>
                    <div
                        className="
                        font-archivo font-medium
                        text-[15px] tablet:text-[18px] laptop:text-[24px]
                        leading-[120%] tracking-[-2%]
                        "
                    >
                        <ShimmerText
                            text="Build it"
                            active={activeIndex === 4}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWorksSectionComponent
