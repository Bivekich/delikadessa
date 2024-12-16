import { useEffect, useState } from 'react';

const Terms = () => {
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
          Пользовательское соглашение
        </h1>
        <div className="prose prose-lg max-w-none text-[#7E6783] space-y-6">
          <p>
            Настоящее Пользовательское соглашение регулирует отношения между ООО
            &ldquo;ДЕЛИКАДЕССА&rdquo; (далее — &ldquo;Администрация&rdquo;) и
            любым лицом (далее — &ldquo;Пользователь&rdquo;), посещающим сайт
            https://delikadessa.ru (далее — &ldquo;Сайт&rdquo;).
          </p>

          <h2
            className="text-2xl text-[#722082] mt-8"
            style={{ fontFamily: 'Kornilow' }}
          >
            1. Общие положения
          </h2>
          <p>
            1.1. Использование Сайта означает полное и безоговорочное принятие
            Пользователем условий настоящего Соглашения.
          </p>
          <p>
            1.2. В случае несогласия с условиями Соглашения Пользователь должен
            немедленно прекратить использование Сайта.
          </p>

          <h2
            className="text-2xl text-[#722082] mt-8"
            style={{ fontFamily: 'Kornilow' }}
          >
            2. Предмет соглашения
          </h2>
          <p>
            2.1. Администрация предоставляет Пользователю доступ к информации о
            ресторане, меню, услугах и возможность осуществлять бронирование
            столиков через Сайт.
          </p>
          <p>
            2.2. Сайт предоставляет Пользователю следующие виды услуг:
            <br />– доступ к информации о ресторане и контактным данным;
            <br />– доступ к электронному меню;
            <br />– возможность бронирования столиков;
            <br />– доступ к информации об акциях и специальных предложениях.
          </p>

          <h2
            className="text-2xl text-[#722082] mt-8"
            style={{ fontFamily: 'Kornilow' }}
          >
            3. Права и обязанности Пользователя
          </h2>
          <p>
            3.1. Пользователь обязуется:
            <br />– предоставлять достоверную информацию при бронировании;
            <br />– не нарушать работоспособность Сайта;
            <br />– не использовать Сайт для распространения рекламных
            материалов;
            <br />– не предпринимать действий, нарушающих законодательство РФ.
          </p>

          <h2
            className="text-2xl text-[#722082] mt-8"
            style={{ fontFamily: 'Kornilow' }}
          >
            4. Ответственность
          </h2>
          <p>
            4.1. Администрация не несет ответственности за:
            <br />– временные технические неполадки и перерывы в работе Сайта;
            <br />– утрату информации Пользователем;
            <br />– сведения, предоставленные Пользователем на Сайте в
            общедоступной форме.
          </p>

          <h2
            className="text-2xl text-[#722082] mt-8"
            style={{ fontFamily: 'Kornilow' }}
          >
            5. Условия бронирования
          </h2>
          <p>
            5.1. При бронировании столика Пользователь соглашается:
            <br />– предоставить актуальный номер телефона и email;
            <br />– внести депозит в установленном размере;
            <br />– прибыть в забронированное время;
            <br />– уведомить ресторан об отмене бронирования не менее чем за 2
            часа.
          </p>

          <h2
            className="text-2xl text-[#722082] mt-8"
            style={{ fontFamily: 'Kornilow' }}
          >
            6. Изменение и расторжение Соглашения
          </h2>
          <p>
            6.1. Администрация вправе вносить изменения в Соглашение без
            уведомления Пользователя.
          </p>
          <p>
            6.2. Изменения вступают в силу с момента их публикации на Сайте.
          </p>

          <p className="text-sm mt-12 text-[#7E6783]/70">
            Дата последнего обновления: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;