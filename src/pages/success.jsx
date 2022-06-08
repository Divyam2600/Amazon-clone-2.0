import Header from '../components/Header'
import Footer from '../components/Footer'
import SuccessCard from '../components/SuccessCard'

function Success() {
  return (
    <div className="">
      <Header />
      <div className=" mx-auto my-4 flex h-full w-4/5 items-center justify-center ">
        <SuccessCard />
      </div>
      <Footer />
    </div>
  )
}

export default Success
