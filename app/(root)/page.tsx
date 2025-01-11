import Hero from "../components/Hero"
import MainBlogs from "../components/MainBlogs"
import NewsLetterBanner from "../components/NewsLetterBanner"
import PopularBlogs from "../components/PopularBlogs"
import TechBlogs from "../components/TechBlogs"

export default function Home() {
    return (
      <>
        <Hero />
        <MainBlogs />
        <PopularBlogs />
        <TechBlogs />
        <NewsLetterBanner />
      </> 
    )
}
