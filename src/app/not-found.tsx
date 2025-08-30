import Link from "next/link"

export default function NotFound(){
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center ">
            <h1 className="text-9xl font-bold ">404</h1>
            <p className=" text-neutral-600 mb-6">this page not exist</p>
            <Link className="text-sm text-blue-600 hover:underline" href='./'>Back to the future</Link>
        </div>
    )

}