import Image from 'next/image'
import React from 'react'

const SimpleImage = () => {
    return (
        // if you are maping this component so before using this inside map function remove main, submain div from here and wrap map function with this main and submain div 

        <div className='main flex flex-col justify-center items-center m-auto w-[90%] md:my-8 my-5'>

            <div className="sub-main grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8 w-full mt-10">


                <div
                    className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-1 md:h-80 cursor-pointer">
                    <Image width={1000} height={1000} src="/img.jpeg" loading="lazy" alt="Image of Our Classes" className="absolute inset-0 h-full w-full object-cover object-center" />

                    <div
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-blue-900 opacity-50">
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SimpleImage
