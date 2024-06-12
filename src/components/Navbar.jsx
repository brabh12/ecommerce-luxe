import React, { useState } from 'react'
import { FaBars, FaFacebook, FaSearch, FaTimes } from "react-icons/fa";
import logo from "/logo.png"
import { FaSquareInstagram } from 'react-icons/fa6';
import { Link } from 'react-router-dom';



const Navbar = () => {
    
    const [isMenuOpen, setisMenuOpen] = useState(false);

    const toggleMenu = () => {
      setisMenuOpen(!isMenuOpen)
    }

    const navItems =[
      {title: "Hijabat & Traditional", path: "/"},
      {title: "Bags & Accessories", path: "/"},
      {title: "Traditional Sportswear & Modern", path: "/"},
      {title: "Wedding Dresses & Event Wear", path: "/"},
      {title: "Eid & Ramadan Collection", path: "/"},
      
      

    ]
  return (
    <header className='max-w-screen-2xl xl:px-28 px-4 absolute top-0 right-0 left-0'>
        <nav className='flex justify-between items-center container md:py-4 pt-6 pb-3'>
        <FaSearch className='text-Black w-5 h-5 cursor-pointer hidden md:block ' />

        {/* logo  */}
        <a href="/"><img src={logo} alt="" /></a>

        {/* insta and face btn  */}
        <div className='text-lg text-Black sm:flex items-center gap-4 hidden'>
          <a href="/" className='flex items-center gap-2'><FaSquareInstagram /> Instagram</a>
          <a href="/" className='flex items-center gap-2'><FaFacebook /> Facebook</a>
        </div>

        {/* Navbar items */}
        <div className='sm:hidden'>
          <button onClick={toggleMenu}>
            {
              isMenuOpen ? <FaTimes className="w-5 h-5 text-Black" /> : <FaBars className="w-5 h-5 text-Black" />
            }
          </button>
        </div>
        </nav>

        <hr />

        {/* category items */}
        <div className='pt-4'>
          <ul className='lg:flex items-center justify-between text-Black hidden'>
            {
              navItems.map(({title, path}) => (
                <li key={title} className='hover:text-blue-800'>
                  <Link to="/">{title}</Link>
                </li>
              ))
            }
          </ul>
        </div>

        {/* Menu For Mobile */}
        <div>
        <ul className={`bg-Black text-white px-4 py-2 rounded ${isMenuOpen ? "" : "hidden"}`}>
            {
              navItems.map(({title, path}) => (
                <li key={title} className='hover:text-blue-800 my-3 cursor-pointer'>
                  <Link to="/">{title}</Link>
                </li>
              ))
            }
          </ul>
        </div>
    </header>
  )
}

export default Navbar