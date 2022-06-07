import Header from '../components/Header'
import Footer from '../components/Footer'
import SuccessCard from '../components/SuccessCard'

function Success() {
  return (
    <div className="">
      <Header />
      <div className=' w-4/5 justify-center items-center flex h-full mx-auto my-4 '>
        <SuccessCard />
      </div>
      <Footer />
    </div>
  )
}

export default Success
