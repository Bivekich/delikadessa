import React from 'react'
import logo from '../assets/logo.svg';

const Footer = () => {
  return (
    <div>
     <footer className="bg-white py-12">
     <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
     <div className="flex items-center mb-4 md:mb-0">
      <img src={logo} alt="logo" className="h-200 w-200 p-5"/>
     </div>
     <div className="flex flex-col md:flex-row md:space-x-12 text-center md:text-left">
     <div className="mb-4 md:mb-0">
      <h3 className="text-lg font-bold text-purple-700">Часы работы</h3>
      <p className="text-gray-700">понедельник - четверг: с 10:00 до 22:00</p>
      <p className="text-gray-700">пятница - воскресенье: с 10:00 до 22:00</p>
    </div>
    <div className="mb-4 md:mb-0">
     <h3 className="text-lg font-bold text-purple-700">Навигация</h3>
     <p className="text-gray-700">Главная</p>
     <p className="text-gray-700">Меню</p>
     <p className="text-gray-700">Галерея</p>
     <p className="text-gray-700">О нас</p>
     <p className="text-gray-700">Контакты</p>
    </div>
    <div className="mb-4 md:mb-0">
     <h3 className="text-lg font-bold text-purple-700">Контакты</h3>
     <p className="text-gray-700">+7 (925) 212-08-05</p>
     <p className="text-gray-700">Москва, Котельническая наб., 1/15А</p>
    </div>
    <div>
     <h3 className="text-lg font-bold text-purple-700">Следите за нами</h3>
     <div className="flex space-x-4 justify-center md:justify-start">
     <i className="fab fa-telegram text-gray-700 text-2xl"></i>
     <i className="fab fa-vk text-gray-700 text-2xl"></i>
     </div>
     </div>
     </div>
     </div>
     <div className="container mx-auto text-center text-gray-500 text-sm mt-6">
     <p>© 2024 Delikadessa. All Right Reserved.</p>
     <div className="flex justify-center space-x-4 mt-2">
     <a href="#" className="hover:text-purple-700">Terms of Service</a>
     <a href="#" className="hover:text-purple-700">Privacy Policy</a>
     </div>
     </div>
     </footer>
    </div>
  )
}

export default Footer