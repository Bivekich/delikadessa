import { useEffect } from 'react';
import { getContacts, getReviews } from '../sanity';

const StructuredData = ({ type = 'restaurant', includeReviews = false }) => {
  useEffect(() => {
    const loadStructuredData = async () => {
      // Удаляем предыдущий script если есть
      const existingScript = document.getElementById('structured-data');
      if (existingScript) {
        existingScript.remove();
      }

      let structuredData = {};

      // Получаем данные из Sanity для актуальной информации
      let contactData = null;
      let reviewsData = [];
      try {
        contactData = await getContacts();
        if (includeReviews) {
          reviewsData = await getReviews();
        }
      } catch (error) {
        console.error('Error fetching data for structured data:', error);
      }

      if (type === 'restaurant') {
        // Парсим время работы из Sanity (формат: "с 10:00 - 23:00")
        let opens = "10:00";
        let closes = "23:00";
        if (contactData?.worktime) {
          const timeMatch = contactData.worktime.match(/(\d{1,2}:\d{2})\s*-\s*(\d{1,2}:\d{2})/);
          if (timeMatch) {
            opens = timeMatch[1];
            closes = timeMatch[2];
          }
        }

        // Основная схема LocalBusiness / Restaurant
        structuredData = {
          "@context": "https://schema.org",
          "@type": "Restaurant",
          "name": "Ресторан Деликадесса",
          "image": "https://delikadessa.ru/og-image.jpg",
          "@id": "https://delikadessa.ru",
          "url": "https://delikadessa.ru",
          "telephone": contactData?.forconnect || "+7 (495) 123-45-67",
          "priceRange": "$$",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Котельническая наб., 1/15А",
            "addressLocality": "Москва",
            "postalCode": "109240",
            "addressCountry": "RU"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 55.745842,
            "longitude": 37.642541
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
              ],
              "opens": opens,
              "closes": closes
            }
          ],
          "servesCuisine": ["European", "Russian"],
          "acceptsReservations": "True",
          "menu": "https://delikadessa.ru/menu",
          "hasMenu": {
            "@type": "Menu",
            "url": "https://delikadessa.ru/menu"
          }
        };

        // Добавляем отзывы если есть
        if (includeReviews && reviewsData && reviewsData.length > 0) {
          // Рассчитываем средний рейтинг
          const totalRating = reviewsData.reduce((sum, review) => sum + (review.rating || 5), 0);
          const averageRating = (totalRating / reviewsData.length).toFixed(1);

          structuredData.aggregateRating = {
            "@type": "AggregateRating",
            "ratingValue": averageRating,
            "reviewCount": reviewsData.length
          };

          // Добавляем отзывы (максимум 5 для Google)
          structuredData.review = reviewsData.slice(0, 5).map(review => ({
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": review.name || "Гость ресторана"
            },
            "datePublished": review.date || new Date().toISOString(),
            "reviewBody": review.text,
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": review.rating || 5,
              "bestRating": 5
            }
          }));
        }
      } else if (type === 'breadcrumb') {
        // BreadcrumbList для навигации
        structuredData = {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Главная",
              "item": "https://delikadessa.ru/"
            }
          ]
        };
      }

      // Создаем и добавляем script с JSON-LD
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'structured-data';
      script.innerHTML = JSON.stringify(structuredData);
      document.head.appendChild(script);
    };

    loadStructuredData();

    return () => {
      const scriptToRemove = document.getElementById('structured-data');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [type, includeReviews]);

  return null;
};

export default StructuredData;
