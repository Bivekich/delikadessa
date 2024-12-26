import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { sendToTelegramNotification } from '../utils/telegram';

const Success = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleSuccessPayment = async () => {
      try {
        const pendingBooking = localStorage.getItem('pendingBooking');

        if (pendingBooking) {
          const { bookingData, paymentId } = JSON.parse(pendingBooking);
          await sendToTelegramNotification({
            ...bookingData,
            paymentId,
          });
          localStorage.removeItem('pendingBooking');
        }

        setTimeout(() => {
          navigate('/');
        }, 5000);
      } catch (error) {
        console.error('Ошибка при обработке успешного платежа:', error);
      }
    };

    handleSuccessPayment();
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8 bg-white rounded-3xl shadow-lg max-w-md w-full mx-4">
        <h1
          className="text-3xl text-[#722082] mb-4"
          style={{ fontFamily: 'Kornilow' }}
        >
          Спасибо за бронирование!
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          Ваш платеж успешно обработан.
        </p>
        <p className="text-lg text-gray-600">
          Мы свяжемся с вами для подтверждения деталей.
        </p>
        <div className="mt-8">
          <p className="text-sm text-gray-500">
            Вы будете перенаправлены на главную страницу через несколько
            секунд...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Success;
