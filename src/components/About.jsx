import React from 'react'
import ab from '../assets/ab.png'
import ab2 from '../assets/ab2.png' 

function About() {
  return (
    <div className="container mx-auto px-4 pt-44 pb-8 mb-8">
      <div className="flex flex-col md:flex-row gap-8 items-start relative">
        <div className="md:w-1/2 relative">
          <img 
            src={ab} 
            alt="ab" 
            className="w-full h-auto object-cover rounded-3xl"
          />
          <div className="md:w-[120%] absolute bottom-[-25%] right-[-110%] z-10">
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg relative z-20">
              <h2 className="text-2xl font-bold text-purple-900 mb-4" style={{
                fontFamily: 'Kornilow',
                fontSize: '40px',
                fontWeight: 400,
                lineHeight: '85px',
                textAlign: 'left',
                textUnderlinePosition: 'from-font',
                textDecorationSkipInk: 'none'
              }}>
                О нас
              </h2>
              <p className="text-[#5C6574] px-4" style={{
                fontFamily: 'Inter',
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: '29px',
                textAlign: 'justify',
                textUnderlinePosition: 'from-font',
                textDecorationSkipInk: 'none'
              }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg -mt-8 relative z-20 mr-2 md:mr-4 -ml-4 md:-ml-8">
              <h2 className="text-2xl font-bold text-purple-900 mb-4" style={{
                fontFamily: 'Kornilow',
                fontSize: '40px',
                fontWeight: 400,
                lineHeight: '85px',
                textAlign: 'left',
                textUnderlinePosition: 'from-font',
                textDecorationSkipInk: 'none'
              }}>
                Терраса
              </h2>
              <p className="text-[#5C6574] mb-4 px-4" style={{
                fontFamily: 'Inter',
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: '29px',
                textAlign: 'justify',
                textUnderlinePosition: 'from-font',
                textDecorationSkipInk: 'none'
              }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              </p>
              <div className="flex justify-end">
                <button 
                  className="mt-4 bg-[#722082] hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-tr-[25px] rounded-bl-[25px] rounded-tl-md rounded-br-md shadow" 
                  style={{ 
                    fontFamily: 'Kornilow',
                    fontSize: '20px',
                    fontWeight: 400,
                    lineHeight: '29px',
                    textAlign: 'center',
                    textUnderlinePosition: 'from-font',
                    textDecorationSkipInk: 'none',
                    width: '235px',
                    height: '64px',
                  }}>
                  Узнать больше
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center min-h-screen pt-24">
                    <div className="flex flex-col md:flex-row items-center p-8 rounded-lg">
                        <div className="flex flex-col space-y-6">
                            <h1 className="text-3xl text-center md:text-left text-purple-900 mb-8">Наши преимущества</h1>
                            {Array(4).fill().map((_, index) => (
                                <div key={index} className="flex items-start space-x-4">
                                    <i className="fas fa-check-circle text-purple-900 text-3xl"></i>
                                    <div>
                                        <h2 className="text-xl text-purple-900">Всегда свежие продукты</h2>
                                        <p className="text-gray-400">Блюда приготовленные из свежайших продуктов</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 md:mt-0 md:ml-8">
                            <img src={ab2} alt='ab2' className="rounded-lg" />
                        </div>
                    </div>
                </div>

    </div>
  )
}

export default About