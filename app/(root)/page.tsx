import Hero from "../components/Hero"
import MainBlogs from "../components/MainBlogs"
import NewsLetterBanner from "../components/NewsLetterBanner"
import PopularBlogs from "../components/PopularBlogs"
import TechBlogs from "../components/TechBlogs"

export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
  const query = (await searchParams).query as string

    return (
      <>
        <Hero query={ query} />
        <MainBlogs />
        <PopularBlogs />
        <TechBlogs />
        <NewsLetterBanner />
      </> 
    )
}
