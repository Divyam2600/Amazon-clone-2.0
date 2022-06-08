import Header from '../components/Header'
import Footer from '../components/Footer'
import ErrorCard from '../components/ErrorCard'

function Error() {
  return (
    <div>
      <Header />
      <div className=" mx-auto my-4 flex h-full w-4/5 items-center justify-center ">
        <ErrorCard />
      </div>
      <Footer />
    </div>
  )
}

export default Error
