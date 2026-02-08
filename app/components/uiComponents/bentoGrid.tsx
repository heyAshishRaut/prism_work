import mask01 from "@/public/images/maskBento01.png"
import mask02 from "@/public/images/maskBento02V2.png"
import mask05 from "@/public/images/maskBento05.png"
import Text16px from "@/app/components/ui/text16px"
import {BentoFour, BentoOne, BentoThree, BentoTwo} from "@/app/components/animations/bentoOne.animations"
import ResponsiveBentoFive from "@/app/components/uiComponents/responsiveBentoFive"

const BentoGrid = () => {
    return (
        <div className="w-full flex flex-col gap-y-[12px]">
            <div className={`w-full flex flex-col tablet:flex-row gap-[12px]`}>
                <div className={`overflow-hidden h-[381px] w-full tablet:w-[384px] laptop:w-[437px] rounded-[10px] bg-[#1a1a1a] shadow-[inset_0px_1px_1px_rgba(255,255,255,0.1)]`}>
                    <div style={{backgroundImage: `url(${mask01.src})`}} className={`relative overflow-hidden bg-cover bg-no-repeat w-full h-full`}>
                        <div className="absolute bottom-0 w-full h-[100%] bg-gradient-to-b from-transparent to-[#1a1a1a]" />
                        <div className={`z-10 w-full h-full flex flex-col`}>
                            <div className={`z-10 w-full flex-1`}>
                                <BentoOne/>
                            </div>
                        </div>
                        <div className={`absolute bottom-0 z-10 flex flex-col p-[32px] gap-y-[6px]`}>
                            <div
                                className={`font-archivo font-medium text-[15px] tablet:text-[17px] laptop:text-[19px] text-white leading-[150%] tracking-[-2%]`}>Programming
                                Languages
                            </div>
                            <Text16px>Python, JavaScript, Java, and more</Text16px>
                        </div>
                    </div>
                </div>

                {/*<div className={`overflow-hidden h-[381px] w-full tablet:w-[384px] laptop:w-[437px] rounded-[10px] bg-[#1a1a1a] shadow-[inset_0px_1px_1px_rgba(255,255,255,0.1)]`}>*/}
                {/*    <div style={{backgroundImage: `url(${mask01.src})`}} className={`relative overflow-hidden bg-cover bg-no-repeat w-full h-full`}>*/}
                {/*        <div className="absolute bottom-0 w-full h-[100%] bg-gradient-to-b from-transparent to-[#1a1a1a]" />*/}

                {/*        <div className={`z-10 w-full h-full flex flex-col`}>*/}
                {/*            <div className={`z-10 w-full flex-1`}>*/}
                {/*                <BentoOne/>*/}
                {/*            </div>*/}
                {/*            <div className={`z-10 flex flex-col p-[32px] gap-y-[6px]`}>*/}
                {/*                <div*/}
                {/*                    className={`font-archivo font-medium text-[15px] tablet:text-[17px] laptop:text-[19px] text-white leading-[150%] tracking-[-2%]`}>Programming*/}
                {/*                    Languages*/}
                {/*                </div>*/}
                {/*                <Text16px>Python, JavaScript, Java, and more</Text16px>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}


                <div className="h-[381px] w-full tablet:w-[516px] laptop:w-[588px] rounded-[10px] bg-[#1a1a1a] shadow-[inset_0px_1px_1px_rgba(255,255,255,0.1)] overflow-hidden">
                    <div style={{ backgroundImage: `url(${mask02.src})` }} className="relative w-full h-full bg-cover bg-no-repeat bg-center">
                        <div className="absolute bottom-0 w-full h-[100%] bg-gradient-to-b from-transparent to-[#1a1a1a]" />
                        <div className="w-full h-full flex flex-col">
                            <div className="z-10 flex-1 w-full px-[30px] laptop:px-[50px]">
                                <BentoTwo />
                            </div>
                        </div>
                        <div className="absolute bottom-0 z-10 flex flex-col p-[32px] gap-y-[6px]">
                            <div className="font-archivo font-medium text-[15px] tablet:text-[17px] laptop:text-[19px] text-white leading-[150%] tracking-[-2%]">Data Structures & Algorithms</div>
                            <Text16px>Arrays, trees, graphs, sorting, searching — visualized</Text16px>
                        </div>
                    </div>
                </div>


                {/*<div className="h-[381px] w-full tablet:w-[516px] laptop:w-[588px] rounded-[10px] bg-[#1a1a1a] shadow-[inset_0px_1px_1px_rgba(255,255,255,0.1)] overflow-hidden">*/}
                {/*    <div style={{ backgroundImage: `url(${mask02.src})` }} className="relative w-full h-full bg-cover bg-no-repeat bg-center">*/}
                {/*        <div className="absolute bottom-0 w-full h-[100%] bg-gradient-to-b from-transparent to-[#1a1a1a]" />*/}
                {/*        <div className="w-full h-full flex flex-col">*/}
                {/*            <div className="z-10 flex-1 w-full px-[30px]">*/}
                {/*                <BentoTwo />*/}
                {/*            </div>*/}

                {/*            <div className="z-10 flex flex-col p-[32px] gap-y-[6px]">*/}
                {/*                <div className="font-archivo font-medium text-[15px] tablet:text-[17px] laptop:text-[19px] text-white leading-[150%] tracking-[-2%]">Data Structures & Algorithms</div>*/}
                {/*                <Text16px>Arrays, trees, graphs, sorting, searching — visualized</Text16px>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>

            <div className={`w-full flex flex-col tablet:flex-row gap-[12px]`}>
                {/*<div className={`h-[381px] w-full tablet:w-1/2 laptop:w-1/2 rounded-[10px] bg-[#1a1a1a] shadow-[inset_0px_1px_1px_rgba(255,255,255,0.1)] overflow-hidden`}>*/}
                {/*    <div style={{backgroundImage: `url(${mask01.src})`}}*/}
                {/*         className={`relative bg-cover bg-no-repeat w-full h-full`}>*/}
                {/*        <div className="absolute bottom-0 w-full h-[100%] bg-gradient-to-b from-transparent to-[#1a1a1a]" />*/}
                {/*        <div className={`w-full h-full flex flex-col`}>*/}
                {/*            <div className={`z-10 w-full flex-1 px-[40px] laptop:px-[100px]`}>*/}
                {/*                <BentoThree/>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className={`absolute bottom-0 z-10 flex flex-col p-[20px] tablet:p-[24px] laptop:p-[32px] gap-y-[6px]`}>*/}
                {/*            <div className={`font-archivo font-medium text-[15px] tablet:text-[17px] laptop:text-[19px] text-white leading-[150%] tracking-[-2%]`}>Web Development</div>*/}
                {/*            <Text16px>HTML, CSS, React, Next.js (coming Q1 2026)</Text16px>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

                <div className={`h-[381px] w-full tablet:w-1/2 laptop:w-1/2 rounded-[10px] bg-[#1a1a1a] shadow-[inset_0px_1px_1px_rgba(255,255,255,0.1)] overflow-hidden`}>
                    <div style={{backgroundImage: `url(${mask01.src})`}}
                         className={`relative bg-cover bg-no-repeat w-full h-full`}>
                        <div className="absolute bottom-0 w-full h-[100%] bg-gradient-to-b from-transparent to-[#1a1a1a]" />
                        <div className={`w-full h-full flex flex-col`}>
                            <div className={`z-10 w-full flex-1 pt-[20px] px-[20px]`}>
                                <BentoThree/>
                            </div>
                            <div className={`z-10 flex flex-col p-[32px] gap-y-[6px]`}>
                                <div className={`font-archivo font-medium text-[15px] tablet:text-[17px] laptop:text-[19px] text-white leading-[150%] tracking-[-2%]`}>Web Development</div>
                                <Text16px>HTML, CSS, React, Next.js (coming Q1 2026)</Text16px>
                            </div>
                        </div>
                    </div>
                </div>

                {/*<div className="h-[381px] w-full tablet:w-1/2 laptop:w-1/2 rounded-[10px] bg-[#1a1a1a] shadow-[inset_0px_1px_1px_rgba(255,255,255,0.1)] overflow-hidden">*/}
                {/*    <div style={{ backgroundImage: `url(${mask02.src})` }} className="relative w-full h-full bg-cover bg-no-repeat bg-center">*/}
                {/*        <div className="absolute bottom-0 w-full h-[100%] bg-gradient-to-b from-transparent to-[#1a1a1a]" />*/}
                {/*        <div className="w-full h-full flex flex-col">*/}
                {/*            <div className="z-10 flex-1 w-full py-[30px] px-[40px]">*/}
                {/*                <BentoFour />*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className="absolute bottom-0 z-10 flex flex-col p-[20px] tablet:p-[24px] laptop:p-[32px] gap-y-[6px]">*/}
                {/*            <div className={`font-archivo font-medium text-[15px] tablet:text-[17px] laptop:text-[19px] text-white leading-[150%] tracking-[-2%]`}>Data Science & Analytics</div>*/}
                {/*            <Text16px>SQL, Pandas, data visualization (coming Q1 2026)</Text16px>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

                <div className="h-[381px] w-full tablet:w-1/2 laptop:w-1/2 rounded-[10px] bg-[#1a1a1a] shadow-[inset_0px_1px_1px_rgba(255,255,255,0.1)] overflow-hidden">
                    <div style={{ backgroundImage: `url(${mask02.src})` }} className="relative w-full h-full bg-cover bg-no-repeat bg-center">
                        <div className="absolute bottom-0 w-full h-[100%] bg-gradient-to-b from-transparent to-[#1a1a1a]" />
                        <div className="w-full h-full flex flex-col">
                            <div className="z-10 flex-1 w-full p-[30px] tablet:p-[20px]">
                                <BentoFour />
                            </div>

                            <div className="z-10 flex flex-col p-[32px] gap-y-[6px]">
                                <div className={`font-archivo font-medium text-[15px] tablet:text-[17px] laptop:text-[19px] text-white leading-[150%] tracking-[-2%]`}>Data Science & Analytics</div>
                                <Text16px>SQL, Pandas, data visualization (coming Q1 2026)</Text16px>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`w-full h-[381px] bg-[#1a1a1a] shadow-[inset_0px_1px_1px_rgba(255,255,255,0.1)] rounded-[10px] overflow-hidden`}>
                <div style={{ backgroundImage: `url(${mask05.src})` }} className={`relative bg-cover w-full h-full`}>
                    <div className="absolute bottom-0 w-full h-[100%] bg-gradient-to-b from-transparent to-[#1a1a1a]" />
                    <div className={`w-full h-full flex flex-col`}>
                        <div className={`w-full flex-1 z-10 `}>
                            <ResponsiveBentoFive/>
                        </div>
                    </div>
                    <div className={`absolute bottom-0 z-10 flex flex-col gap-y-[6px] p-[32px]`}>
                        <div className={`font-archivo font-medium text-[15px] tablet:text-[17px] laptop:text-[19px] text-white leading-[150%] tracking-[-2%]`}>Code  has no language barrier. Neither should learning</div>
                        <Text16px>No more translating in your head. Just clear, visual explanations in the language you think in.</Text16px>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BentoGrid
