'use client'
import { PAGES } from "@/app/config /pages.config"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { MENU } from "./menu.data";
import { MenuItem } from "./MenuItem";
export default function Menu(){
    const pathname = usePathname() ;
    return(
        <nav className="flex gap-6 text-sm">
            {MENU.map(menuItem => (
            <MenuItem 
                key={menuItem.name}
                menuItem={menuItem}
                isActive={pathname === menuItem.href}
            />
            ))}
        </nav>
    )
}