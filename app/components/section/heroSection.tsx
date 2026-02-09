import RiveBackground from "@/app/components/animations/heroSectionBg.animations"
import noise from "@/public/images/noise.webp"
import RiveCard from "@/app/components/animations/heroElement.animations"
import StartLearningBtn from "@/app/components/ui/startLearningBtn"

const HeroSection = () => {
    return (
        <section className="
        relative w-full
        h-[850px]
        laptop:h-[929px]
        overflow-hidden
        ">
            <RiveBackground/>

            <div style={{ backgroundImage: `url(${noise.src})` }} className="z-5 bg-cover absolute inset-0 backdrop-blur-3xl"/>

            <div className="px-[20px] tablet:px-[40px] relative z-10 w-full h-full flex flex-col gap-y-[40px] tablet:gap-y-[60px] laptop:gap-y-[80px] items-center justify-center">
                <div className="z-10 relative w-full flex items-center justify-center max-w-[280px] tablet:max-w-[325px] laptop:max-w-[380px] aspect-[325/203]">
                    <RiveCard/>
                </div>

                <div className={`w-full max-w-[450px] tablet:max-w-[650px] laptop:max-w-[783px] flex flex-col items-center gap-y-[24px] tablet:gap-y-[32px]`}>
                    <div className={`z-10 w-full flex flex-col items-center gap-y-[12px] text-center`}>
                        <div className={`w-full text-white font-archivo text-[32px] tablet:text-[44px] laptop:text-[64px] leading-[110%] tracking-[-2%]`}>See how code works. Understand it. Build with it.</div>
                        <div className={`w-full text-[#969696] tablet:max-w-[631px] font-work-sans text-[15px] tablet:text-[16px] leading-[150%] tracking-[-4%]`}>Prism teaches programming through animated visual explanations that make concepts click — then AI-powered labs help you practice.</div>
                    </div>

                    <StartLearningBtn/>
                </div>
            </div>
        </section>
    )
}


export default HeroSection
