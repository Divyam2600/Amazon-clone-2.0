import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

function Banner() {
  return (
    <>
      <div className="relative">
        <div className="absolute bottom-0 z-20 h-32 w-full bg-gradient-to-t from-gray-100 to-transparent" />
        <Carousel
          showArrows={true}
          showStatus={false}
          autoPlay
          infiniteLoop
          stopOnHover={false}
          emulateTouch={false}
          autoFocus={false}
          showIndicators={false}
          showThumbs={false}
          interval={4000}
        >
          <div>
            <img loading="lazy" src="/banner1.jpg" alt="" />
          </div>
          <div>
            <img loading="lazy" src="/banner2.jpg" alt="" />
          </div>
          <div>
            <img loading="lazy" src="/banner3.jpg" alt="" />
          </div>
        </Carousel>
      </div>
    </>
  )
}

export default Banner
