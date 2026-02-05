"use client"
import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas"

export default function RiveBackground() {
    const { RiveComponent } = useRive({
        src: "/animations/heroSectionBgAnimation.riv",
        autoplay: true,
        layout: new Layout({
            fit: Fit.Cover,
            alignment: Alignment.Center,
        }),
    })

    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            <RiveComponent className="w-full h-full bg-black" />
        </div>
    )
}