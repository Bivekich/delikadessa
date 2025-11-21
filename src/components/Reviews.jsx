import React, { useState, useEffect } from 'react';
import { getReviews } from '../sanity';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewsData = await getReviews();
        setReviews(reviewsData);
        setLoading(false);
        setTimeout(() => setIsVisible(true), 100);
      } catch (error) {
        console.error('Error fetching reviews:', error);
        setLoading(false);
      }
    };
    fetchReviews();
  }, []);

  if (loading || !reviews || reviews.length === 0) {
    return null;
  }

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <FontAwesomeIcon
        key={index}
        icon={faStar}
        className={`${
          index < rating ? 'text-yellow-400' : 'text-gray-300'
        } text-lg`}
      />
    ));
  };

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-purple-50">
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
            Отзывы наших гостей
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Мы ценим каждого гостя и стремимся сделать ваш визит незабываемым
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div
                key={review._id || index}
                className={`bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                {/* Иконка кавычки */}
                <div className="text-[#722082] mb-4">
                  <FontAwesomeIcon icon={faQuoteLeft} className="text-3xl opacity-20" />
                </div>

                {/* Рейтинг */}
                <div className="flex gap-1 mb-4">
                  {renderStars(review.rating || 5)}
                </div>

                {/* Текст отзыва */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {review.text}
                </p>

                {/* Изображение отзыва (если есть) */}
                {review.image && (
                  <div className="mb-4 rounded-2xl overflow-hidden">
                    <img
                      src={review.image}
                      alt="Отзыв"
                      className="w-full h-48 object-cover"
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Автор */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  {review.avatar ? (
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-[#722082] text-white flex items-center justify-center text-xl font-bold">
                      {review.name?.charAt(0) || 'Г'}
                    </div>
                  )}
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {review.name || 'Гость ресторана'}
                    </h4>
                    {review.date && (
                      <p className="text-sm text-gray-500">
                        {new Date(review.date).toLocaleDateString('ru-RU', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Кнопка "Оставить отзыв" */}
          <div className="text-center mt-12">
            <a
              href="https://yandex.ru/maps/org/delikadessa/157954393428/reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#722082] hover:bg-[#8f35a1] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              style={{ fontFamily: 'Kornilow' }}
            >
              Оставить отзыв
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
