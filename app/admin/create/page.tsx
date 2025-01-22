import CreateBlog from "@/app/components/CreateBlog"
import BreadCrumbs from "../../components/ui/BreadCrumbs"
import SidebarAdmin from "../../components/ui/SidebarAdmin"
import { collection, getDocs } from "firebase/firestore"
import { database } from "@/firebaseConfig"
import { BlogType } from "@/app/types"
const page = async () => {
        const allBlogsSnapshot = await getDocs(collection(database, "blogs"))
        if (!allBlogsSnapshot) {
            return null
        }
        const allBlogs : BlogType[] = allBlogsSnapshot.docs.map((doc) => {
            return  doc.data() as BlogType;
        })
    return (
        <div className="flex gap-3 flex-wrap md:flex-nowrap">
            <SidebarAdmin />
            <div className="px-3 w-full">
                <BreadCrumbs />
                <CreateBlog />
            </div>
        </div>
    )
}

export default page
