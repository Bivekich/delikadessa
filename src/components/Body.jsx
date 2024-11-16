import React from 'react'
import main_image from '../assets/main.png'

const Body = () => {
  return (
    <main>
     <section className="relative mx-auto" style={{
        width: '1708.39px',
        height: '871px',
        marginTop: '100px',
        marginLeft: '106px',
        overflow: 'hidden'
      }}>
      <img src={main_image} alt="main_image" className="w-full h-full object-cover"/>
        <div className="absolute inset-0 flex flex-col justify-center items-start text-left text-white px-4">
         <h1 className="absolute" style={{
           width: '870px',
           height: '134px',
           top: '310px',
           left: '196px',
           fontFamily: 'Kornilow',
           fontSize: '70px',
           fontWeight: 400,
           lineHeight: '85px',
           textAlign: 'left',
           textUnderlinePosition: 'from-font',
           textDecorationSkipInk: 'none'
         }}>Ресторан «ДеликАдесса» — место для приятных встреч</h1>
         <p className="mt-4" style={{
           fontFamily: 'Inter',
           fontSize: '16px',
           fontWeight: 500,
           lineHeight: '29px',
           textAlign: 'left',
           width: '880px',
           marginTop: '350px',
           marginLeft: '196px'
         }}>Основные продукты (выпечка и десерты) и современные техники приготовления — три главных принципа кухни ДеликАдессы.</p>
         <p className="mt-2" style={{
           fontFamily: 'Inter',
           fontSize: '16px',
           fontWeight: 500,
           lineHeight: '29px',
           textAlign: 'left',
           width: '880px',
           marginLeft: '196px'
         }}>В нашем ресторане каждый гость сможет заказать блюда по индивидуальному пожеланию, чтобы ваш вечер прошёл незабываемо!</p>
         <p className="mt-2" style={{
           fontFamily: 'Inter',
           fontSize: '16px',
           fontWeight: 500,
           lineHeight: '29px',
           textAlign: 'left',
           width: '880px',
           marginLeft: '196px'
         }}>Будем рады видеть вас в гостях, чтобы показать вам, например, что такое изысканный ужин!</p>
         <button 
           className="mt-4 bg-[#722082] hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-tl-2xl rounded-br-2xl rounded-tr-md rounded-bl-md shadow" 
           style={{ 
             marginLeft: '196px',
             fontFamily: 'Kornilow',
             fontSize: '30px',
             fontWeight: 400,
             lineHeight: '29px',
             textAlign: 'center',
             textUnderlinePosition: 'from-font',
             textDecorationSkipInk: 'none',
             width: '302px',
             height: '72px',
           }}>
           Забронировать
         </button>
        </div>
       </section>
       <section className="container mx-auto my-12 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-center text-2xl font-bold text-[#7E6783]" style={{
          fontFamily: 'Kornilow',
          fontSize: '40px',
          fontWeight: 400,
          lineHeight: '85px',
          textUnderlinePosition: 'from-font',
          textDecorationSkipInk: 'none'
        }}>Бронирование столика</h2>
        <p className="text-center text-[#722082] mt-2" style={{
          fontFamily: 'Kornilow',
          fontSize: '28px',
          fontWeight: 400,
          lineHeight: '85px',
          textUnderlinePosition: 'from-font',
          textDecorationSkipInk: 'none'
        }}>Для бронирования столика необходимо внести депозит в размере 3000Р</p>
        <form className="mt-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="text" placeholder="Имя" className="border border-[#722082] rounded-lg p-3 w-full"/>
        <input type="text" placeholder="Фамилия" className="border border-[#722082] rounded-lg p-3 w-full"/>
        </div>
         <input type="email" placeholder="E-mail" className="border border-[#722082] rounded-lg p-3 w-full"/>
          <input type="tel" placeholder="Телефон" className="border border-[#722082] rounded-lg p-3 w-full"/>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
         <input type="date" className="border border-[#722082] rounded-lg p-3 w-full"/>
         <input type="time" className="border border-[#722082] rounded-lg p-3 w-full"/>
         </div>
          <select className="border border-[#722082] rounded-lg p-3 w-full">
           <option>2 человека</option>
           <option>3 человека</option>
           <option>4 человека</option>
           <option>5 человек</option>
           <option>6 человек</option>
          </select>
          <div className="flex justify-center w-full">
            <button 
              type="submit" 
              className="bg-[#722082] hover:bg-purple-700 text-white"
              style={{
                fontFamily: 'Inter',
                fontSize: '24px',
                fontWeight: 600,
                lineHeight: '33.6px',
                letterSpacing: '0.02em',
                width: '300px',
                height: '94px',
                padding: '30px 40px',
                gap: '12px',
                borderRadius: '30px',
                position: 'relative',
              }}>
              Забронировать
            </button>
          </div>
        </form>
   </section>
   </main>
  )
}

export default Body