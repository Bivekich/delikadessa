import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import location from '../assets/location.svg';

const Navbar = () => {
  return (
    <nav className="bg-white fixed top-0 left-0 w-full z-10">
      <div className="container m-0 px-6 py-2 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/"> 
            <img src={logo} alt="logo" className='h-20' />
          </Link>
        </div>
        <ul className="flex space-x-6 text-[#722082] h-full text-s font-['Inter'] text-base font-normal leading-[29px] text-left underline-offset-[from-font] decoration-skip-ink-none mb-0">
          <li>
            <Link to="/menu">
              Меню
            </Link>
          </li>
          <li>
            <Link to="/cake">
              Торты на заказ
            </Link>
          </li>
          <li>
            <Link to="/about">
              О нас
            </Link>
          </li>
          <li>
            <Link to="/gallery">
              Галерея
            </Link>
          </li>
          <li>
            <Link to="/contact">
              Контакты
            </Link>
          </li>
          <li>
          <Link to="/" className="flex items-center">
              <img 
                src={location} 
                alt="location" 
                className="w-[15px] h-[15px]"
                style={{ 
                  marginRight: '5px',
                  filter: 'invert(42%) sepia(9%) saturate(1235%) hue-rotate(266deg) brightness(92%) contrast(89%)'
                }}
              />
              Котельная наб., 1/15кА
            </Link>
            </li>
            <li>
            <button className="bg-[#722082] hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-tl-2xl rounded-br-2xl rounded-tr-md rounded-bl-md shadow">
              Забронировать столик
            </button>
          </li>
          </ul>
      </div>
    </nav>
  );
};

export default Navbar;
