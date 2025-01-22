"use client"
import Image from "next/image"
import { useState } from "react"
import MDEditor from "@uiw/react-md-editor"
import { database, storage } from "@/firebaseConfig"
import { collection, doc, getDocs, orderBy, query, setDoc } from "firebase/firestore"
import { v4 as uuidv4 } from "uuid"
import { ref } from "firebase/storage"
import { BlogType } from "../types"
import { getTime } from "../lib/utils"

const CreateBlog = () => {
    const blogsRef = collection(database, "blogs")

    const fetchLastID = async () => {
        const q = query(blogsRef, orderBy("blogNo", "asc"));
        const allBlogsSnapshot = await getDocs(q);
        if (!allBlogsSnapshot) {
            return null
        }
        const allBlogs: BlogType[] = allBlogsSnapshot.docs.map((doc) => {
            return doc.data() as BlogType
        })

        if (allBlogs.length === 0) {
            return 1
        } else {
            return allBlogs.slice(allBlogs.length - 1)[0].blogNo + 1
        }
    }

    const [views, setViews] = useState(1)

    const [content, setContent] = useState("")
    const [img, setImg] = useState<File>()

    const imagesRef = ref(storage, img?.name)

    const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            setImg(file)
        }
    }

    const [formdata, setFormdata] = useState({
        title: "",
        desc: "",
        category: "",
        date: "",
        section: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormdata({ ...formdata, [name]: value })
        console.log("formdata",formdata);
        
    }

    const handleSubmit = async (e: FormData) => {
        const id = uuidv4()
        const blogNo = await fetchLastID()
        console.log("blogNo", blogNo);
        
        // TODO: UPLAOD IMAGE TO DB
        const docRef = doc(database, "blogs", id)
        const blogData = {
            blogNo,
            id,
            ...formdata,
            img: img ? URL.createObjectURL(img) : "",
            views,
            content,
            time: getTime()
        }
        const result = await setDoc(docRef, blogData)
    }

    return (
        <>
            <div className="bg-primary-dark text-white p-3 md:px-5 rounded-lg w-full">
                <form action={handleSubmit} className="flex flex-col gap-3">
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-col gap-2 md:w-[28rem]">
                                <label htmlFor="title" className="font-semibold">
                                    Title
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    value={formdata.title}
                                    onChange={handleChange}
                                    className="text-black rounded-md p-1.5 px-3 placeholder:text-sm"
                                    placeholder="Give title of the blog"
                                />
                            </div>
                            <div className="flex flex-col gap-2 max-w-[28rem]">
                                <label className="font-semibold" htmlFor="desc">
                                    Description
                                </label>
                                <textarea
                                    name="desc"
                                    value={formdata.desc}
                                    onChange={handleChange}
                                    className="text-black rounded-md p-1.5 px-3 placeholder:text-sm h-44"
                                    placeholder="Give description of the blog"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col  gap-3">
                            <div className="flex flex-col gap-2 w-80">
                                <label className="font-semibold" htmlFor="category">
                                    Category
                                </label>
                                <select
                                    className="text-black rounded-md p-1.5 px-3 placeholder:text-sm"
                                    onChange={handleChange}
                                    value={formdata.category}
                                    name="category"
                                    id="category"
                                >
                                    <option value="Finance">Finance</option>
                                    <option value="Tech">Tech</option>
                                    <option value="Home Loan">Home Loan</option>
                                    <option value="Investment">Investment</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-2 w-80 ">
                                <label className="font-semibold" htmlFor="date">
                                    Date
                                </label>
                                <input
                                    name="date"
                                    onChange={handleChange}
                                    value={formdata.date}
                                    type="date"
                                    className="text-black rounded-md p-1.5 px-3 placeholder:text-sm"
                                    placeholder="Give title of the blog"
                                />
                            </div>
                            <div className="flex flex-col gap-2 w-80">
                                <label className="font-semibold" htmlFor="section">
                                    Section
                                </label>
                                <select
                                    className="text-black rounded-md p-1.5 px-3 placeholder:text-sm"
                                    onChange={handleChange}
                                    value={formdata.section}
                                    name="section"
                                >
                                    <option value="main">Main</option>
                                    <option value="popular">Popular</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 w-40">
                        <label className="font-semibold" htmlFor="category">
                            Image
                        </label>
                        {img ? (
                            <>
                                <label className="" htmlFor="img">
                                    <Image src={URL.createObjectURL(img)} width={150} height={100} alt="image" />
                                </label>
                                <input type="file" name="img" id="img" onChange={(e) => handleImage(e)} hidden></input>
                            </>
                        ) : (
                            <div className="flex flex-col gap-3">
                                <label className="" htmlFor="img">
                                    <Image src="/svg/upload_area.svg" width={150} height={100} alt="image" />
                                </label>
                                <input type="file" name="img" id="img" onChange={(e) => handleImage(e)} hidden></input>
                            </div>
                        )}
                    </div>

                    <div data-color-mode="light" className="flex flex-col gap-2">
                        <label htmlFor="content" className="font-semibold">
                            Content
                        </label>
                        <MDEditor
                            value={content}
                            onChange={(value) => setContent(value as string)}
                            id="content"
                            preview="edit"
                            height={300}
                            style={{ borderRadius: 20, overflow: "hidden", padding: "0.5rem" }}
                            textareaProps={{
                                placeholder: "Briefly describe your idea and what problem it solves",
                            }}
                            previewOptions={{
                                disallowedElements: ["style"],
                            }}
                        />
                    </div>
                    <div className="flex gap-3 my-3">
                        <div className="bg-red-500 text-white p-2 px-3 rounded-lg font-semibold">Remove</div>
                        <button type="submit" className="bg-black text-white p-2 px-3 rounded-lg font-semibold">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CreateBlog
