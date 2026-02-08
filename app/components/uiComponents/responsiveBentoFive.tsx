"use client"

import { useEffect, useState } from "react"
import BentoFiveMobile from "@/app/components/animations/bentoFiveMobile"
import BentoFiveLaptop from "@/app/components/animations/bentoFiveLaptop"

const ResponsiveBentoFive = () => {
    const [device, setDevice] = useState<"mobile" | "laptop">("mobile")

    useEffect(() => {
        const update = () => {
            const width = window.innerWidth

            if (width < 810) {
                setDevice("mobile")
            } else {
                setDevice("laptop")
            }
        }

        update()
        window.addEventListener("resize", update)
        return () => window.removeEventListener("resize", update)
    }, [])

    return (
        <>
            {device === "laptop" && <BentoFiveLaptop />}
            {device === "mobile" && <BentoFiveMobile />}
        </>
    )
}

export default ResponsiveBentoFive