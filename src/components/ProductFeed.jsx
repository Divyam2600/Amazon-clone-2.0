import Product from './Product'
import { ToastContainer } from 'react-toastify'

function ProductFeed({ products }) {
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
      <div className="relative z-30 mx-auto grid max-w-screen-2xl grid-flow-row-dense rounded-md border-none shadow-md md:-mt-36 md:grid-cols-2 lg:-mt-52 lg:grid-cols-3 xl:grid-cols-4">
        {/* z-30 relative max-w-screen-2xl mx-auto   */}
        {products
          .slice(0, 4)
          .map(({ id, title, price, description, category, image }) => (
            <Product
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          ))}

        <img
          className="my-2 md:col-span-full"
          src="/product_feed_banner.jpg"
          alt=""
        />

        <div className="md:col-span-2">
          {products
            .slice(4, 5)
            .map(({ id, title, price, description, category, image }) => (
              <Product
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
              />
            ))}
        </div>

        {products
          .slice(5, products.length)
          .map(({ id, title, price, description, category, image }) => (
            <Product
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          ))}
      </div>
    </>
  )
}

export default ProductFeed
