'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavbarItem({ title, param }) {
  const genre = usePathname().split('/')[2];
  console.log(genre);

  return (
    <div >
      <Link href={`/top/${param}`} className={`hover:text-amber-600 font-semibold ${genre === param ? 'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg' : '' }`}>
        {title}
      </Link>
    </div>
  );
}

export default NavbarItem;
