import {AnimatePresence, motion} from "framer-motion"
import {useState} from "react"

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

const NavbarButton = ({ open, setOpen }: {
    open: boolean
    setOpen: (val: boolean) => void
}) => {
    return (
        <div className={`h-full`}>
            {/* TEXT */}
            <div
                className={`hidden tablet:flex cursor-pointer h-full px-[24px] items-center rounded-full bg-white hover:bg-white/70 transition-all ease-in duration-75 text-black font-work-sans font-medium tablet:text-[15px] laptop:text-[16px] leading-[125%] tracking-[-4%]`}>Start
                Learning Free
            </div>

            {/* BUTTON */}
            <div onClick={() => setOpen(!open)} className={`relative cursor-pointer tablet:hidden h-full flex items-center justify-center aspect-square bg-white hover:bg-white/85 transition-all ease-in duration-75 rounded-full`}>
                {/* DIALOG - MOBILE ONLY */}
                <AnimatePresence>
                    {
                        open && (
                            <motion.div
                                key="mobile-nav-dialog"
                                initial={{ opacity: 0, y: -8, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                                transition={{
                                    duration: 0.18,
                                    ease: "easeOut",
                                }}
                                className="
                                absolute top-[62px] right-0
                                w-[250px] p-4
                                border border-[#808080]/30
                                shadow-[inset_0px_8.61px_25.46px_0px_rgba(255,255,255,0.08)]
                                backdrop-blur-[9px]
                                bg-[linear-gradient(90deg,#1B1B1B_0%,#1D1D1D_45%,#212121_100%)]
                                rounded-[20px]
                                flex flex-col items-center gap-5
                                font-inter font-medium
                                text-[#8A8A8A]

                                ">
                                {
                                    navbarItems.map((item, index) => (
                                    <div
                                        key={index}
                                        className="text-[17px] leading-[150%] tracking-[0%] cursor-pointer hover:text-white transition-colors duration-150"
                                    >
                                        {item.name}
                                    </div>
                                ))}

                                <div
                                    className={`flex cursor-pointer h-full w-full py-[12px] items-center justify-center rounded-full bg-white hover:bg-white/70 transition-all ease-in duration-75 text-black font-work-sans font-medium text-[15px] leading-[125%] tracking-[-4%]`}>Start
                                    Learning Free
                                </div>
                            </motion.div>
                        )
                    }
                </AnimatePresence>

                {/* HAMBURGER BUTTON */}
                <div className="relative w-5 h-5">
                    {/* TOP */}
                    <motion.span
                        className="absolute left-0 top-1 h-[2px] w-full bg-black rounded"
                        animate={{
                            rotate: open ? 45 : 0,
                            y: open ? 6 : 0,
                        }}
                        transition={{duration: 0.25, ease: "easeInOut"}}
                    />

                    {/* MIDDLE */}
                    <motion.span
                        className="absolute left-0 top-2.5 h-[2px] bg-black rounded"
                        style={{width: "50%"}}
                        animate={{
                            opacity: open ? 0 : 1,
                        }}
                        transition={{duration: 0.2}}
                    />

                    {/* BOTTOM */}
                    <motion.span
                        className="absolute left-0 top-4 h-[2px] w-full bg-black rounded"
                        animate={{
                            rotate: open ? -45 : 0,
                            y: open ? -6 : 0,
                        }}
                        transition={{duration: 0.25, ease: "easeInOut"}}
                    />
                </div>
            </div>
        </div>
    )
}

export default NavbarButton