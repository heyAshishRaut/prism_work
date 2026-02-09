"use client"
import avatar1 from "@/public/images/avatar1V2.png"
import avatar2 from "@/public/images/avatar2.png"
import prismText from "@/public/images/prismText.webp"
import Image, {StaticImageData} from "next/image"
import {useState} from "react"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
    TooltipArrow
} from "@/components/ui/tooltip"
import ParticlesBackground from "@/app/components/ui/paticleBg";
import HelpHint from "@/app/components/ui/helpHint";

const avatarsItems = [
    {
        row: "rowOne",
        avatars: [
            {
                avatar: avatar1
            },
            {
                avatar: avatar1
            },
            {
                avatar: avatar1
            },
            {
                avatar: avatar1
            },
            {
                avatar: avatar2
            },
            {
                avatar: avatar1
            },
            {
                avatar: avatar1
            },
            {
                avatar: avatar1
            },
            {
                avatar: avatar1
            },
            {
                avatar: avatar1
            },
            {
                avatar: avatar1
            },
            {
                avatar: avatar2
            },
            {
                avatar: avatar1
            },
            {
                avatar: avatar1
            }
        ]
    },
    {
        row: "rowTwo",
        avatars: [
            {
                avatar: avatar2
            },
            {
                avatar: avatar1
            },
            {
                avatar: avatar1
            },
            {
                avatar: avatar2
            },
            {
                avatar: avatar1
            },
            {
                avatar: avatar1
            },
            {
                avatar: avatar1
            },
            {
                avatar: avatar2
            },
            {
                avatar: avatar1
            },
            {
                avatar: avatar2
            },
            {
                avatar: avatar1
            },
            {
                avatar: avatar1
            },
            {
                avatar: avatar1
            },
            {
                avatar: avatar2
            },
            {
                avatar: avatar1
            },
            {
                avatar: avatar2
            }
        ]
    },
    {
        row: "rowThree",
        avatars: [
            {
                avatar: avatar1
            },
            {
                avatar: avatar1
            },
            {
                avatar: avatar2
            },
            {
                avatar: avatar1
            },
            {
                avatar: avatar1
            },
            {
                avatar: avatar1
            },
            {
                avatar: avatar2
            },
            {
                avatar: avatar1
            },
            {
                avatar: avatar1
            },
            {
                avatar: avatar1
            },
            {
                avatar: avatar1
            },
            {
                avatar: avatar2
            },
            {
                avatar: avatar1
            },
            {
                avatar: avatar1
            },
            {
                avatar: avatar2
            },
            {
                avatar: avatar1
            }
        ]
    }
]

const Info = () => {
    return (
        <div className="w-full h-full flex flex-col gap-y-[8px] tablet:gap-y-[16px]">
            <div
                className={`flex flex-row items-center gap-y-[6px] justify-between`}>
                <div className="flex items-center gap-[8px]">
                    <Image
                        src={avatar1}
                        alt=""
                        height={28}
                        width={28}
                        className="rounded-full h-[24px] w-[24px] tablet:h-[28px] tablet:w-[28px]"
                    />
                    <div
                        className="text-white/80 text-[13px] tablet:text-[15px] font-inter leading-[150%] tracking-[-2%] font-medium">
                        Aliza
                    </div>
                </div>

                <div className="text-white/60 text-[13px] tablet:text-[14px] font-inter leading-[150%] tracking-[-2%]">
                    Software Developer
                </div>
            </div>

            <div
                className="text-white/80 font-work-sans text-[13px] tablet:text-[15px] tracking-[-2%] leading-[150%]">
                You are amazing sir explain topics with connect real
                world
            </div>
        </div>
    )
}

const Avatar = ({avatar, showTooltip}: { avatar: StaticImageData; showTooltip?: boolean }) => {
    const avatarNode = (
        <div className={`relative h-[32px] w-[32px] laptop:h-[46px] laptop:w-[46px] rounded-[8px] overflow-hidden border border-transparent grayscale ${showTooltip ? "tablet:hover:border-[#dadada] tablet:hover:grayscale-0 cursor-pointer" : ""} transition-all duration-150`}>
            <Image src={avatar} alt="" fill className="object-cover" />
        </div>
    )

    if (!showTooltip) return avatarNode

    return <HelpHint content={<Info />}>{avatarNode}</HelpHint>
}

const PrismAvatars = () => {
    return (
        <div
            className={`relative tablet:h-[550px] laptop:h-[855px] px-[20px] tablet:px-[40px] py-[60px] tablet:py-[80px] laptop:py-[100px] w-full flex items-center justify-center`}>
            <TooltipProvider delayDuration={100}>
                <div className={`flex items-center justify-center w-full max-w-[450px] tablet:max-w-[800px] laptop:max-w-[1040px]`}>
                    <div
                        className={`z-2 absolute h-[150px] tablet:h-[300px] w-full bottom-[60px] tablet:bottom-[80px] laptop:bottom-[100px]`}>
                        <ParticlesBackground/>
                    </div>
                    <div className={`z-10 relative flex flex-col items-center gap-[12px] laptop:gap-[20px]`}>
                        {
                            avatarsItems.map((row, rowIndex) => (
                                <div key={rowIndex}
                                     className="w-full flex justify-center flex-wrap tablet:flex-nowrap gap-[12px] laptop:gap-[20px]">
                                    {
                                        row.avatars.map((el, i) => {
                                            return (
                                                <Avatar
                                                    key={i}
                                                    avatar={el.avatar}
                                                    showTooltip={el.avatar === avatar1}
                                                />
                                            )
                                        })
                                    }
                                </div>
                            ))
                        }

                        <div className="z-5 w-full flex justify-between flex-wrap gap-[12px] laptop:gap-[20px]">
                            <Avatar avatar={avatar1} showTooltip/>
                            <Avatar avatar={avatar2}/>
                        </div>

                        <div className="z-5 w-full flex justify-between flex-wrap gap-[12px] laptop:gap-[20px]">
                            <Avatar avatar={avatar1} showTooltip/>
                            <Avatar avatar={avatar1} showTooltip/>
                        </div>

                        <div className={`hidden tablet:flex h-[38px] laptop:h-[46px] w-full justify-between flex-wrap gap-[10px] tablet:gap-[20px]`}></div>

                        <div className={`hidden laptop:flex h-[38px] laptop:h-[46px] w-full justify-between flex-wrap gap-[10px] tablet:gap-[20px]`}></div>

                        <div className="
                        absolute -bottom-4 tablet:bottom-0
                        w-full
                        max-w-[200px]
                        sm:max-w-[300px]
                        tablet:max-w-[450px]
                        laptop:max-w-[868px]
                        aspect-[868/233]
                        ">
                            <div className={`relative w-full h-full`}>
                                <Image
                                    src={prismText}
                                    alt=""
                                    fill
                                    priority
                                />
                                <div
                                    className={`absolute bottom-0 h-[30px] tablet:h-[95px] laptop:h-[127px] w-full bg-[linear-gradient(to_bottom,transparent_0%,rgba(18,18,18,0.8)_60%,#121212_100%)]`}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </TooltipProvider>
        </div>
    )
}

export default PrismAvatars