
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="flex justify-between flex-wrap p-3">
      <ul className="flex">
        <li><Link href="/">Home</Link></li>
        <li className="ml-3"><Link href="/dashboard">Dashboard</Link></li>
      </ul>

      <ul className="flex">
        <li><Link href="/about">About Us</Link></li>
        <li className="ml-3"><Link href="/contact">Contact us</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar