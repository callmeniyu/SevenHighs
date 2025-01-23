import Image from "next/image"
import PopularGreenBlogCard from "./ui/PopularGreenBlogCard"
import PopularBrightBlogCard from "./ui/PopularBrightBlogCard"
import { collection, getDocs, orderBy, query, where } from "firebase/firestore"
import { database } from "@/firebaseConfig"
import { BlogType } from "../types"
import Link from "next/link"

const PopularBlogs = async () => {
        const blogsRef = collection(database, "blogs")
    
        const q = query(blogsRef, where("section", "==", "popular"), orderBy("blogNo", "asc"))
        const querySnapshot = await getDocs(q)
    
        if (!querySnapshot) return null
    
        const popularBlogs = querySnapshot.docs.map((doc) => {
            return doc.data() as BlogType
        })
    return (
        <div className="PopularBlogs px-3 md:px-5 md:flex md:flex-col gap-6">
            <div className="flex md:flex-row xs:flex-col gap-5">
                <Link href={`/blog/${popularBlogs[0]?.id}`} className="flex flex-col gap-3 md:w-2/3 md:pr-5 group">
                    <hr className="border border-black mb-3"/>
                    <div className="cursor-pointer">
                        <h4 className="blog-title mb-2">{ popularBlogs[0].title}</h4>
                    <Image src="/images/popular_blogs_img1.png" className="md:w-full md:max-h-[25rem]" alt="popular-blog" width={700} height={100} />
                    </div>
                </Link>
                <div className="flex flex-col gap-3 md:w-1/3">
                <hr className="border border-black mb-3"/>
                <h2 className="section-title">Most Popular</h2>
                    <div className="flex flex-col gap-3">
                        <Link href={`/blog/${popularBlogs[1]?.id}`} className="flex gap-2 items-start cursor-pointer group">
                            <p className="font-semibold text-lg text-primary-dark">1</p>
                            <h2 className="blog-title">{ popularBlogs[1].title}</h2>
                        </Link>
                        <Link href={`/blog/${popularBlogs[2]?.id}`} className="flex gap-2 items-start cursor-pointer group">
                            <p className="font-semibold text-lg text-primary-dark">2</p>
                            <h2 className="blog-title">
                            { popularBlogs[2].title}
                            </h2>
                        </Link>
                        <Link href={`/blog/${popularBlogs[3]?.id}`} className="flex gap-2 items-start cursor-pointer group">
                            <p className="font-semibold text-lg text-primary-dark">3</p>
                            <h2 className="blog-title">
                            { popularBlogs[3].title}
                            </h2>
                        </Link>
                        <Link href={`/blog/${popularBlogs[4]?.id}`} className="flex gap-2 items-start cursor-pointer group">
                            <p className="font-semibold text-lg text-primary-dark">4</p>
                            <h2 className="blog-title">{ popularBlogs[4].title}</h2>
                        </Link>
                        <Link href={`/blog/${popularBlogs[5]?.id}`} className="flex gap-2 items-start cursor-pointer group">
                            <p className="font-semibold text-lg text-primary-dark">5</p>
                            <h2 className="blog-title">{ popularBlogs[5].title}</h2>
                        </Link>
                    </div>
                </div>
            </div>


            <div className="flex  md:gap-4">
                <div className="md:w-1/3">
                    <PopularGreenBlogCard readnext={false} blog={popularBlogs[6]}/>
                </div>
                <div className="flex flex-col  md:gap-2 md:w-2/3">
                    <div>
                        <PopularBrightBlogCard blog={popularBlogs[6]} img="/images/popular_blogs_img3.png"/>
                    </div>
                    <div>
                        <PopularBrightBlogCard blog={popularBlogs[7]} img="/images/popular_blogs_img4.png"/>
                    </div>
                    <div>
                        <PopularBrightBlogCard blog={popularBlogs[8]} img="/images/popular_blogs_img2.png"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopularBlogs
