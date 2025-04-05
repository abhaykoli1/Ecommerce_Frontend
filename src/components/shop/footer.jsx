import React from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BiLogoFacebook } from "react-icons/bi";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
// import { FiTwitter } from "react-icons/fi";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-black text-white relative ">
      <div className="lg:py-20 md:py-20 sm:py-14 py-14 lg:px-10 md:px-10  px-5 grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-24 lg:gap-20 md:gap-20 sm:gap-16 gap-10 container mx-auto">
        {/* Logo and Subscription Section */}
        <div className="flex flex-col items-start gap-2">
          <div className="logo">
            <div className="text-xl font-bold text-white">Logo</div>
          </div>

          <div className="flex gap-5">
            <IoLogoInstagram size={30} className="" />
            {/* <BiLogoFacebookCircle size={30} className="" /> */}
            <FaSquareFacebook size={30} className="" />
            <FaTwitter size={30} className="" />
            {/* <FaTwitterSquare  size={30} className=""/> */}
          </div>
          <div className="text-3xl text-primary uppercase font-bold underline">
            Subscribe
          </div>
          <p className="opacity-70">Get 10% off on your first order</p>
        </div>

        {/* Support Section */}
        <div className="footerLinks_1">
          <div className="text-xl mb-1 font-medium text-white">Support</div>
          <div className="border-b border-2 w-40 mb-3"></div>
          <div className="flex flex-col gap-2">
            <p className="text-white flex gap-2 items-center">
              <i className="fa-solid fa-location-dot text-2xl"></i>
              111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.
            </p>
            <div className="text-white flex gap-2 items-center">
              <i className="fa-solid fa-envelope text-xl"></i>
              exclusive@gmail.com
            </div>
            <div className="text-white flex gap-2 items-center">
              <i className="fa-solid fa-phone text-xl"></i>
              +91 951 156 4276
            </div>
          </div>
        </div>

        {/* Account Section */}
        <div className="footerLinks_2">
          <div className="text-xl mb-1 font-medium text-white">Account</div>
          <div className="border-b border-2 w-40 mb-3"></div>
          <div className="flex flex-col gap-2">
            <div className="text-white">My Account</div>
            <div className="text-white">Login / Register</div>
            <div className="text-white">Cart</div>
            <div className="text-white">Wishlist</div>
            <div className="text-white">Shop</div>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="footerLinks_3">
          <div className="text-xl mb-1 font-medium text-white">Quick Links</div>
          <div className="border-b border-2 w-40 mb-3"></div>
          <div className="flex flex-col gap-2">
            <div className="text-white">Privacy Policy</div>
            <div className="text-white">Terms Of Use</div>
            <div className="text-white">FAQ</div>
            <div className="text-white">Contact</div>
          </div>
        </div>
      </div>

      <div className="bg-[#111]  h-20 flex place-content-center items-center">
        @ 2025 www.Ecommerce.com All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
