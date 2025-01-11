import Image from 'next/image'
import React from 'react'
import Views from './Views'

const PopularGreenBlogCard = () => {
    return (
        <div className={`PopularGreenBlogCard bg-primary flex flex-col gap-3 pt-4  rounded-lg min-w-60 xs:hidden md:block cursor-pointer group`}>
          <div className='flex flex-col gap-3 px-4'>
              <h2 className='blog-title'>Jennifer Love Hewitt, 45, says fans have a 'hard time' accepting that she doesn't look like she did in her 20s</h2>
              <p className='text-white'>In a survey published in Harvard Business Review, women in leadership roles reported facing workplace age discrimination at every age bracket. In a survey published in Harvard Business Review, women in leadership roles reported facing workplace age discrimination at every age bracket</p>
              <div>
              <Views viewscount={1.1}  />
              </div>
          </div>
          <div>
              <Image src='/images/popular_blogs_img2.png' alt='popular-green-blog' className='w-full max-h-[20rem] rounded-bl-lg rounded-br-lg' width={300} height={290} />
          </div>
    </div>
  )
}

export default PopularGreenBlogCard