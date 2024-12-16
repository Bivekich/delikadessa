import { useState, useEffect } from 'react';
import { getMenu } from '../sanity';
import { Link } from 'react-router-dom';
import Preloader from './Preloader';

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const menuData = await getMenu();
        setMenu(menuData);
        setLoading(false);
        setTimeout(() => setIsVisible(true), 100);
      } catch (error) {
        console.error('Error fetching menu:', error);
        setLoading(false);
      }
    };
    fetchMenu();
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1
            className={`text-3xl md:text-4xl font-bold text-[#722082] mb-12 text-center transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
            style={{ fontFamily: 'Kornilow' }}
          >
            Меню
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menu.map((category, index) => (
              <div
                key={category._id}
                className={`bg-white rounded-3xl shadow-md overflow-hidden transition-all duration-1000 delay-[${
                  index * 200
                }ms] ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
              >
                <Link to={category.pdf} className="block">
                  <div className="relative overflow-hidden group">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:opacity-0" />
                  </div>
                </Link>

                <div className="p-6">
                  <h2
                    className="text-2xl text-[#722082] mb-6"
                    style={{ fontFamily: 'Kornilow' }}
                  >
                    {category.title}
                  </h2>
                  <div className="space-y-4">
                    {category.items?.map((item) => (
                      <div
                        key={item._id}
                        className="flex justify-between items-start"
                      >
                        <div>
                          <h3 className="text-[#7E6783] font-medium">
                            {item.name}
                          </h3>
                          <p className="text-sm text-[#7E6783]/70">
                            {item.description}
                          </p>
                        </div>
                        <p className="text-[#722082] font-bold ml-4">
                          {item.price} ₽
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      )}
    </>
  );
};

export default Menu;
