"use client"

import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import Logo from "@/public/images/prismLogoNavbar.webp"
import NavbarButton from "@/app/components/uiComponents/navbarButton"

const navbarItems = [
    {
        name: "Courses"
    },
    {
        name: "For Teams"
    },
    {
        name: "Blogs"
    }
]

const Navbar = () => {
    const { scrollY } = useScroll()
    const [hidden, setHidden] = useState(false)
    const [open, setOpen] = useState(false)

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0
        setOpen(false)
        setHidden(latest > previous && latest > 80)
    })

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{
                opacity: hidden ? 0 : 1,
                y: hidden ? -10 : 0,
            }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed top-[30px] tablet:top-[38px] z-50 w-full flex justify-center px-[20px] tablet:px-[40px]"
        >
            <div className="
                    flex items-center justify-between
                    pl-[24px] pr-[6px] py-[6px]
                    h-[55px] tablet:h-[60px]
                    w-full max-w-[450px] tablet:max-w-[787px]
                    rounded-full
                    border border-[#808080]/30
                    shadow-[inset_0px_8.61px_25.46px_0px_rgba(255,255,255,0.08)]
                    backdrop-blur-[9px]
                    bg-[linear-gradient(90deg,#1B1B1B_0%,#1D1D1D_45%,#212121_100%)]
                "
            >
                <Image
                    src={Logo}
                    alt="Prism logo"
                    priority
                    className="
                        w-[90px]
                        tablet:w-[110px]
                        laptop:w-[120px]
                        h-auto
                    "
                />

                <div className={`hidden tablet:flex items-center tablet:gap-x-[20px] laptop:gap-x-[30px] font-inter font-medium tablet:text-[15px] laptop:text-[16px] text-[#8A8A8A] leading-[150%] tracking-[0%]`}>
                    {
                        navbarItems.map((e, index) => (
                            <div key={index} className={`hover:text-white cursor-pointer transition-all ease-in duration-75`}>{e.name}</div>
                        ))
                    }
                </div>
                <NavbarButton open={open} setOpen={setOpen} />
            </div>
        </motion.div>
    )
}

export default Navbar