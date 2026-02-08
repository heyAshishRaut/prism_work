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

const AvatarWithTooltip = ({
                               avatar,
                               showTooltip = false,
                           }: {
    avatar: StaticImageData
    showTooltip?: boolean
}) => {
    if (!showTooltip) {
        return (
            <div className="relative h-[32px] w-[32px] laptop:h-[46px] laptop:w-[46px] rounded-[8px] overflow-hidden">
                <Image src={avatar} alt="" fill/>
            </div>
        )
    }

    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <div
                    className="
            relative h-[32px] w-[32px]
            laptop:h-[46px] laptop:w-[46px]
            rounded-[8px] overflow-hidden
            border border-transparent
            grayscale
            hover:border-[#dadada]
            hover:grayscale-0
            transition-all duration-150 ease-in
            cursor-pointer
          "
                >
                    <Image src={avatar} alt="" fill className="object-cover"/>
                </div>
            </TooltipTrigger>

            <TooltipContent
                side="top"
                sideOffset={12}
                collisionPadding={20}
                className="
                w-[230px] tablet:w-[312px]
                bg-[#262626]
                border border-[#454545]
                rounded-[12px]
                p-[12px] tablet:p-[16px]
                "
            >
                <TooltipArrow
                    width={16}
                    height={8}
                    className="fill-[#262626] stroke-[#454545]"
                />

                <div className="flex flex-col gap-y-[8px] tablet:gap-y-[16px]">
                    <div className="flex flex-col tablet:flex-row justify-between gap-y-[6px]">
                        <div className="flex items-center gap-[8px]">
                            <Image
                                src={avatar1}
                                alt=""
                                height={28}
                                width={28}
                                className="rounded-full h-[24px] w-[24px] tablet:h-[28px] tablet:w-[28px]"
                            />
                            <div className="text-white/80 text-[13px] tablet:text-[15px] font-medium">
                                Aliza
                            </div>
                        </div>

                        <div className="text-white/60 text-[14px]">
                            Software Developer
                        </div>
                    </div>

                    <div className="text-white/80 text-[13px] tablet:text-[15px] leading-[150%]">
                        You are amazing sir explain topics with connect real world
                    </div>
                </div>
            </TooltipContent>
        </Tooltip>
    )
}

const PrismAvatars = () => {

    return (
        <div
            className={`relative px-[20px] tablet:px-[40px] py-[60px] tablet:py-[80px] laptop:py-[100px] w-full flex items-center justify-center`}>
            <TooltipProvider delayDuration={100}>
                <div
                    className={`flex items-center justify-center w-full max-w-[450px] tablet:max-w-[800px] laptop:max-w-[1040px]`}>
                    <div className={`z-2 absolute h-[150px] tablet:h-[300px] w-full bottom-[60px] tablet:bottom-[80px] laptop:bottom-[100px]`}>
                        <ParticlesBackground/>
                    </div>
                    <div
                        className={`relative flex flex-col items-center gap-[12px] laptop:gap-[20px]`}>
                        {
                            avatarsItems.map((row, rowIndex) => (
                                <div key={rowIndex}
                                     className="w-full flex justify-center flex-wrap tablet:flex-nowrap gap-[12px] laptop:gap-[20px]">
                                    {
                                        row.avatars.map((el, i) => {
                                            return (
                                                <Tooltip key={i}>
                                                    <TooltipTrigger asChild>
                                                        <div
                                                            className={`z-5 relative h-[32px] w-[32px] laptop:h-[46px] laptop:w-[46px] rounded-[8px] overflow-hidden border border-transparent grayscale ${el.avatar === avatar1 ? "hover:border-[#dadada] hover:grayscale-0 cursor-pointer" : ""} transition-all duration-150 ease-in`}>
                                                            <Image
                                                                src={el.avatar}
                                                                alt=""
                                                                fill
                                                                className="object-cover"
                                                            />
                                                        </div>
                                                    </TooltipTrigger>

                                                    {
                                                        el.avatar === avatar1 && (
                                                            <TooltipContent side="top" sideOffset={12} collisionPadding={20}
                                                                            className="
                                                             w-[230px] tablet:w-[312px] bg-[#262626] border border-[#454545] rounded-[12px] p-[12px] tablet:p-[16px]">

                                                                <TooltipArrow
                                                                    width={16}
                                                                    height={8}
                                                                    className="fill-[#262626] stroke-[#454545]"
                                                                />

                                                                <div
                                                                    className="w-full h-full flex flex-col gap-y-[8px] tablet:gap-y-[16px]">
                                                                    <div
                                                                        className={`flex flex-col tablet:flex-row items-start tablet:items-center gap-y-[6px] justify-between`}>
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

                                                                        <div
                                                                            className="text-white/60 text-[14px] font-inter leading-[150%] tracking-[-2%]">
                                                                            Software Developer
                                                                        </div>
                                                                    </div>

                                                                    <div
                                                                        className="text-white/80 font-work-sans text-[13px] tablet:text-[15px] tracking-[-2%] leading-[150%]">
                                                                        You are amazing sir explain topics with connect real
                                                                        world
                                                                    </div>
                                                                </div>
                                                            </TooltipContent>
                                                        )
                                                    }
                                                </Tooltip>
                                            )
                                        })
                                    }

                                </div>
                            ))
                        }

                        <div className="z-5 w-full flex justify-between flex-wrap gap-[12px] laptop:gap-[20px]">
                            <AvatarWithTooltip avatar={avatar1} showTooltip/>
                            <AvatarWithTooltip avatar={avatar2}/>
                        </div>

                        <div className="z-5 w-full flex justify-between flex-wrap gap-[12px] laptop:gap-[20px]">
                            <AvatarWithTooltip avatar={avatar1} showTooltip/>
                            <AvatarWithTooltip avatar={avatar1} showTooltip/>
                        </div>

                        <div
                            className={`hidden tablet:flex h-[38px] laptop:h-[46px] w-full justify-between flex-wrap gap-[10px] tablet:gap-[20px]`}></div>

                        <div
                            className={`hidden laptop:flex h-[38px] laptop:h-[46px] w-full justify-between flex-wrap gap-[10px] tablet:gap-[20px]`}></div>

                        <div className="
                        absolute -bottom-4 tablet:bottom-0
                        w-full
                        max-w-[200px]
                        tablet:max-w-[500px]
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