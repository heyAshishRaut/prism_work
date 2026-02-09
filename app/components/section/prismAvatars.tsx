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
                no: 1,
                avatar: avatar1
            },
            {
                no: 2,
                avatar: avatar1
            },
            {
                no: 3,
                avatar: avatar1
            },
            {
                no: 4,
                avatar: avatar1
            },
            {
                no: 5,
                avatar: avatar2
            },
            {
                no: 6,
                avatar: avatar1
            },
            {
                no: 7,
                avatar: avatar1
            },
            {
                no: 8,
                avatar: avatar1
            },
            {
                no: 9,
                avatar: avatar1
            },
            {
                no: 10,
                avatar: avatar1
            },
            {
                no: 11,
                avatar: avatar1
            },
            {
                no: 12,
                avatar: avatar2
            },
            {
                no: 13,
                avatar: avatar1
            },
            {
                no: 14,
                avatar: avatar1
            }
        ]
    },
    {
        row: "rowTwo",
        avatars: [
            {
                no: 15,
                avatar: avatar2
            },
            {
                no: 16,
                avatar: avatar1
            },
            {
                no: 17,
                avatar: avatar1
            },
            {
                no: 18,
                avatar: avatar2
            },
            {
                no: 19,
                avatar: avatar1
            },
            {
                no: 20,
                avatar: avatar1
            },
            {
                no: 21,
                avatar: avatar1
            },
            {
                no: 22,
                avatar: avatar2
            },
            {
                no: 23,
                avatar: avatar1
            },
            {
                no: 24,
                avatar: avatar2
            },
            {
                no: 25,
                avatar: avatar1
            },
            {
                no: 26,
                avatar: avatar1
            },
            {
                no: 27,
                avatar: avatar1
            },
            {
                no: 28,
                avatar: avatar2
            },
            {
                no: 29,
                avatar: avatar1
            },
            {
                no: 30,
                avatar: avatar2
            }
        ]
    },
    {
        row: "rowThree",
        avatars: [
            {
                no: 31,
                avatar: avatar1
            },
            {
                no: 32,
                avatar: avatar1
            },
            {
                no: 33,
                avatar: avatar2
            },
            {
                no: 34,
                avatar: avatar1
            },
            {
                no: 35,
                avatar: avatar1
            },
            {
                no: 36,
                avatar: avatar1
            },
            {
                no: 37,
                avatar: avatar2
            },
            {
                no: 38,
                avatar: avatar1
            },
            {
                no: 39,
                avatar: avatar1
            },
            {
                no: 40,
                avatar: avatar1
            },
            {
                no: 41,
                avatar: avatar1
            },
            {
                no: 42,
                avatar: avatar2
            },
            {
                no: 43,
                avatar: avatar1
            },
            {
                no: 44,
                avatar: avatar1
            },
            {
                no: 45,
                avatar: avatar2
            },
            {
                no: 46,
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


const PrismAvatars = () => {
    const [current, setCurrent] = useState<null | number>(null)

    const Avatar = ({
                        no,
                        avatar,
                        showTooltip,
                    }: {
        no: number
        avatar: StaticImageData
        showTooltip?: boolean
    }) => {
        const isActive = current === no

        const avatarNode = (
            <div
                className={`
        relative h-[32px] w-[32px]
        laptop:h-[46px] laptop:w-[46px]
        rounded-[8px] overflow-hidden
        border transition-all duration-150

        ${isActive
                    ? "border-white grayscale-0"
                    : "border-transparent grayscale"}

        ${showTooltip
                    ? "laptop:hover:border-[#dadada] laptop:hover:grayscale-0 cursor-pointer"
                    : ""}
      `}
            >
                <Image src={avatar} alt="" fill className="object-cover" />
            </div>
        )

        if (!showTooltip) return avatarNode

        return (
            <HelpHint
                content={<Info />}
                open={isActive}
                onOpenChange={(open) => {
                    if (open) setCurrent(no)
                    else setCurrent(null)
                }}
            >
                {avatarNode}
            </HelpHint>
        )
    }


    return (
        <div
            className={`tablet:h-[550px] laptop:h-[855px] px-[20px] tablet:px-[40px] py-[60px] tablet:py-[80px] laptop:py-[100px] w-full flex items-center justify-center`}>
            <TooltipProvider delayDuration={100}>
                <div
                    className={`relative flex items-center justify-center w-full max-w-[450px] tablet:max-w-[800px] laptop:max-w-[1040px]`}>
                    <div
                        className={`z-2 overflow-hidden absolute h-[100px] tablet:h-[150px] laptop:h-[250px] w-full bottom-0`}>
                        <ParticlesBackground/>
                    </div>
                    <div className={`relative flex flex-col items-center gap-[12px] laptop:gap-[20px]`}>
                        {
                            avatarsItems.map((row, rowIndex) => (
                                <div key={rowIndex}
                                     className="z-10 w-full flex justify-center flex-wrap tablet:flex-nowrap gap-[12px] laptop:gap-[20px]">
                                    {
                                        row.avatars.map((el, i) => {
                                            return (
                                                <Avatar
                                                    key={i}
                                                    no={el.no}
                                                    avatar={el.avatar}
                                                    showTooltip={el.avatar === avatar1}
                                                />
                                            )
                                        })
                                    }
                                </div>
                            ))
                        }

                        <div className="z-10 w-full flex justify-between flex-wrap gap-[12px] laptop:gap-[20px]">
                            <Avatar no={47} avatar={avatar1} showTooltip/>
                            <Avatar no={48} avatar={avatar2}/>
                        </div>

                        <div className="z-10 w-full flex justify-between flex-wrap gap-[12px] laptop:gap-[20px]">
                            <Avatar no={49} avatar={avatar1} showTooltip/>
                            <Avatar no={50} avatar={avatar1} showTooltip/>
                        </div>

                        <div
                            className={`hidden tablet:flex h-[38px] laptop:h-[46px] w-full justify-between flex-wrap gap-[10px] tablet:gap-[20px]`}></div>

                        <div
                            className={`hidden laptop:flex h-[38px] laptop:h-[46px] w-full justify-between flex-wrap gap-[10px] tablet:gap-[20px]`}></div>

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
                                    className="absolute bottom-0 laptop:bottom-[10px] h-[18px] tablet:h-[60px] laptop:h-[90px] w-full bg-[linear-gradient(to_bottom,transparent_0%,rgba(18,18,18,0.35)_25%,rgba(18,18,18,0.7)_45%,rgba(18,18,18,0.9)_65%,rgba(18,18,18,0.98)_90%,#121212_100%)]"/>

                            </div>
                        </div>
                    </div>
                </div>
            </TooltipProvider>
        </div>
    )
}

export default PrismAvatars