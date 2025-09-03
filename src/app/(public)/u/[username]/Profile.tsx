'use client'
import { useParams } from "next/navigation"
export default function Profile(){
    const params = useParams<{username: string}>()
    return(
        <div>
            Profie @{params.username}
        </div>
    )

}