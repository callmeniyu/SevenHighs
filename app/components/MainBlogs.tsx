import { database } from "@/firebaseConfig"
import { collection, getDocs, orderBy, query, where } from "firebase/firestore"
import Image from "next/image"
import React from "react"
import { BlogType } from "../types"
import Link from "next/link"

const MainBlogs = async () => {
    const blogsRef = collection(database, "blogs")

    const q = query(blogsRef, where("section", "==", "main"), orderBy("blogNo", "desc"))
    const querySnapshot = await getDocs(q)

    if (!querySnapshot) return null

    const mainBlogs = querySnapshot.docs.map((doc) => {
        return doc.data() as BlogType
    })
    

    return (
        <div className="md:flex gap-3 py-5 md:py-6 px-3 md:px-16 2xl:px-20">
            <div className="flex md:flex-col gap-1 p-3 md:w-1/3 bg-primary rounded-lg overflow-x-scroll md:overflow-hidden md:no-scrollbar">
                <div className="flex flex-col gap-2 min-w-60 md:border-none border-r-2 border-r-gray-300">
                    <h4 className="font-semibold text-base text-secondary-dark">{mainBlogs[2]?.category}</h4>
                    <p className="text-white">{mainBlogs[2]?.title}</p>
                </div>
                <div className="flex flex-col gap-2 min-w-60 pl-2 md:pl-0 md:border-none border-r-2 border-r-gray-300">
                    <h4 className="font-semibold text-base text-secondary-dark">{mainBlogs[3]?.category}</h4>
                    <p className="text-white">{mainBlogs[3]?.title}</p>
                </div>
                <div className="flex flex-col gap-2 min-w-60 pl-2 md:pl-0 md:border-none border-r-2 border-r-gray-300">
                    <h4 className="font-semibold text-base text-secondary-dark">{mainBlogs[4]?.category}</h4>
                    <p className="text-white">{mainBlogs[4]?.title}</p>
                </div>
                <div className="flex flex-col gap-2 min-w-60 pl-2 md:pl-0 md:border-none border-r-2 border-r-gray-300">
                    <h4 className="font-semibold text-base text-secondary-dark">{mainBlogs[5]?.category}</h4>
                    <p className="text-white">{mainBlogs[5]?.title}</p>
                </div>
                <div className="flex flex-col gap-2 min-w-60 pl-2 md:pl-0 md:border-none border-r-2 border-r-gray-300">
                    <h4 className="font-semibold text-base text-secondary-dark">{mainBlogs[6]?.category}</h4>
                    <p className="text-white">{mainBlogs[6]?.title}</p>
                </div>
                <div className="flex flex-col gap-2 min-w-60 pl-2 md:pl-0">
                    <h4 className="font-semibold text-base text-secondary-dark">{mainBlogs[7]?.category}</h4>
                    <p className="text-white">{mainBlogs[7]?.title}</p>
                </div>
                <div className="flex flex-col gap-2 min-w-60 pl-2 md:pl-0">
                    <h4 className="font-semibold text-base text-secondary-dark">{mainBlogs[7]?.category}</h4>
                    <p className="text-white">{mainBlogs[7]?.title}</p>
                </div>
                <div className="flex flex-col gap-2 min-w-60 pl-2 md:pl-0">
                    <h4 className="font-semibold text-base text-secondary-dark">{mainBlogs[7]?.category}</h4>
                    <p className="text-white">{mainBlogs[7]?.title}</p>
                </div>
                <div className="flex flex-col gap-2 min-w-60 pl-2 md:pl-0">
                    <h4 className="font-semibold text-base text-secondary-dark">{mainBlogs[7]?.category}</h4>
                    <p className="text-white">{mainBlogs[7]?.title}</p>
                </div>
                <div className="flex flex-col gap-2 min-w-60 pl-2 md:pl-0">
                    <h4 className="font-semibold text-base text-secondary-dark">{mainBlogs[7]?.category}</h4>
                    <p className="text-white">{mainBlogs[7]?.title}</p>
                </div>
            </div>

            <div className="md:w-2/3 md:px-5 xs:mt-3 md:mt-0 xs:w-full">
                <Link href={`/blog/${mainBlogs[0]?.id}`} className="flex flex-col gap-2 group cursor-pointer ">
                    <Image src={mainBlogs[0]?.imgLink} width={750} height={400} alt="Main-Blogs-img" className="max-h-96 w-full rounded-lg" />
                    <h2 className="font-semibold blog-title">{mainBlogs[0]?.title}</h2>
                    <p className="">{mainBlogs[0]?.desc.substring(0,400)} . . .</p>
                </Link>
                <Link href={`/blog/${mainBlogs[1]?.id}`} className="my-3 flex flex-col gap-2 group cursor-pointer">
                    <Image src={mainBlogs[1]?.imgLink} width={750} height={500} alt="Main-Blogs-img" className="max-h-96 rounded-lg w-full"/>
                    <h2 className="font-semibold blog-title">{mainBlogs[1]?.title}</h2>
                    <p className="">{mainBlogs[1]?.desc.substring(0,400)} . . .</p>
                </Link>
            </div>
        </div>
    )
}

export default MainBlogs
