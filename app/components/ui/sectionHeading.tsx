import React from "react"

const SectionHeading = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={`text-white font-archivo font-medium text-[28px] tablet:text-[44px] laptop:text-[52px] leading-[120%] tracking-[-2%]`}>
            {children}
        </div>
    )
}

export default SectionHeading