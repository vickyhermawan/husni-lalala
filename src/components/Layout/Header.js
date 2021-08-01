import React from "react";
import ButtonOutline from "../button/ButtonOutline";
import logo from '../../assets/img/logo-travelink.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaUserCircle } from 'react-icons/fa';


const Header = () => {
  return (
    <>
      <header
        className={
          "absolute w-full z-30 transition-all pt-4"
        }
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            <img src={logo}  alt="logo" className="w-3/6" />
          </div>
          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            <ul className="hidden lg:flex col-start-4 col-end-8 text-white-500  items-center">
              <a href="#f" className="px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative text-white-500 animation-active hover:text-green-500">
                Eksplor Destinasi
              </a>
              <a href="#f" className="px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative text-white-500 animation-active hover:text-green-500">
                Kategori
              </a>
              <a href="#f" className="px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative text-white-500 animation-active hover:text-green-500">
                Promo
              </a>
              <a href="#f" className="px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative text-white-500 animation-active hover:text-green-500">
                Bantuan
              </a>
            </ul>
            <ButtonOutline>
              <GiHamburgerMenu/> <FaUserCircle/>
            </ButtonOutline>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
