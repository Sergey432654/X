import type { ITweet } from "@/shared/types/tweet.interface" 
import Image from "next/image"

interface Props{
    tweet: ITweet 
}

export default function Tweet({tweet}: Props){
    return(
        <div className="border border-white/10 px-1 py-3 rounded-4xl bg-black">
            <div className="flex items-center gap-3 mb-2">
                <Image
                src="/X_Logo.png"
                alt="X-logo"
                width="24"
                height="24"
                />
                <span className="white">@{tweet.author}</span>
            </div>
             <p className="font-semibold">{tweet.text}</p>
        </div>

    )


}
