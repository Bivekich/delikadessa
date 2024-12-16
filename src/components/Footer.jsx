import React from "react";
import logo from "../assets/logo.svg";
import { FaTelegram, FaVk } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mx-1 px-4">
      <footer className="bg-white py-12">
        <div className="mx-auto flex flex-col md:flex-row justify-between items-start">
          <div className="flex items-center mb-4 md:mb-0">
            <img src={logo} alt="logo" className="h-200 w-200 p-5" />
          </div>
          <div className="mb-4 md:mb-0 flex flex-col gap-3">
            <h3 className="text-lg font-bold text-purple-700">Часы работы</h3>
            <p className="text-gray-700">
              понедельник - четверг: с 10:00 до 22:00
            </p>
            <p className="text-gray-700">
              пятница - воскресенье: с 10:00 до 22:00
            </p>
          </div>
          <div className="mb-4 md:mb-0 flex flex-col gap-3">
            <h3 className="text-lg font-bold text-purple-700">Навигация</h3>
            <Link to="/" className="text-gray-700">
              Главная
            </Link>
            <Link to="/gallery" className="text-gray-700">
              Галерея
            </Link>
            <Link to="/menu" className="text-gray-700">
              Меню
            </Link>
            <Link to="/about" className="text-gray-700">
              О нас
            </Link>
            <Link to="/cake" className="text-gray-700">
              Торты на заказ
            </Link>
            <Link to="/contact" className="text-gray-700">
              Контакты
            </Link>
            <Link to="/terassa" className="text-gray-700">
              Терраса
            </Link>
          </div>
          <div className="mb-4 md:mb-0 flex flex-col gap-3">
            <h3 className="text-lg font-bold text-purple-700">Контакты</h3>
            <p className="text-gray-700">Телефон: +7 (925) 212-08-05</p>
            <p className="text-gray-700">
              Адрес: Москва, Котельническая наб., 1/15А
            </p>
            <p className="text-gray-700">ИНН / КПП: 5003135100 / 770501001</p>
            <p className="text-gray-700">ОГРН: 1195027017437</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-purple-700">
              Следите за нами
            </h3>
            <div className="flex flex-row gap-5 mt-3 justify-start">
              <a
                href="https://t.me/delikadessa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegram className="text-gray-700 text-2xl hover:text-purple-700 transition-colors" />
              </a>
              <a
                href="https://vk.com/delikadessa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaVk className="text-gray-700 text-2xl hover:text-purple-700 transition-colors" />
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto text-center text-gray-500 text-sm mt-6 flex flex-row justify-between border-t border-gray-200 pt-9">
          <p>© 2024 Delikadessa. All Right Reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:text-purple-700">
              Terms of Service
            </a>
            <a href="#" className="hover:text-purple-700">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
