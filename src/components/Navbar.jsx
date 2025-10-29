import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import place from '../assets/place.svg';
import { Button } from './Button';
import { getContacts } from '../sanity';

const Navbar = ({ bookingRef }) => {
  const [contacts, setContacts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchContacts = async () => {
      const contacts = await getContacts();
      setContacts(contacts);
      setTimeout(() => setIsLoaded(true), 100);
    };
    fetchContacts();
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleAddressClick = (e) => {
    e.preventDefault();
    if (contacts.shortaddress) {
      window.open('https://yandex.ru/maps/-/CHEcmA3U', '_blank');
    }
    setIsOpen(false);
  };

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <main className="w-full">
        <nav
          className={`top-0 left-0 w-full z-[9999] bg-white transition-all duration-1000 transform ${
            isLoaded
              ? 'translate-y-0 opacity-100'
              : '-translate-y-full opacity-0'
          }`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-24">
              <div className="flex items-center">
                <Link
                  to="/"
                  onClick={handleNavClick}
                  className={`transition-all duration-1000 delay-300 transform ${
                    isLoaded
                      ? 'translate-x-0 opacity-100'
                      : '-translate-x-10 opacity-0'
                  }`}
                >
                  <img src={logo} alt="logo" className="h-16 sm:h-20" />
                </Link>
              </div>

              {/* Hamburger Menu Button */}
              <button
                onClick={toggleMenu}
                className="lg:hidden text-[#722082] transition-transform duration-300 ease-in-out hover:scale-110 focus:outline-none"
              >
                <svg
                  className="w-6 h-6 transition-transform duration-300"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>

              {/* Navigation Links */}
              <div className="hidden lg:flex flex-row space-x-8 items-center ml-auto mr-8">
                <ul className="flex flex-row space-x-8 items-center translate-y-[2px]">
                  <li className="transform transition duration-300 hover:scale-105">
                    <Link to="/menu" className="text-[#722082]">
                      Меню
                    </Link>
                  </li>
                  <li className="transform transition duration-300 hover:scale-105">
                    <Link to="/cake" className="text-[#722082]">
                      Торты на заказ
                    </Link>
                  </li>
                  <li className="transform transition duration-300 hover:scale-105">
                    <Link to="/about" className="text-[#722082]">
                      О нас
                    </Link>
                  </li>
                  <li className="transform transition duration-300 hover:scale-105">
                    <Link to="/gallery" className="text-[#722082]">
                      Галерея
                    </Link>
                  </li>
                  <li className="transform transition duration-300 hover:scale-105">
                    <Link to="/contact" className="text-[#722082]">
                      Контакты
                    </Link>
                  </li>
                  <li className="transform transition duration-300 hover:scale-105">
                    <Link
                      to="/"
                      className="flex items-center justify-center hover:text-[#8f35a1]"
                      onClick={handleAddressClick}
                    >
                      <div className="flex items-center justify-center">
                        <img
                          src={place}
                          alt="place"
                          className="w-[15px] h-[15px] mr-2 -mt-[3px]"
                          style={{
                            filter:
                              'invert(42%) sepia(9%) saturate(1235%) hue-rotate(266deg) brightness(92%) contrast(89%)',
                          }}
                        />
                        <span>{contacts.shortaddress}</span>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Book Button */}
              <div className="hidden lg:block">
                <Button
                  onClick={() => {
                    if (window.location.pathname === '/') {
                      bookingRef.current?.scrollIntoView({
                        behavior: 'smooth',
                      });
                    } else {
                      window.location.href = '/#book';
                    }
                    handleNavClick();
                  }}
                  className="w-full lg:w-auto py-3 px-6 text-base"
                >
                  Забронировать столик
                </Button>
              </div>
            </div>
          </div>
        </nav>
      </main>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-24 left-0 w-full bg-white z-[9999] shadow-lg transition-all duration-700 ease-in-out ${
          isOpen ? 'max-h-[800px]' : 'max-h-0'
        } overflow-hidden`}
      >
        <ul
          className={`transform transition-all duration-700 ease-in-out ${
            isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
          } py-6 px-4 space-y-4 text-[#722082] text-base font-['Inter'] leading-[29px] text-center`}
        >
          <li className="transform transition duration-300 hover:scale-105">
            <Link
              to="/menu"
              className="text-[#722082]"
              onClick={handleNavClick}
            >
              Меню
            </Link>
          </li>
          <li className="transform transition duration-300 hover:scale-105">
            <Link
              to="/cake"
              className="text-[#722082]"
              onClick={handleNavClick}
            >
              Торты на заказ
            </Link>
          </li>
          <li className="transform transition duration-300 hover:scale-105">
            <Link
              to="/about"
              className="text-[#722082]"
              onClick={handleNavClick}
            >
              О нас
            </Link>
          </li>
          <li className="transform transition duration-300 hover:scale-105">
            <Link
              to="/gallery"
              className="text-[#722082]"
              onClick={handleNavClick}
            >
              Галерея
            </Link>
          </li>
          <li className="transform transition duration-300 hover:scale-105">
            <Link
              to="/contact"
              className="text-[#722082]"
              onClick={handleNavClick}
            >
              Контакты
            </Link>
          </li>
          <li className="transform transition duration-300 hover:scale-105">
            <Link
              to="/"
              className="flex items-center justify-center hover:text-[#8f35a1]"
              onClick={handleAddressClick}
            >
              <div className="flex items-center justify-center">
                <img
                  src={place}
                  alt="place"
                  className="w-[15px] h-[15px] mr-2 -mt-[3px]"
                  style={{
                    filter:
                      'invert(42%) sepia(9%) saturate(1235%) hue-rotate(266deg) brightness(92%) contrast(89%)',
                  }}
                />
                <span>{contacts.shortaddress}</span>
              </div>
            </Link>
          </li>
          <li className="transform transition duration-300 hover:scale-105">
            <Button
              onClick={() => {
                if (window.location.pathname === '/') {
                  bookingRef.current?.scrollIntoView({
                    behavior: 'smooth',
                  });
                } else {
                  window.location.href = '/#book';
                }
                handleNavClick();
              }}
              className="w-full lg:w-auto py-3 px-6 text-base"
            >
              Забронировать столик
            </Button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
