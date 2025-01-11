import Image from "next/image"
import Views from "./Views"

interface TechBlogCardProps {
    img: string
    inverted?: boolean
}

const TechBlogCard: React.FC<TechBlogCardProps> = ({ img, inverted }) => {
    return (
        <div className="flex flex-col gap-3 bg-secondary-dark rounded-lg p-3 cursor-pointer group">
            <div className={`${inverted && "order-1"}` || ""}>
                <Image src={img} alt="tech-blog" width={390} height={100} />
            </div>
            <div className="flex flex-col gap-1 bg-secondary-light rounded-lg p-3">
                <h4 className="blog-title">
                    Jennifer Love Hewitt, 45, says fans have a 'hard time' accepting that she doesn't look like she did in
                    her 20s
                </h4>
                <p className="blog-desc">
                    In a survey published in Harvard Business Review, women in leadership roles reported facing workplace
                    age discrimination at every age bracket. In a survey published in Harvard Business Review, women in
                    leadership roles reported
                </p>
                <Views viewscount={1.1} />
            </div>
        </div>
    )
}

export default TechBlogCard
