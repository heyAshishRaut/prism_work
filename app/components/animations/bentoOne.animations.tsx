"use client"
import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas"

const BentoOne = () => {
    const { RiveComponent } = useRive({
        src: "/animations/bento/bentoOne.riv",
        stateMachines: "State Machine 1",
        autoplay: true,
        layout: new Layout({
            fit: Fit.Cover,
            alignment: Alignment.TopCenter,
        }),
    })

    return (
        <RiveComponent className={`w-full h-full`}/>
    )
}

const BentoTwo = () => {
    const { RiveComponent } = useRive({
        src: "/animations/bento/bentoTwo.riv",
        stateMachines: "State Machine 1",
        autoplay: true,
        layout: new Layout({
            fit: Fit.Contain,
            alignment: Alignment.Center,
        }),
    })

    return (
        <RiveComponent className="w-full h-full" />
    )
}

const BentoThree = () => {
    const { RiveComponent } = useRive({
        src: "/animations/bento/bentoThree.riv",
        stateMachines: "State Machine 1",
        autoplay: true,
        layout: new Layout({
            fit: Fit.Contain,
            alignment: Alignment.Center,
        }),
    })

    return (
        <RiveComponent className="w-full h-full" />
    )
}

const BentoFour = () => {
    const { RiveComponent } = useRive({
        src: "/animations/bento/bentoFour.riv",
        stateMachines: "State Machine 1",
        autoplay: true,
        layout: new Layout({
            fit: Fit.Contain,
            alignment: Alignment.TopCenter,
        }),
    })

    return (
        <RiveComponent className="w-full h-full" />
    )
}


export { BentoOne, BentoTwo, BentoThree, BentoFour }
