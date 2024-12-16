import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";
import place from "../assets/place.svg";
import { Button } from "./Button";
import { getContacts } from "../sanity";

const Navbar = () => {
  const location = useLocation();
  const [contacts, setContacts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchContacts = async () => {
      const contacts = await getContacts();
      setContacts(contacts);
    };
    fetchContacts();
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main className="mx-auto px-auto z-50">
      <nav
        className={`top-0 left-0 w-full z-10 ${
          location.pathname === "/" ? "bg-transparent" : "bg-white"
        }`}
      >
        <div className="m-0 px-6 py-2 flex items-center gap-2 justify-between">
          <div className="flex items-center w-fit">
            <Link to="/">
              <img src={logo} alt="logo" className="h-20" />
            </Link>
          </div>

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-[#722082] focus:outline-none"
          >
            <svg
              className="w-6 h-6"
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
          <ul
            className={`${
              isOpen ? "flex" : "hidden"
            } z-50 lg:flex flex-col lg:flex-row absolute lg:relative top-24 lg:top-0 left-0 w-full lg:w-auto bg-white lg:bg-transparent py-4 lg:py-0 px-6 lg:px-0 space-y-4 lg:space-y-0 lg:space-x-6 text-[#722082] text-s font-['Inter'] text-base font-normal leading-[29px] text-left underline-offset-[from-font] decoration-skip-ink-none items-start lg:items-center shadow-lg lg:shadow-none`}
          >
            <li>
              <Link to="/menu">Меню</Link>
            </li>
            <li>
              <Link to="/cake">Торты на заказ</Link>
            </li>
            <li>
              <Link to="/about">О нас</Link>
            </li>
            <li>
              <Link to="/gallery">Галерея</Link>
            </li>
            <li>
              <Link to="/contact">Контакты</Link>
            </li>
            <li>
              <Link to="/" className="flex items-center">
                <img
                  src={place}
                  alt="place"
                  className="w-[15px] h-[15px]"
                  style={{
                    marginRight: "5px",
                    filter:
                      "invert(42%) sepia(9%) saturate(1235%) hue-rotate(266deg) brightness(92%) contrast(89%)",
                  }}
                />
                {contacts.shortaddress}
              </Link>
            </li>
            <li className="hidden lg:block">
              <Button
                onClick={() =>
                  window.location.href == "/"
                    ? bookingRef.current.scrollIntoView({ behavior: "smooth" })
                    : (window.location.href = `/#book`)
                }
                className="py-2 px-4 text-base"
              >
                Забронировать столик
              </Button>
            </li>
          </ul>
        </div>
      </nav>
    </main>
  );
};

export default Navbar;
