import { HomeIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import Link from 'next/link'

function SuccessCard() {
  return (
    <div className="">
      <div className=" flex flex-col rounded-2xl border bg-red-200 px-10 pb-10 shadow-md ">
        <Image
        src="/error.png"
          width={300}
          height={400}
          className="items-center"
          quality={100}
        />
        <h1 className="m-auto mb-5 text-6xl font-semibold text-black">
          Error 404 !!!
        </h1>
        <p className="text-center text-xl font-semibold">
          Sorry!! You have landed on the wrong page.
        </p>
        <p className="text-center text-xl font-semibold">
          Please return to the homepage.
        </p>
        <Link href="/">
          <button className="mx-auto mt-4 w-3/4 items-center rounded-2xl border-none bg-red-600 p-4 text-xl font-semibold justify-evenly text-white shadow-md link flex">
          <HomeIcon className="h-10 text-md" />
            Return To HomePage
          </button>
        </Link>
      </div>
    </div>
  )
}

export default SuccessCard
