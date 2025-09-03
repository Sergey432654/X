'use client'
import Header from "@/components/header";
import { usePathname } from "next/navigation";
import type { PropsWithChildren } from "react";
import { PAGES } from "../../config /pages.config";

export default function Layout({children}:
    PropsWithChildren<unknown>){
        const way = usePathname();
        return(
        <div className="min-h-screen px-4 py-8">
            <Header/>
            <div className={way === PAGES.HOME ? 'flex justify-center max-w-xl' : 'flex justify-center'}>{children}</div>
        </div>
        )
    }