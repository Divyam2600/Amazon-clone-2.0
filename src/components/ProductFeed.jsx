import Product from "./Product";
import { ToastContainer } from 'react-toastify'

function ProductFeed({products}) {
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
            <div className="z-30 relative max-w-screen-2xl grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-36 lg:-mt-52 mx-auto border-none shadow-md rounded-md">
                            {/* z-30 relative max-w-screen-2xl mx-auto   */}
                {products
                    .slice(0,4)
                    .map(({id, title, price, description, category, image}) =>(
                    <Product
                        key={id}
                        id= {id}
                        title= {title}
                        price= {price}
                        description= {description}
                        category= {category}
                        image= {image}
                    />
                ))}

                <img className="md:col-span-full my-2" src="/product_feed_banner.jpg" alt="" />

                <div className="md:col-span-2">
                {products
                    .slice(4,5)
                    .map(({id, title, price, description, category, image}) =>(
                    <Product
                        key={id}
                        id= {id}
                        title= {title}
                        price= {price}
                        description= {description}
                        category= {category}
                        image= {image}
                    />
                ))}
                </div>

                {products
                    .slice(5,products.length)
                    .map(({id, title, price, description, category, image}) =>(
                    <Product
                        key={id}
                        id= {id}
                        title= {title}
                        price= {price}
                        description= {description}
                        category= {category}
                        image= {image}
                    />
                ))}

            </div>
        </>
    )
}

export default ProductFeed

