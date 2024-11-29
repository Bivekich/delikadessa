import React from 'react'
import main_image from '../assets/main_img.png'

const Body = () => {
  return (
    <main className='pt-44' style={{ backgroundImage: `url(${main_image})` }}>
     <section className="relative mx-auto" style={{
        margin: '100px',
        overflow: 'hidden'
        }}>
     <div className="relative ">
                    <div className="relative flex flex-col items-start justify-center h-full p-6 md:p-10 text-white">
                        <h1 className="text-3xl md:text-5xl font-bold mb-4 pt-100 pb-100"  style={{
                          fontFamily: 'Kornilow',
                          fontSize: 'clamp(2rem, 5vw + 1rem, 4rem)',
                          fontWeight: 400,
                          lineHeight: '85px',
                          textAlign: 'left',
                          textUnderlinePosition: 'from-font',
                          textDecorationSkipInk: 'none'
                        }}>Ресторан «ДеликАдесса» — место для приятных встреч</h1>
                        <p className="text-base md:text-lg mb-4" style={{
                          fontFamily: 'Inter',
                          fontSize: 'clamp(1rem, 2vw + 0.5rem, 1.25rem)',
                          fontWeight: 600,
                          lineHeight: '29px',
                          textAlign: 'left',
                          textUnderlinePosition: 'from-font',
                          textDecorationSkipInk: 'none'
                        }}>Сезонные продукты, бережное отношение к традициям и современные техники приготовления - три главных принципа кухни ДеликАдессы.</p>
                        <p className="text-base md:text-lg mb-4" style={{
                          fontFamily: 'Inter',
                          fontSize: 'clamp(1rem, 2vw + 0.5rem, 1.25rem)',
                          fontWeight: 600,
                          lineHeight: '29px',
                          textAlign: 'left',
                          textUnderlinePosition: 'from-font',
                          textDecorationSkipInk: 'none'
                        }}>В нашем ресторане каждый гость важен, поэтому мы учитываем любое пожелание, чтобы ваш вечер прошел незабываемо!</p>
                        <p className="text-base md:text-lg mb-8" style={{
                          fontFamily: 'Inter',
                          fontSize: 'clamp(1rem, 2vw + 0.5rem, 1.25rem)',
                          fontWeight: 600,
                          lineHeight: '29px',
                          textAlign: 'left',
                          textUnderlinePosition: 'from-font',
                          textDecorationSkipInk: 'none'
                        }}>Будем ждать вас в гости, чтобы показать на примере, что такое изысканная кухня!</p>
                        <button 
                         className="mt-4 bg-[#722082] hover:bg-purple-700 mb-24 text-white font-bold py-2 px-4 rounded-tl-2xl rounded-br-2xl rounded-tr-md rounded-bl-md shadow w-full md:w-auto" 
                         style={{ 
                         fontFamily: 'Kornilow',
                         fontSize: 'clamp(1.5rem, 2vw + 1rem, 30px)',
                         fontWeight: 400,
                         lineHeight: '29px',
                         textAlign: 'center',
                         textUnderlinePosition: 'from-font',
                         textDecorationSkipInk: 'none',
                         height: '72px',
                         }}>Забронировать
                       </button>
                    </div>
                </div>
     </section>
       <section className='pb-64'>
       <div className="container mx-auto my-12 p-6 bg-white bg-opacity-0 rounded-[30px] shadow-md backdrop-blur-md">
        <h2 className="text-center text-2xl font-bold text-[#722082]" style={{
          fontFamily: 'Kornilow',
          fontSize: '40px',
          fontWeight: 400,
          lineHeight: '85px',
          textUnderlinePosition: 'from-font',
          textDecorationSkipInk: 'none'
        }}>Бронирование столика</h2>
        <p className="text-center text-[#7E6783] mt-2" style={{
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
        </div>
   </section>
   </main>
  )
}

export default Body