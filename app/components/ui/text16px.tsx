import React from "react"

const Text16px = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={`text-[#969696] font-work-sans text-[14px] laptop:text-[16px] leading-[150%] tracking-[-4%]`}>
            {children}
        </div>
    )
}

export default Text16px