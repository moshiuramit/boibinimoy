import { BookmarkIcon } from "@heroicons/react/24/solid";
import Image from 'next/image';
import Link from "next/link";
import backgroundImage from '../../public/home/book-bg.jpg';
export default function Home() {
  return (
      <div className='flex flex-col relative justify-center items-center h-screen'>
        <Image
          className='blur-sm' 
          src={backgroundImage}
          alt='Background Image Books'
          fill
          sizes='100vw'
          style={{objectFit: "cover"}}
        />

        <div className='flex flex-col justify-center items-center z-10 bg-purple-100  rounded-md p-2 lg:w-2/5 h-1/4'>
          <div className='flex pb-5 mb-5 text-5xl text-purple-800'>
            <BookmarkIcon  className="w-12 h-12" />
            <p>Boi Binimoy</p>
          </div>
          <div>
            <Link 
              href="/store"
              className="bg-purple-700 text-white hover:bg-purple-900 p-3 rounded-sm text-lg text mr-2">Take me to the Store</Link>
          </div>
        </div>
      </div>
      
  )
}
