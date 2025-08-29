import Header from "@/components/header";
import type { PropsWithChildren } from "react";

export default function Layout({children}:
    PropsWithChildren<unknown>){
        return(
            <div>
                <Header/>
                {children}
            </div>
        )
    }