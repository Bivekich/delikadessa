import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

const Success = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState('checking');
  const [error, setError] = useState(null);

  useEffect(() => {
    const checkPayment = async () => {
      try {
        // Get stored booking data
        const storedData = localStorage.getItem('pendingBooking');
        if (!storedData) {
          throw new Error('Информация о бронировании не найдена');
        }

        const { paymentId } = JSON.parse(storedData);
        if (!paymentId) {
          throw new Error('ID платежа не найден');
        }

        // Check payment status
        const response = await fetch(`${API_URL}/check-payment/${paymentId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Ошибка при проверке статуса платежа');
        }

        const paymentData = await response.json();
        console.log('Payment status:', paymentData);

        // Handle different payment statuses
        switch (paymentData.status) {
          case 'succeeded':
          case 'waiting_for_capture':
            setStatus('success');
            localStorage.removeItem('pendingBooking');
            break;

          case 'pending':
            setStatus('pending');
            break;

          case 'canceled':
            throw new Error('Платеж был отменен');

          default:
            throw new Error(`Неожиданный статус платежа: ${paymentData.status}`);
        }
      } catch (error) {
        console.error('Payment verification error:', error);
        setError(error.message || 'Произошла ошибка при проверке платежа');
        setStatus('error');
      }
    };

    checkPayment();
  }, []);

  const renderContent = () => {
    const contents = {
      checking: (
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#722082] mx-auto mb-4"></div>
          <p className="text-lg">Проверяем статус оплаты...</p>
        </div>
      ),
      success: (
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#722082] mb-4">Бронирование успешно завершено!</h2>
          <p className="text-lg mb-6">
            Спасибо за ваш заказ. Мы свяжемся с вами для подтверждения деталей.
          </p>
          <button
            onClick={() => navigate('/')}
            className="bg-[#722082] text-white px-6 py-3 rounded-xl hover:bg-[#8B2699] transition-colors"
          >
            Вернуться на главную
          </button>
        </div>
      ),
      pending: (
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#722082] mb-4">Оплата в обработке</h2>
          <p className="text-lg mb-6">
            Пожалуйста, подождите несколько минут и обновите страницу.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-[#722082] text-white px-6 py-3 rounded-xl hover:bg-[#8B2699] transition-colors"
          >
            Обновить страницу
          </button>
        </div>
      ),
      error: (
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Произошла ошибка</h2>
          <p className="text-lg mb-6 text-gray-700">
            {error || 'Пожалуйста, попробуйте снова или свяжитесь с нами'}
          </p>
          <button
            onClick={() => navigate('/')}
            className="bg-[#722082] text-white px-6 py-3 rounded-xl hover:bg-[#8B2699] transition-colors"
          >
            Вернуться на главную
          </button>
        </div>
      )
    };

    return contents[status] || null;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full">
        {renderContent()}
      </div>
    </div>
  );
};

export default Success;

