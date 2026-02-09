import Section from "@/app/components/ui/section"
import Image, { StaticImageData } from "next/image"
import howItWorksIcon from "@/public/images/howItWorksIcon.webp"
import SectionHeading from "@/app/components/ui/sectionHeading"
import Text18px from "@/app/components/ui/text18px"
import seeIt from "@/public/images/seeIt.webp"
import understandIt from "@/public/images/understandIt.webp"
import buildIt from "@/public/images/buildIt.webp"
import React from "react"
import HowItWorksSectionComponent from "@/app/components/uiComponents/howItWorksSectionComponent";

interface HowItWorksItems {
    icon: StaticImageData,
    title: string
}

const howItWorksItems: HowItWorksItems[] = [
    {
        icon: seeIt,
        title: "See It"
    },
    {
        icon: understandIt,
        title: "Understand It"
    },
    {
        icon: buildIt,
        title: "Build It"
    }
]

const HowItWorksSection = () => {
    return (
        <Section>
            <div className={`w-full max-w-[450px] tablet:max-w-[900px] laptop:max-w-[1046px] flex flex-col items-center gap-y-[50px] tablet:gap-y-[70px] laptop:gap-y-[90px]`}>
                <div className={`w-full max-w-[678px] flex flex-col items-center gap-y-[14px]`}>
                    <div className="relative laptop:w-[219px] tablet:w-[210px] w-[200px] aspect-[219/31]">
                        <Image
                            src={howItWorksIcon}
                            alt=""
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div className={`text-center`}>
                        <SectionHeading>Watch. Understand. Build.</SectionHeading>
                    </div>
                </div>

                <div className={`w-full flex flex-col gap-y-[20px] tablet:gap-y-[30px] laptop:gap-y-[40px]`}>
                    <div className={`relative`}>
                        <HowItWorksSectionComponent/>
                    </div>

                    <div className={`w-full flex flex-col gap-y-[16px] tablet:gap-y-[24px]`}>

                            <div className="w-full aspect-video overflow-hidden rounded-[12px] border border-white/10 bg-black">
                                <iframe
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/8AHPXm9Y6mI"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                />
                            </div>

                        <div className={`w-full laptop:max-w-[836px] text-center tablet:text-start`}>
                            <Text18px>Concepts come alive through animated visual explanations. Watch algorithms run step-by-step. See data flow through your code.</Text18px>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default HowItWorksSection