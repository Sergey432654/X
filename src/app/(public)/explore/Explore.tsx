'use client'

import { useSearchParams } from "next/navigation"

export default function Explore(){
    
    const searchParams = useSearchParams()
    const tag = searchParams.get('tag')
    return(
        <h1 className="text-3xl font-bold mb-6">{!!tag && `by #${tag}`}
        </h1>
    )
}