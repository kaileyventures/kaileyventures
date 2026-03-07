import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const manrope = Manrope({
subsets: ['latin'],
weight: ['300','400','500','700','800'],
display: 'swap',
})

export const metadata: Metadata = {
title: 'Kailey Ventures | Parent Company of The Disposable Depot',
description: 'Curating the next generation of modern enterprises.',
}

export default function RootLayout({
children,
}: {
children: React.ReactNode
}) {
return ( <html lang="en" className="scroll-smooth">
<body className={`${manrope.className} selection:bg-[#0a0a0a] selection:text-white flex flex-col min-h-screen bg-white`}> <Navbar />
{children} <Footer /> </body> </html>
)
}
