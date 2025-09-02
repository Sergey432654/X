'use client'
import { PAGES } from "@/app/config /pages.config"
import Link from "next/link"
import { usePathname } from "next/navigation"
export default function Menu(){
    const pathname = usePathname() ;
    return(
        <nav className="flex gap-6 text-sm">
            <Link className={pathname === PAGES.HOME ? 'text-white' : 'text-white/80'} href={PAGES.HOME}>Home</Link>
            <Link className={pathname === PAGES.EXPLORE ? 'text-white' : 'text-white/80'} href={PAGES.EXPLORE}>Explore</Link>
            <Link className={pathname === PAGES.PROFILE_FAKE ? 'text-white' : 'text-white/80'}href={PAGES.PROFILE_FAKE}>Profile</Link>
        </nav>
    )
}