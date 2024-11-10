import React from 'react';
import logo from '../assets/logo.svg';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="logo" className='h-10' />
      
        </div>
        <ul className="flex space-x-5 text-[#722082] font-['Inter'] text-base font-normal leading-[29px] text-left underline-offset-[from-font] decoration-skip-ink-none">
          <li>
            <a href="#">
              Меню
            </a>
          </li>
          <li>
            <a href="#">
              Торты на заказ
            </a>
          </li>
          <li>
            <a href="#">
              О нас
            </a>
          </li>
          <li>
            <a href="#">
              Галерея
            </a>
          </li>
          <li>
            <a href="#">
              Контакты
            </a>
          </li>
          <li>
          <a href="#" className="hover:text-purple-600">
              • Котельная наб., 1/15кА
            </a>
            <button className="bg-purple-600 text-white font-bold py-2 px-4 rounded">
              Забронировать столик
            </button>
          </li>
          </ul>
      </div>
    </nav>
  );
};

export default Navbar;
