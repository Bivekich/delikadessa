import React from 'react'
import m1 from '../assets/m1.png'
import m2 from '../assets/m2.png'

function Menu() {
  return (
    <div className="flex flex-col items-center overflow-hidden mx-auto px-4">
      <h1 className="font-['Kornilow'] text-[40px] font-normal leading-[85px] text-left text-[#7E6783] mt-10 mb-10">
        Наше меню
      </h1>
      <div className="flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-10">
        <div className="flex flex-col items-center mb-10 md:mb-0">
          <div className="shadow-2xl rounded-3xl transition-transform duration-300 hover:scale-110">
            <img src={m1} alt="m1" className="rounded-3xl"/>
          </div>
          <p className="font-['Kornilow'] text-[25px] font-normal leading-[85px] text-left text-[#722082] mt-4 " >
            Меню ресторана
          </p>
        </div>
        <div className="flex flex-col items-center mb-10 md:mb-0">
          <div className="shadow-2xl rounded-3xl transition-transform duration-300 hover:scale-110">
            <img src={m2} alt="m2" className="rounded-3xl"/>
          </div>
          <p className="font-['Kornilow'] text-[25px] font-normal leading-[85px] text-left text-[#722082] mt-4 ">
            Барное меню
          </p>
        </div>
        <div className="flex flex-col items-center mb-10 md:mb-0">
          <div className="shadow-2xl rounded-3xl transition-transform duration-300 hover:scale-110">
            <img src={m1} alt="m3" className="rounded-3xl"/>
          </div>
          <p className="font-['Kornilow'] text-[25px] font-normal leading-[85px] text-left text-[#722082] mt-4" >
            Меню Тортов
          </p>
        </div>
      </div>
    </div>
  )
}

export default Menu