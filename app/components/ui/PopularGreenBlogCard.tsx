import Image from "next/image"
import React from "react"
import Views from "./Views"
import { BlogType } from "@/app/types"
import Link from "next/link"

type PopularGreenBlogCardType = {
    readnext: boolean
    blog: BlogType
}

const PopularGreenBlogCard = ({ readnext, blog }: PopularGreenBlogCardType) => {
    return (
        <Link href={`/blog/${blog?.id}`}
            className={`PopularGreenBlogCard bg-primary flex flex-col gap-3 pt-4 min-w-60 ${
                !readnext && "xs:hidden "
            } md:block cursor-pointer group !rounded-lg`}
        >
            <div className={`flex flex-col gap-3 px-4 ${readnext && "md:h-full md:justify-between "}`}>
                <h2 className="blog-title"> {blog?.title}</h2>
                <p className={`text-white ${readnext && "hidden"}`}>
                    {blog?.desc}
                </p>
                <div className="flex justify-between mb-2">
                    <p className="text-base font-semibold">{blog?.category}</p>
                    <Views viewscount={blog?.views || 1.1} />
                </div>
            </div>
            <div>
                {/*  "/images/popular_blogs_img2.png" */}
                <Image
                    src={blog?.imgLink}
                    alt="popular-green-blog"
                    className={`${readnext && "hidden"} w-full max-h-[20rem] rounded-bl-lg rounded-br-lg`}
                    width={300}
                    height={290}
                />
            </div>
        </Link>
    )
}

export default PopularGreenBlogCard
