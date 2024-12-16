import React from 'react';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="flex items-center">
            <img src={logo} alt="logo" className="h-20" />
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-bold text-[#722082]">Часы работы</h3>
            <p className="text-[#7E6783]">
              понедельник - четверг: с 10:00 до 22:00
            </p>
            <p className="text-[#7E6783]">
              пятница - воскресенье: с 10:00 до 22:00
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-bold text-[#722082]">Навигация</h3>
            <Link
              to="/"
              className="text-[#7E6783] hover:text-[#722082] transition-colors"
            >
              Главная
            </Link>
            <Link
              to="/gallery"
              className="text-[#7E6783] hover:text-[#722082] transition-colors"
            >
              Галерея
            </Link>
            <Link
              to="/menu"
              className="text-[#7E6783] hover:text-[#722082] transition-colors"
            >
              Меню
            </Link>
            <Link
              to="/about"
              className="text-[#7E6783] hover:text-[#722082] transition-colors"
            >
              О нас
            </Link>
            <Link
              to="/cake"
              className="text-[#7E6783] hover:text-[#722082] transition-colors"
            >
              Торты на заказ
            </Link>
            <Link
              to="/contact"
              className="text-[#7E6783] hover:text-[#722082] transition-colors"
            >
              Контакты
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-bold text-[#722082]">Контакты</h3>
            <p className="text-[#7E6783]">Телефон: +7 (925) 212-08-05</p>
            <p className="text-[#7E6783]">Email: info@delikadessa.ru</p>
            <p className="text-[#7E6783]">
              Адрес: Москва, Котельническая наб., 1/15А
            </p>
            <p className="text-[#7E6783] mt-4 text-sm">
              ООО &ldquo;ДЕЛИКАДЕССА&rdquo;
            </p>
            <p className="text-[#7E6783] text-sm">
              ИНН / КПП: 5003135100 / 770501001
            </p>
            <p className="text-[#7E6783] text-sm">ОГРН: 1195027017437</p>
            <p className="text-[#7E6783] text-sm">р/с: 40702810738000017012</p>
            <p className="text-[#7E6783] text-sm">к/с: 30101810400000000225</p>
            <p className="text-[#7E6783] text-sm">БИК: 044525225</p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-bold text-[#722082]">Документы</h3>
            <Link
              to="/privacy"
              className="text-[#7E6783] hover:text-[#722082] transition-colors"
            >
              Политика конфиденциальности
            </Link>
            <Link
              to="/terms"
              className="text-[#7E6783] hover:text-[#722082] transition-colors"
            >
              Пользовательское соглашение
            </Link>
            <Link
              to="/offer"
              className="text-[#7E6783] hover:text-[#722082] transition-colors"
            >
              Договор оферты
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#722082]/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#7E6783] text-sm">
            © {new Date().getFullYear()} Деликадесса. Все права защищены
          </p>
          <p className="text-[#7E6783] text-xs">
            Информация на сайте не является публичной офертой
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
