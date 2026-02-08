"use client"

import { useEffect, useRef } from "react"
import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas"

const RiveCard = () => {
    const containerRef = useRef<HTMLDivElement | null>(null)

    const { rive, RiveComponent } = useRive({
        src: "/animations/heroElementAnimations.riv",
        stateMachines: "State Machine 1",
        autoplay: true,
        layout: new Layout({
            fit: Fit.Cover, // keep Cover for laptop
            alignment: Alignment.Center,
        }),
    })

    // 🔥 Force resize on viewport / container changes
    useEffect(() => {
        if (!rive || !containerRef.current) return

        const observer = new ResizeObserver(() => {
            rive.resizeDrawingSurfaceToCanvas()
        })

        observer.observe(containerRef.current)

        return () => observer.disconnect()
    }, [rive])

    return (
        <div ref={containerRef} className="absolute inset-0">
            <RiveComponent className="w-full h-full" />
        </div>
    )
}

export default RiveCard