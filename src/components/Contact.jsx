import React from 'react'
import logo1 from '../assets/logo1.svg'
import contact from '../assets/contact.png'

function Contact() {
  return (
    <div className="bg-cover bg-center" style={{ backgroundImage: `url(${contact})` }}>
      <div className="container mx-auto p-4">
        <div className="mt-16">
          <h1 className="text-center text-4xl text-purple-700 mb-8">
            Контакты
          </h1>
          <div className="bg-blur rounded-lg p-8 flex justify-between mb-32 pb-64 items-center bg-[#7220824D]">
          <div className="flex items-center mb-4 md:mb-0">
                <img src={logo1} alt="logo1" className="h-200 w-200 p-5"/>
              </div>
            <div className="text-center">
              <h2 className="text-2xl text-[#ffffff] mb-2" style={{ fontFamily: 'Inter', fontSize: '32px', fontWeight: 600, lineHeight: '29px', textUnderlinePosition: 'from-font', textDecorationSkipInk: 'none' }}>
                Часы работы
              </h2>
              <p style={{ fontFamily: 'Inter', fontSize: '24px', fontWeight: 600, lineHeight: '29px', textUnderlinePosition: 'from-font', textDecorationSkipInk: 'none', color: '#ffffff' }}>
                понедельник - четверг
                <br/>
                с 10:00 до 22:00
              </p>
              <p style={{ fontFamily: 'Inter', fontSize: '24px', fontWeight: 600, lineHeight: '29px', textUnderlinePosition: 'from-font', textDecorationSkipInk: 'none', color: '#ffffff' }}>
                пятница - воскресенье
                <br/>
                с 10:00 до 22:00
              </p>
            </div>
            <div className="text-center">
              <h2 className="text-2xl text-[#ffffff] mb-2" style={{ fontFamily: 'Inter', fontSize: '32px', fontWeight: 600, lineHeight: '29px', textUnderlinePosition: 'from-font', textDecorationSkipInk: 'none' }}>
                Для связи
              </h2>
              <p style={{ fontFamily: 'Inter', fontSize: '24px', fontWeight: 600, lineHeight: '29px', textUnderlinePosition: 'from-font', textDecorationSkipInk: 'none', color: '#ffffff' }}>
                +7 (925) 212-08-05
              </p>
              <div className="flex justify-center space-x-4 mt-4">
                <a className="text-[#ffffff] text-2xl" href="#">
                  <i className="fab fa-telegram-plane">
                  </i>
                </a>
                <a className="text-[#ffffff] text-2xl" href="#">
                  <i className="fab fa-vk">
                  </i>
                </a>
              </div>
            </div>
            <div className="text-center">
              <h2 className="text-2xl text-[#ffffff] mb-2" style={{ fontFamily: 'Inter', fontSize: '32px', fontWeight: 600, lineHeight: '29px', textUnderlinePosition: 'from-font', textDecorationSkipInk: 'none' }}>
                Где мы находимся
              </h2>
              <p style={{ fontFamily: 'Inter', fontSize: '24px', fontWeight: 600, lineHeight: '29px', textUnderlinePosition: 'from-font', textDecorationSkipInk: 'none', color: '#ffffff' }}>
                Москва, Котельническая наб., 1/15кА
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact