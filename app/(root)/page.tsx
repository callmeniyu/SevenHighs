import Hero from "../components/Hero"
import MainBlogs from "../components/MainBlogs"
import NewsLetterBanner from "../components/NewsLetterBanner"
import PopularBlogs from "../components/PopularBlogs"
import TechBlogs from "../components/TechBlogs"

export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
  const query = (await searchParams).query as string

  return (
    // TODO:
    //   1. ui for large devices.
    //   2. Form validation not working.✔️
    //   3. Form not submitting.✔️
    //   4. Image toast.✔️
    //   5. Remove blog.✔️
    //   7. Link Social Media.
    //   8. Sidebar elements.✔️
    //   9. Remove trending search on mobiles.✔️
    //   9. Blog title resize on mobiles.✔️
    //   10. Sort blogs.

      <>
        <Hero query={ query} />
        <MainBlogs />
        <PopularBlogs />
        <TechBlogs />
        <NewsLetterBanner />
      </> 
    )
}
