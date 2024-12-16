import React, { useEffect, useState } from 'react';
import logo1 from '../assets/logo1.svg';
import contact from '../assets/contact.png';
import { getContacts } from '../sanity';
import Preloader from './Preloader';

function Contact() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const contactsData = await getContacts();
        setContacts(contactsData);
        setLoading(false);
        setTimeout(() => setIsVisible(true), 100);
      } catch (error) {
        console.error('Error fetching contacts:', error);
        setLoading(false);
      }
    };
    fetchContacts();
  }, []);

  useEffect(() => {
    // Загружаем API Яндекс Карт
    const script = document.createElement('script');
    script.src =
      'https://api-maps.yandex.ru/2.1/?apikey=f030b7c7-1c4f-4e75-93ea-c3753b92a18c&lang=ru_RU';
    script.async = true;
    script.onload = () => {
      window.ymaps.ready(() => {
        const map = new window.ymaps.Map('map', {
          center: [55.745842, 37.642541],
          zoom: 16,
          controls: ['zoomControl'],
          behaviors: ['drag', 'dblClickZoom'],
        });

        // Создаем метку
        const placemark = new window.ymaps.Placemark(
          [55.745842, 37.642541],
          {
            hintContent: 'Ресторан Деликадесса, Котельническая наб., 1/15А',
          },
          {
            preset: 'islands#redDotIcon',
            openBalloonOnClick: false,
          }
        );

        // Добавляем метку на карту
        map.geoObjects.add(placemark);

        // Отключаем лишние поведения карты
        map.behaviors.disable(['scrollZoom', 'rightMouseButtonMagnifier']);
      });
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <main
      className="min-h-screen bg-cover bg-center relative py-12"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${contact})`,
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1
            className="text-3xl md:text-4xl text-[#722082] mb-8 text-center"
            style={{ fontFamily: 'Kornilow' }}
          >
            Контакты
          </h1>

          <div className="relative rounded-[50px_25px_50px_25px] md:rounded-[100px_50px_100px_50px] overflow-hidden mb-12 bg-[#722082]/90">
            <div className="relative z-10 p-6 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
                <div
                  className={`transition-all duration-1000 delay-200 ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                  }`}
                >
                  <img src={logo1} alt="logo1" className="h-32 md:h-40" />
                </div>

                <div
                  className={`transition-all duration-1000 delay-400 ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                  }`}
                >
                  <h2 className="text-2xl text-white mb-4 font-medium">
                    Часы работы
                  </h2>
                  <p className="text-white whitespace-pre-line">
                    {contacts.worktime?.split('\n').map((line, i) => (
                      <span key={i} className="block mb-2">
                        {line}
                      </span>
                    ))}
                  </p>
                </div>

                <div
                  className={`transition-all duration-1000 delay-600 ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                  }`}
                >
                  <h2 className="text-2xl text-white mb-4 font-medium">
                    Для связи
                  </h2>
                  <p className="text-white mb-4">{contacts.forconnect}</p>
                </div>

                <div
                  className={`transition-all duration-1000 delay-800 ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                  }`}
                >
                  <h2 className="text-2xl text-white mb-4 font-medium">
                    Где мы находимся
                  </h2>
                  <p className="text-white mb-4">{contacts.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Яндекс Карта */}
          <div
            className={`rounded-[50px_25px_50px_25px] md:rounded-[100px_50px_100px_50px] overflow-hidden shadow-lg transition-all duration-1000 delay-1000 bg-white ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div
              id="map"
              className="w-full h-[400px] relative z-10"
              style={{
                filter: 'none',
                backdropFilter: 'none',
              }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
