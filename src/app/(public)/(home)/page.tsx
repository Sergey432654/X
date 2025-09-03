import Image from "next/image";
import Tweet  from "./Tweet";
import { TWEETS } from "@/shared/data/rweet.interface";
import TweetForm from "./TweetForm";

export default function Home() {
  return (
     <div className="mx-4 my-4 pan-4">
      <p className="white text-3xl py-5">Home</p>
      <TweetForm/>
              <div className="space-y-6">
               {TWEETS.map(tweet =>
                   <Tweet key={tweet.author}
                   tweet={tweet}
                   />
               )}
            </div>
          </div>
  );
}
