import { ArchiveBoxIcon, ArchiveBoxXMarkIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
import Image from 'next/image';
import Link from 'next/link';
import AddToCart from "./AddToCart";
const BookCard = ({book}) => {
  
  return (
    <Link href={`/store/${book.id}`}>
      <div className="flex flex-col items-center rounded-xl bg-gray-300 p-2 m-2 shadow-md">
        <div className="flex p-4">
          <h3 className="ml-2 text-md font-bold">{book.title}</h3>
        </div>
        <div className="mb-2 h-13">
          <Image
            className='rounded-md' 
            src={book.cover}
            alt={book.title}
            height={200}
            width={150}
            style={{height: '200px', width: 'auto'}}
            priority={true}
          />
        </div>
        <div className="flex flex-col justify-around truncate rounded-xl bg-slate-200 px-4 py-8 w-full text-xs">
          <div className="flex justify-around">
            <div>{book.stock ? 
              <div className="flex">
                <ArchiveBoxIcon className="w-5 mr-1"/> 
                <span className="text-sm">{book.stock} in stock</span>
              </div> : 
              <div className="flex">
                <ArchiveBoxXMarkIcon className="w-5 mr-1"/>
                <span className="text-sm">No Stock</span>
              </div>  }
            </div> 
            <div className='flex'>
              <CurrencyDollarIcon className="w-6 mr-1" /> <span className="text-sm"> {book.sellPrice} to buy</span>
            </div>
          </div>
          <div className="mt-2 text-center">
            <p className="text-sm">Rent for {book.rentPrice} BDT per month</p>
            <p className="text-xs">{book.isRented ? 
              `Currently this book is rented by ${book?.renterIds?.length} customer` : 
              `Currently no one has rented this book`}</p>
          </div>
          <AddToCart book={book} />
          
        </div>
      </div>
    </Link>
  )
}

export default BookCard