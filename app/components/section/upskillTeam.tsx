import mask from "@/public/images/maskBento05.png"

const UpskillTeam = () => {
    return (
        <div className={`overflow-hidden w-full flex justify-center px-[20px] tablet:px-[40px] pt-[80px] tablet:pt-[100px] laptop:pt-[120px] pb-[20px] tablet:pb-[30px] laptop:pb-[40px]`}>
            <div className={`bg-[#1a1a1a] overflow-hidden relative shadow-[inset_0px_1px_1px_rgba(255,255,255,0.2)] w-full max-w-[450px] tablet:max-w-[800px] laptop:max-w-[1040px] rounded-[24px] p-[30px] laptop:p-[40px]`}>

                <div className="z-5 absolute left-0 bottom-0 w-full h-[100%] bg-gradient-to-b from-transparent to-[#1a1a1a]" />
                <div style={{ backgroundImage: `url(${mask.src})` }} className={`bg-cover  absolute inset-0 h-full w-full`}></div>
                <div className={`relative z-20 flex flex-col items-center gap-y-[30px] tablet:gap-y-0 tablet:flex-row justify-between tablet:items-end`}>
                    <div className={`z-10 flex flex-col gap-y-[12px] w-full max-w-[500px] laptop:max-w-[601px]`}>
                        <div className={`text-white text-center tablet:text-start font-archivo font-medium text-[22px] tablet:text-[28px] laptop:text-[36px] leading-[120%] tracking-[-2%]`}>Upskill your engineering team.</div>
                        <div className={`font-work-sans text-center tablet:text-start text-[14px] tablet:text-[15px] text-[#969696] leading-[125%] tracking-[-4%]`}>Prism for Teams gives your developers the skills they need — with learning analytics that show real competency, not just completion.</div>
                    </div>

                    <div className={`text-white hover:text-white/70 relative cursor-pointer bg-[linear-gradient(300deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%),linear-gradient(#242428,#242428)] overflow-hidden hover:bg-[linear-gradient(300deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.1)_100%),linear-gradient(#000000,#00000050)] px-[16px] tablet:px-[20px] py-[8px] tablet:py-[10px] rounded-full border border-white/8`}>
                        <div className={`z-10 font-work-sans text-[14px] tablet:text-[15px] laptop:text-[16px] font-medium leading-[125%] tracking-[-4%]`}><span>Learn More</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpskillTeam