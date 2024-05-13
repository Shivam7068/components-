import Center_Heading from '@/components/(ui)/Heading/Center_Heading';
import Heading from '@/components/(ui)/Heading/Heading';
import Left_Heading from '@/components/(ui)/Heading/Left_Heading';
import IconCard from '@/components/(ui)/cards/IconCard';
import SimpleCard from '@/components/(ui)/cards/SimpleCard'
import SmallCard from '@/components/(ui)/cards/SmallCard';
import Form_Detail from '@/components/(ui)/forms/Form_Detail';
import Form_image from '@/components/(ui)/forms/Form_image';
import PatternImage from '@/components/(ui)/imageGallery/PatternImage';
import SimpleImage from '@/components/(ui)/imageGallery/SimpleImage';
import GridCard from '@/components/(ui)/testimonialCards/GridCard';

const page = () => {
  return (
    <div>
      <h1 className='text-center text-3xl font-bold text-red-500'>
        before using all these components Please clear page.js file
      </h1>

      <div className=' w-full flex flex-col gap-5'>
        <h1 className='text-center text-3xl font-bold'>
          Cards
        </h1>

        <SimpleCard />

        <SmallCard />

        <IconCard />
      </div>

      <div>
        <h1 className='text-center text-3xl font-bold'>
          Image  Gallery
        </h1>

        <PatternImage />

        <SimpleImage />
      </div>

      {/* <div>
        <h1 className='text-center text-3xl font-bold'>
          Testimonial cards
        </h1>

        <GridCard />
      </div> */}

      <div>
        <h1 className='text-center text-3xl font-bold'>
          Forms
        </h1>
        <Form_Detail />
        <Form_image />
      </div>

      <div>
        <h1 className='text-center text-3xl font-bold'>
          Heading
        </h1>
        <Center_Heading name={"oskoo"} />
        <Left_Heading name={"text"} />
        <Heading name={"Text"} />
      </div>
    </div >
  )
}

export default page
