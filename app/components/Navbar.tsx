"use client"
import Image from "next/image"
import { IoMenu } from "react-icons/io5"
import { useState } from "react"
import Drawer from "@mui/material/Drawer"
import Sidebar from "./ui/Sidebar"

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen)
    }

    return (
        <div className="navbar bg-primary pt-5 pb-3">
            <div className="flex justify-between pb-5 md:px-10 px-2">
                {/* SIDEBAR */}
                <div className="no-scrollbar">
                    <Drawer open={open} onClose={toggleDrawer(false)}>
                        <Sidebar toggleDrawer={setOpen} />
                    </Drawer>
                </div>
                <div className="flex order-1 gap-4 items-center md:-order-1">
                    <IoMenu
                        className="text-4xl text-white cursor-pointer order-1 md:-order-1"
                        onClick={toggleDrawer(true)}
                    />
                </div>
                <div className="flex gap-2 md:absolute md:ml-[38%] mr-auto">
                    <Image src="/images/logo.png" width={40} height={35} alt="Hero Image" />
                    <h1 className="logo-text !text-3xl ">SevenHighs</h1>
                </div>
                <ul className="hidden md:flex justify-center gap-5">
                    <li className="nav-item "><a href="#newsletter">Newsletter</a></li>
                    {/* <li className="nav-item">About</li>
                    <li className="nav-item">Contact</li> */}
                </ul>
            </div>
            <div>
                <hr className="w-full" />
                <ul className="flex justify-center gap-5 gap-y-2 py-4 flex-wrap">
                    <li className="nav-item hover:text-black transition ease-in-out ">Tech</li>
                    <li className="nav-item hover:text-black transition ease-in-out ">
                        Investment
                    </li>
                    <li className="nav-item hover:text-black transition ease-in-out ">Finance</li>
                    <li className="nav-item hover:text-black transition ease-in-out ">Market</li>
                    <li className="nav-item hover:text-black transition ease-in-out ">Home</li>
                    <li className="nav-item hover:text-black transition ease-in-out ">Business</li>
                </ul>
                <hr className="w-full" />
            </div>
        </div>
    )
}

export default Navbar
