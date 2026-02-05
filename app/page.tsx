
import HeroSection from "@/app/components/section/heroSection"
import Navbar from "@/app/components/uiComponents/navbar"
import TheProblemSection from "@/app/components/section/theProblemSection"
import HowItWorksSection from "@/app/components/section/howItWorksSection"
import WhatYouLearn from "@/app/components/section/whatYouLearn"
import VisualLearningSection from "@/app/components/section/visualLearningSection"
import UpskillTeam from "@/app/components/section/upskillTeam"
import Footer from "@/app/components/section/footer"

export default function Home() {

    return (
        <div className="bg-[#121212] w-full">
            <div className="relative w-full flex flex-col">
                <Navbar/>
                <HeroSection />
                <TheProblemSection/>
                <HowItWorksSection/>
                <WhatYouLearn/>
                <VisualLearningSection/>
                <UpskillTeam/>
                <Footer/>
            </div>
        </div>
    )
}
