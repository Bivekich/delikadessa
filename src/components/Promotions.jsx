import React, { useState, useEffect } from 'react';
import { getPromotions } from '../sanity';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGift,
  faPercent,
  faClock,
  faTag,
  faCalendarAlt,
  faStar
} from '@fortawesome/free-solid-svg-icons';

const Promotions = () => {
  const [promotions, setPromotions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const fetchPromotions = async () => {
      try {
        const promotionsData = await getPromotions();
        // Фильтруем только активные акции
        const activePromotions = promotionsData.filter(promo => promo.isActive);
        setPromotions(activePromotions);
        setLoading(false);
        setTimeout(() => setIsVisible(true), 100);
      } catch (error) {
        console.error('Error fetching promotions:', error);
        setLoading(false);
      }
    };
    fetchPromotions();
  }, []);

  if (loading || !promotions || promotions.length === 0) {
    return null;
  }

  const formatDate = (dateString) => {
    if (!dateString) return null;
    return new Date(dateString).toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="container mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#722082] to-[#a855f7] text-white mb-4">
              <FontAwesomeIcon icon={faGift} className="text-3xl" />
            </div>
            <h2
              className="text-3xl md:text-4xl text-[#722082] mb-4"
              style={{ fontFamily: 'Kornilow' }}
            >
              Акции и специальные предложения
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Воспользуйтесь выгодными предложениями для незабываемого отдыха
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {promotions.map((promo, index) => (
              <div
                key={promo._id || index}
                className={`relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                {/* Бейдж с процентом скидки или "Новинка" */}
                {promo.discount && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg">
                      -{promo.discount}%
                    </div>
                  </div>
                )}

                {/* Изображение акции */}
                {promo.image && (
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={promo.image}
                      alt={promo.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                )}

                <div className="p-6">
                  {/* Заголовок */}
                  <h3
                    className="text-2xl font-bold text-gray-800 mb-3"
                    style={{ fontFamily: 'Kornilow' }}
                  >
                    {promo.title}
                  </h3>

                  {/* Описание */}
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {promo.description}
                  </p>

                  {/* Условия (если есть) */}
                  {promo.conditions && (
                    <div className="bg-purple-50 rounded-xl p-4 mb-4">
                      <h4 className="text-sm font-semibold text-[#722082] mb-2 flex items-center gap-2">
                        <FontAwesomeIcon icon={faStar} className="text-sm" />
                        Условия:
                      </h4>
                      <p className="text-sm text-gray-700">{promo.conditions}</p>
                    </div>
                  )}

                  {/* Срок действия */}
                  {(promo.validFrom || promo.validUntil) && (
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                      <FontAwesomeIcon icon={faCalendarAlt} />
                      <span>
                        {promo.validFrom && `с ${formatDate(promo.validFrom)}`}
                        {promo.validFrom && promo.validUntil && ' '}
                        {promo.validUntil && `до ${formatDate(promo.validUntil)}`}
                      </span>
                    </div>
                  )}

                  {/* Промокод (если есть) */}
                  {promo.promoCode && (
                    <div className="bg-gradient-to-r from-[#722082] to-[#a855f7] rounded-xl p-4 text-center">
                      <p className="text-white text-xs mb-1">Промокод:</p>
                      <p className="text-white font-bold text-xl tracking-wider font-mono">
                        {promo.promoCode}
                      </p>
                    </div>
                  )}

                  {/* Кнопка бронирования */}
                  {promo.bookingLink !== false && (
                    <a
                      href="#book"
                      className="mt-4 block w-full text-center bg-[#722082] hover:bg-[#8f35a1] text-white font-semibold py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
                      style={{ fontFamily: 'Kornilow' }}
                    >
                      Забронировать
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Дополнительная информация */}
          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm">
              Акции не суммируются. Подробности уточняйте у администратора.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotions;
