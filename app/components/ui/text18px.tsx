import React from "react"

const Text18px = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={`text-[#969696] font-work-sans font-medium text-[15px] tablet:text-[16px] laptop:text-[18px] leading-[150%] tracking-[-4%]`}>
            {children}
        </div>
    )
}

export default Text18px