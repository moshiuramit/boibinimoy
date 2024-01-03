
import { ArrowLeftStartOnRectangleIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import Logo from './Logo';
import NavLinks from './NavLinks';
const Sidebar = () => {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link className=" bg-red-900 mb-4 flex h-16 items-center justify-start rounded"
        href="/store">
          <div className='w-36 md:w-40'>
            <Logo />
          </div>
        </Link>
      <div className='flex flex-wrap gap-2 justify-center md:grow flex-row md:justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2'>
        <NavLinks />
        <form>
          <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-red-800 md:flex-none md:justify-start md:px-3">
            <ArrowLeftStartOnRectangleIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  )
}

export default Sidebar