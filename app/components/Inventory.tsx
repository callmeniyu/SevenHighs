"use client"
import Image from "next/image"
import { BlogType } from "../types"
import AdminSearch from "./ui/AdminSearch"
import { useEffect, useState } from "react"
import { parseDate } from "../lib/utils"


const Inventory = ({ allBlogs }: { allBlogs: BlogType[] }) => {
    const [searchedBlogs, setSearchedBlogs] = useState<BlogType[]>([])
    const [sortBy, setSortBy] = useState<string>("blogNo")
    const [sortedBlogs, setSortedBlogs] = useState<BlogType[]>(allBlogs)
    const findBlog = (searchResult: BlogType[]) => {
        setSearchedBlogs(searchResult)
        if (searchResult.length > 0) console.log("SearchedBlogs", searchResult)
    }

    const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSortBy(e.target.value)
    }
    useEffect(() => {
        let blogsToSort = searchedBlogs ? searchedBlogs:[...allBlogs];
        const sortBlogs = () => {
            console.log("sortBy", sortBy)

            if (sortBy == "date") {
                const blogsByDate = blogsToSort.sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime())
                setSortedBlogs(blogsByDate)
            }
            else if (sortBy == "views") {
                const blogsByViews = blogsToSort.sort((a, b) => b.views - a.views)
                setSortedBlogs(blogsByViews)
            } else {
                setSortedBlogs(allBlogs);
            }
        }
        sortBlogs()
    }, [sortBy, allBlogs, sortBy])

    return (
        <div className="bg-primary-dark flex flex-col gap-4 items-center p-3  rounded-lg ">
            <div className="flex gap-4 justify-center my-3 items-center">
                <select
                    className="text-black flex gap-1 items-center border border-white p-2 px-3 rounded-md"
                    value={sortBy}
                    onChange={(e) => handleSort(e)}
                >
                    <option value="blogNo">Blog No</option>
                    <option value="date">Date</option>
                    <option value="views">Views</option>
                    {/* <MdKeyboardArrowDown className="text-2xl" /> */}
                </select>
                <AdminSearch allBlogs={allBlogs} findBlogs={findBlog} />
            </div>
            <hr className="w-full" />

            <div className="flex gap-2 md:px-2 justify-between w-full text-white font-semibold ">
                <h6 className="w-2/10">Id</h6>
                <h6 className="w-2/10">Category</h6>
                <h6 className="w-2/10">Views</h6>
                <h6 className="w-2/10">Section</h6>
                <h6 className="w-2/10">Image</h6>
            </div>

            {(searchedBlogs.length > 0 ? searchedBlogs : sortedBlogs).map((blog: BlogType, index: number) => (
                <div className="flex flex-col gap-2 w-full bg-secondary-light rounded-lg p-2 md:px-3" key={index}>
                    <h2 className="font-semibold">{blog.title}</h2>
                    <div className="flex w-full justify-between">
                        <h6 className="w-2/10">{blog.blogNo}</h6>
                        <h6 className="w-2/10">{blog.category}</h6>
                        <h6 className="w-2/10 md:pl-16">{blog.views}</h6>
                        <h6 className="w-2/10 md:pl-16">{blog.section}</h6>
                        <Image src={blog.imgLink} className="object-cover h-12" width={80} height={60} alt="blog-img" />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Inventory
