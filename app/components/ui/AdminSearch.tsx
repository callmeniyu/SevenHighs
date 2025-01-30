"use client"
import { BlogType } from "@/app/types"
import { useEffect, useState } from "react"
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
        <div className="flex gap-4 items-center">
            <input
                type="text"
                name="search"
                className="w-56 md:w-96 rounded-lg h-10 px-3 p-2"
                value={searchTxt}
                onChange={(e) => setSearchTxt(e.target.value)}
                placeholder="Search blog by title or description"
            />
        </div>
    )
}

export default AdminSearch
