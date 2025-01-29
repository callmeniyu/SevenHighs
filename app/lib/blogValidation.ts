import { z } from "zod"

export const formSchema = z.object({
    title: z.string().min(5).max(100).nonempty("Title is required"),
    desc: z.string().min(30).max(500).nonempty("Description is required"),
    category: z.string().min(3).max(20).nonempty("Please select a category"),
    date: z.string().min(5).max(20).nonempty("Please select a Date"),
    section: z.string().min(5).max(20),
    imgLink: z.string().min(3, "Please provide an Image").nonempty("Provide an image"),
    content: z.string().min(200).nonempty("Provide the content"),
})
