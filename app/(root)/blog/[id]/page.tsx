import NewsLetterBanner from "@/app/components/NewsLetterBanner"
import PopularGreenBlogCard from "@/app/components/ui/PopularGreenBlogCard"
import Views from "@/app/components/ui/Views"
import { BlogType } from "@/app/types"
import { database } from "@/firebaseConfig"
import { collection, getDocs, limit, query, where } from "firebase/firestore"
import Image from "next/image"
import { MdDateRange } from "react-icons/md"
import markdownit from "markdown-it"

const md = markdownit()

const page = async ({ params }: { params: { id: string } }) => {
    const { id } = params

    const blogRef = collection(database, "blogs")

    const q = query(blogRef, where("id", "==", id))
    const querySnapshot = await getDocs(q)
    if (!querySnapshot) return null
    const blog = querySnapshot.docs.map((doc) => {
        return doc.data() as BlogType
    })

    const parsedContent = md.render(blog[0]?.content || "")

    const readnextQuery = query(blogRef, limit(5))
    const readNextSnapshot = await getDocs(readnextQuery)
    if (!readNextSnapshot) return null
    const readNextBlogs = readNextSnapshot.docs.map((doc) => {
        return doc.data() as BlogType
    })

    return (
        <>
            <div className="BlogPage md:px-24 px-1 py-8">
                <div className="md:px-16 px-2 md:py-10 py-4 bg-secondary-light rounded-xl">
                    <div className="flex flex-col gap-3">
                        <div className="bg-primary md:px-3 px-2 py-5 rounded-lg">
                            <h1 className="blog-super_title">{blog[0]?.title}</h1>
                            <p className="text-center text-sm text-gray-300 my-2 font-poppins">{blog[0]?.desc}</p>
                            <div className="flex justify-between items-center mt-4 md:px-16">
                                <div className="flex gap-2">
                                    <MdDateRange className="text-xl " />
                                    <p className="">
                                        {blog[0]?.date} {blog[0]?.time}
                                    </p>
                                </div>
                                <Views viewscount={blog[0]?.views} />
                            </div>
                        </div>

                        <Image
                            src={blog[0]?.imgLink}
                            width={1000}
                            height={1080}
                            className="max-h-96 object-cover rounded-lg"
                            alt="blog-img"
                        />

                        <div className="prose max-w-4xl mx-auto font-work-sans break-words">
                            {parsedContent ? (
                                <article dangerouslySetInnerHTML={{ __html: parsedContent }} />
                            ) : (
                                <p className="no-result">No details provided</p>
                            )}
                        </div>
                        {/* <div className="py-3 text-lg leading-relaxed flex flex-col gap-3">
                            <p>{blog[0]?.content}</p>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="px-3 mb-8">
                <hr className="border border-black my-3" />
                <h4 className="section-title">Read Next</h4>
                <div className="flex gap-2 overflow-x-scroll no-scrollbar">
                    <PopularGreenBlogCard readnext blog={readNextBlogs[0]} />
                    <PopularGreenBlogCard readnext blog={readNextBlogs[1]} />
                    <PopularGreenBlogCard readnext blog={readNextBlogs[3]} />
                    <PopularGreenBlogCard readnext blog={readNextBlogs[2]} />
                    <PopularGreenBlogCard readnext blog={readNextBlogs[4]} />
                </div>
            </div>
            <NewsLetterBanner />
        </>
    )
}

export default page
