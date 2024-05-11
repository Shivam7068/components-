import Image from 'next/image'

const SimpleCard = () => {
    return (

        // if you are maping this component so before using inside map function remove main div from here and wrap map function with this class

        <div className='main flex w-[90%] items-center m-auto flex-wrap  gap-3 justify-center mt-2'>


            <div className='flex flex-col w-full sm:w-[calc(50%-10px)] md:w-[calc(33.33%-10px)] lg:w-[calc(25%-10px)] bg-gray-300 flex-wrap justify-center gap-4 rounded-xl overflow-hidden'>

                {/* under this div we will have our card image */}
                <div className='w-full overflow-hidden h-[25vh] bg-gray-500'>
                    <Image width={1000} height={1000} className='w-full duration-200 hover:scale-110' src={"/img.jpeg"} />
                </div>

                {/* under this we will have our card content */}
                <div className='flex flex-col m-auto justify-center gap-2 py-2  '>
                    <h1 className='text-center font-bold text-xl '>
                        Heading here
                    </h1>
                    <p className='mx-3'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nulla nam facere, mollitia nihil facilis accusantium cum. Recusandae, doloribus reprehenderit.
                    </p>
                </div>
            </div>



        </div>
    )
}

export default SimpleCard
