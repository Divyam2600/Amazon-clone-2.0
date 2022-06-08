import { getProviders, getSession, signIn } from 'next-auth/react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'
import { HomeIcon, LoginIcon } from '@heroicons/react/outline'
import Image from 'next/image'

export default function SignIn({ providers }) {
  return (
    <div>
      <Header />
      <div className=" mx-auto my-4 flex h-full w-4/5 items-center justify-center ">
        <div className=" flex flex-col rounded-2xl border bg-amazon_blue p-10 font-semibold text-white shadow-md pt-8 ">
          <Image
            src="/amazon.png"
            alt="Amazon"
            width={250}
            height={80}
            objectFit="contain"
            className="cursor-pointer items-center "
            quality={100}
          />
          <hr className='-mx-10 mt-1'/>
          <h1 className="m-auto my-5 text-3xl sm:text-4xl">Welcome To Amazon 2.0 !!!</h1>
          <p className="text-center text-lg md:text-xl">
            Please SignIn with your Google Account
          </p>
          <p className="text-center text-lg md:text-xl">To enjoy our services.</p>
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                onClick={() => signIn(provider.id)}
                className="link mx-auto my-4 flex w-3/4 items-center justify-evenly rounded-2xl bg-green-600 p-4 text-lg md:text-xl font-semibold text-white shadow-md hover:border-none"
              >
                <LoginIcon className="text-md mr-1 h-10" />
                Sign in with {provider.name}
              </button>
            </div>
          ))}
          <p className="text-center text-xl">Note : More Providers will be added soon!!</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export async function getServerSideProps(context) {
  const { req } = context
  const session = await getSession({ req })

  if (session) {
    return {
      redirect: { destination: '/' },
    }
  }
  const providers = await getProviders()
  return {
    props: { providers },
  }
}
