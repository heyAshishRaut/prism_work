"use client"

import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas"

const BentoFiveMobile = () => {
    const { RiveComponent } = useRive({
        src: "/animations/bento/bentoFiveMobileV2.riv",
        stateMachines: "State Machine 1",
        autoplay: true,
        layout: new Layout({
            fit: Fit.FitHeight,
            alignment: Alignment.TopCenter,
        }),
    })

    return <RiveComponent className="w-full h-full" />
}

export default BentoFiveMobile