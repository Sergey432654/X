import Link from "next/link";
import Image from "next/image";

export default function Header(){
    return(
        <header className="border-b border-white/10 px-3 py-4 flex items-center justify-between bg-black ">
            <Link
            href='/'
            className="flex item-center gap-3"
            >
            <Image
            src="/X_Logo.png"
            alt="X logo"
            width={28}
            height={28}
            priority
            />
            </Link>
            <nav className="flex gap-6 text-sm">
                <Link href='/'>Home</Link>
                <Link href='/'>Explore</Link>
                <Link href='/'>Profile</Link>
            </nav>
        </header>
    )
}