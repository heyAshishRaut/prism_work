import Section from "@/app/components/ui/section"
import Image from "next/image"
import PrismLogo from "@/public/images/prismIcon.png"
import visualLearningIcon from "@/public/images/visualLearning.webp"
import SectionHeading from "@/app/components/ui/sectionHeading"
import Text16px from "@/app/components/ui/text16px"
import VisualLearningRive from "@/app/components/uiComponents/visualLearningAnimatedElement"
import ResponsiveVisualElement from "@/app/components/uiComponents/visualLearningAnimatedElement"

interface VisualLearningSectionItems {
    icon: any
    desc: string
}

const visualLearningSectionItems: VisualLearningSectionItems[] = [
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.0537 3L8.38672 8H14.2787L15.9457 3H10.0537Z" fill="#FFEA00"/>
                <path d="M7.946 3L6.279 8H2V10H22V8H16.387L18.054 3H20.6C20.9152 3 21.2273 3.06208 21.5184 3.18269C21.8096 3.3033 22.0742 3.48008 22.2971 3.70294C22.5199 3.9258 22.6967 4.19038 22.8173 4.48156C22.9379 4.77274 23 5.08483 23 5.4V18.6C23 19.2365 22.7471 19.847 22.2971 20.2971C21.847 20.7471 21.2365 21 20.6 21H3.4C2.76348 21 2.15303 20.7471 1.70294 20.2971C1.25286 19.847 1 19.2365 1 18.6V5.4C1 5.08483 1.06208 4.77274 1.18269 4.48156C1.3033 4.19038 1.48008 3.9258 1.70294 3.70294C2.15303 3.25286 2.76348 3 3.4 3H7.946Z" fill="#FFEA00"/>
            </svg>
        ),
        desc: "Think about the last movie you watched. You probably remember scenes frame-by-frame — maybe even the music."
    },
    {
        icon: (
            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.5625 7.84191e-07H13.6469C12.592 7.84191e-07 11.5607 0.30293 10.6734 0.874415L9.625 1.54688L8.57656 0.874415C7.69014 0.30304 6.65774 -0.00056315 5.60312 7.84191e-07H0.6875C0.307227 7.84191e-07 0 0.307227 0 0.687501L0 12.8906C0 13.2709 0.307227 13.5781 0.6875 13.5781H5.60312C6.65801 13.5781 7.68926 13.8811 8.57656 14.4525L9.53047 15.067C9.5584 15.0842 9.59062 15.0949 9.62285 15.0949C9.65508 15.0949 9.6873 15.0863 9.71523 15.067L10.6691 14.4525C11.5586 13.8811 12.592 13.5781 13.6469 13.5781H18.5625C18.9428 13.5781 19.25 13.2709 19.25 12.8906V0.687501C19.25 0.307227 18.9428 7.84191e-07 18.5625 7.84191e-07ZM7.30469 8.43262C7.30469 8.5207 7.23594 8.59375 7.15215 8.59375H3.16035C3.07656 8.59375 3.00781 8.5207 3.00781 8.43262V7.46582C3.00781 7.37774 3.07656 7.30469 3.16035 7.30469H7.15C7.23379 7.30469 7.30254 7.37774 7.30254 7.46582V8.43262H7.30469ZM7.30469 5.42481C7.30469 5.51289 7.23594 5.58594 7.15215 5.58594H3.16035C3.07656 5.58594 3.00781 5.51289 3.00781 5.42481V4.45801C3.00781 4.36992 3.07656 4.29688 3.16035 4.29688H7.15C7.23379 4.29688 7.30254 4.36992 7.30254 4.45801V5.42481H7.30469ZM16.2422 8.43262C16.2422 8.5207 16.1734 8.59375 16.0896 8.59375H12.0979C12.0141 8.59375 11.9453 8.5207 11.9453 8.43262V7.46582C11.9453 7.37774 12.0141 7.30469 12.0979 7.30469H16.0875C16.1713 7.30469 16.24 7.37774 16.24 7.46582V8.43262H16.2422ZM16.2422 5.42481C16.2422 5.51289 16.1734 5.58594 16.0896 5.58594H12.0979C12.0141 5.58594 11.9453 5.51289 11.9453 5.42481V4.45801C11.9453 4.36992 12.0141 4.29688 12.0979 4.29688H16.0875C16.1713 4.29688 16.24 4.36992 16.24 4.45801V5.42481H16.2422Z" fill="#FF8800"/>
            </svg>
        ),
        desc: "Now think about the last tutorial you read. Chances are, you've already forgotten it."
    },
    {
        icon: (
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.83333 0L11 0V1.83333H1.83333V11H0L0 1.83333C0 0.815833 0.815833 0 1.83333 0ZM5.5 3.66667H14.6667V5.5H5.5V14.6667H3.66667V5.5C3.66667 4.4825 4.4825 3.66667 5.5 3.66667ZM9.16667 7.33333H16.5C17.5175 7.33333 18.3333 8.14917 18.3333 9.16667V16.5C18.3333 17.5175 17.5175 18.3333 16.5 18.3333H9.16667C8.14917 18.3333 7.33333 17.5175 7.33333 16.5V9.16667C7.33333 8.14917 8.14917 7.33333 9.16667 7.33333ZM11 9.16667V16.5L16.5 12.8333L11 9.16667Z" fill="#19FF94"/>
            </svg>
        ),
        desc: "Your brain is wired for visual learning. Static text and diagrams don't create lasting memory.  Animated explanations do."
    }
]

const VisualLearningSection = () => {
    return (
        <Section>
            <div className={`w-full max-w-[450px] tablet:max-w-[900px] laptop:max-w-[1211px] flex flex-col gap-y-[32px] tablet:gap-y-[52px] laptop:gap-y-[72px]`}>
                <div className={`w-full max-w-[450px] tablet:max-w-[550px] laptop:max-w-[650px] flex flex-col text-center tablet:text-start items-center tablet:items-start gap-y-[14px]`}>
                    <div className="relative laptop:w-[315px] tablet:w-[290px] w-[270px] aspect-[315/31]">
                        <Image
                            src={visualLearningIcon}
                            alt=""
                            fill
                            className="object-contain"
                        />
                    </div>

                    <SectionHeading>You remember movies. Now you'll remember code.</SectionHeading>
                </div>

                <div className={``}>
                    <ResponsiveVisualElement/>
                </div>

                <div className={`w-full flex flex-col gap-y-[24px]`}>
                    {
                        visualLearningSectionItems.map((e, index) => (
                            <div key={index} className={`flex flex-col tablet:flex-row items-center text-center tablet:text-start gap-[10px]`}>
                                <div className={`h-[22px] w-[22px] flex items-center justify-center`}>{e.icon}</div>
                                <Text16px>{e.desc}</Text16px>
                            </div>
                        ))
                    }
                    <div className={`flex items-center justify-center tablet:justify-start gap-x-[10px]`}>
                        <Image src={PrismLogo} alt={""} height={27} width={22} />
                        <div className={`font-work-sans font-medium text-[14px] tablet:text-[15px] laptop:text-[17px] text-white leading-[150%] tracking-[-2%]`}>That's why Prism exists.</div>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default VisualLearningSection