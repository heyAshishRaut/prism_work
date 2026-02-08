"use client"
import { useEffect, useState } from "react"
import LaptopRive from "@/app/components/animations/theProblemElementTabLaptop.animations"
import MobileRive from "@/app/components/animations/theProblemElementMobile.animations"

const ResponsiveProblemElement = () => {
    const [device, setDevice] = useState<"mobile" | "tablet" | "laptop">("mobile")

    useEffect(() => {
        const update = () => {
            const width = window.innerWidth

            if (width < 810) {
                setDevice("mobile")
            } else if (width < 1200) {
                setDevice("tablet")
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
            {(device === "laptop" || device === "tablet") && <LaptopRive device={device} />}
            {device === "mobile" && <MobileRive />}
        </>
    )
}

export default ResponsiveProblemElement