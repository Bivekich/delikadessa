export const createPayment = async (bookingData) => {
  const shopId = '1006581';
  const secretKey = 'test_fijZBU_8im47kTLZpFBaPvRqu8UqZN2rfVj7I1ibpxk';

  const paymentData = {
    amount: {
      value: '3000.00',
      currency: 'RUB',
    },
    capture: true,
    confirmation: {
      type: 'redirect',
      return_url: `${window.location.origin}/success`,
    },
    description: `Бронирование столика на ${bookingData.date} ${bookingData.time}`,
    metadata: bookingData,
  };

  try {
    console.log('Отправка запроса на создание платежа:', paymentData);

    const response = await fetch('https://api.yookassa.ru/v3/payments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Idempotence-Key': Date.now().toString(),
        Authorization: 'Basic ' + btoa(`${shopId}:${secretKey}`),
      },
      body: JSON.stringify(paymentData),
    });

    console.log('Статус ответа:', response.status);

    const responseData = await response.json();
    console.log('Ответ от ЮKassa:', responseData);

    if (!response.ok) {
      throw new Error(
        `Ошибка оплаты: ${responseData.description || response.statusText}`
      );
    }

    return responseData;
  } catch (error) {
    console.error('Payment error:', error);
    throw error;
  }
};
