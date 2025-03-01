import Link from "next/link";
import DarkMode from "./DarkMode";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

function Header() {
  return (
    <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
      <ul className='flex gap-4'>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <li> <Link href={'/sign-in'}> Sign in </Link> </li>
        </SignedOut>
        <li className='hidden sm:block'> <Link href={'/'}> Home </Link> </li>
        <li className='hidden sm:block'> <Link href={'/'}> About </Link> </li>
      </ul>
      <div className='flex gap-1 items-center'>
        <DarkMode />
        <Link href={'/'} className='flex gap-1 items-center'>
          <span className='text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg'> IMDb </span>
          <span className='text-2xl hidden sm:inline'> Clone </span>
        </Link>
      </div>
    </div>
  );
}

export default Header;
