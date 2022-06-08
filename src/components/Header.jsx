import Image from 'next/image'
import Link from 'next/link'
import Currency from 'react-currency-formatter'
import { useState } from 'react'
import React from 'react'
import {
  SearchIcon,
  ShoppingCartIcon,
  LoginIcon,
} from '@heroicons/react/outline'
import { useSelector } from 'react-redux'
import Navbar from './Navbar'
import { useRouter } from 'next/router'
import { signIn, useSession } from 'next-auth/react'
import { selectItems } from '../slices/basketSlice'

function Header({ products }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [showResults, setShowResults] = useState(false)
  const handleSearch = (e) => {
    let trem = e.target.value
    trem = trem.toLowerCase()
    setSearchTerm(trem)
  }

  if (searchTerm) {
    const searchInput = document.getElementById('searchinput')
    searchInput.classList.remove('rounded-l-lg')
    searchInput.classList.add('rounded-tl-lg')
  }

  const { data: session } = useSession()
  const router = useRouter()
  const items = useSelector(selectItems)

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50 }}>
      {/* Top Navbar */}
      <div className="ns:py-2 flex flex-grow items-center bg-amazon_blue p-1 outline-none ">
        {/* Right Navbar */}
        <>
          <div>
            <Navbar />
          </div>
        </>

        {/* Logo */}
        <div className=" flex-shrink-1 mt-2 flex w-28 items-center xs:w-32">
          <Link href="/">
            <Image
              src="/amazon.png"
              alt="Amazon"
              width={150}
              height={40}
              objectFit="contain"
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* Search Bar */}
        <div className=" relative flex h-10 flex-grow cursor-pointer items-center rounded-lg bg-yellow-400 hover:bg-yellow-500">
          <input
            onMouseEnter={() => setShowResults(true)}
            onBlur={() => setShowResults(false)}
            onFocus={() => setShowResults(true)}
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Grasp Your Demand.."
            className="h-full w-6 flex-grow rounded-l-lg p-2 px-5 focus:w-full focus:outline-none sm:flex-shrink"
            id="searchinput"
            type="text"
          />
          <SearchIcon className="h-12 w-14 p-3"></SearchIcon>

          {showResults && (
            <div
              onMouseEnter={() => setShowResults(true)}
              onMouseOver={() => setShowResults(true)}
              onMouseLeave={() => setShowResults(false)}
              className="absolute bottom-0 z-10 h-auto max-h-96 w-[95.45%] translate-y-full overflow-y-auto rounded-b-md bg-white"
            >
              {searchTerm && (
                <p className="py-2 text-center text-xs text-gray-400">
                  The Product You Are Searching For Does Not Exist
                </p>
              )}
            </div>
          )}
        </div>

        {/* Right Side Items */}
        <div className="mr-3 ml-1 flex items-center space-x-3 whitespace-nowrap text-xs text-white sm:ml-3 sm:space-x-6">
          {/* Name &  Account & Lists */}
          <div className="link hidden hover:block sm:block">
            <>
              {session ? (
                <>
                  <p>Hello, {session.user.name}</p>
                  <p className="font-extrabold md:text-sm">
                    My Account & Lists
                  </p>
                </>
              ) : (
                <>
                  <div
                    className="-mr-2 flex items-center space-x-1 rounded-md border border-none p-1 text-center no-underline transition duration-150 ease-out hover:bg-gray-200 hover:text-amazon_blue hover:ease-in "
                    onClick={() => signIn()}
                  >
                    <LoginIcon className="text-md h-8" />
                    <a className="text-lg font-semibold no-underline">
                      Sign In
                    </a>
                  </div>
                </>
              )}
            </>
          </div>

          {/* Returns & My Order*/}
          <div className="link hidden md:block">
            <p>Returns & </p>
            <p className="font-extrabold md:text-sm">My Orders</p>
          </div>

          {/* Basket */}
          <div
            className="link relative flex items-center"
            onClick={() => router.push('/checkout')}
          >
            <span className="absolute top-0 right-0 h-4 w-4 animate-pulse rounded-full bg-yellow-400 text-center font-black text-black md:right-10">
              {items.length}
            </span>
            <ShoppingCartIcon className="text-md h-10" />
            <p className="mt-2 hidden font-extrabold md:inline md:text-sm">
              Basket
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Navbar */}
      <div className=" flex items-center space-x-3 bg-amazon_blue-light p-2 pl-6 text-sm text-white outline-none">
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today&#39;s Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shoppers Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  )
}

export default Header
