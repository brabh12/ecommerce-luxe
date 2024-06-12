import React from 'react'
import banner from "/images/banner.png"
import { RiShoppingBag3Fill } from "react-icons/ri";

const Banner = () => {
  return (
    <div className='bg-primayBG py-12 xl:px-28 px-4'>
        <div className='py-28 flex flex-col md:flex-row-reverse justify-between items-center gap-14'>
             {/* images */}
             <div className='md:w-1/2'>
                 <img src={banner} alt="" />
            </div>
            
            <div className='md:w-1/2'>
                <h1 className='text-5xl font-light mb-5'>Elevate Your Wardrobe</h1>
                <p className='text-xl mb-7'>Experience the Ultimate in Luxury and Elegance with LuxeLooms.Our Exquisite Designs and Premium Fabrics Bring You the Style and Comfort You Deserve.</p>
                <button  className='bg-Black hover:bg-blue-800 px-6 py-2 text-white font-semibold rounded-sm flex items-center gap-2'><RiShoppingBag3Fill className='inline-flex'/>View More</button>
            </div>
         
        </div>
    </div>
  )
}

export default Banner