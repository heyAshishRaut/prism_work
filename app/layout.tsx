import type {Metadata} from "next"
import {Inter, Archivo, Work_Sans} from "next/font/google"
import "./globals.css"

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"]
})

const archivo = Archivo({
    variable: "--font-archivo",
    subsets: ["latin"]
})

const workSans = Work_Sans({
    variable: "--font-work-sans",
    subsets: ["latin"]
})

export const metadata: Metadata = {
    title: "Prism",
    description: `
    See how code works. Understand it. Build with it.
    Prism teaches programming through animated visual explanations that make concepts click — then AI-powered labs help you practice.
    `,
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${inter.variable} ${archivo.variable} ${workSans.variable} antialiased`}
        >
        {children}
        </body>
        </html>
    )
}
