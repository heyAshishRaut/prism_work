"use client"

import { useEffect, useState } from "react"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
    TooltipArrow,
} from "@/components/ui/tooltip"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

type HelpHintProps = {
    children: React.ReactNode
    content: React.ReactNode
}

const HelpHint = ({ children, content }: HelpHintProps) => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768)
        check()
        window.addEventListener("resize", check)
        return () => window.removeEventListener("resize", check)
    }, [])

    if (isMobile) {
        return (
            <Popover>
                <PopoverTrigger asChild>{children}</PopoverTrigger>
                <PopoverContent
                    side="top"
                    sideOffset={12}
                    collisionPadding={20}
                    className="w-[250px] tablet:w-[312px] bg-[#262626] border border-[#454545] rounded-[12px] p-[12px] tablet:p-[16px]"
                >
                    {content}
                </PopoverContent>
            </Popover>
        )
    }

    return (
        <TooltipProvider delayDuration={0}>
            <Tooltip>
                <TooltipTrigger asChild>{children}</TooltipTrigger>
                <TooltipContent
                    side="top"
                    sideOffset={12}
                    collisionPadding={20}
                    className="w-[250px] tablet:w-[312px] bg-[#262626] border border-[#454545] rounded-[12px] p-[12px] tablet:p-[16px]"
                >
                    <TooltipArrow
                        width={16}
                        height={8}
                        className="fill-[#262626] stroke-[#454545]"
                    />
                    {content}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}

export default HelpHint