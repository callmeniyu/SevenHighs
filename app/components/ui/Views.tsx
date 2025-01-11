import { IoMdEye } from "react-icons/io";
interface ViewsProps { 
    viewscount: number,
}
const Views:React.FC<ViewsProps> = ({viewscount}) => {
  return (
      <div className={`flex gap-1 items-center ml-auto `}>
          <p><IoMdEye className="text-xl"/></p>
          <p>1.1K views</p>
    </div>
  )
}

export default Views