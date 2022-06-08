import { TrashIcon } from '@heroicons/react/outline'
import { StarIcon, MinusSmIcon, PlusIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import Currency from 'react-currency-formatter'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { ToastContainer } from 'react-toastify'
import {
  addToBasket,
  removeFromBasket,
  removeGroupedFromBasket,
} from '../slices/basketSlice'

function CheckoutProduct({
  id,
  title,
  rating,
  price,
  description,
  category,
  image,
  quantity,
}) {
  const dispatch = useDispatch()
  const total = quantity * price
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
    toast.success(
      <div>
        <p className="font-semibold">Product Increased</p>
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
  const removeItemFromBasket = () => {
    const product = {
      id,
      title,
    }
    //remove product as an action from the REDUX store
    dispatch(removeFromBasket({ id }))
    toast.success(
      <div>
        <p className="font-semibold">Product Decreased</p>
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

  const removeGroupFromBasket = () => {
    const product = {
      id,
      title,
    }
    //remove product as an action from the REDUX store
    dispatch(removeGroupedFromBasket({ id }))

    toast.error(
      <div>
        <p className="font-semibold">Product Removed Successfully</p>
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
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="border-b py-4">
        <div className="grid grid-cols-5 ">
          <Image
            src={image}
            alt={title}
            width={200}
            height={200}
            objectFit="contain"
          />
          {/* Middle */}
          <div className="col-span-4 mx-5 sm:col-span-3">
            <p>{title}</p>
            <div className="flex">
              {Array(rating)
                .fill()
                .map((_, i) => (
                  <StarIcon key={i} className="h-5 text-yellow-500" />
                ))}
            </div>
            <p className="my-2 text-xs line-clamp-3">{description}</p>
            <a className="text-xl font-bold text-gray-800">{quantity}</a> x{' '}
            <a className="text-xl font-bold text-gray-800">
              <Currency quantity={price} currency="INR" />
            </a>
            <span className="text-xl font-bold text-gray-800">
              <Currency quantity={total} currency="INR" />
            </span>
          </div>
          <div className="-mr-2 hidden flex-col space-y-2 justify-self-end sm:flex">
            <div className="flex items-center justify-center space-x-3 ">
              <button className=" button mt-6 " onClick={removeItemFromBasket}>
                <MinusSmIcon className="h-4 md:h-6" />
              </button>
              <p className="mt-5 text-2xl font-bold">{quantity}</p>
              <button className=" button mt-6 " onClick={addItemToBasket}>
                <PlusIcon className="h-4 md:h-6" />
              </button>
            </div>
            <button
              className=" button mt-6 flex items-center justify-center"
              onClick={removeGroupFromBasket}
            >
              <TrashIcon className="h-8 w-8" />
              <a className="ml-2 text-base font-semibold">Remove </a>
            </button>
          </div>
        </div>
        <div className="-mr-2 flex flex-col space-y-2 justify-self-end sm:hidden">
          <div className="flex items-center justify-center space-x-3 ">
            <button className=" button mt-6 " onClick={removeItemFromBasket}>
              <MinusSmIcon className="h-4 md:h-6" />
            </button>
            <p className="mt-5 text-2xl font-bold">{quantity}</p>
            <button className=" button mt-6 " onClick={addItemToBasket}>
              <PlusIcon className="h-4 md:h-6" />
            </button>
          </div>
          <button
            className=" button mt-6 flex items-center justify-center"
            onClick={removeGroupFromBasket}
          >
            <TrashIcon className="h-5 w-5" />
            <a className="mt-[1.5px] ml-2 text-base font-semibold">
              Remove From Basket
            </a>
          </button>
        </div>
      </div>
    </>
  )
}

export default CheckoutProduct
