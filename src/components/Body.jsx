import React, { useEffect, useState, useRef } from 'react';
import main_image from '../assets/main_img.png';
import { Button } from './Button';
import { getMainpage, getContacts } from '../sanity';
import Preloader from './Preloader';
import { createPayment } from '../utils/payment';
import SEO from './SEO';
import StructuredData from './StructuredData';
import Reviews from './Reviews';
import Advantages from './Advantages';
import Promotions from './Promotions';

const Body = ({ bookingRef }) => {
  const [mainpage, setMainpage] = useState([]);
  const [contacts, setContacts] = useState(null);
  const [workHours, setWorkHours] = useState(null);
  const [loading, setLoading] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);
  const [timeError, setTimeError] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '1 человек',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [mainpageData, contactsData] = await Promise.all([
          getMainpage(),
          getContacts(),
        ]);

        setMainpage(mainpageData);
        setContacts(contactsData);

        // Parse worktime from contacts
        if (contactsData?.worktime) {
          const worktimeMatch = contactsData.worktime.match(
            /(?:с\s*)?(\d{1,2}:\d{2})(?:\s*-|\s*до\s*)(\d{1,2}:\d{2})/
          );
          if (worktimeMatch) {
            setWorkHours({
              start: worktimeMatch[1],
              end: worktimeMatch[2],
            });
          } else {
            console.error(
              'Could not parse work hours from:',
              contactsData.worktime
            );
          }
        }

        setLoading(false);
        setTimeout(() => {
          setContentVisible(true);
        }, 100);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    fetchData();
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

  const validateDateTime = (date, time) => {
    if (!date || !time) return true;

    const now = new Date();
    const [hours, minutes] = time.split(':').map(Number);
    const selectedDate = new Date(date);
    selectedDate.setHours(hours, minutes, 0, 0);

    // If selected date is today, check if time is in the past
    if (
      selectedDate.toDateString() === now.toDateString() &&
      selectedDate < now
    ) {
      return false;
    }

    return true;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => {
      const newState = {
        ...prevState,
        [name]: value,
      };

      // Validate time when date or time changes
      if (name === 'date' || name === 'time') {
        setTimeError('');

        if (newState.date && newState.time) {
          if (!validateDateTime(newState.date, newState.time)) {
            setTimeError('Выбранное время уже прошло');
          }

          // Check if time is within working hours
          if (workHours) {
            const [selectedHours, selectedMinutes] = newState.time
              .split(':')
              .map(Number);
            const [startHours, startMinutes] = workHours.start
              .split(':')
              .map(Number);
            const [endHours, endMinutes] = workHours.end.split(':').map(Number);

            const selectedTime = selectedHours * 60 + selectedMinutes;
            const startTime = startHours * 60 + startMinutes;
            const endTime = endHours * 60 + endMinutes;

            // Handle case when restaurant works past midnight
            if (endTime < startTime) {
              if (selectedTime < startTime && selectedTime > endTime) {
                setTimeError('Ресторан закрыт в это время');
              }
            } else {
              if (selectedTime < startTime || selectedTime > endTime) {
                setTimeError('Ресторан закрыт в это время');
              }
            }
          }
        }
      }

      return newState;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Final validation before submission
    if (timeError) {
      alert('Пожалуйста, выберите корректное время бронирования');
      return;
    }

    if (!validateDateTime(formData.date, formData.time)) {
      alert('Выбранное время уже прошло');
      return;
    }

    try {
      setLoading(true);
      const payment = await createPayment(formData);

      if (payment.confirmation?.confirmation_url) {
        window.location.href = payment.confirmation.confirmation_url;
      } else {
        throw new Error('Не получен URL для оплаты');
      }
    } catch (error) {
      console.error('Ошибка при бронировании:', error);
      alert(
        error.message ||
          'Произошла ошибка при бронировании. Пожалуйста, попробуйте снова.'
      );
    } finally {
      setLoading(false);
    }
  };

  // Функция для расчета стоимости в зависимости от количества гостей
  const calculatePrice = (guests) => {
    // Извлекаем только число из строки (например, "5 человек" -> 5)
    // Добавляем проверку на undefined или пустую строку
    if (!guests) return 3000;

    const guestCount = parseInt(guests);
    if (isNaN(guestCount)) return 3000;

    if (guestCount <= 2) return 3000;
    if (guestCount <= 4) return 6000;
    if (guestCount <= 8) return 9000;
    if (guestCount <= 12) return 12000;

    // Если что-то пошло не так, возвращаем базовую цену
    return 3000;
  };

  if (loading) {
    return <Preloader />;
  }

  return (
    <>
      <SEO
        title="Ресторан Деликадесса | Изысканная кухня в центре Москвы"
        description="Ресторан Деликадесса - изысканная кухня в центре Москвы. Бронирование столиков онлайн, авторское меню, уютная атмосфера. Доставка, банкеты, торты на заказ."
        keywords="ресторан москва, деликадесса, бронирование столиков, авторская кухня, доставка еды, банкеты, торты на заказ"
        ogType="restaurant"
      />
      <StructuredData type="restaurant" includeReviews={true} />
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
            Для бронирования столика необходимо внести депозит в размере{' '}
            {calculatePrice(formData.guests).toLocaleString()}₽
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
                  pattern="[0-9]{11}"
                  title="Пожалуйста, введите номер в формате 79991234567"
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
                {workHours ? (
                  <>
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      required
                      min={workHours.start}
                      max={workHours.end}
                      className={`w-full px-4 py-3 rounded-xl border-2 ${
                        timeError
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-[#722082]/30 focus:border-[#722082]'
                      } outline-none transition-colors duration-300 shadow-sm hover:border-[#722082]/50 text-[#722082]/70`}
                    />
                    <p
                      className={`text-sm mt-1 ${
                        timeError ? 'text-red-500' : 'text-gray-500'
                      }`}
                    >
                      {timeError ||
                        `Время работы: ${workHours.start} - ${workHours.end}`}
                    </p>
                  </>
                ) : (
                  <div className="text-center text-gray-500">
                    Загрузка времени работы...
                  </div>
                )}
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
                  <option value="1 человек">1 человек</option>
                  <option value="2 человека">2 человека</option>
                  <option value="3 человека">3 человека</option>
                  <option value="4 человека">4 человека</option>
                  <option value="5 человек">5 человек</option>
                  <option value="6 человек">6 человек</option>
                  <option value="7 человек">7 человек</option>
                  <option value="8 человек">8 человек</option>
                  <option value="9 человек">9 человек</option>
                  <option value="10 человек">10 человек</option>
                  <option value="11 человек">11 человек</option>
                  <option value="12 человек">12 человек</option>
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

      {/* Секция с акциями и скидками */}
      <Promotions />

      {/* Секция с преимуществами */}
      <Advantages />

      {/* Секция с отзывами */}
      <Reviews />
    </main>
    </>
  );
};

export default Body;
