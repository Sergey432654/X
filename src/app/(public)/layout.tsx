import Header from "@/components/header";
import type { PropsWithChildren } from "react";

export default function Layout({children}:
    PropsWithChildren<unknown>){
        return(
        <div className="min-h-screen px-4 py-8">
            <Header/>
            <div className="flex justify-center max-w-[750px] scroll-ps-6">{children}</div>
        </div>
        )
    }