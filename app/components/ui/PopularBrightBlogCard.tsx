import Image from 'next/image'
import React, { use } from 'react'
import Views from './Views'

const PopularBrightBlogCard = ({img}:{img:string}) => {

  return (
      <div className='md:flex flex flex-col md:flex-row md:mt-0 mt-5 bg-secondary-light rounded-lg md:gap-2 cursor-pointer group' >
          <div className=" md:flex flex flex-col gap-2 p-3 md:w-2/3">
              <h4 className='blog-title'>Jennifer Aniston, 55, says she keeps her diet in check with the '80/20' rule</h4>
              <p className='blog-desc'>In a survey published in Harvard Business Review, women in leadership roles reported facing workplace age discrimination at every age bracket. In a survey published in Harvard Business Review, women in leadership roles reported facing workplace age discrimination at every age bracket</p>
              <Views viewscount={1.1}  />
          </div>
          <Image src={img} className={`xs:w-full xs:max-h-60 object-cover rounded-bl-lg rounded-br-lg md:w-1/3 md:rounded-bl-none md:rounded-tr-lg`}  alt='popular-bright-blog' width={200} height={230} />
    </div>
  )
}

export default PopularBrightBlogCard