"use client"
import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas"

const LaptopRive = ({ device }: { device: "laptop" | "tablet" }) => {
    const { RiveComponent } = useRive({
        src: "/animations/problemSectionMobile.riv",
        autoplay: true,
        stateMachines: "State Machine 1",
        layout: new Layout({
            fit: Fit.FitWidth,
            alignment: Alignment.Center,
        }),
    })

    return (
        <div
            className="
            relative mx-auto overflow-hidden
            h-[236px]
            w-full
            max-w-[450px]
            tablet:max-w-[900px]
            laptop:max-w-[1040px]
            transition-all duration-300"
        >
            <RiveComponent className="w-full h-full" />
        </div>


    )
}

export default LaptopRive