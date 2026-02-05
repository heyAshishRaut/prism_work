import Text16px from "@/app/components/ui/text16px"

const UpskillTeam = () => {
    return (
        <div className={`w-full flex justify-center px-[20px] tablet:px-[40px] pt-[80px] tablet:pt-[100px] laptop:pt-[120px] pb-[20px] tablet:pb-[30px] laptop:pb-[40px]`}>
            <div className={`bg-[#1a1a1a] shadow-[inset_0px_1px_1px_rgba(255,255,255,0.2)] w-full max-w-[450px] tablet:max-w-[800px] laptop:max-w-[1040px] rounded-[24px] p-[30px] laptop:p-[40px]`}>
                <div className={`flex flex-col items-center gap-y-[30px] tablet:gap-y-0 tablet:flex-row justify-between tablet:items-end`}>
                    <div className={`flex flex-col gap-y-[12px] w-full max-w-[500px] laptop:max-w-[601px]`}>
                        <div className={`text-white text-center tablet:text-start font-archivo font-medium text-[22px] tablet:text-[28px] laptop:text-[36px] leading-[120%] tracking-[-2%]`}>Upskill your engineering team.</div>
                        <div className={`font-work-sans text-center tablet:text-start text-[14px] tablet:text-[15px] text-[#969696] leading-[125%] tracking-[-4%]`}>Prism for Teams gives your developers the skills they need — with learning analytics that show real competency, not just completion.</div>
                    </div>

                    <div className={`cursor-pointer hover:bg-white/5 bg-[radial-gradient(circle_at_75%_20%,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_70%)] px-[16px] tablet:px-[20px] py-[8px] tablet:py-[10px] rounded-full border border-white/8`}>
                        <div className={`font-work-sans text-[14px] tablet:text-[15px] laptop:text-[16px] font-medium leading-[125%] tracking-[-4%]`}><span className={`text-white`}>Learn More</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpskillTeam