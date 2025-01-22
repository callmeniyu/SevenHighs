import { TbLayoutSidebarRightExpand } from "react-icons/tb";
import { IoIosArrowForward } from "react-icons/io";


const BreadCrumbs = () => {
  return (
      <div className="flex gap-2 items-center my-3">
          <TbLayoutSidebarRightExpand className="text-3xl"/>
          <p>|</p>
          <p>Admin</p>
          <p><IoIosArrowForward /></p>
          <p className="font-semibold">Dashboard</p>
    </div>
  )
}

export default BreadCrumbs