import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedinIn, } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4">
        <div className="mt-20 mb-10 flex flex-col md:flex-row items-start justify-between gap-8">
          <div className="md:w-[400px]">
            <Link to="/">
              <img src="/logo.png" alt="" />
            </Link>
            <p className="my-8 text-Black/75">
            Elevate Your Wardrobe
            Experience the Ultimate in Luxury and Elegance with LuxeLooms.Our Exquisite Designs and Premium Fabrics Bring You the Style and Comfort You Deserve.
            </p>
            <div className="flex items-center gap-6">
              <a href="https://www.linkedin.com/in/rabah-bouchemat"><FaLinkedinIn className="w-5 h-5 cursor-pointer hover:text-blue-800" /></a>
              <a href="https://www.instagram.com/rabah.bct"><FaInstagram className="w-5 h-5 cursor-pointer hover:text-blue-800" /></a>
            </div>
          </div>

          <div className="text-Black">
            <h4 className="font-semibold mb-3">ABOUT US</h4>
            <div className="space-y-2">
              <Link to="https://www.linkedin.com/in/rabah-bouchemat" className="text-sm block hover:text-blue-800">
                The Developer of This Website
              </Link>
              <Link to="/" className="text-sm block hover:text-blue-800">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-Black">
      <p className="text-white text-center items-center py-3">© {currentYear} Rabah.bct, Jijel,Algeria</p>
      </div>
    </footer>
  );
};

export default Footer;