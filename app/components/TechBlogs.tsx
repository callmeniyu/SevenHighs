import React from "react"
import TechBlogCard from "./ui/TechBlogCard"
import { collection, getDocs, orderBy, query, where } from "firebase/firestore"
import { database } from "@/firebaseConfig"
import { BlogType } from "../types"

const TechBlogs = async () => {
            const blogsRef = collection(database, "blogs")
        
            const q = query(blogsRef, where("category", "==", "Tech"), orderBy("blogNo", "asc"))

            const querySnapshot = await getDocs(q)
        
            if (!querySnapshot) return null
        
            const allTechBlogs = querySnapshot.docs.map((doc) => {
                return doc.data() as BlogType
            })
    return (
        <>
            <hr className="border border-black my-6" />
                            <h2 className="section-title pl-3 pb-3">Tech</h2>
            <div className="px-3 flex flex-col gap-3 ">
                <div className="flex flex-col gap-3 md:flex-row">
                    <TechBlogCard img="/images/Tech_blog_img1.png" blog={allTechBlogs[0]}/>
                    <TechBlogCard img="/images/Tech_blog_img2.png" blog={allTechBlogs[1]} inverted />
                    <TechBlogCard img="/images/Tech_blog_img3.png" blog={allTechBlogs[2]} />
                </div>
                <div className="flex flex-col gap-3 md:flex-row">
                    <TechBlogCard img="/images/Tech_blog_img4.png" blog={allTechBlogs[3]} inverted/>
                    <TechBlogCard img="/images/Tech_blog_img5.png" blog={allTechBlogs[4]} />
                    <TechBlogCard img="/images/Tech_blog_img6.png" blog={allTechBlogs[5]} inverted/>
                </div>
            </div>
        </>
    )
}

export default TechBlogs
