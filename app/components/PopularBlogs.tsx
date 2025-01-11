import Image from "next/image"
import PopularGreenBlogCard from "./ui/PopularGreenBlogCard"
import PopularBrightBlogCard from "./ui/PopularBrightBlogCard"

const PopularBlogs = () => {
    return (
        <div className="PopularBlogs px-3 md:px-5 md:flex md:flex-col gap-6">
            <div className="flex md:flex-row xs:flex-col gap-5">
                <div className="flex flex-col gap-3 md:w-2/3 md:pr-5">
                    <hr className="border border-black mb-3"/>
                    <div className="cursor-pointer">
                    <h4 className="blog-title mb-2">The top 20 safest cities to live in the US, ranked</h4>
                    <Image src="/images/popular_blogs_img1.png" className="md:w-full md:max-h-[25rem]" alt="popular-blog" width={700} height={100} />
                    </div>
                </div>
                <div className="flex flex-col gap-3 md:w-1/3">
                <hr className="border border-black mb-3"/>
                <h2 className="section-title">Most Popular</h2>
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-2 items-start cursor-pointer">
                            <p className="font-semibold text-lg text-primary-dark">1</p>
                            <h2 className="blog-title">US cities with the best quality of life in 2024-2025, ranked</h2>
                        </div>
                        <div className="flex gap-2 items-start cursor-pointer">
                            <p className="font-semibold text-lg text-primary-dark">2</p>
                            <h2 className="blog-title">
                                Luigi Mangione content is a challenge for social media moderators
                            </h2>
                        </div>
                        <div className="flex gap-2 items-start cursor-pointer">
                            <p className="font-semibold text-lg text-primary-dark">3</p>
                            <h2 className="blog-title">
                                Chinese vs. US Navy: How Ticonderoga-class, Type 055 destroyer compare
                            </h2>
                        </div>
                        <div className="flex gap-2 items-start cursor-pointer">
                            <p className="font-semibold text-lg text-primary-dark">4</p>
                            <h2 className="blog-title">US cities with the best quality of life in 2024-2025, ranked</h2>
                        </div>
                        <div className="flex gap-2 items-start cursor-pointer">
                            <p className="font-semibold text-lg text-primary-dark">5</p>
                            <h2 className="blog-title">My uncle saved $6,000 for me that changed my approach to money</h2>
                        </div>
                    </div>
                </div>
            </div>


            <div className="flex  md:gap-4">
                <div className="md:w-1/3">
                    <PopularGreenBlogCard />
                </div>
                <div className="flex flex-col  md:gap-2 md:w-2/3">
                    <div>
                        <PopularBrightBlogCard img="/images/popular_blogs_img3.png"/>
                    </div>
                    <div>
                        <PopularBrightBlogCard img="/images/popular_blogs_img4.png"/>
                    </div>
                    <div>
                        <PopularBrightBlogCard img="/images/popular_blogs_img2.png"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopularBlogs
