import React from 'react'



const companyLogo = [
    {id: 1, img: "/images/company/yalidine-logo.png"},
    {id: 2, img: "/images/company/emsdz.png"},
    {id: 3, img: "/images/company/adsil.png"},
    
]

const Category = () => {
    
    return (
        
      
    
      <div className='max-w-screen-2x1 mx-auto container xl:px-28 px-4 py-25'>
        <div className='max-w-screen-2xl container mx-auto xl:px-28 px-4 mb-12'>
           <h2 className='title'>Delivery offices</h2>
        </div>
          {/* The Logo Of The Section */}
          <div className='flex items-center justify-around flex-wrap gap-5 py-5'>
              {
                  companyLogo.map(({id, img}) => (
                      <div key={id}><img src={img} alt="" /></div>
                  ))
              }
          </div>
  
  
          
      </div>
      
    )
  }
  
  export default Category