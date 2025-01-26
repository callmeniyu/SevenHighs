"use client"
import React, { useEffect, useState } from "react"
import { IoSearchOutline } from "react-icons/io5"
import TrendingSearch from "./TrendingSearch"
import "../../globals.css"
import { collection, getDocs, query, where } from "firebase/firestore"
import { database } from "@/firebaseConfig"
import { BlogType } from "@/app/types"
import Form from "next/form"
import SearchedBlogs from "./SearchedBlogs"

const Search = ({ query }: { query: string }) => {
    const [isFocused, setIsFocused] = useState<boolean>(false)
    const [searchedBlogs, setSearchedBlogs] = useState<BlogType[]>([])

    const blogsRef = collection(database, "blogs")

    useEffect(() => { 
        const findBlogs = async () => {
            try {
                if (query.length > 0) {
                    const querySnapshot = await getDocs(blogsRef)
    
                    const AllBlogs = querySnapshot.docs.map((doc) => {
                        return doc.data() as BlogType
                    })
    
                    const searchedBlogs:BlogType[] = AllBlogs.filter((blog) => { 
                        return blog.title.toLowerCase().includes(query.toLowerCase()) || blog.category.toLowerCase().includes(query.toLowerCase())
                    })
                    
                    setSearchedBlogs(searchedBlogs)                
                }
            } catch (error) {
                console.log(error)
            }
        }
        findBlogs();
    }, [query])

    return (
        <>
            <Form action="/" scroll={false} className="search mb-4 relative">
                <input
                    type="text"
                    name="query"
                    placeholder="Search stories from the property world...🏠"
                    className="w-full h-12 px-4 pr-16 text-gray-700 bg-white rounded-3xl focus:outline-none focus:border-primary-dark focus:ring-2 focus:ring-primary-dark placeholder:text-sm md:placeholder:text-base"
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />
                <button type="submit" className="absolute right-4 top-6 -translate-y-1/2 text-black rounded-md">
                    <IoSearchOutline size={18} />
                </button>
            </Form>
            <div >
                { query ? (<SearchedBlogs blogs={searchedBlogs}/>): (isFocused && <TrendingSearch  className={`trending-search ${isFocused ? "show" : ""}`}/>)}
            </div>
        </>
    )
}

export default Search
