import Image from "next/image"
import Views from "./Views"
import { BlogType } from "@/app/types"
import Link from "next/link"

interface TechBlogCardProps {
    img: string
    inverted?: boolean
    blog: BlogType
}

const TechBlogCard: React.FC<TechBlogCardProps> = ({ img, inverted, blog }) => {
    return (
        <Link href={`/blog/${blog?.id}`} className="flex flex-col gap-3 bg-secondary-dark rounded-lg p-3 cursor-pointer group">
            <div className={`${inverted && "order-1"}` || ""}>
                <Image src={blog?.imgLink} alt="tech-blog" width={390} height={100} className="max-h-64 object-cover rounded-lg" />
            </div>
            <div className="flex flex-col gap-1 bg-secondary-light rounded-lg p-3">
                <h4 className="blog-title">
                    {blog?.title}
                </h4>
                <p className="blog-desc">
                    {blog?.content.substring(0, 500)}
                </p>
                <Views viewscount={1.1} />
            </div>
        </Link>
    )
}

export default TechBlogCard
