'use client'
import { useRouter } from "next/navigation"
import { PAGES } from "@/app/config /pages.config"

export default function ProfilFake(){
    const rout = useRouter()
    return(
            <>
                <span className="bg-blue-500">fafffewfq</span>
                <button onClick={() => rout.push(PAGES.HOME)}>Go to home</button>
            </>
        )      
}