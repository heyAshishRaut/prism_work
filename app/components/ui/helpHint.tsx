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
    PopoverTrigger, PopoverArrow
} from "@/components/ui/popover"


type HelpHintProps = {
    children: React.ReactNode
    content: React.ReactNode
    open?: boolean
    onOpenChange?: (open: boolean) => void
}

const HelpHint = ({ children, content, open, onOpenChange }: HelpHintProps) => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 1199)
        check()
        window.addEventListener("resize", check)
        return () => window.removeEventListener("resize", check)
    }, [])

    if (isMobile) {
        return (
            <Popover open={open} onOpenChange={onOpenChange}>
                <PopoverTrigger asChild>
                    {/* 👇 STABLE WRAPPER */}
                    <button type="button" className="p-0 bg-transparent">
                        {children}
                    </button>
                </PopoverTrigger>

                <PopoverContent
                    side="top"
                    sideOffset={12}
                    collisionPadding={20}
                    className="w-[250px] tablet:w-[312px] bg-[#262626] border border-[#454545] rounded-[12px] p-[12px] tablet:p-[16px]"
                >
                    <PopoverArrow
                        width={16}
                        height={8}
                        className="fill-[#262626] stroke-[#454545]"
                    />
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