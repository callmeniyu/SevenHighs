import CreateBlog from "@/app/components/CreateBlog"
import BreadCrumbs from "../../../components/ui/BreadCrumbs"
import SidebarAdmin from "../../../components/ui/SidebarAdmin"
import { collection, getDocs, query, where } from "firebase/firestore"
import { database } from "@/firebaseConfig"
import { BlogType } from "@/app/types"
const page = async ({ params }: { params: { id: string } }) => {
    const id = (await params).id
    const blogRef = collection(database, "blogs")

    const q = query(blogRef, where("id", "==", id))
    const allBlogsSnapshot = await getDocs(q)
    if (!allBlogsSnapshot) {
        return null
    }
    const blog: BlogType[] = allBlogsSnapshot.docs.map((doc) => {
        return doc.data() as BlogType
    })

    return (
        <div className="flex gap-3 flex-wrap md:flex-nowrap">
            <SidebarAdmin />
            <div className="px-3 w-full">
                <BreadCrumbs />
                <CreateBlog blog={ blog[0]} />
            </div>
        </div>
    )
}

export default page
