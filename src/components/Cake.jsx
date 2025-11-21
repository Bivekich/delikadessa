import React, { useState, useEffect } from 'react';
import { getCakes } from '../sanity';
import Preloader from './Preloader';
import SEO from './SEO';

const Cake = () => {
  const [cakes, setCakes] = useState([]);
  const [displayCount, setDisplayCount] = useState(8);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const fetchCakes = async () => {
      try {
        const cakesData = await getCakes();
        setCakes(cakesData);
        setLoading(false);
        setTimeout(() => setIsVisible(true), 100);
      } catch (error) {
        console.error('Error fetching cakes:', error);
        setLoading(false);
      }
    };
    fetchCakes();
  }, []);

  const handleShowMore = () => {
    setDisplayCount((prevCount) => prevCount + 8);
  };

  const displayedCakes = cakes.slice(0, displayCount);
  const hasMoreCakes = displayCount < cakes.length;

  if (loading) {
    return <Preloader />;
  }

  return (
    <>
      <SEO
        title="Торты на заказ в Деликадесса | Авторские кондитерские изделия"
        description="Торты на заказ в ресторане Деликадесса: авторские десерты, индивидуальный дизайн, натуральные ингредиенты. Заказывайте торты для праздников и мероприятий."
        keywords="торты на заказ москва, деликадесса торты, авторские торты, кондитерская, десерты"
        ogImage="/cake-og.jpg"
      />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div
        className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h1
          className="text-3xl md:text-4xl font-bold text-[#722082] mb-8 text-center"
          style={{ fontFamily: 'Kornilow' }}
        >
          Торты на заказ
        </h1>
        <div className="max-w-3xl mx-auto mb-12">
          <p
            className="text-lg md:text-xl text-[#722082] text-center mb-2"
            style={{ fontFamily: 'Kornilow' }}
          >
            Индивидуальный дизайн, для уточнения свяжитесь по телефону
          </p>
          <p
            className="text-lg md:text-xl text-[#722082] text-center"
            style={{ fontFamily: 'Kornilow' }}
          >
            Минимальное время на изготовление торта: неделя
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {displayedCakes.map((cake, index) => (
            <div
              key={cake._id}
              className={`transform transition-all duration-1000 delay-[${
                index * 200
              }ms] ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="relative group overflow-hidden rounded-3xl shadow-lg">
                <img
                  src={cake.image}
                  alt={cake.title}
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:opacity-0" />
                {cake.title && (
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
                    <p className="text-white text-lg font-medium">
                      {cake.title}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {hasMoreCakes && (
          <div className="flex justify-center mt-12">
            <button
              onClick={handleShowMore}
              className="bg-[#722082] hover:bg-[#8f35a1] text-white text-xl md:text-2xl py-4 px-8 rounded-full transition-all duration-300 hover:scale-105"
              style={{ fontFamily: 'Kornilow' }}
            >
              Показать еще
            </button>
          </div>
        )}
      </div>
    </main>
    </>
  );
};

export default Cake;
