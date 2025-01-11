import React from "react"
import TechBlogCard from "./ui/TechBlogCard"

const TechBlogs = () => {
    return (
        <>
            <hr className="border border-black my-6" />
                            <h2 className="section-title pl-3 pb-3">Tech</h2>
            <div className="px-3 flex flex-col gap-3 ">
                <div className="flex flex-col gap-3 md:flex-row">
                    <TechBlogCard img="/images/Tech_blog_img1.png" />
                    <TechBlogCard img="/images/Tech_blog_img2.png" inverted />
                    <TechBlogCard img="/images/Tech_blog_img3.png" />
                </div>
                <div className="flex flex-col gap-3 md:flex-row">
                    <TechBlogCard img="/images/Tech_blog_img4.png" inverted/>
                    <TechBlogCard img="/images/Tech_blog_img5.png" />
                    <TechBlogCard img="/images/Tech_blog_img6.png" inverted/>
                </div>
            </div>
        </>
    )
}

export default TechBlogs
