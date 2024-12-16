import React, { useEffect, useState, useRef } from 'react';
import main_image from '../assets/main_img.png';
import { Button } from './Button';
import { getMainpage } from '../sanity';
import Preloader from './Preloader';

const Body = ({ bookingRef }) => {
  const [mainpage, setMainpage] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2 человека',
  });

  useEffect(() => {
    const fetchMainpage = async () => {
      try {
        const mainpage = await getMainpage();
        setMainpage(mainpage);
        setLoading(false);
        // Показываем контент сразу после загрузки данных
        setTimeout(() => {
          setContentVisible(true);
        }, 100);
      } catch (error) {
        console.error('Error fetching mainpage:', error);
        setLoading(false);
      }
    };
    fetchMainpage();
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#book' && bookingRef.current) {
        bookingRef.current.scrollIntoView({ behavior: 'smooth' });
        history.pushState('', document.title, window.location.pathname);
      }
    };

    // Handle initial hash if present
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBookings((prevBookings) => [...prevBookings, formData]);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '2 человека',
    });
    console.log('All bookings:', bookings);
  };

  if (loading) {
    return <Preloader />;
  }

  return (
    <main className="bg-cover min-h-screen pt-12">
      <section className="relative mx-auto mb-12 md:mb-24 mt-4 md:mt-8 px-4 sm:px-6 lg:px-8">
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${main_image})`,
            borderRadius: '50px 25px 50px 25px',
            '@media (min-width: 768px)': {
              borderRadius: '100px 50px 100px 50px',
            },
          }}
          className={`container mx-auto relative flex flex-col items-start justify-center min-h-[500px] md:min-h-[600px] p-4 sm:p-6 md:p-10 text-white bg-cover bg-center transition-all duration-1000 z-0 ${
            contentVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-[700px] backdrop-blur-sm bg-black/20 p-6 rounded-3xl">
            <h1
              className={`text-2xl sm:text-3xl md:text-5xl font-thin mb-4 text-white transition-all duration-1000 delay-300 ${
                contentVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-10'
              }`}
              style={{
                fontFamily: 'Kornilow',
                lineHeight: '1.3',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
              }}
            >
              {mainpage.title}
            </h1>
            <p
              className={`text-sm sm:text-base md:text-lg mb-2 transition-all duration-1000 delay-500 ${
                contentVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-10'
              }`}
              style={{
                fontFamily: 'Inter',
                lineHeight: '1.6',
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
              }}
            >
              {mainpage.description?.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
          </div>
          <div
            className={`mt-8 sm:mt-12 md:mt-16 mb-6 sm:mb-8 md:mb-10 transition-all duration-1000 delay-700 ${
              contentVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <Button
              style={{ fontFamily: 'Kornilow' }}
              className="font-thin py-3 sm:py-4 md:py-5 px-6 sm:px-8 md:px-10 text-base sm:text-lg transform transition-all duration-300 hover:scale-105"
              onClick={() =>
                bookingRef.current.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Забронировать
            </Button>
          </div>
        </div>
      </section>

      <section
        ref={bookingRef}
        className={`pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 transition-all duration-1000 delay-1000 ${
          contentVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
        }`}
      >
        <div
          style={{
            borderRadius: '50px 25px 50px 25px',
            '@media (min-width: 768px)': {
              borderRadius: '100px 50px 100px 50px',
            },
          }}
          className="container mx-auto my-8 sm:my-10 md:my-12 p-4 sm:p-6 md:p-8 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.1)]"
        >
          <h2
            className="text-center text-xl sm:text-2xl md:text-[40px] font-bold text-[#7E6783]"
            style={{
              fontFamily: 'Kornilow',
              lineHeight: '1.3',
            }}
          >
            Бронирование столика
          </h2>
          <p
            className="text-center text-lg sm:text-xl md:text-[28px] text-[#7E6783] mt-2 md:mt-4"
            style={{
              fontFamily: 'Kornilow',
              lineHeight: '1.3',
            }}
          >
            Для бронирования столика необходимо внести депозит в размере 3000Р
          </p>

          <form onSubmit={handleSubmit} className="mt-8 md:mt-10 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="Имя"
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#722082]/30 focus:border-[#722082] outline-none transition-colors duration-300 shadow-sm hover:border-[#722082]/50"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Фамилия"
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#722082]/30 focus:border-[#722082] outline-none transition-colors duration-300 shadow-sm hover:border-[#722082]/50"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="E-mail"
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#722082]/30 focus:border-[#722082] outline-none transition-colors duration-300 shadow-sm hover:border-[#722082]/50"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Телефон"
                  required
                  pattern="[0-9+]{1}[0-9]{10}"
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#722082]/30 focus:border-[#722082] outline-none transition-colors duration-300 shadow-sm hover:border-[#722082]/50"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#722082]/30 focus:border-[#722082] outline-none transition-colors duration-300 shadow-sm hover:border-[#722082]/50 text-[#722082]/70"
                />
              </div>
              <div>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  required
                  min="12:00"
                  max="23:00"
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#722082]/30 focus:border-[#722082] outline-none transition-colors duration-300 shadow-sm hover:border-[#722082]/50 text-[#722082]/70"
                />
              </div>
              <div className="relative">
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#722082]/30 focus:border-[#722082] outline-none transition-colors duration-300 shadow-sm hover:border-[#722082]/50 appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTcgMTBsNSA1IDUtNXoiIGZpbGw9IiM3MjIwODIiLz48L3N2Zz4=')] bg-no-repeat bg-[center_right_1rem] text-[#722082]/70 relative z-10"
                >
                  <option value="">Выберите количество гостей</option>
                  <option value="2 человека">2 человека</option>
                  <option value="3 человека">3 человека</option>
                  <option value="4 человека">4 человека</option>
                  <option value="5 человек">5 человек</option>
                  <option value="6 человек">6 человек</option>
                </select>
              </div>
            </div>
            <div className="flex justify-center w-full mt-8">
              <button
                type="submit"
                className="bg-[#722082] hover:bg-[#8f35a1] transition-all duration-300 text-white font-bold text-xl md:text-2xl rounded-full w-full md:w-96 h-16 md:h-20 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
              >
                Забронировать
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Body;
