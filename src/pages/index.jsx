import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import ProductFeed from '../components/ProductFeed'
import 'react-toastify/dist/ReactToastify.css'
import { getSession } from 'next-auth/react'

export default function Home({ products }) {
  return (
    <div className="bg-gray-100 font-sans">
      <Head>
        <link rel="icon" src="/favicon.ico" />
        <title>E-Commerce Web</title>
      </Head>
      <Header products={products} />
      <main className="max-h-screen-1xl mx-auto max-w-screen-2xl">
        <Banner />
        <ProductFeed products={products} />
      </main>
      <Footer />
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)
  const products = await fetch('https://fakestoreapi.com/products').then(
    (res) => res.json()
  )
  return {
    props: {
      products,
      session,
    },
  }
}
