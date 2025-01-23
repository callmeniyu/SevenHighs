import { Metadata } from "next"
import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export const metadata: Metadata = {
    title: "Seven Heighs",
    description: "The Ultimate Real Estate Experience",
}

export default function layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}
