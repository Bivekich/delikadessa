import React, { useState, useEffect } from 'react';
import { getAdvantages } from '../sanity';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAward,
  faUsers,
  faClock,
  faUtensils,
  faHeart,
  faStar,
  faTrophy,
  faGem
} from '@fortawesome/free-solid-svg-icons';

// Иконки для преимуществ (можно выбрать в Sanity)
const iconMap = {
  award: faAward,
  users: faUsers,
  clock: faClock,
  utensils: faUtensils,
  heart: faHeart,
  star: faStar,
  trophy: faTrophy,
  gem: faGem,
};

const Advantages = () => {
  const [advantages, setAdvantages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const fetchAdvantages = async () => {
      try {
        const advantagesData = await getAdvantages();
        setAdvantages(advantagesData);
        setLoading(false);
        setTimeout(() => setIsVisible(true), 100);
      } catch (error) {
        console.error('Error fetching advantages:', error);
        setLoading(false);
      }
    };
    fetchAdvantages();
  }, []);

  if (loading || !advantages || advantages.length === 0) {
    return null;
  }

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2
            className="text-3xl md:text-4xl text-[#722082] mb-4 text-center"
            style={{ fontFamily: 'Kornilow' }}
          >
            Почему выбирают нас
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Более 10 лет мы создаём незабываемые впечатления для наших гостей
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={advantage._id || index}
                className={`text-center p-6 rounded-3xl bg-gradient-to-br from-purple-50 to-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                {/* Иконка */}
                <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#722082] text-white mb-4 mx-auto shadow-lg">
                  <FontAwesomeIcon
                    icon={iconMap[advantage.icon] || faAward}
                    className="text-2xl md:text-3xl"
                  />
                </div>

                {/* Число (большое) */}
                {advantage.number && (
                  <div
                    className="text-4xl md:text-5xl font-bold text-[#722082] mb-2"
                    style={{ fontFamily: 'Kornilow' }}
                  >
                    {advantage.number}
                    {advantage.suffix && (
                      <span className="text-2xl md:text-3xl">{advantage.suffix}</span>
                    )}
                  </div>
                )}

                {/* Заголовок */}
                <h3
                  className="text-xl md:text-2xl font-semibold text-gray-800 mb-2"
                  style={{ fontFamily: 'Kornilow' }}
                >
                  {advantage.title}
                </h3>

                {/* Описание */}
                {advantage.description && (
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {advantage.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
