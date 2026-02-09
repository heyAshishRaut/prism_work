"use client"
import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas"

const MobileRive = () => {
    const { RiveComponent } = useRive({
        src: "/animations/visualLearningMobileV2.riv",
        stateMachines: "State Machine 1",
        autoplay: true,
        layout: new Layout({
            fit: Fit.Contain,
            alignment: Alignment.Center,
        }),
    })

    return (
        <div className="relative w-full h-[550px] overflow-hidden">
            <RiveComponent className="w-full h-full" />
        </div>
    )
}

export default MobileRive