
import type { Metadata } from "next"
import ProfilFake from "./ProfilFake";
export const metadata: Metadata = {
    title: 'ProfilFake'
}
export default function ProfileFake(){
    return(
        <>
           <ProfilFake/>
        </>
    )
}