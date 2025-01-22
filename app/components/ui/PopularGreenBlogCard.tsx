import Image from "next/image"
import React from "react"
import Views from "./Views"
import { BlogType } from "@/app/types"

type PopularGreenBlogCardType = {
    readnext: boolean
    blog: BlogType
}

const PopularGreenBlogCard = ({ readnext, blog }: PopularGreenBlogCardType) => {
    return (
        <div
            className={`PopularGreenBlogCard bg-primary flex flex-col gap-3 pt-4 min-w-60 ${
                !readnext && "xs:hidden "
            } md:block cursor-pointer group !rounded-lg`}
        >
            <div className={`flex flex-col gap-3 px-4 ${readnext && "md:h-full md:justify-between "}`}>
                <h2 className="blog-title">{readnext ? blog.title : "lorem ipsumgenerated 5 more contents on youtube"}</h2>
                <p className={`text-white ${readnext && "hidden"}`}>
                    {readnext
                        ? blog.desc
                        : "In a survey published in Harvard Business Review, women in leadership roles reported facing workplace age discrimination at every age bracket. In a survey published in Harvard Business Review, women in leadership roles reported facing workplace age discrimination at every age bracket"}
                </p>
                <div className="flex justify-between mb-2">
                    <p className="text-base font-semibold">{readnext ? blog.category : "Tech"}</p>
                    <Views viewscount={blog?.views || 1.1} />
                </div>
            </div>
            <div>
                <Image
                    src="/images/popular_blogs_img2.png"
                    alt="popular-green-blog"
                    className={`${readnext && "hidden"} w-full max-h-[20rem] rounded-bl-lg rounded-br-lg`}
                    width={300}
                    height={290}
                />
            </div>
        </div>
    )
}

export default PopularGreenBlogCard
