
import Image from "next/image"
import mask from "@/public/images/maskBento01.png"
import pro from "@/public/images/proV2.png"
import proBg from "@/public/images/proBg.webp"
import pricingIcon from "@/public/images/pricing.webp"
import SectionHeading from "@/app/components/ui/sectionHeading"
import React from "react"

const details = [
    {
        text: "Lorem ipsum dolor sit amet"
    },
    {
        text: "Consectetur adipiscing elit."
    },
    {
        text: "Donec tempus ornare odio nec"
    },
    {
        text: "Phasellus est massa"
    }
]

const Pricing = () => {
    return (
        <div className={`px-[20px] tablet:px-[40px] py-[40px] tablet:py-[60px] laptop:py-[80px] flex justify-center`}>
            <div className={`w-full max-w-[450px] tablet:max-w-[900px] laptop:max-w-[1039px] flex flex-col items-center gap-y-[50px] tablet:gap-y-[70px] laptop:gap-y-[90px]`}>
                <div className={`w-full max-w-[637px] flex flex-col items-center gap-y-[14px]`}>
                    <div className="relative laptop:w-[172px] tablet:w-[152px] w-[152px] aspect-[172/31]">
                        <Image
                            src={pricingIcon}
                            alt=""
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div className={`text-center`}>
                        <SectionHeading>Start Learning for free.</SectionHeading>
                    </div>
                </div>

                <div className={`w-full flex flex-col laptop:flex-row gap-y-[20px] tablet:gap-x-[14px] laptop:gap-x-[30px] justify-center laptop:justify-between items-center`}>
                    {/* FIRST */}
                    <div className={`p-[1px] shadow-[inset_0px_1px_1px_rgba(255,255,255,0.1)] h-[345px] laptop:h-[388px] w-full max-w-[300px] tablet:max-w-[324px] rounded-[16px] bg-[#1a1a1a] bg-[conic-gradient(from_180deg,#242424_0%,#242424_31%,#864700_39%,#242424_47%,#242424_100%)]`}>
                        <div className={`relative w-full h-full p-[16px] laptop:p-[22px] flex flex-col justify-between gap-y-[32px] bg-[#1a1a1a] rounded-[15px] overflow-hidden`}>
                            {/* Absolute positioned */}
                            <div className={`absolute h-[50px] w-[50px] bg-[#FF8800] rounded-full blur-3xl`}/>
                            {/* Child Element */}
                            <div className={`w-full`}>
                                <div className={`w-full flex flex-col gap-y-[20px]`}>
                                    <div className={`w-full flex flex-col gap-y-[24px]`}>
                                        <div className={`flex gap-x-[8px] items-center`}>
                                            <div className={`shadow-[-2px_-2px_20px_rgba(255,148,26,0.25),4px_4px_20px_rgba(0,0,0,1)] h-[20px] laptop:h-[24px] w-[20px] laptop:w-[24px] rounded-[5px] border border-[#FF941A] bg-[#FF8800]`}></div>
                                            <div className={`text-white font-archivo text-[16px] laptop:text-[20px] leading-[125%] tracking-[-2%]`}>Free
                                            </div>
                                        </div>
                                        <div className={`flex items-end gap-x-[8px]`}>
                                            <div className={`font-archivo font-medium text-[30px] laptop:text-[40px] text-white leading-[125%] tracking-[-2%]`}>$ 0.00</div>
                                            <div className={`py-[3px] laptop:py-[7px] font-work-sans text-[16px] leading-[150%] tracking-[-2%] text-[#8a8a8a]`}>/month
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`w-full h-[1px] bg-[#2e2e2e]`}/>
                                    <div className={`flex flex-col gap-y-[12px]`}>
                                        {
                                            details.map((e, index) => (
                                                <div key={index} className={`flex gap-x-[8px] items-center tablet:items-start laptop:items-center`}>
                                                    <div className="min-h-[18px] min-w-[18px] flex items-center justify-center rounded-full bg-gradient-to-b from-[#323232] to-[#262626]">
                                                        <svg
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            className="w-[14px] h-[14px]"
                                                            stroke="white"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        >
                                                            <path d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </div>

                                                    <div className={`text-[#c2c2c2] font-work-sans text-[14px] laptop:text-[16px] leading-[135%] tracking-[-2%]`}>{e.text}</div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>

                            <div className="cursor-pointer border border-white/15 rounded-full">
                                <div
                                    className="w-full h-[41px] rounded-full font-work-sans font-medium text-[14px] laptop:text-[16px] leading-[125%] tracking-[-4%] flex items-center justify-center text-white transition-all ease-in duration-75
                                    bg-[linear-gradient(300deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%),linear-gradient(#242428,#242428)]
                                    hover:bg-[linear-gradient(300deg,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0)_100%),linear-gradient(#2B2B30,#2B2B30)]">
                                    Get Started Free
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SECOND */}
                    <div className={`overflow-hidden w-full h-[380px] laptop:h-[429px] max-w-[320px]  tablet:max-w-[333px] rounded-[16px] p-[1px] shadow-[inset_0px_1px_1px_rgba(255,255,255,0.1)] bg-[#1a1a1a] bg-[conic-gradient(from_180deg,#242424_30%,rgba(150,80,98,0.08)_31%,#7E37E1_36%,#E138C0_38%,#E13765_40%,#6C3A47_46%,#242424_51%,#242424_100%)]`}>
                        <div className={`overflow-hidden relative w-full h-full`}>
                            {/* Absolute positioned */}
                            <div style={{ backgroundImage: `url(${mask.src})` }} className={`rounded-[15px] z-5 bg-cover absolute h-full w-full`}/>
                            <div style={{ backgroundImage: `url(${proBg.src})` }} className={`rounded-[15px] z-1 absolute object-cover bg-center w-full h-1/2`} />
                            <div className="rounded-[15px] absolute z-3 h-full w-full bg-gradient-to-b from-[#1A1A1A]/60 via-[#1A1A1A] to-[#1A1A1A]" />

                            <div className={`z-10 w-full h-full p-[16px] laptop:p-[22px] flex flex-col justify-between rounded-[15px] overflow-hidden`}>
                                {/* Child Element */}
                                <div className={`z-10 w-full`}>
                                    <div className={`w-full flex flex-col gap-y-[20px]`}>
                                        <div className={`w-full flex flex-col gap-y-[24px]`}>
                                            <div className={`flex gap-x-[8px]`}>
                                                <div style={{ backgroundImage: `url(${pro.src})` }} className={`shadow-[-2px_-2px_20px_rgba(255,255,255,0.25),4px_4px_20px_rgba(0,0,0,1)] h-[20px] laptop:h-[24px] w-[20px] laptop:w-[24px] bg-contain rounded-[5px]`}>
                                                </div>
                                                <div className={`text-white font-archivo text-[16px] laptop:text-[20px] leading-[125%] tracking-[-2%]`}>Pro
                                                </div>
                                            </div>
                                            <div className={`flex items-end gap-x-[8px]`}>
                                                <div className={`font-archivo font-medium text-[30px] laptop:text-[40px] text-white leading-[125%] tracking-[-2%]`}>$12.90</div>
                                                <div className={`py-[3px] laptop:py-[7px] font-work-sans text-[16px] leading-[150%] tracking-[-2%] text-[#8a8a8a]`}>/month
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`w-full h-[1px] bg-white/10`}/>
                                        <div className={`flex flex-col gap-y-[12px]`}>
                                            {
                                                details.map((e, index) => (
                                                    <div key={index} className={`flex gap-x-[8px] items-center tablet:items-start laptop:items-center`}>
                                                        <div className="min-h-[18px] min-w-[18px] flex items-center justify-center rounded-full bg-white">
                                                            <svg
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                className="w-[14px] h-[14px]"
                                                                stroke="black"
                                                                strokeWidth={2}
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            >
                                                                <path d="M5 13l4 4L19 7" />
                                                            </svg>
                                                        </div>

                                                        <div className={`text-white font-work-sans text-[14px] laptop:text-[16px] leading-[135%] tracking-[-2%]`}>{e.text}</div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className={`z-10 w-full h-[41px] bg-white hover:bg-white/80 cursor-pointer transition-all ease-in duration-75 rounded-full font-work-sans font-medium text-[14px] laptop:text-[16px] leading-[125%] tracking-[-4%] flex items-center justify-center text-black`}>
                                    Start Learning
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* THIRD */}
                    <div className={`p-[1px] shadow-[inset_0px_1px_1px_rgba(255,255,255,0.1)] h-[345px] laptop:h-[388px] w-full max-w-[300px] tablet:max-w-[324px]  rounded-[16px] bg-[#1a1a1a] bg-[conic-gradient(from_230deg,#242424_0%,#604E98_33%,#242424_34%,#242424_100%)]`}>
                        <div className={`relative w-full h-full p-[16px] laptop:p-[22px] flex flex-col gap-y-[32px] bg-[#1a1a1a] rounded-[15px] overflow-hidden`}>
                            {/* Absolute positioned */}
                            <div className={`absolute h-[50px] w-[50px] bg-[#6633FF] rounded-full blur-3xl`}/>
                            {/* Child Element */}
                            <div className={`w-full`}>
                                <div className={`w-full flex flex-col gap-y-[20px]`}>
                                    <div className={`w-full flex flex-col gap-y-[24px]`}>
                                        <div className={`flex gap-x-[8px]`}>
                                            <div className={`shadow-[-2px_-2px_20px_rgba(110, 61, 255, 0.25),4px_4px_20px_rgba(0,0,0,1)] h-[20px] laptop:h-[24px] w-[20px] laptop:w-[24px] rounded-[5px] border border-[#6E3DFF] bg-[#6633FF]`}></div>
                                            <div className={`text-white font-archivo text-[16px] laptop:text-[20px] leading-[125%] tracking-[-2%]`}>Teams
                                            </div>
                                        </div>
                                        <div className={`flex items-end gap-x-[8px]`}>
                                            <div className={`font-archivo font-medium text-[30px] laptop:text-[40px] text-white leading-[125%] tracking-[-2%]`}>Custom</div>
                                            <div className={`py-[3px] laptop:py-[7px] font-work-sans text-[16px] leading-[150%] tracking-[-2%] text-[#8a8a8a]`}>Pricing
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`w-full h-[1px] bg-[#2e2e2e]`}/>
                                    <div className={`flex flex-col gap-y-[12px]`}>
                                        {
                                            details.map((e, index) => (
                                                <div key={index} className={`flex gap-x-[8px] items-center tablet:items-start laptop:items-center`}>
                                                    <div className="h-[18px] w-[18px] flex items-center justify-center rounded-full bg-gradient-to-b from-[#323232] to-[#262626]">
                                                        <svg
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            className="w-[14px] h-[14px]"
                                                            stroke="white"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        >
                                                            <path d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </div>

                                                    <div className={`text-[#c2c2c2] font-work-sans text-[14px] laptop:text-[16px] leading-[135%] tracking-[-2%]`}>{e.text}</div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>

                            <div className="overflow-hidden cursor-pointer border border-white/15 rounded-full">
                                <div
                                    className="w-full h-[41px] rounded-full font-work-sans font-medium text-[14px] laptop:text-[16px] leading-[125%] tracking-[-4%] flex items-center justify-center text-white transition-all ease-in duration-75
                                    bg-[linear-gradient(300deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%),linear-gradient(#242428,#242428)]
                                    hover:bg-[linear-gradient(300deg,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0)_100%),linear-gradient(#2B2B30,#2B2B30)]">
                                    Contact Us
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing