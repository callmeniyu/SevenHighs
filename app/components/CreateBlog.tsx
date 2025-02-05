"use client"
import Image from "next/image"
import { useEffect, useState } from "react"
import MDEditor from "@uiw/react-md-editor"
import { database, storage } from "@/firebaseConfig"
import { collection, doc, getDocs, orderBy, query, setDoc, updateDoc } from "firebase/firestore"
import { v4 as uuidv4 } from "uuid"
import { ref } from "firebase/storage"
import { BlogType } from "../types"
import { getTime } from "../lib/utils"
import { Client, ID, Storage } from "appwrite"
import { set, z } from "zod"
import { formSchema } from "../lib/blogValidation"
import Toast from "./ui/Toast"

const CreateBlog = ({ blog }: { blog?: BlogType }) => {
    const { title, desc, category, date, section } = blog || {}
    const [img, setImg] = useState<File>()
    const [toast, setToast] = useState({ status: true, type: "image" })
    const [imgLink, setImgLink] = useState<string | undefined>("")
    const [views, setViews] = useState(1)
    const [content, setContent] = useState<string | undefined>("")
    const [errors, setErrors] = useState<Record<string, string>>({})
    const [formdata, setFormdata] = useState({
        title: "",
        desc: "",
        category: "",
        date: "",
        section: "",
    })

    useEffect(() => {
        setFormdata({
            title: title || "",
            desc: desc || "",
            category: category || "",
            date: date || "",
            section: section || "",
        })
        setContent(blog?.content)
        setImgLink(blog?.imgLink)
        console.log(img)
    }, [])

    // Ensure you have the correct endpoint and project ID
    const client = new Client().setEndpoint("https://cloud.appwrite.io/v1").setProject("67932fc1001028bed41f")

    const appStorage = new Storage(client)

    const blogsRef = collection(database, "blogs")

    const fetchLastID = async () => {
        const q = query(blogsRef, orderBy("blogNo", "asc"))
        const allBlogsSnapshot = await getDocs(q)
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

    const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            setImg(file)
        }
    }

    const uploadAndAccessImage = async () => {
        if (!img) {
            console.error("No image file provided")
            return
        }

        try {
            const uploadResponse = await appStorage.createFile("679330fb001a2b3cbbd4", ID.unique(), img)
            console.log("Image uploaded successfully:", uploadResponse)

            const fileId = uploadResponse.$id

            const downloadUrl = appStorage.getFileDownload("679330fb001a2b3cbbd4", fileId)
            console.log("Download URL:", downloadUrl)

            const previewUrl = appStorage.getFilePreview("679330fb001a2b3cbbd4", fileId)
            if (previewUrl) {
                setImgLink(previewUrl)
                setToast({ status: true, type: "image" })
            }
        } catch (error) {
            console.error("Error uploading or accessing the image:", error)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormdata({ ...formdata, [name]: value })
        if (formdata) console.log("formdata", formdata)
    }

    const handleCreate = async () => {

        try {
            const id = uuidv4()
            const blogNo = await fetchLastID()

            const docRef = doc(database, "blogs", id)
            const blogData = {
                blogNo,
                id,
                ...formdata,
                imgLink,
                views,
                content,
                time: getTime(),
            }
            await formSchema.parseAsync(blogData)

            const result: any = await setDoc(docRef, blogData)
            
            if (result) console.log("Blog created successfully")
            setToast({ status: true, type: "create" })
        } catch (error) {
            if (error instanceof z.ZodError) {
                const fieldErorrs = error.flatten().fieldErrors

                setErrors(fieldErorrs as unknown as Record<string, string>)
                if (errors) console.log(errors)
            }
        }
    }

    const handleUpdate = async (id: string) => {
        try {
            const docRef = doc(database, "blogs", id)
            const blogData = {
                ...formdata,
                imgLink,
                content,
                time: getTime(),
            }

            const result = await updateDoc(docRef, { ...blogData })
            console.log("Blog Updated successfully")
            setToast({ status: true, type: "update" })
        } catch (error) {
            if (error instanceof z.ZodError) {
                const fieldErorrs = error.flatten().fieldErrors

                setErrors(fieldErorrs as unknown as Record<string, string>)
                if (errors) console.log(errors)
            }
        }
    }

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        console.log("hiiii");
        
        if (blog) {
            handleUpdate(blog?.id)
        } else {
            handleCreate()
        }
    }

    return (
        <>
            <Toast toast={toast} />
            <div className="bg-primary-dark text-white p-3 md:px-5 rounded-lg w-full">
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
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
                                {errors.title && <p className="form-error">{errors.title}</p>}
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
                                {errors.desc && <p className="form-error">{errors.title}</p>}
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
                                {errors.category && <p className="form-error">{errors.title}</p>}
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
                                {errors.date && <p className="form-error">{errors.title}</p>}
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
                                {errors.section && <p className="form-error">{errors.title}</p>}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 w-40">
                        <label className="font-semibold" htmlFor="category">
                            Image
                        </label>
                        <div className="flex gap-1">
                            {img ? (
                                <div className="flex flex-col gap-3 min-w-44">
                                    <label className="" htmlFor="img">
                                        <Image src={URL.createObjectURL(img)} width={150} height={100} alt="image" />
                                    </label>
                                    <input type="file" name="img" id="img" onChange={(e) => handleImage(e)} hidden></input>
                                </div>
                            ) : blog?.imgLink ? (
                                <div className="flex flex-col gap-3 min-w-44">
                                    <label className="" htmlFor="img">
                                        <Image src={imgLink || "/svg/upload_area.svg"} width={150} height={100} alt="image" />
                                    </label>
                                    <input type="file" name="img" id="img" onChange={(e) => handleImage(e)} hidden></input>
                                </div>
                            ) : (
                                <div className="flex flex-col gap-3 min-w-44">
                                    <label className="" htmlFor="img">
                                        <Image src="/svg/upload_area.svg" width={150} height={100} alt="image" />
                                    </label>
                                    <input type="file" name="img" id="img" onChange={(e) => handleImage(e)} hidden></input>
                                </div>
                            )}
                            <div className="px-4 py-2 bg-black h-10 rounded-lg self-end" onClick={uploadAndAccessImage}>
                                Upload
                            </div>
                        </div>
                        {errors.imgLink && <p className="form-error">{errors.title}</p>}
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
                        {errors.content && <p className="form-error">{errors.title}</p>}
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
