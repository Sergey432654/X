import Header from "@/components/header";
import type { PropsWithChildren } from "react";

export default function Layout({children}:
    PropsWithChildren<unknown>){
        return(
            <div className="">
                <Header/>
                <div className=" flex justify-center">{children}</div>
            </div>
        )
    }