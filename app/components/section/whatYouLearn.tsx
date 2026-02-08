import Section from "@/app/components/ui/section"
import Image from "next/image"
import whatYouLearn from "@/public/images/whatYouLearnLearn.webp"
import SectionHeading from "@/app/components/ui/sectionHeading"
import BentoGrid from "@/app/components/uiComponents/bentoGrid"

const HowItWorksSection = () => {
    return (
        <Section>
            <div className={`w-full max-w-[400px] tablet:max-w-[900px] laptop:max-w-[1037px] flex flex-col items-center gap-y-[50px] tablet:gap-y-[70px] laptop:gap-y-[90px]`}>
                <div className={`w-full max-w-[575px] flex flex-col items-center gap-y-[14px]`}>
                    <div className="relative laptop:w-[248px] tablet:w-[235px] w-[215px] aspect-[248/31]">
                        <Image
                            src={whatYouLearn}
                            alt=""
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div className={`text-center`}>
                        <SectionHeading>From first line of code to production-ready skills.</SectionHeading>
                    </div>
                </div>

                <div className={`w-full`}>
                    <BentoGrid/>
                </div>
            </div>
        </Section>
    )
}

export default HowItWorksSection