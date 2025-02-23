import Image from "next/image"
import Link from "next/link"
import { FaFacebook } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"

type FooterType = {
    sidebar: boolean
}
const Footer = ({sidebar}: FooterType) => {
    return (
        <div className="">
            <hr className={`border border-black my-6 ${sidebar && "border-white"}`} />
            <div className="flex flex-col md:flex-row gap-5 items-center md:justify-between py-3 px-3 md:px-8">
                <Link href={"/"} className={`flex gap-2 ${sidebar && "hidden"}`}>
                    <Image src="/images/logo.png" width={40} height={35} alt="Hero Image" />
                    <h1 className="logo-text !text-3xl !text-primary">SevenHighs</h1>
                </Link>

                <div className={`flex gap-10 md:gap-4 ${sidebar && "md:justify-between md:gap-6 text-white"}`}>
                    <FaFacebook className="text-3xl"/>
                    <FaInstagram className="text-3xl"/>
                    <FaTwitter className="text-3xl"/>
                    <FaLinkedin className="text-3xl"/>
                </div>
            </div>
            <hr className={`border border-black my-6 ${sidebar && "border-white"}`} />
            <p className="text-sm text-secondary-dark text-center mt-3">* Copyright © 2025 sevenhighs Inc. All rights reserved. Registration on or use of this site constitutes acceptance of our Terms of Service and Privacy Policy.</p>
        </div>
    )
}

export default Footer
