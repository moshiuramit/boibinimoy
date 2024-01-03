
'use client'

import { useRouter } from "next/navigation";
const NavButton = () => {
  const router = useRouter();
  return (
    <button type='button' onClick={() => router.push('/')}>Take me to the Home</button>
  )
}

export default NavButton