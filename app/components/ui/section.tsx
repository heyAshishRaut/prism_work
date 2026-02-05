import React from "react"

const Section = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={`w-full py-[60px] px-[20px] tablet:py-[80px] tablet:px-[40px] laptop:py-[100px] laptop:px-[40px] flex flex-col items-center`}>
            {children}
        </div>
    )
}

export default Section