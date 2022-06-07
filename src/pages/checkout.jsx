import Image from 'next/image'
import { useSelector } from 'react-redux'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CheckoutProduct from '../components/CheckoutProduct'
import { selectItems, selectTotal } from '../slices/basketSlice'
import Currency from 'react-currency-formatter'
import { useSession } from 'next-auth/react'
import { ToastContainer } from 'react-toastify'
import { groupBy } from 'lodash'
import { TransitionGroup } from 'react-transition-group'
import { CSSTransition } from 'react-transition-group'
import {loadStripe} from '@stripe/stripe-js';
import axios from 'axios'
import { CreditCardOutline } from 'heroicons-react'

const stripePromise = loadStripe(process.env.stipe_public_key)

function Checkout() {
  const items = useSelector(selectItems)
  const total = useSelector(selectTotal)
  const { data: session } = useSession()

  const createCheckoutSession = async () =>{
    const stripe = await stripePromise

    const checkoutSession = await axios.post('/api/create-checkout-session',{
      items,
      email: session.user.email
    })
    //Redirect user to stripe checkout
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id
    })
    if(result.error){
      alert(result.error.message)
    }
  }

  const groupItems = Object.values(groupBy(items, 'id'))
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
      <div className="bg-gray-100">
        <Header />
        <main className="mx-auto h-full max-w-screen-2xl lg:flex">
          {/* Left */}
          <div className="m-5 flex-grow shadow-sm">
            <Image
              src="/checkout_banner.png"
              alt="Checkout_Banner"
              width={980}
              height={250}
              objectFit="contain"
              className=""
            />
            <div className="flex flex-col space-y-6 bg-white p-5">
              <h1 className="border-b pb-4 font-sans text-3xl font-semibold">
                {items.length === 0
                  ? 'Your Basket is Empty'
                  : 'Your Shopping Basket'}
              </h1>
              <TransitionGroup>
                {groupItems.map((group, i) => (
                  <CSSTransition key={group[0].image} timeout={500} classNames="item">
                    <CheckoutProduct
                      key={i}
                      id={group[0].id}
                      title={group[0].title}
                      rating={group[0].rating}
                      price={group[0].price}
                      description={group[0].description}
                      category={group[0].category}
                      image={group[0].image}
                      quantity={group.length}
                    />
                  </CSSTransition>
                ))}
              </TransitionGroup>
            </div>
          </div>
          {/* Right */}
          <CSSTransition in={items.length > 0} timeout={300} classNames="disappear" unmountOnExit>
                <div className="my-5 mx-5 flex flex-col bg-white p-3 shadow-md">
                  <h2 className="whitespace-nowrap text-center font-semibold text-xl">
                    SubTotal ({items.length} items) :
                    <span className="ml-1 font-bold text-xl text-gray-800">
                      <Currency quantity={total} currency="INR" />
                    </span>
                  </h2>
                  <button
                  role="link"
                  onClick={createCheckoutSession}
                    className={`button mt-2 flex justify-center items-center ${
                      !session && 'inactive cursor-not-allowed text-gray-300'
                    }`}
                    disabled={!session}
                  >
                    <CreditCardOutline className="h-8 w-8"/>
                    <a className="text-lg font-bold ml-2 mt-[1.5px]">{!session ? 'Sign In to CheckOut' : 'Proceed To CheckOut'} </a>
                  </button>
                </div>
          </CSSTransition>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Checkout
