import { IoIosPerson } from "react-icons/io"
import { FiPlusCircle } from "react-icons/fi"
import { CiBoxList } from "react-icons/ci"
import Link from "next/link"
const SidebarAdmin = () => {
  return (
    <div className="flex w-full bg-primary-dark  md:w-1/4 p-3">
    <div className="flex md:flex-col gap-3 justify-between md:justify-start text-white w-full">
        <div className="flex gap-2 items-center">
            <IoIosPerson className="text-5xl" />
            <div>
                <h5 className="font-semibold">Amal Jasim</h5>
                <p className="text-xs text-secondary-dark">Admin</p>
            </div>
        </div>

        <div className="flex flex-col gap-3 mt-3 ">
            <h6 className="text-secondary-dark font-semibold">Blog</h6>
            <Link href="/admin/create" className="flex gap-2 items-center cursor-pointer" >
                <FiPlusCircle className="text-xl"/>
                <p className="font-semibold">Create Blog</p>
            </Link>
            <Link href="/admin/inventory" className="flex gap-2 items-center cursor-pointer">
                <CiBoxList className="text-xl"/>
                <p className="font-semibold">Inventory</p>
            </Link>
        </div>
    </div>
</div>
  )
}

export default SidebarAdmin