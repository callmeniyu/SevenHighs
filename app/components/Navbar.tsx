"use client"
import Image from "next/image"
import { IoMenu } from "react-icons/io5"
import { IoSearchOutline } from "react-icons/io5"
import { useState } from "react"
import Drawer from "@mui/material/Drawer"
import { MdBusinessCenter } from "react-icons/md"
import { IoIosCloseCircleOutline } from "react-icons/io"
import { RiComputerLine } from "react-icons/ri"
import { FaShop } from "react-icons/fa6"
import { GoGraph } from "react-icons/go"
import { FaHeart } from "react-icons/fa"
import { RiGovernmentLine } from "react-icons/ri"
import Footer from "./Footer"

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen)
    }
    console.log("open", open)

    return (
        <div className="navbar bg-primary pt-5 pb-3">
            <div className="flex justify-between pb-5 md:px-10 px-2">
                {/* SIDEBAR */}
                <div className="no-scrollbar">
                    <Drawer open={open} onClose={toggleDrawer(false)}>
                        <div className="w-80 bg-primary-dark h-full flex flex-col justify-between p-4 overflow-scroll no-scrollbar">
                            <div className="flex gap-3 justify-between">
                                <IoSearchOutline className="text-3xl text-white cursor-pointer " />
                                <h1 className="logo-text !text-3xl">SevenHighs</h1>
                                <IoIosCloseCircleOutline
                                    onClick={toggleDrawer(false)}
                                    className="text-3xl text-white cursor-pointer "
                                />
                            </div>
                            <ul className="flex flex-col gap-8 my-10 items-start">
                                <li className="flex gap-2 items-center">
                                    <MdBusinessCenter className="text-3xl text-white cursor-pointer " />
                                    <h4 className="nav-item">Business</h4>
                                </li>
                                <li className="flex gap-2 items-center">
                                    <RiComputerLine className="text-3xl text-white cursor-pointer " />
                                    <h4 className="nav-item">Tech</h4>
                                </li>
                                <li className="flex gap-2 items-center">
                                    <FaShop className="text-3xl text-white cursor-pointer " />
                                    <h4 className="nav-item">Market</h4>
                                </li>
                                <li className="flex gap-2 items-center">
                                    <FaHeart className="text-3xl text-white cursor-pointer " />
                                    <h4 className="nav-item">Life Style</h4>
                                </li>
                                <li className="flex gap-2 items-center">
                                    <GoGraph className="text-3xl text-white cursor-pointer " />
                                    <h4 className="nav-item">Finance</h4>
                                </li>
                                <li className="flex gap-2 items-center">
                                    <RiGovernmentLine className="text-3xl text-white cursor-pointer " />
                                    <h4 className="nav-item">Politics</h4>
                                </li>
                            </ul>
                            <Footer sidebar />
                        </div>
                    </Drawer>
                </div>
                <div className="flex order-1 gap-4 items-center md:-order-1">
                    <IoMenu
                        className="text-4xl text-white cursor-pointer order-1 md:-order-1"
                        onClick={toggleDrawer(true)}
                    />
                    <IoSearchOutline className="text-3xl text-white cursor-pointer " />
                </div>
                <div className="flex gap-2 md:absolute md:ml-[38%] mr-auto">
                    <Image src="/images/logo.png" width={40} height={35} alt="Hero Image" />
                    <h1 className="logo-text !text-3xl ">SevenHighs</h1>
                </div>
                <ul className="hidden md:flex justify-center gap-5">
                    <li className="nav-item ">Newsletter</li>
                    {/* <li className="nav-item">About</li>
                    <li className="nav-item">Contact</li> */}
                </ul>
            </div>
            <div>
                <hr className="w-full" />
                <ul className="flex justify-center gap-5 gap-y-2 py-4 flex-wrap">
                    <li className="nav-item hover:-translate-y-2 transition ease-in-out duration-300 delay-75">Tech</li>
                    <li className="nav-item hover:-translate-y-2 transition ease-in-out duration-300 delay-75">
                        Investment
                    </li>
                    <li className="nav-item hover:-translate-y-2 transition ease-in-out duration-300 delay-75">Finance</li>
                    <li className="nav-item hover:-translate-y-2 transition ease-in-out duration-300 delay-75">Market</li>
                    <li className="nav-item hover:-translate-y-2 transition ease-in-out duration-300 delay-75">Home</li>
                    <li className="nav-item hover:-translate-y-2 transition ease-in-out duration-300 delay-75">Business</li>
                </ul>
                <hr className="w-full" />
            </div>
        </div>
    )
}

export default Navbar
