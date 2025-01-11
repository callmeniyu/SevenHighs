import Image from "next/image"
import React from "react"

const NewsLetterBanner = () => {
    return (
        <div className="bg-primary-dark mt-7 md:mt-12 flex flex-col md:flex-row mb-10 ">
            <div className="flex flex-col gap-3 md:w-2/3 p-3 md:p-10 py-4">
                <h2 className="font-semibold text-2xl md:text-3xl text-white">
                    Be Part of Our House Party! 🎉 <br />
                    Weekly Real Estate Goodness Delivered
                </h2>
                <p className="text-gray-200">Never Miss a Hot Property Tip Again!</p>
                <form action="">
                    <input
                        type="email"
                        placeholder="Write your email here"
                        className="w-full md:w-3/4 h-12 px-4 py-7 text-gray-700 bg-white rounded-lg focus:outline-none focus:border-primary-dark focus:ring-2 focus:ring-primary-dark placeholder:text-sm md:placeholder:text-base"
                    />
                    <button className="relative -ml-[7rem] rounded-md bg-primary-dark p-2 text-white">Subscribe</button>
                </form>
            </div>
            <div className="md:w-1/3">
                <Image src="/images/Newsletter.png" className="hidden md:block" alt="newsletter" width={500} height={500} />
            </div>
        </div>
    )
}

export default NewsLetterBanner
