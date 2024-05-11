import IconCard from '@/components/cards/IconCard';
import SimpleCard from '@/components/cards/SimpleCard'
import SmallCard from '@/components/cards/SmallCard';
import PatternImage from '@/components/imageGallery/PatternImage';
import SimpleImage from '@/components/imageGallery/SimpleImage';

const page = () => {
  return (
    <div>
      <h1 className='text-center text-3xl font-bold text-red-500'>
        before using all these components Please clear page.js file
      </h1>

      <div className=' w-full'>
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
    </div >
  )
}

export default page
