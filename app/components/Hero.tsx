import Image from "next/image"
import Search from "./ui/Search"

const Hero = () => {
    return (
        <div className="hero w-full bg-primary flex justify-center items-center xs:pt-16 md:pt-10 px-4 md:px-28 xs:text-left md:text-center">
            <div className="flex flex-col gap-5">
                <h1 className="logo-text xs:text-left md:text-center">
                    SevenHighs: Your Down-to-Earth Guide Through Real Estate Land
                </h1>
                <p className="text-white text-xl">
                    Where we turn property puzzles into pieces of cake, and share laughs along the way!
                </p>
                <form action="" className="relative w-full max-w-2xl mr-auto md:mx-auto">
                    <Search />
                </form>
                <div className="relative mt-auto pt-7 justify-center flex md:gap-7">
                    <Image
                        src="/icons/palm_tree.png"
                        width={200}
                        height={50}
                        className="text-9xl text-secondary"
                        alt="building-img"
                    />
                    <Image
                        src="/icons/building.png"
                        width={180}
                        height={170}
                        className="text-9xl text-secondary"
                        alt="building-img"
                    />
                    <Image
                        src="/icons/palm_tree.png"
                        width={180}
                        height={170}
                        className="text-9xl text-secondary transform -scale-x-100"
                        alt="building-img"
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero
