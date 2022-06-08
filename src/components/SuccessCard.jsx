import Confetti from 'react-confetti'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCartIcon } from '@heroicons/react/outline'

function SuccessCard() {
  return (
    <div className="">
      <Confetti height={765} width={700} className="mx-auto my-4" />
      <div className=" flex flex-col rounded-md border bg-green-300 px-10 pb-10 shadow-lg ">
        <Image
          src="/success.png"
          alt="Success"
          width={300}
          height={400}
          className="items-center"
          quality={100}
        />
        <h1 className="m-auto mb-5 text-6xl font-semibold text-black">
          Success !!!
        </h1>
        <p className="text-center text-xl font-semibold">
          Your Order has been placed successfully!!
        </p>
        <p className="text-center text-xl font-semibold">
          It willl be delivered soon.
        </p>
        <Link href="/">
          <button className="link mx-auto mt-4 flex w-3/4 items-center justify-evenly rounded-2xl border-none bg-green-600 p-4 text-xl font-semibold text-white shadow-md">
            <ShoppingCartIcon className="text-md h-10" />
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  )
}

export default SuccessCard
