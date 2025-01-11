import Image from 'next/image'
import React from 'react'

const MainBlogs = () => {
  return (
      <div className='MainBlogs md:flex gap-3 py-5 px-3'>
          <div className='flex md:flex-col gap-1 p-3 md:w-1/3 bg-primary rounded-lg overflow-x-scroll md:no-scrollbar'>
              <div className='flex flex-col gap-2 min-w-60 md:border-none border-r-2 border-r-gray-300'>
                  <h4 className='font-semibold text-base text-secondary-dark'>TRAVEL</h4>
                  <p className='text-white'>Park City skiers said their resort vacation was a mess after a ski patrol strike</p>
              </div>
              <div className='flex flex-col gap-2 min-w-60 pl-2 md:pl-0 md:border-none border-r-2 border-r-gray-300'>
                  <h4 className='font-semibold text-base text-secondary-dark'>FOOD</h4>
                  <p className='text-white'>Alcohol companies have been bracing for a culture shift. Their nonalcoholic options have buoyed sales.</p>
              </div>
              <div className='flex flex-col gap-2 min-w-60 pl-2 md:pl-0 md:border-none border-r-2 border-r-gray-300'>
                  <h4 className='font-semibold text-base text-secondary-dark'>TECH</h4>
                  <p className='text-white'>Bill Gates, Amazon's CTO, and other tech leaders share their predictions for 2025</p>
              </div>
              <div className='flex flex-col gap-2 min-w-60 pl-2 md:pl-0 md:border-none border-r-2 border-r-gray-300'>
                  <h4 className='font-semibold text-base text-secondary-dark'>TRAVEL</h4>
                  <p className='text-white'>Park City skiers said their resort vacation was a mess after a ski patrol strike</p>
              </div>
              <div className='flex flex-col gap-2 min-w-60 pl-2 md:pl-0 md:border-none border-r-2 border-r-gray-300'>
                  <h4 className='font-semibold text-base text-secondary-dark'>TRAVEL</h4>
                  <p className='text-white'>Park City skiers said their resort vacation was a mess after a ski patrol strike</p>
              </div>
              <div className='flex flex-col gap-2 min-w-60 pl-2 md:pl-0'>
                  <h4 className='font-semibold text-base text-secondary-dark'>TRAVEL</h4>
                  <p className='text-white'>Park City skiers said their resort vacation was a mess after a ski patrol strike</p>
              </div>
          </div>
          <div className='md:w-2/3 md:px-5 xs:mt-3 xs:w-full'>
              <div className=' flex flex-col gap-2 group cursor-pointer'>
                  <Image src="/images/Main_blogs_img1.png" width={750} height={700} alt="Main-Blogs-img" />
                  <h2 className='font-semibold blog-title'>TikTok's sister app, Lemon8, is now one of the most popular on Apple's App Store. </h2>
                  <p className=''>Skiers at Utah's Park City Mountain Resort say their vacations were spent waiting in painfully long lines and navigating overcrowded trails after hundreds of ski patrollers and mountain safety personnel walked off the job.</p>
              </div>
              <div className='my-3 flex flex-col gap-2 group cursor-pointer'>
                  <Image src="/images/Main_blogs_img2️.png" width={750} height={700} alt="Main-Blogs-img" />
                  <h2 className='font-semibold blog-title'>TikTok's sister app, Lemon8, is now one of the most popular on Apple's App Store. </h2>
                  <p className=''>Skiers at Utah's Park City Mountain Resort say their vacations were spent waiting in painfully long lines and navigating overcrowded trails after hundreds of ski patrollers and mountain safety personnel walked off the job.</p>
              </div>
          </div>
    </div>
  )
}

export default MainBlogs