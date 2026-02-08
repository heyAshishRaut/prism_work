import Logo from "@/public/images/prismLogoNavbar.webp"
import Image from "next/image"
import Text16px from "@/app/components/ui/text16px"
import mask from "@/public/images/footermask.png"
import bg from "@/public/images/footerbg.png"
import icon from "@/public/images/prismIconFooter.png"
import ParticlesBackground from "@/app/components/ui/paticleBg"

const footerItems = [
    {
        title: "Product",
        list: [
            {
                name: "Home"
            },
            {
                name: "Product"
            },
            {
                name: "Courses"
            },
            {
                name: "Articles"
            }
        ]
    },
    {
        title: "Resources",
        list: [
            {
                name: "Help Center"
            },
            {
                name: "T&Cs"
            },
            {
                name: "Privacy Policy"
            },
            {
                name: "Terms of Service"
            }
        ]
    }
]

const Footer = () => {
    return (
        <div className={`w-full flex flex-col items-center`}>
            <div className={`relative w-full overflow-hidden`}>
                <div style={{ backgroundImage: `url(${mask.src})` }} className={`z-0 absolute bg-cover bottom-0 w-full h-[364px]`}/>
                <div
                    style={{ backgroundImage: `url(${bg.src})` }}
                    className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 w-[110vw] h-[364px] bg-cover bg-center [mask-image:linear-gradient(to_bottom,transparent_0%,black_30px,black_100%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_30px,black_100%)]"
                />

                <ParticlesBackground/>

                <div className={`h-full w-full pt-[100px] tablet:pt-[130px] laptop:pt-[152px]`}>
                    <div className={`px-[20px] tablet:px-[40px] h-full w-full flex flex-col items-center justify-end  gap-y-[64px]`}>
                        <div className={`w-full max-w-[450px] tablet:max-w-[650px] laptop:max-w-[800px] flex flex-col items-center gap-y-[24px]`}>
                            <div className={`w-full flex flex-col items-center gap-y-[4px] text-center`}>
                                <div className={`w-full text-white font-archivo text-[32px] tablet:text-[42px] laptop:text-[52px] leading-[110%] tracking-[-2%]`}>Ready to see code differently?</div>
                                <div className={`w-full text-[#969696] tablet:max-w-[631px] font-work-sans text-[15px] tablet:text-[16px] leading-[150%] tracking-[-4%]`}>Prism teaches programming through animated visual explanations</div>
                            </div>

                            <div className={`cursor-pointer pl-[16px] py-[4px] pr-[4px] flex items-center gap-x-[10px] rounded-full bg-white hover:bg-white/85 transition-all ease-in duration-75 text-black font-work-sans font-medium text-[14px] tablet:text-[15px] laptop:text-[16px] leading-[125%] tracking-[-4%]`}>
                                <div>Start Learning Free</div>
                                <div>
                                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="35" height="35" rx="17.5" fill="black"/>
                                        <rect x="0.5" y="0.5" width="35" height="35" rx="17.5" stroke="url(#paint0_linear_979_11768)"/>
                                        <path d="M15.3333 25.3332H14.6667V24.6665H14V23.9998H13.3333V23.3332H14V22.6665H14.6667V21.9998H15.3333V21.3332H16V20.6665H16.6667V19.9998H17.3333V19.3332H18V18.6665H18.6667V17.3332H18V16.6665H17.3333V15.9998H16.6667V15.3332H16V14.6665H15.3333V13.9998H14.6667V13.3332H14V12.6665H13.3333V11.9998H14V11.3332H14.6667V10.6665H15.3333V11.3332H16V11.9998H16.6667V12.6665H17.3333V13.3332H18V13.9998H18.6667V14.6665H19.3333V15.3332H20V15.9998H20.6667V16.6665H21.3333V17.3332H22V18.6665H21.3333V19.3332H20.6667V19.9998H20V20.6665H19.3333V21.3332H18.6667V21.9998H18V22.6665H17.3333V23.3332H16.6667V23.9998H16V24.6665H15.3333V25.3332Z" fill="white"/>
                                        <defs>
                                            <linearGradient id="paint0_linear_979_11768" x1="-6.40323e-08" y1="10.08" x2="37.9269" y2="13.0108" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#6633FF"/>
                                                <stop offset="0.206731" stop-color="#FF1919"/>
                                                <stop offset="0.413462" stop-color="#FF8800"/>
                                                <stop offset="0.615385" stop-color="#FFEA00"/>
                                                <stop offset="0.793269" stop-color="#19FF94"/>
                                                <stop offset="1" stop-color="#00D5FF"/>
                                            </linearGradient>
                                        </defs>
                                    </svg>

                                </div>
                            </div>
                        </div>

                        <div className="relative z-30 w-[260px] h-[210px] tablet:w-[360px] tablet:h-[290px] laptop:w-[483px] laptop:h-[390px]">
                            <Image
                                src={icon}
                                alt=""
                                width={483}
                                height={390}
                                className="absolute -bottom-4 w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className={`px-[20px] tablet:px-[40px] w-full py-[40px] tablet:py-[50px] laptop:py-[60px] max-w-[450px] tablet:max-w-[900px] laptop:max-w-[1192px]`}>
                <div className={`w-full flex flex-col tablet:flex-row items-center gap-y-[40px] tablet:justify-between`}>
                    <div className={`w-full max-w-[350px] flex flex-col`}>
                        <div className={`flex flex-col items-center tablet:items-start gap-y-[40px]`}>
                            <Image
                                src={Logo}
                                alt="Prism logo"
                                priority
                                className="w-[150px] laptop:w-[192px] h-auto"/>

                            <div className={`flex gap-x-[15px] tablet:gap-x-[20px]`}>
                                <div className={`cursor-pointer hover:bg-white/10 h-[45px] tablet:h-[50px] w-[45px] tablet:w-[50px] flex items-center justify-center rounded-[11px] bg-white/7 border border-white/10`}>
                                    <svg width="11" height="21" viewBox="0 0 11 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.29167 11.9792H9.89583L10.9375 7.8125H7.29167V5.72917C7.29167 4.65625 7.29167 3.64583 9.375 3.64583H10.9375V0.145833C10.5979 0.101042 9.31562 0 7.96146 0C5.13333 0 3.125 1.72604 3.125 4.89583V7.8125H0V11.9792H3.125V20.8333H7.29167V11.9792Z" fill="white"/>
                                    </svg>
                                </div>

                                <div className={`cursor-pointer hover:bg-white/10 h-[45px] tablet:h-[50px] w-[45px] tablet:w-[50px] flex items-center justify-center rounded-[11px] bg-white/7 border border-white/10`}>
                                    <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.138 7.63889L18.8528 0H15.8472L10.7333 5.72222L6.3213 0.0555555L0 0L7.38889 9.69444L0.476852 17.8611H3.48426L8.99167 11.75L13.825 18L20.062 18.0556L12.138 7.63889ZM3.48333 1.72222H5.39444L16.4083 16.1944H14.6389L3.48333 1.72222Z" fill="white"/>
                                    </svg>
                                </div>

                                <div className={`cursor-pointer hover:bg-white/10 h-[45px] tablet:h-[50px] w-[45px] tablet:w-[50px] flex items-center justify-center rounded-[11px] bg-white/7 border border-white/10`}>
                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.4881 0C12.66 0.003125 13.2548 0.009375 13.7683 0.0239583L13.9704 0.03125C14.2037 0.0395833 14.4339 0.0499999 14.7121 0.0624999C15.8204 0.114583 16.5766 0.289583 17.2402 0.546875C17.9277 0.811458 18.5068 1.16979 19.086 1.74792C19.6159 2.26847 20.0258 2.89841 20.2871 3.59375C20.5443 4.25729 20.7193 5.01354 20.7714 6.12292C20.7839 6.4 20.7943 6.63021 20.8027 6.86458L20.8089 7.06667C20.8246 7.57917 20.8308 8.17396 20.8329 9.34583L20.8339 10.1229V11.4875C20.8365 12.2473 20.8285 13.0071 20.81 13.7667L20.8037 13.9687C20.7954 14.2031 20.785 14.4333 20.7725 14.7104C20.7204 15.8198 20.5433 16.575 20.2871 17.2396C20.0258 17.9349 19.6159 18.5649 19.086 19.0854C18.5655 19.6153 17.9355 20.0252 17.2402 20.2865C16.5766 20.5437 15.8204 20.7188 14.7121 20.7708L13.9704 20.8021L13.7683 20.8083C13.2548 20.8229 12.66 20.8302 11.4881 20.8323L10.711 20.8333H9.34747C8.58732 20.836 7.82718 20.828 7.06726 20.8094L6.86518 20.8031C6.6179 20.7938 6.37067 20.783 6.12351 20.7708C5.01518 20.7188 4.25893 20.5437 3.59434 20.2865C2.89937 20.0251 2.2698 19.6152 1.74955 19.0854C1.21929 18.565 0.809039 17.935 0.547468 17.2396C0.290176 16.576 0.115176 15.8198 0.0630924 14.7104L0.0318425 13.9687L0.0266343 13.7667C0.00743222 13.0071 -0.00124927 12.2473 0.000592497 11.4875V9.34583C-0.00229073 8.58604 0.00534897 7.82625 0.0235092 7.06667L0.0308009 6.86458C0.0391342 6.63021 0.0495508 6.4 0.0620508 6.12292C0.114134 5.01354 0.289134 4.25833 0.546426 3.59375C0.808607 2.89812 1.21958 2.26816 1.75059 1.74792C2.27054 1.21828 2.89975 0.80841 3.59434 0.546875C4.25893 0.289583 5.01413 0.114583 6.12351 0.0624999C6.40059 0.0499999 6.63184 0.0395833 6.86518 0.03125L7.06726 0.0249999C7.82684 0.0064924 8.58663 -0.00149448 9.34643 0.00104159L11.4881 0ZM10.4173 5.20833C9.03592 5.20833 7.71116 5.75707 6.73441 6.73382C5.75766 7.71057 5.20893 9.03533 5.20893 10.4167C5.20893 11.798 5.75766 13.1228 6.73441 14.0995C7.71116 15.0763 9.03592 15.625 10.4173 15.625C11.7986 15.625 13.1234 15.0763 14.1001 14.0995C15.0769 13.1228 15.6256 11.798 15.6256 10.4167C15.6256 9.03533 15.0769 7.71057 14.1001 6.73382C13.1234 5.75707 11.7986 5.20833 10.4173 5.20833ZM10.4173 7.29167C10.8276 7.2916 11.234 7.37236 11.6132 7.52934C11.9924 7.68633 12.3369 7.91645 12.6271 8.20659C12.9174 8.49672 13.1476 8.84118 13.3047 9.2203C13.4618 9.59942 13.5427 10.0058 13.5428 10.4161C13.5428 10.8265 13.4621 11.2329 13.3051 11.6121C13.1481 11.9912 12.918 12.3358 12.6279 12.626C12.3377 12.9162 11.9933 13.1465 11.6141 13.3036C11.235 13.4607 10.8287 13.5416 10.4183 13.5417C9.5895 13.5417 8.79464 13.2124 8.20859 12.6264C7.62254 12.0403 7.2933 11.2455 7.2933 10.4167C7.2933 9.58786 7.62254 8.79301 8.20859 8.20696C8.79464 7.62091 9.5895 7.29167 10.4183 7.29167M15.8871 3.64583C15.5417 3.64583 15.2105 3.78302 14.9663 4.0272C14.7222 4.27139 14.585 4.60258 14.585 4.94792C14.585 5.29325 14.7222 5.62444 14.9663 5.86863C15.2105 6.11282 15.5417 6.25 15.8871 6.25C16.2324 6.25 16.5636 6.11282 16.8078 5.86863C17.052 5.62444 17.1891 5.29325 17.1891 4.94792C17.1891 4.60258 17.052 4.27139 16.8078 4.0272C16.5636 3.78302 16.2324 3.64583 15.8871 3.64583Z" fill="white"/>
                                    </svg>
                                </div>

                                <div className={`cursor-pointer hover:bg-white/10 h-[45px] tablet:h-[50px] w-[45px] tablet:w-[50px] flex items-center justify-center rounded-[11px] bg-white/7 border border-white/10`}>
                                    <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.33333 10.4167L13.7396 7.29167L8.33333 4.16667V10.4167ZM20.375 2.26042C20.5104 2.75 20.6042 3.40625 20.6667 4.23958C20.7396 5.07292 20.7708 5.79167 20.7708 6.41667L20.8333 7.29167C20.8333 9.57292 20.6667 11.25 20.375 12.3229C20.1146 13.2604 19.5104 13.8646 18.5729 14.125C18.0833 14.2604 17.1875 14.3542 15.8125 14.4167C14.4583 14.4896 13.2188 14.5208 12.0729 14.5208L10.4167 14.5833C6.05208 14.5833 3.33333 14.4167 2.26042 14.125C1.32292 13.8646 0.71875 13.2604 0.458333 12.3229C0.322917 11.8333 0.229167 11.1771 0.166667 10.3438C0.0937501 9.51042 0.0624999 8.79167 0.0624999 8.16667L0 7.29167C0 5.01042 0.166667 3.33333 0.458333 2.26042C0.71875 1.32292 1.32292 0.71875 2.26042 0.458333C2.75 0.322917 3.64583 0.229166 5.02083 0.166667C6.375 0.0937498 7.61458 0.0624999 8.76042 0.0624999L10.4167 0C14.7813 0 17.5 0.166667 18.5729 0.458333C19.5104 0.71875 20.1146 1.32292 20.375 2.26042Z" fill="white"/>
                                    </svg>
                                </div>
                            </div>

                            <div className={`text-center tablet:text-start`}>
                                <div className={`text-[#969696] font-work-sans text-[14px] laptop:text-[16px] leading-[150%] tracking-[-4%]`}>Copyright © 2025 Prism. All Rights Reserved</div>
                            </div>
                        </div>
                    </div>

                    <div className={`w-full max-w-[427px]`}>
                        <div className={`w-full flex justify-between`}>
                            {
                                footerItems.map((e, index) => (
                                    <div key={index} className={`text-[15px] tablet:text-[16px] flex flex-col items-start gap-y-[20px]`}>
                                        <div className={`font-work-sans font-medium leading-[135%] tracking-[-2%] text-white`}>{e.title}</div>
                                        {
                                            e.list.map((li, i) => (
                                                <a href="#" key={i} className={`cursor-pointer text-[#969696] hover:text-white/80 font-work-sans leading-[135%] tracking-[-2%]`}>{li.name}</a>
                                            ))
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer