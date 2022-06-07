import Header from '../components/Header'
import Footer from '../components/Footer'
import ErrorCard from '../components/ErrorCard'

function Error() {
  return (
    <div>
      <Header />
      <div className=' w-4/5 justify-center items-center flex h-full mx-auto my-4 '>
        <ErrorCard />
      </div>
      <Footer />
    </div>
  )
}

export default Error