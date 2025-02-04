import Image from "next/image"
import React, { use } from "react"
import Views from "./Views"
import { BlogType } from "@/app/types"
import Link from "next/link"

type PopularBrightBlogCardType = {
    img: string
    blog: BlogType
}

const PopularBrightBlogCard = ({ img, blog }:PopularBrightBlogCardType) => {
    return (
        <Link href={`blog/${blog.id}`} className="md:flex flex flex-col md:flex-row md:mt-0 mt-5 min-h-5 bg-secondary-light rounded-lg md:gap-2 cursor-pointer group">
            <div className=" md:flex flex flex-col gap-2 p-3 md:w-2/3">
                <h4 className="blog-title">{ blog.title}</h4>
                <p className="blog-desc">
                    {blog.desc.substring(0, 400)} . . .
                </p>
                <div className="flex justify-between ">
                    <p className="text-base  font-semibold text-primary-dark">{blog.category}</p>
                    <Views viewscount={blog.views | 1.1} />
                </div>
            </div>
            <Image
                src={blog?.imgLink}
                className={`xs:w-full xs:max-h-60 object-cover rounded-bl-lg rounded-br-lg md:rounded-bl-none md:rounded-tr-lg md:rounded-br-lg md:w-1/3 `}
                alt="popular-bright-blog"
                width={200}
                height={230}
            />
        </Link>
    )
}

export default PopularBrightBlogCard
