import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Image from 'next/image'

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
            <Image
              width={300}
              layout="responsive"
              height={100}
              loading="lazy"
              quality={100}
              src="/banner1.jpg"
              alt="Banner 1"
            />
          </div>
          <div>
            <Image
              width={300}
              layout="responsive"
              height={100}
              loading="lazy"
              quality={100}
              src="/banner2.jpg"
              alt="Banner 2"
            />
          </div>
          <div>
            <Image
              width={300}
              layout="responsive"
              height={100}
              loading="lazy"
              quality={100}
              src="/banner3.jpg"
              alt="Banner 3"
            />
          </div>
        </Carousel>
      </div>
    </>
  )
}

export default Banner
