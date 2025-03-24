const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

/**
 * Creates a payment with YooKassa
 * @param {Object} bookingData - The booking data from the form
 * @returns {Promise<Object>} - The payment data from YooKassa
 */
export const createPayment = async (bookingData) => {
  try {
    const response = await fetch(`${API_URL}/create-payment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ bookingData }),
    });

    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.error || 'Ошибка при создании платежа');
    }

    // Store booking data in localStorage for later use
    localStorage.setItem(
      'pendingBooking',
      JSON.stringify({
        bookingData,
        paymentId: responseData.id,
      })
    );

    return responseData;
  } catch (error) {
    console.error('Payment creation error:', error);
    throw error;
  }
};

/**
 * Checks the status of a payment
 * @param {string} paymentId - The payment ID from YooKassa
 * @returns {Promise<Object>} - The payment status data
 */
export const checkPaymentStatus = async (paymentId) => {
  try {
    const response = await fetch(`${API_URL}/check-payment/${paymentId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(
        responseData.error || 'Ошибка при проверке статуса платежа'
      );
    }

    return responseData;
  } catch (error) {
    console.error('Payment status check error:', error);
    throw error;
  }
};

/**
 * Calculates price based on number of guests
 * @param {string} guests - The number of guests string
 * @returns {number} - The price for the number of guests
 */
export const calculatePrice = (guests) => {
  // Извлекаем только число из строки (например, "5 человек" -> 5)
  const guestCount = parseInt(guests);

  if (guestCount <= 2) return 3000;
  if (guestCount <= 4) return 6000;
  if (guestCount <= 8) return 9000;
  if (guestCount <= 12) return 12000;

  // Если что-то пошло не так, возвращаем базовую цену
  return 3000;
};

/**
 * Validates payment amount
 * @param {string} amount - The payment amount
 * @param {string} guests - The number of guests
 * @returns {boolean} - Whether the amount is valid
 */
export const validatePaymentAmount = (amount, guests) => {
  const numAmount = parseFloat(amount);
  const requiredAmount = calculatePrice(guests);
  return !isNaN(numAmount) && numAmount >= requiredAmount;
};
