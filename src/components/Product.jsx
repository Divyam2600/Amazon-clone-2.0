import Image from "next/image";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import Link from "next/link";
import Fade from 'react-reveal/Fade';
import { EyeIcon } from "@heroicons/react/outline";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";
import { toast } from 'react-toastify';



const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({id, title, price, description, category, image}) {
    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING +1)) + MIN_RATING
    )

    const dispatch = useDispatch();

    const addItemToBasket = () =>{
        const product = {
          id, title, price, rating, description, category, image
        }
        //sends product as an action to the REDUX store
        dispatch(addToBasket(product))
    }

    const notify = () => {
        const product = {
            id, title
          }
        toast.success(
            <div> 
                <p className="font-semibold">Product Added Successfully !!</p> 
                <p className="text-xs line-clamp-1 text-gray-400"> {product.title}</p>
            </div>
            ,{
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
    }

    return (
        <>
            <Fade bottom>
                <>
                    <div className="relative flex flex-col mx-5 my-3 bg-white z-40 p-10 border-none rounded-2xl h-[96%] shadow-sm hover:scale-105 transition-all ease-out hover:ease-in duration-150" >
                        <p className="absolute top-2 right-3 text-base italic text-gray-400 capitalize">{category}</p>
                        <div className="my-2 relative rounded-lg text-center hover:opacity-100 hover:scale-105 transition-all ease-out hover:ease-in duration-150">
                            <Image 
                                src={image} 
                                height={200} 
                                width={200} 
                                objectFit="contain" 
                                className="cursor-pointer rounded-lg overflow-hidden  transition-all ease-out hover:ease-in duration-150 "
                                loading='lazy'
                            />
                            <div 
                            // onClick={() => setShowQuick(true)} 
                            className="rounded-lg cursor-pointer bg-gray-500 w-full h-full absolute  top-0 left-0 z-10 flex items-center justify-center opacity-0 hover:opacity-100 hover:bg-opacity-50 hover:scale-105 transition-all ease-out hover:ease-in duration-150">
                                <div className="button rounded-lg flex w-fit py-2 px-3 ">
                                    <span className="text-sm font-medium pt-0.5 mr-1">Quick View</span>
                                    <EyeIcon className="h-6" />
                                </div>
                            </div>
                        </div>
                        <Link href={`/product/${id}`}>
                            <h4 title={title} className="my-3 font-semibold">{title}</h4>
                        </Link>

                        <div className="flex">
                            {Array(rating)
                                .fill()
                                .map((_,i) => (
                                <StarIcon className="h-5 text-yellow-500" />
                            ))}
                        </div>

                        <p className="text-xs my-2 line-clamp-2">{description}</p>

                        <div className="mb-5 font-medium">
                            <Currency quantity={price} currency="INR"/>
                        </div>

                        <button className="mt-auto button " onClick={()=> {addItemToBasket(); notify();}}>Add To Basket</button>
                    </div>
                </>
            </Fade>
        </>

    )
}

export default Product
