export const sendToTelegramNotification = async (bookingData) => {
  const BOT_TOKEN = '7279049439:AAFdvtS2vowUpVMv83xTDDBC5369EueebD8';
  const CHAT_ID = '-1002329075007';

  const message = `
✅ Новое подтвержденное бронирование!

👤 Клиент: ${bookingData.firstName} ${bookingData.lastName}
📱 Телефон: ${bookingData.phone}
📧 Email: ${bookingData.email}
📅 Дата: ${bookingData.date}
⏰ Время: ${bookingData.time}
👥 Гости: ${bookingData.guests}
💳 ID платежа: ${bookingData.paymentId}
`;

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: 'HTML',
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`Ошибка отправки в Telegram: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Telegram notification error:', error);
    throw error;
  }
};
