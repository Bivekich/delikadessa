import { useEffect, useState } from 'react';

const Offer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1
          className="text-3xl md:text-4xl font-bold text-[#722082] mb-8 text-center"
          style={{ fontFamily: 'Kornilow' }}
        >
          Договор оферты
        </h1>
        <div className="prose prose-lg max-w-none text-[#7E6783] space-y-6">
          <p>
            Настоящий документ является публичной офертой ООО
            &ldquo;ДЕЛИКАДЕССА&rdquo; (далее — &ldquo;Исполнитель&rdquo;) и
            содержит все существенные условия оказания услуг общественного
            питания.
          </p>

          <h2
            className="text-2xl text-[#722082] mt-8"
            style={{ fontFamily: 'Kornilow' }}
          >
            1. Термины и определения
          </h2>
          <p>
            1.1. &ldquo;Оферта&rdquo; — настоящий документ, опубликованный на
            сайте https://delikadessa.ru.
          </p>
          <p>
            1.2. &ldquo;Акцепт&rdquo; — полное и безоговорочное принятие
            Заказчиком условий Договора.
          </p>
          <p>
            1.3. &ldquo;Заказчик&rdquo; — физическое лицо, осуществившее Акцепт
            Оферты и являющееся потребителем услуг.
          </p>

          <h2
            className="text-2xl text-[#722082] mt-8"
            style={{ fontFamily: 'Kornilow' }}
          >
            2. Предмет договора
          </h2>
          <p>
            2.1. Исполнитель обязуется оказать Заказчику услуги общественного
            питания в соответствии с условиями настоящего Договора.
          </p>
          <p>
            2.2. Заказчик обязуется принять и оплатить услуги в соответствии с
            условиями настоящего Договора.
          </p>

          <h2
            className="text-2xl text-[#722082] mt-8"
            style={{ fontFamily: 'Kornilow' }}
          >
            3. Условия бронирования и оплаты
          </h2>
          <p>
            3.1. При бронировании столика Заказчик обязан внести депозит в
            размере 3000 рублей.
          </p>
          <p>3.2. Депозит засчитывается в счет оплаты заказа.</p>
          <p>
            3.3. В случае отмены бронирования менее чем за 2 часа до
            назначенного времени, депозит не возвращается.
          </p>

          <h2
            className="text-2xl text-[#722082] mt-8"
            style={{ fontFamily: 'Kornilow' }}
          >
            4. Права и обязанности сторон
          </h2>
          <p>
            4.1. Исполнитель обязуется:
            <br />– предоставить стол в забронированное время;
            <br />– обеспечить качественное обслуживание;
            <br />– соблюдать санитарные нормы и правила.
          </p>
          <p>
            4.2. Заказчик обязуется:
            <br />– прибыть в установленное время;
            <br />– соблюдать правила поведения в ресторане;
            <br />– оплатить заказ в полном объеме.
          </p>

          <h2
            className="text-2xl text-[#722082] mt-8"
            style={{ fontFamily: 'Kornilow' }}
          >
            5. Ответственность сторон
          </h2>
          <p>
            5.1. За неисполнение или ненадлежащее исполнение обязательств по
            настоящему Договору стороны несут ответственность в соответствии с
            действующим законодательством РФ.
          </p>
          <p>
            5.2. Исполнитель не несет ответственности за вред, причиненный жизни
            и здоровью Заказчика по его собственной вине.
          </p>

          <h2
            className="text-2xl text-[#722082] mt-8"
            style={{ fontFamily: 'Kornilow' }}
          >
            6. Реквизиты Исполнителя
          </h2>
          <p>
            ООО &ldquo;ДЕЛИКАДЕССА&rdquo;
            <br />
            ИНН / КПП: 5003135100 / 770501001
            <br />
            ОГРН: 1195027017437
            <br />
            Адрес: Москва, Котельническая наб., 1/15А
            <br />
            Телефон: +7 (925) 212-08-05
            <br />
            Email: info@delikadessa.ru
          </p>

          <p className="text-sm mt-12 text-[#7E6783]/70">
            Дата последнего обновления: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Offer;