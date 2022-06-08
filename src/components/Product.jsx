import Image from 'next/image'
import { useState } from 'react'
import { StarIcon } from '@heroicons/react/solid'
import Currency from 'react-currency-formatter'
import Link from 'next/link'
import Fade from 'react-reveal/Fade'
import { EyeIcon } from '@heroicons/react/outline'
import { useDispatch } from 'react-redux'
import { addToBasket } from '../slices/basketSlice'
import { toast } from 'react-toastify'

const MAX_RATING = 5
const MIN_RATING = 1

function Product({ id, title, price, description, category, image }) {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  )

  const dispatch = useDispatch()

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      rating,
      description,
      category,
      image,
    }
    //sends product as an action to the REDUX store
    dispatch(addToBasket(product))
  }

  const notify = () => {
    const product = {
      id,
      title,
    }
    toast.success(
      <div>
        <p className="font-semibold">Product Added Successfully !!</p>
        <p className="text-xs text-gray-400 line-clamp-1"> {product.title}</p>
      </div>,
      {
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      }
    )
  }

  return (
    <>
      <Fade bottom>
        <>
          <div className="relative z-40 mx-5 my-3 flex h-[96%] flex-col rounded-2xl border-none bg-white p-10 shadow-sm transition-all duration-150 ease-out hover:scale-105 hover:ease-in">
            <p className="absolute top-2 right-3 text-base capitalize italic text-gray-400">
              {category}
            </p>
            <div className="relative my-2 rounded-lg text-center transition-all duration-150 ease-out hover:scale-105 hover:opacity-100 hover:ease-in">
              <Image
                src={image}
                alt={title}
                height={200}
                width={200}
                objectFit="contain"
                className="cursor-pointer overflow-hidden rounded-lg  transition-all duration-150 ease-out hover:ease-in "
                loading="lazy"
              />
              <div
                // onClick={() => setShowQuick(true)}
                className="absolute top-0 left-0 z-10 flex h-full  w-full cursor-pointer items-center justify-center rounded-lg bg-gray-500 opacity-0 transition-all duration-150 ease-out hover:scale-105 hover:bg-opacity-50 hover:opacity-100 hover:ease-in"
              >
                <div className="button flex w-fit rounded-lg py-2 px-3 ">
                  <span className="mr-1 pt-0.5 text-sm font-medium">
                    Quick View
                  </span>
                  <EyeIcon className="h-6" />
                </div>
              </div>
            </div>
            <Link href={`/product/${id}`}>
              <h4 title={title} className="my-3 font-semibold">
                {title}
              </h4>
            </Link>

            <div className="flex">
              {Array(rating)
                .fill()
                .map((_, i) => (
                  <StarIcon className="h-5 text-yellow-500" key={i} />
                ))}
            </div>

            <p className="my-2 text-xs line-clamp-2">{description}</p>

            <div className="mb-5 font-medium">
              <Currency quantity={price} currency="INR" />
            </div>

            <button
              className="button mt-auto "
              onClick={() => {
                addItemToBasket()
                notify()
              }}
            >
              Add To Basket
            </button>
          </div>
        </>
      </Fade>
    </>
  )
}

export default Product
