import React, { useEffect, useState } from "react";
import { FaArrowAltCircleRight, FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";

const TryText = {
    description:
      'Our everyday hijabs are designed for maximum comfort and ease. Made from soft, breathable fabrics like cotton and jersey, these hijabs are perfect for daily wear. They come in a variety of colors and patterns, allowing you to mix and match with your everyday outfits. Whether you re at work, school, or out running errands, our everyday hijabs provide the perfect balance of style and practicality.',
    details:
      'Timeless Elegance and Contemporary Style',
  };

const SingleProduct = () => {
    const {id} = useParams()
    const [products, setProducts] = useState([]);
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, []);
    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await fetch("/products.json");
              const data = await response.json();
             const product = data.filter((p) => p.id == id)
             setProducts(product[0])
            } catch (error) {
              console.error("Error fetching data:", error);
            }
          };
      
          fetchData();
    }, [id])

    const {image, title, category, price} = products;


  return (
    <div className="mt-28 max-w-screen-2xl container mx-auto xl:px-28 px-4">
      
      <div className="flex items-center gap-2 pt-8 text-Black/50">
        <a href="/">Home</a> <a href="/shop" className="font-semibold text-black">/ Shop</a>
      </div>

      <div className="p-3 max-w-7xl m-auto">
        <div className="mt-6 sm:mt-10">
          <div>
          <div>
            <div className="grid gird-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6 h-max">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={image}
                  alt="Product-Image"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <h1 className="text-3xl text-blue-800 font-semibold sm:text-4xl">
                    {title}
                  </h1>
                  <p className="mt-3 text-gray-600 text-md leading-6 text-justify sm:text-left sm:mt-4">
                  At LuxeLooms, we understand the importance of the hijab as both a symbol of modesty and a statement of personal style. Our hijab collection combines tradition with modern fashion trends, offering a diverse range of designs to suit every occasion and preference. Each hijab in our collection is crafted with the highest quality fabrics, ensuring both comfort and durability.
                  </p>
                  <span className="my-3 text-xl text-yellow-700 flex items-center gap-1 sm:my-4">
                    {Array.from({ length: 3 }).map((_, index) => (
                      <FaStar key={index} />
                    ))}
                  </span>
                  {/* Product Price */}
                  <span className="text-xl text-blue-800 font-semibold sm:text-2xl">
                    {price} DZD
                  </span>
                </div>
                <div className=" ">
                  <div className="text-left flex flex-col gap-2 w-full">
                    <label className="font-semibold">Quantity</label>
                    <input
                      className="border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 md:mb-0 focus:border-red-500"
                      type="number"
                      defaultValue="1"
                      required
                    />
                  </div>
                  <div className="w-full text-left my-4">
                    <button
                      className="flex justify-center items-center gap-2 w-full py-3 px-4 text-blue-800 text-white text-md font-bold border border-blue-500 rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-white hover:text-blue-500 lg:m-0 md:px-6"
                      title="Confirm Order"
                    >
                      <span>Confirm Order</span>
                      <FaArrowAltCircleRight />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-sm font-medium text-gray-900">Details</h2>

        <div className="mt-4 space-y-6">
          <p className="text-sm text-gray-600">
            {TryText.details}
          </p>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-sm font-medium text-gray-900">Description</h2>

        <div className="mt-4 space-y-6">
          <p className="text-sm text-gray-600">
            {TryText.description}
          </p>
        </div>
      </div>

    </div>
  );
};

export default SingleProduct;