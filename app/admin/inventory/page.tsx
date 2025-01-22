import BreadCrumbs from "../../components/ui/BreadCrumbs"
import SidebarAdmin from "../../components/ui/SidebarAdmin"
import Inventory from "../../components/Inventory"
import { collection, getDocs, orderBy, query } from "firebase/firestore"
import { database } from "@/firebaseConfig"
import { BlogType } from "@/app/types"
const page = async () => {
    const blogsRef = collection(database, "blogs")

    const q = query(blogsRef, orderBy("blogNo", "asc"));
    
    const allBlogsSnapshot = await getDocs(q);
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
                <Inventory allBlogs={allBlogs} />
            </div>
        </div>
    )
}

export default page
