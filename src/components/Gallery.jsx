import React from 'react'

function Gallery() {
  return (
    <div className="text-center py-12">
                        <h1 className="text-3xl font-bold mb-6">Галерея</h1>
                        <div className="flex justify-center space-x-6 mb-6">
                            <a href="#" className="text-purple-700 border-b-2 border-purple-700 pb-1">Внутри</a>
                            <a href="#" className="text-gray-600 hover:text-gray-800">Блюда</a>
                        </div>
                        <div className="grid grid-cols-3 gap-6 px-6">
                            <img src="" alt="Interior view 1" className="rounded-lg"/>
                            <img src="" alt="Interior view 2" className="rounded-lg"/>
                            <img src="" alt="Interior view 3" className="rounded-lg"/>
                            <img src="" alt="Interior view 4" className="rounded-lg"/>
                            <img src="" alt="Interior view 5" className="rounded-lg"/>
                            <img src="" alt="Interior view 6" className="rounded-lg"/>
                        </div>
                        <button className="bg-purple-700 text-white py-2 px-6 rounded-full mt-6">Посмотреть еще</button>
    </div>
  )
}

export default Gallery