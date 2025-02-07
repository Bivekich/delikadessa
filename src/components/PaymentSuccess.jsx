import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkPaymentStatus } from '../utils/payment';
import { sendToTelegramNotification } from '../utils/telegram';

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState('checking');
  const [error, setError] = useState(null);

  useEffect(() => {
    const completeBooking = async () => {
      try {
        const pendingBooking = JSON.parse(localStorage.getItem('pendingBooking'));
        
        if (!pendingBooking || !pendingBooking.paymentId) {
          throw new Error('Информация о бронировании не найдена');
        }

        const paymentStatus = await checkPaymentStatus(pendingBooking.paymentId);

        if (paymentStatus.status === 'succeeded') {
          // Send notification to Telegram
          await sendToTelegramNotification({
            ...pendingBooking.bookingData,
            paymentId: pendingBooking.paymentId,
            paymentStatus: 'Оплачено'
          });

          setStatus('success');
          localStorage.removeItem('pendingBooking');
        } else if (paymentStatus.status === 'pending') {
          setStatus('pending');
        } else {
          throw new Error('Оплата не была завершена');
        }
      } catch (error) {
        console.error('Error completing booking:', error);
        setError(error.message);
        setStatus('error');
      }
    };

    completeBooking();
  }, [navigate]);

  const getStatusContent = () => {
    switch (status) {
      case 'checking':
        return (
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#722082] mx-auto mb-4"></div>
            <p className="text-lg">Проверяем статус оплаты...</p>
          </div>
        );
      case 'success':
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-[#722082] mb-4">Бронирование успешно завершено!</h2>
            <p className="text-lg mb-6">Спасибо за ваш заказ. Мы отправили подтверждение на вашу почту.</p>
            <button
              onClick={() => navigate('/')}
              className="bg-[#722082] text-white px-6 py-3 rounded-xl hover:bg-[#8B2699] transition-colors"
            >
              Вернуться на главную
            </button>
          </div>
        );
      case 'pending':
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-[#722082] mb-4">Оплата в обработке</h2>
            <p className="text-lg mb-6">Пожалуйста, подождите несколько минут и обновите страницу.</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-[#722082] text-white px-6 py-3 rounded-xl hover:bg-[#8B2699] transition-colors"
            >
              Обновить страницу
            </button>
          </div>
        );
      case 'error':
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Произошла ошибка</h2>
            <p className="text-lg mb-6">{error || 'Пожалуйста, попробуйте снова или свяжитесь с нами'}</p>
            <button
              onClick={() => navigate('/')}
              className="bg-[#722082] text-white px-6 py-3 rounded-xl hover:bg-[#8B2699] transition-colors"
            >
              Вернуться на главную
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full">
        {getStatusContent()}
      </div>
    </div>
  );
};

export default PaymentSuccess; 