import Image from 'next/image'
import React from 'react'

const SmallCard = () => {
    return (
        // if you are maping this component so before using this component inside map function remove main div from here and wrap map function with this main class
        <div className='main flex w-[90%] items-center m-auto flex-wrap gap-3 mt-2'>

            <div className='flex  w-full sm:w-[calc(50%-10px)] md:w-[calc(33.33%-10px)] lg:w-[calc(25%-10px)] flex-col bg-[#eee] border-none shadow-none items-center justify-center relative before:absolute before:content-["_"] before:h-[80px] before:bg-white before:w-full before:top-0'>

                {/* image  */}
                <div className=' flex outline-none border-none w-full justify-center items-center'>

                    <div className='flex w-[150px] h-[150px] rounded-full overflow-hidden z-[99] border-4 border-white '>

                        <Image width={1000} height={1000} className='h-full w-full' src="/img.jpeg" alt="" />

                    </div>

                </div>

                {/* Title and quote */}
                <div className='text-center flex flex-col gap-5 py-[2px]'>
                    <h1 className='text-lg font-bold text-blue-500'>
                        Title
                    </h1>
                    <p className='border-t-2 py-[20px] border-dashed border-gray-600'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ea iusto sint neque soluta iste, nisi aliquid reiciendis assumenda itaque?
                    </p>
                </div>
            </div>


        </div>

    )
}

export default SmallCard
