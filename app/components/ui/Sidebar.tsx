import { GiPayMoney } from "react-icons/gi"
import { IoIosCloseCircleOutline } from "react-icons/io"
import { GoLaw } from "react-icons/go"
import { MdOutlineHourglassTop } from "react-icons/md";
import { GoGraph } from "react-icons/go"
import { FaIndianRupeeSign } from "react-icons/fa6";
import { RiGovernmentLine } from "react-icons/ri"
import Footer from "../Footer"
import Link from "next/link"
const Sidebar = ({ toggleDrawer }: { toggleDrawer: (open: boolean) => void }) => {
    return (
        <div className="w-80 bg-primary-dark h-full flex flex-col justify-between p-4 overflow-scroll no-scrollbar">
            <div className="flex gap-3 justify-between">
                <Link href={"/"} className="logo-text !text-3xl" onClick={() => toggleDrawer(false)}>
                    SevenHighs
                </Link>
                <IoIosCloseCircleOutline
                    onClick={() => toggleDrawer(false)}
                    className="text-3xl text-white cursor-pointer "
                />
            </div>
            <ul className="flex flex-col gap-8 my-10 items-start">
                <li className="flex gap-2 items-center ">
                    <GiPayMoney className="text-3xl text-white cursor-pointer " />
                    <h4 className="nav-item">Investment</h4>
                </li>
                <li className="flex gap-2 items-center ">
                    <GoLaw className="text-3xl text-white cursor-pointer " />
                    <h4 className="nav-item">Legal & Finance</h4>
                </li>
                <li className="flex gap-2 items-center ">
                    <MdOutlineHourglassTop className="text-3xl text-white cursor-pointer " />
                    <h4 className="nav-item">Upcoming Projects</h4>
                </li>
                <li className="flex gap-2 items-center ">
                    <FaIndianRupeeSign className="text-3xl text-white cursor-pointer " />
                    <h4 className="nav-item">Make in India</h4>
                </li>
            </ul>
            <Footer sidebar />
        </div>
    )
}

export default Sidebar
