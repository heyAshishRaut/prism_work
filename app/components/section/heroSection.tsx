"use client"
import RiveBackground from "@/app/components/animations/heroSectionBg.animations"
import noise from "@/public/images/noise.webp"
import RiveCard from "@/app/components/animations/heroElement.animations"

const HeroSection = () => {
    return (
        <section className="
        relative w-full
        h-[850px]
        laptop:h-[929px]
        overflow-hidden
        ">
            <RiveBackground/>

            <div style={{ backgroundImage: `url(${noise.src})` }} className="bg-contain absolute inset-0 backdrop-blur-3xl  z-[1]"/>

            <div className="px-[20px] tablet:px-[40px] relative z-10 w-full h-full flex flex-col gap-y-[40px] tablet:gap-y-[60px] laptop:gap-y-[80px] items-center justify-center">
                <div className="z-10 relative w-full flex items-center justify-center max-w-[280px] tablet:max-w-[325px] laptop:max-w-[380px] aspect-[325/203]">
                    <RiveCard/>
                </div>

                <div className={`w-full max-w-[450px] tablet:max-w-[650px] laptop:max-w-[783px] flex flex-col items-center gap-y-[24px] tablet:gap-y-[32px]`}>
                    <div className={`z-10 w-full flex flex-col items-center gap-y-[12px] text-center`}>
                        <div className={`w-full text-white font-archivo text-[32px] tablet:text-[44px] laptop:text-[64px] leading-[110%] tracking-[-2%]`}>See how code works. Understand it. Build with it.</div>
                        <div className={`w-full text-[#969696] tablet:max-w-[631px] font-work-sans text-[15px] tablet:text-[16px] leading-[150%] tracking-[-4%]`}>Prism teaches programming through animated visual explanations that make concepts click — then AI-powered labs help you practice.</div>
                    </div>

                    <div className={`z-10 cursor-pointer pl-[16px] py-[4px] pr-[4px] flex items-center gap-x-[10px] rounded-full bg-white hover:bg-white/85 transition-all ease-in duration-75 text-black font-work-sans font-medium text-[14px] tablet:text-[15px] laptop:text-[16px] leading-[125%] tracking-[-4%]`}>
                        <div>Start Learning Free</div>
                        <div>
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="0.5" width="35" height="35" rx="17.5" fill="black"/>
                                <rect x="0.5" y="0.5" width="35" height="35" rx="17.5" stroke="url(#paint0_linear_979_11768)"/>
                                <path d="M15.3333 25.3332H14.6667V24.6665H14V23.9998H13.3333V23.3332H14V22.6665H14.6667V21.9998H15.3333V21.3332H16V20.6665H16.6667V19.9998H17.3333V19.3332H18V18.6665H18.6667V17.3332H18V16.6665H17.3333V15.9998H16.6667V15.3332H16V14.6665H15.3333V13.9998H14.6667V13.3332H14V12.6665H13.3333V11.9998H14V11.3332H14.6667V10.6665H15.3333V11.3332H16V11.9998H16.6667V12.6665H17.3333V13.3332H18V13.9998H18.6667V14.6665H19.3333V15.3332H20V15.9998H20.6667V16.6665H21.3333V17.3332H22V18.6665H21.3333V19.3332H20.6667V19.9998H20V20.6665H19.3333V21.3332H18.6667V21.9998H18V22.6665H17.3333V23.3332H16.6667V23.9998H16V24.6665H15.3333V25.3332Z" fill="white"/>
                                <defs>
                                    <linearGradient id="paint0_linear_979_11768" x1="-6.40323e-08" y1="10.08" x2="37.9269" y2="13.0108" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#6633FF"/>
                                        <stop offset="0.206731" stop-color="#FF1919"/>
                                        <stop offset="0.413462" stop-color="#FF8800"/>
                                        <stop offset="0.615385" stop-color="#FFEA00"/>
                                        <stop offset="0.793269" stop-color="#19FF94"/>
                                        <stop offset="1" stop-color="#00D5FF"/>
                                    </linearGradient>
                                </defs>
                            </svg>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default HeroSection
