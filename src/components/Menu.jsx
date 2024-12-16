import React, { useState, useEffect } from "react";
import { getMenu } from "../sanity";
import { Link } from "react-router-dom";

function Menu() {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    const fetchMenu = async () => {
      const menu = await getMenu();
      setMenu(menu);
    };
    fetchMenu();
  }, []);
  return (
    <div className="flex flex-col items-center overflow-hidden mx-auto px-4">
      <h1 className="font-['Kornilow'] text-[40px] font-normal leading-[85px] text-left text-[#7E6783] mt-10 mb-10">
        Наше меню
      </h1>
      <div className="flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-10">
        {menu.map((item) => (
          <Link
            to={item.pdf}
            className="flex flex-col items-center mb-10 md:mb-0"
          >
            <div className="shadow-2xl rounded-3xl transition-transform duration-300 hover:scale-110">
              <img src={item.image} alt="m1" className="rounded-3xl" />
            </div>
            <p className="font-['Kornilow'] text-[25px] font-normal leading-[85px] text-left text-[#722082] mt-4 ">
              {item.title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Menu;
