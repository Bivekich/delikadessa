import React from 'react'
import cake1 from '../assets/cake1.png'
import cake2 from '../assets/cake2.png'
import cake3 from '../assets/cake3.png'
import cake4 from '../assets/cake4.png'
import cake5 from '../assets/cake5.png'

function Cake() {
  return (
    <div>
         <div>
          <main className="text-center py-4">
          <h1 className="text-3xl font-bold text-[#722082] mb-4" style={{ fontFamily: 'Kornilow', fontSize: '40px', fontWeight: 400, lineHeight: '60px' }}>Торты на заказ</h1>
          <p className="text-lg text-[#722082] mb-1" style={{ fontFamily: 'Kornilow', fontSize: '25px', fontWeight: 400, lineHeight: '30px' }}>Индивидуальный дизайн, для уточнения свяжитесь по телефону</p>
          <p className="text-lg text-[#722082] mb-4" style={{ fontFamily: 'Kornilow', fontSize: '25px', fontWeight: 400, lineHeight: '30px' }}>Минимальное время на изготовление торта: неделя</p>
          <div className="flex justify-center space-x-4 mb-16">
          <img src={cake1} alt="Cake1" className="rounded-lg transform transition-transform duration-300 hover:scale-105"/>
          <img src={cake2} alt="Cake2" className="rounded-lg transform transition-transform duration-300 hover:scale-105"/>
          <img src={cake3} alt="Cake3" className="rounded-lg transform transition-transform duration-300 hover:scale-105"/>
          <div className="space-y-4">
          <img src={cake4} alt="Cake4" className="rounded-lg transform transition-transform duration-300 hover:scale-105"/>
          <img src={cake5} alt="Cake5" className="rounded-lg transform transition-transform duration-300 hover:scale-105"/>
        </div>
    </div>
    <button 
      className="mt-12 mx-auto block bg-[#722082] hover:bg-purple-700 text-white font-bold py-4 px-4 rounded-3xl shadow" 
      style={{ 
      fontFamily: 'Kornilow',
      fontSize: '30px',
      fontWeight: 400,
      lineHeight: '29px',
      textAlign: 'center',
      width: '302px',
      height: '72px',
       }}>
      Посмотреть еще
    </button>
         </main>
         </div>
    </div>
  )
}

export default Cake