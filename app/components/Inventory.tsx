"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { BlogType } from "../types"
import AdminSearch from "./ui/AdminSearch"
import { parseDate } from "../lib/utils"
import { collection, getDocs, orderBy, query } from "firebase/firestore"
import { database } from "@/firebaseConfig"

const Inventory = () => {
    const [blogs, setBlogs] = useState<BlogType[]>([])
    const [searchedBlogs, setSearchedBlogs] = useState<BlogType[]>([])
    const [sortBy, setSortBy] = useState<string>("blogNo")

    useEffect(() => {
        const fetchBlogs = async () => {
            const blogsRef = collection(database, "blogs")
            const q = query(blogsRef, orderBy("blogNo", "asc"))
            const allBlogsSnapshot = await getDocs(q)
            const blogsData: BlogType[] = allBlogsSnapshot.docs.map((doc) => doc.data() as BlogType)
            setBlogs(blogsData)
        }
        
        fetchBlogs()
    }, []) // Fetch data when component mounts

    const findBlog = (searchResult: BlogType[]) => {
        setSearchedBlogs(searchResult)
    }

    const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSortBy(e.target.value)
    }

    const sortedBlogs = [...(searchedBlogs.length > 0 ? searchedBlogs : blogs)].sort((a, b) => {
        if (sortBy === "date") return parseDate(b.date).getTime() - parseDate(a.date).getTime()
        if (sortBy === "views") return b.views - a.views
        return a.blogNo - b.blogNo
    })

    return (
        <div className="bg-primary-dark flex flex-col gap-4 items-center p-3 rounded-lg">
            <div className="flex gap-4 justify-center my-3 items-center">
                <select
                    className="text-black border border-white p-2 px-3 rounded-md"
                    value={sortBy}
                    onChange={handleSort}
                >
                    <option value="blogNo">Blog No</option>
                    <option value="date">Date</option>
                    <option value="views">Views</option>
                </select>
                <AdminSearch allBlogs={blogs} findBlogs={findBlog} />
            </div>
            <hr className="w-full" />
            <div className="flex gap-2 md:px-2 justify-between w-full text-white font-semibold">
                <h6 className="w-2/10">Id</h6>
                <h6 className="w-2/10">Category</h6>
                <h6 className="w-2/10">Views</h6>
                <h6 className="w-2/10">Section</h6>
                <h6 className="w-2/10">Image</h6>
            </div>
            {sortedBlogs.map((blog, index) => (
                <Link href={`/admin/create/${blog.id}`} className="flex flex-col gap-2 w-full bg-secondary-light rounded-lg p-2 md:px-3" key={index}>
                    <h2 className="font-semibold">{blog.title}</h2>
                    <div className="flex w-full justify-between">
                        <h6 className="w-2/10">{blog.blogNo}</h6>
                        <h6 className="w-2/10">{blog.category}</h6>
                        <h6 className="w-2/10 md:pl-16">{blog.views}</h6>
                        <h6 className="w-2/10 md:pl-16">{blog.section}</h6>
                        <Image src={blog.imgLink} className="object-cover h-12" width={80} height={60} alt="blog-img" />
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Inventory
