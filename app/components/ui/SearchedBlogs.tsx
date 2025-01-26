import { BlogType } from "@/app/types"
import Image from "next/image"

const SearchedBlogs = ({ blogs }: { blogs: BlogType[] }) => {
    return (
        <div className={`bg-white p-4 rounded-lg w-full flex flex-col gap-3 max-h-80 overflow-y-scroll `}>
            {blogs.length > 0 ? (
                blogs.map((blog) => (
                    <div key={blog.id} className="p-3 flex gap-2 w-full bg-gray-200 rounded full text-left">
                    <Image
                        src="/images/popular_blogs_img2.png"
                        width={150}
                        height={300}
                        className="w-1/3 rounded-lg"
                        alt="blog-img"
                    />
                    <div className="flex flex-col gap-q w-2/3">
                            <h1 className="text-lg font-bold">{blog.title}</h1>
                        <p>
                           {blog.desc}
                        </p>
                    </div>
                </div>
                ))
            ) : (
                    <h1>No blogs Found</h1>
            )}
        </div>
    )
}

export default SearchedBlogs
