"use client"
import { BlogType } from "@/app/types"
import { useState } from "react"
import { IoSearchOutline } from "react-icons/io5"
type AdminSearchProps = {
    allBlogs: BlogType[]
    findBlog: (searchResult: BlogType[]) => void
}

const AdminSearch = ({ allBlogs, findBlog }: AdminSearchProps) => {
    const [searchTxt, setSearchTxt] = useState<string>("")

    const sendResult = () => {
        const searchedBlogs: BlogType[] = allBlogs.filter((blog) => {
            return (
                blog.title.toLowerCase().includes(searchTxt.toLowerCase()) ||
                blog.category.toLowerCase().includes(searchTxt.toLowerCase())
            )
        })
      findBlog(searchedBlogs);
    }
    return (
        <form className="flex gap-4 items-center">
            <input
                type="text"
                name="search"
                className="w-56 md:w-96 rounded-lg h-10 px-3 p-2"
                value={searchTxt}
                onChange={(e) => setSearchTxt(e.target.value)}
                placeholder="Search Blog"
            />
            <div className="" onClick={sendResult}>
                <IoSearchOutline className="text-3xl text-white" />
            </div>
        </form>
    )
}

export default AdminSearch
