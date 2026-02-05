import Section from "@/app/components/ui/section"
import Image from "next/image";
import whatYouLearn from "@/public/images/whatYouLearnLearn.webp"
import SectionHeading from "@/app/components/ui/sectionHeading"
import Text16px from "@/app/components/ui/text16px"

const HowItWorksSection = () => {
    return (
        <Section>
            <div className={`w-full max-w-[450px] tablet:max-w-[800px] laptop:max-w-[1046px] flex flex-col items-center gap-y-[50px] tablet:gap-y-[70px] laptop:gap-y-[90px]`}>
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

                <div className="w-full max-w-[1037px] flex flex-col gap-y-[12px] bg-[#121212]">
                    {/* ROW 1 */}
                    <div className="flex flex-col tablet:flex-row gap-[12px] ">
                        <div className="
                            relative
                            w-full rounded-[10px]
                            tablet:w-[400px]
                            laptop:w-[437px]
                            h-[260px]
                            tablet:h-[320px]
                            laptop:h-[381px]
                            bg-[#1a1a1a]
                             shadow-[inset_0px_1px_1px_rgba(255,255,255,0.1)]
                            ">
                            <div className={`absolute bottom-[24px] tablet:bottom-[32px] left-[24px] right-[24px] tablet:right-0 tablet:left-[32px]`}>
                                <div className={`flex flex-col gap-y-[6px]`}>
                                    <div className={`font-archivo font-medium text-[15px] tablet:text-[17px] laptop:text-[19px] text-white leading-[150%] tracking-[-2%]`}>Programming Languages</div>
                                    <Text16px>Python, JavaScript, Java, and more</Text16px>
                                </div>
                            </div>
                        </div>

                        <div
                            className="
                            relative
                            w-full rounded-[10px]
                            tablet:w-[520px]
                            laptop:w-[588px]

                            h-[260px]
                            tablet:h-[320px]
                            laptop:h-[381px]
                            bg-[#1a1a1a]
                             shadow-[inset_0px_1px_1px_rgba(255,255,255,0.1)]
                            ">
                            <div className={`absolute bottom-[24px] tablet:bottom-[32px] left-[24px] right-[24px] tablet:right-0 tablet:left-[32px]`}>
                                <div className={`flex flex-col gap-y-[6px]`}>
                                    <div className={`font-archivo font-medium text-[15px] tablet:text-[17px] laptop:text-[19px] text-white leading-[150%] tracking-[-2%]`}>Data Structures & Algorithms</div>
                                    <Text16px>Arrays, trees, graphs, sorting, searching — visualized</Text16px>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ROW 2 */}
                    <div className="flex flex-col tablet:flex-row gap-[12px]">
                        <div
                            className="
                            relative
                            w-full rounded-[10px]
                            tablet:w-1/2
                            h-[260px]
                            tablet:h-[320px]
                            laptop:h-[381px]
                            bg-[#1a1a1a]
                             shadow-[inset_0px_1px_1px_rgba(255,255,255,0.1)]
                            ">
                            <div className={`absolute bottom-[24px] tablet:bottom-[32px] left-[24px] right-[24px] tablet:right-0 tablet:left-[32px]`}>
                                <div className={`flex flex-col gap-y-[6px]`}>
                                    <div className={`font-archivo font-medium text-[15px] tablet:text-[17px] laptop:text-[19px] text-white leading-[150%] tracking-[-2%]`}>Web Development</div>
                                    <Text16px>HTML, CSS, React, Next.js (coming Q1 2026)</Text16px>
                                </div>
                            </div>
                        </div>

                        <div
                            className="
                            relative
                            w-full rounded-[10px]
                            tablet:w-1/2
                            h-[260px]
                            tablet:h-[320px]
                            laptop:h-[381px]
                            bg-[#1a1a1a]
                             shadow-[inset_0px_1px_1px_rgba(255,255,255,0.1)]
                            ">
                            <div className={`absolute bottom-[24px] tablet:bottom-[32px] left-[24px] right-[24px] tablet:right-0 tablet:left-[32px]`}>
                                <div className={`flex flex-col gap-y-[6px]`}>
                                    <div className={`font-archivo font-medium text-[15px] tablet:text-[17px] laptop:text-[19px] text-white leading-[150%] tracking-[-2%]`}>Data Science & Analytics</div>
                                    <Text16px>SQL, Pandas, data visualization (coming Q1 2026)</Text16px>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ROW 3 */}
                    <div
                        className="
                        relative
                        w-full rounded-[10px]
                        h-[260px]
                        tablet:h-[320px]
                        laptop:h-[381px]
                        bg-[#1a1a1a]
                             shadow-[inset_0px_1px_1px_rgba(255,255,255,0.1)]
                        ">
                        <div className={`absolute bottom-[24px] tablet:bottom-[32px] left-[24px] right-[24px] tablet:right-0 tablet:left-[32px]`}>
                            <div className={`flex flex-col gap-y-[6px]`}>
                                <div className={`font-archivo font-medium text-[15px] tablet:text-[17px] laptop:text-[19px] text-white leading-[150%] tracking-[-2%]`}>Code  has no language barrier. Neither should learning</div>
                                <Text16px>No more translating in your head. Just clear, visual explanations in the language you think in.</Text16px>
                            </div>
                        </div>
                    </div>
                </div>




            </div>
        </Section>
    )
}

export default HowItWorksSection