import Section from "@/app/components/ui/section"
import Image from "next/image"
import theProblemIcon from "@/public/images/theProblemIcon.webp"
import SectionHeading from "@/app/components/ui/sectionHeading"
import Text16px from "@/app/components/ui/text16px"
import ResponsiveProblemElement from "@/app/components/uiComponents/theProblemAnimatedElement";

interface TheProblemSectionItems {
    icon: any
    desc: string
}

const theProblemSectionItems: TheProblemSectionItems[] = [
    {
        icon: (
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.52083 0C1.85227 0 1.21108 0.265587 0.738335 0.738335C0.265587 1.21108 0 1.85227 0 2.52083V9.39583C0 10.0644 0.265587 10.7056 0.738335 11.1783C1.21108 11.6511 1.85227 11.9167 2.52083 11.9167H10.3125C10.9811 11.9167 11.6223 11.6511 12.095 11.1783C12.5677 10.7056 12.8333 10.0644 12.8333 9.39583V7.93467L15.9674 10.7259C16.7053 11.3832 17.875 10.8588 17.875 9.86975V1.70958C17.875 0.719583 16.7053 0.196167 15.9674 0.853417L12.8333 3.64467V2.52083C12.8333 1.85227 12.5677 1.21108 12.095 0.738335C11.6223 0.265587 10.9811 0 10.3125 0H2.52083Z" fill="#FFEA00"/>
            </svg>
        ),
        desc: "You watched hours of videos. You read documentation. You copied code you didn't understand."
    },
    {
        icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.9375 0C4.00168 0 0 4.00168 0 8.9375C0 13.8656 4.00984 17.875 8.9375 17.875C13.8729 17.875 17.875 13.8729 17.875 8.9375C17.875 4.00941 13.8656 0 8.9375 0ZM13.5781 10.3125H8.42188C8.37629 10.3125 8.33257 10.2944 8.30034 10.2622C8.26811 10.2299 8.25 10.1862 8.25 10.1406V2.92188C8.25 2.87629 8.26811 2.83257 8.30034 2.80034C8.33257 2.76811 8.37629 2.75 8.42188 2.75H9.45312C9.49871 2.75 9.54243 2.76811 9.57466 2.80034C9.60689 2.83257 9.625 2.87629 9.625 2.92188V8.9375H13.5781C13.6237 8.9375 13.6674 8.95561 13.6997 8.98784C13.7319 9.02007 13.75 9.06379 13.75 9.10938V10.1406C13.75 10.1862 13.7319 10.2299 13.6997 10.2622C13.6674 10.2944 13.6237 10.3125 13.5781 10.3125Z" fill="#FF8800"/>
            </svg>
        ),
        desc: "And three months later? You forgot most of it."
    },
    {
        icon: (
            <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.6 0V2.2H0V0H17.6ZM11 4.4V6.6H0V4.4H11ZM17.6 4.4V6.6H13.2V4.4H17.6ZM6.6 8.8V11H0V8.8H6.6ZM17.6 8.8V11H8.8V8.8H17.6ZM13.2 13.2V15.4H0V13.2H13.2Z" fill="#6633FF"/>
            </svg>
        ),
        desc: "That's because your brain doesn't learn from walls of text. It learns from *seeing* how things work."
    },
    {
        icon: (
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.495213 2.0625C0.495213 1.51549 0.712512 0.990886 1.09931 0.604092C1.4861 0.217298 2.0107 0 2.55771 0H4.8558C5.40281 0 5.92741 0.217298 6.3142 0.604092C6.701 0.990886 6.9183 1.51549 6.9183 2.0625V4.36058C6.9183 4.90759 6.701 5.4322 6.3142 5.81899C5.92741 6.20578 5.40281 6.42308 4.8558 6.42308H4.39288V9.82117C4.43566 9.85233 4.4766 9.88778 4.51571 9.9275L7.07321 12.485C7.11294 12.5247 7.14869 12.566 7.18046 12.6087H10.585V12.1504C10.585 11.8796 10.6383 11.6114 10.742 11.3611C10.8456 11.1109 10.9975 10.8835 11.1891 10.692C11.3806 10.5005 11.6079 10.3486 11.8582 10.2449C12.1084 10.1413 12.3766 10.0879 12.6475 10.0879H14.9336C15.4806 10.0879 16.0052 10.3052 16.392 10.692C16.7788 11.0788 16.9961 11.6034 16.9961 12.1504V14.4457C16.9961 14.9928 16.7788 15.5174 16.392 15.9042C16.0052 16.291 15.4806 16.5082 14.9336 16.5082H12.6475C12.1005 16.5082 11.5759 16.291 11.1891 15.9042C10.8023 15.5174 10.585 14.9928 10.585 14.4457V13.9837H7.17955C7.14806 14.0274 7.11278 14.0682 7.07413 14.1057L4.51571 16.665C4.40931 16.7714 4.28298 16.8559 4.14394 16.9135C4.0049 16.9711 3.85588 17.0007 3.70538 17.0007C3.55488 17.0007 3.40586 16.9711 3.26682 16.9135C3.12778 16.8559 3.00145 16.7714 2.89505 16.665L0.335713 14.1066C0.229281 14.0002 0.144853 13.8739 0.0872501 13.7348C0.0296477 13.5958 0 13.4467 0 13.2962C0 13.1458 0.0296477 12.9967 0.0872501 12.8577C0.144853 12.7187 0.229281 12.5923 0.335713 12.4859L2.89505 9.92658C2.93276 9.88757 2.97387 9.85199 3.01788 9.82025V6.42308H2.55771C2.0107 6.42308 1.4861 6.20578 1.09931 5.81899C0.712512 5.4322 0.495213 4.90759 0.495213 4.36058V2.0625Z" fill="#19FF94"/>
            </svg>
        ),
        desc: "Prism teaches code the way your brain actually learns — visually."
    },
]

const TheProblemSection = () => {
    return (
        <Section>
            <div className={`w-full max-w-[450px] tablet:max-w-[900px] laptop:max-w-[1046px] flex flex-col gap-y-[32px] tablet:gap-y-[52px] laptop:gap-y-[72px]`}>
                <div className={`w-full max-w-[450px] tablet:max-w-[650px] laptop:max-w-[754px] flex flex-col text-center tablet:text-start items-center tablet:items-start gap-y-[14px]`}>
                    <div className="relative laptop:w-[215px] tablet:w-[200px] w-[205px] aspect-[215/31]">
                        <Image
                            src={theProblemIcon}
                            alt=""
                            fill
                            className="object-contain"
                        />
                    </div>
                    <SectionHeading>You've tried to learn code before. It didn't stick.</SectionHeading>
                </div>

                <div className={`w-full flex justify-center`}>
                    <ResponsiveProblemElement/>
                </div>

                <div className={`w-full flex flex-col gap-y-[18px] tablet:gap-y-[24px]`}>
                    {
                        theProblemSectionItems.map((e, index) => (
                            <div key={index} className={`flex flex-row items-center text-start gap-[10px]`}>
                                <div className={`h-[22px] w-[22px] flex items-center justify-center`}>{e.icon}</div>
                                <Text16px>{e.desc}</Text16px>
                            </div>
                        ))
                    }
                </div>
            </div>
        </Section>
    )
}

export default TheProblemSection