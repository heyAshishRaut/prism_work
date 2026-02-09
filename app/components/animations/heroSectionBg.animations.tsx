"use client"
import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas"

export default function RiveBackground() {
    const { RiveComponent } = useRive({
        src: "/animations/newHeroBg.riv",
        autoplay: true,
        layout: new Layout({
            fit: Fit.Fill,
            alignment: Alignment.Center,
        }),
    })

    return (
        <div className="absolute h-full w-full inset-0 z-0 pointer-events-none">
            <RiveComponent className="w-full h-full" />
        </div>
    )
}