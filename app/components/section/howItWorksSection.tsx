import Section from "@/app/components/ui/section"
import Image from "next/image";
import howItWorksIcon from "@/public/images/howItWorksIcon.webp"
import SectionHeading from "@/app/components/ui/sectionHeading";
import Text18px from "@/app/components/ui/text18px";

const HowItWorksSection = () => {
    return (
        <Section>
            <div className={`w-full max-w-[450px] tablet:max-w-[800px] laptop:max-w-[1046px] flex flex-col items-center gap-y-[50px] tablet:gap-y-[70px] laptop:gap-y-[90px]`}>
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
                    <div className={`w-full h-[61px] bg-red-500`}></div>
                    <div className={`w-full flex flex-col gap-y-[16px] tablet:gap-y-[24px]`}>
                        <div className={`w-full h-[420px] tablet:h-[668px] rounded-[12px] bg-[#1a1a1a] border border-[#262626]`}></div>
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