import React from 'react'
import Heading from '../shared/Heading'
import { blogData } from '../../constant/blogData'

const Blog = () => {
  return (
    <div className='my-12'>
      <div className="container">
        {/* heading section */}
        <Heading
            title={"Recent News"}
            subtitle={"Explore new blogs"}
        />
        {/* blog sectin */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
            gap-6 gap-y-8 sm:gap-4 md:gap-7'>
            {/* blog card */}
            {blogData.map((data,index)=>(
                <div key={index} className='bg-white dark:bg-gray-900'>
                    {/* imgage section */}
                    <div className='overflow-hidden rounded-2xl mb-2'>
                        <img src={data.image} alt="" 
                            className='w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-300'
                        />
                    </div>
                    {/* content sectin */}
                    <div className='space-y-2'>
                        <p className='text-xs text-gray-400'>{data.published}</p>
                        <p className='font-bold line-clamp-1'>{data.title}</p>
                        <p className='line-clamp-2 text-sm text-gray-600 dark:text-gray-400'>{data.subtitle}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Blog
