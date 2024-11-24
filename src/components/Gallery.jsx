import React from 'react'
import g1 from '../assets/g1.png'
import g2 from '../assets/g2.png'
import g3 from '../assets/g3.png'
import g4 from '../assets/g4.png'
import g5 from '../assets/g5.png'
import g6 from '../assets/g6.png'
import g7 from '../assets/g7.png'
import g8 from '../assets/g8.png'

function Gallery() {
  return (
    <div className="text-center py-8 overflow-hidden mx-auto px-4">
      <h1 style={{
        fontFamily: 'Kornilow',
        fontSize: '60px',
        fontWeight: 400,
        lineHeight: '58px',
        textAlign: 'center'
      }} 
      className="mb-6 text-[#722082]">
        Галерея
      </h1>
      <div className="flex justify-center space-x-24 mb-6">
        <a href="#" 
          style={{
            fontFamily: 'Kornilow',
            fontSize: '25px',
            fontWeight: 400,
            lineHeight: '85px',
            textAlign: 'left',
          }}
          className="text-[#722082] hover:underline">
          Внутри
        </a>
        <a href="#" 
          style={{
            fontFamily: 'Kornilow',
            fontSize: '25px',
            fontWeight: 400,
            lineHeight: '85px',
            textAlign: 'left',
          }}
          className="text-[#722082] hover:underline">
          Блюда
        </a>
      </div>
      <div className="grid grid-cols-4 gap-8 px-8">
        <img src={g1} alt="g1" className="rounded-lg w-full h-full object-cover transition-transform duration-300 hover:scale-110"/>
        <img src={g2} alt="g2" className="rounded-lg w-full h-full object-cover transition-transform duration-300 hover:scale-110"/>
        <img src={g3} alt="g3" className="rounded-lg w-full h-full object-cover transition-transform duration-300 hover:scale-110"/>
        <img src={g4} alt="g4" className="rounded-lg w-full h-full object-cover transition-transform duration-300 hover:scale-110"/>
        <img src={g5} alt="g5" className="rounded-lg w-full h-full object-cover transition-transform duration-300 hover:scale-110"/>
        <img src={g6} alt="g6" className="rounded-lg w-full h-full object-cover transition-transform duration-300 hover:scale-110"/>
        <img src={g7} alt="g7" className="rounded-lg w-full h-full object-cover transition-transform duration-300 hover:scale-110"/>
        <img src={g8} alt="g8" className="rounded-lg w-full h-full object-cover transition-transform duration-300 hover:scale-110"/>
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
    </div>
  )
}

export default Gallery