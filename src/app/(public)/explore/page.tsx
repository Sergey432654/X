import Explore from "./Explore"
import { Suspense } from "react"

export default function ExplorePage(){
    return(
        <Suspense>
            <Explore/>
        </Suspense>
    )
}