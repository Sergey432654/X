import { PAGES } from "@/app/config /pages.config"
import Link from "next/link"
export default function Menu(){
    return(
        <nav className="flex gap-6 text-sm">
            <Link href={PAGES.HOME}>Home</Link>
            <Link href={PAGES.EXPLORE}>Explore</Link>
            <Link href={PAGES.PROFILE_FAKE}>Profile</Link>
        </nav>
    )
}