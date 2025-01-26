import { BlogType } from "@/app/types"
import { FaArrowTrendUp } from "react-icons/fa6"

interface TrendingSearchProps {
    className?: string,
}
const TrendingSearch: React.FC<TrendingSearchProps> = ({ className }) => {
    return (
        <>
            <div className={`bg-white p-4 rounded-lg w-full ${className}`}>
                <div className="flex flex-col gap-4 items-center">
                    <h2 className="font-semibold text-xl text-primary-dark">Trending Searches</h2>
                    <div className="flex gap-3 flex-wrap justify-center">
                        <div className="flex gap-2 border-2 rounded-md p-2  cursor-pointer hover:bg-primary-dark hover:text-white group">
                            <FaArrowTrendUp className="text-2xl text-primary-dark group-hover:text-white" />
                            <h6>Finacial advice</h6>
                        </div>
                        <div className="flex gap-2 border-2 rounded-md p-2 cursor-pointer hover:bg-primary-dark hover:text-white group">
                            <FaArrowTrendUp className="text-2xl text-primary-dark group-hover:text-white" />
                            <h6>Social Media</h6>
                        </div>
                        <div className="flex gap-2 border-2 rounded-md p-2 cursor-pointer hover:bg-primary-dark hover:text-white group">
                            <FaArrowTrendUp className="text-2xl text-primary-dark group-hover:text-white" />
                            <h6>Naval comparison</h6>
                        </div>
                        <div className="flex gap-2 border-2 rounded-md p-2 cursor-pointer hover:bg-primary-dark hover:text-white group">
                            <FaArrowTrendUp className="text-2xl text-primary-dark group-hover:text-white" />
                            <h6>Elon Musk</h6>
                        </div>
                        <div className="flex gap-2 border-2 rounded-md p-2 cursor-pointer hover:bg-primary-dark hover:text-white group">
                            <FaArrowTrendUp className="text-2xl text-primary-dark group-hover:text-white" />
                            <h6>HomeOwners Tax</h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TrendingSearch
