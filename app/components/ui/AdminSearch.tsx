"use client"
import { BlogType } from "@/app/types"
import { useEffect, useState } from "react"
import { IoSearchOutline } from "react-icons/io5"
type AdminSearchProps = {
    allBlogs: BlogType[]
    findBlogs: (searchResult: BlogType[]) => void
}

const AdminSearch = ({ allBlogs, findBlogs }: AdminSearchProps) => {
    const [searchTxt, setSearchTxt] = useState<string>("")

    useEffect(() => {
        const sendResult = () => {
            const searchedBlogs: BlogType[] = allBlogs.filter((blog) => {
                return (
                    blog.title.toLowerCase().includes(searchTxt.toLowerCase()) ||
                    blog.category.toLowerCase().includes(searchTxt.toLowerCase())
                )
            })
            findBlogs(searchedBlogs);
        }
        sendResult()
   }, [searchTxt])
    return (
        <form className="flex gap-4 items-center" onSubmit={(e) => { e.preventDefault(); sendResult(); }}>
            <input
                type="text"
                name="search"
                className="w-56 md:w-96 rounded-lg h-10 px-3 p-2"
                value={searchTxt}
                onChange={(e) => setSearchTxt(e.target.value)}
                placeholder="Search Blog"
            />
            <button type="submit" className="">
                <IoSearchOutline className="text-3xl text-white" />
            </button>
        </form>
    )
}

export default AdminSearch
