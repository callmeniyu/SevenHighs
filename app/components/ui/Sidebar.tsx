import { IoSearchOutline } from "react-icons/io5"
import { MdBusinessCenter } from "react-icons/md"
import { IoIosCloseCircleOutline } from "react-icons/io"
import { RiComputerLine } from "react-icons/ri"
import { FaShop } from "react-icons/fa6"
import { GoGraph } from "react-icons/go"
import { FaHeart } from "react-icons/fa"
import { RiGovernmentLine } from "react-icons/ri"
import Footer from "../Footer"
const Sidebar = ({ toggleDrawer } : {toggleDrawer: (open: boolean) => void}) => {
    return (
        <div className="w-80 bg-primary-dark h-full flex flex-col justify-between p-4 overflow-scroll no-scrollbar">
            <div className="flex gap-3 justify-between">
                <IoSearchOutline className="text-3xl text-white cursor-pointer " />
                <h1 className="logo-text !text-3xl">SevenHighs</h1>
                <IoIosCloseCircleOutline onClick={() => toggleDrawer(false)} className="text-3xl text-white cursor-pointer " />
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
    )
}

export default Sidebar
