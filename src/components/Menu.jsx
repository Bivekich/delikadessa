import React from 'react'

function Menu() {
  return (
    <div className="flex flex-col items-center">
                    <h1 className="text-3xl font-bold text-purple-900 mt-10 mb-10">Наше меню</h1>
                    <div className="flex justify-center space-x-10">
                        <div className="flex flex-col items-center">
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <img src="" alt="Illustration of a woman sitting on a wine bottle with the text 'To be selective!'" className="rounded-lg"/>
                            </div>
                            <p className="text-purple-900 mt-4">Меню ресторана</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <img src="" alt="Illustration of a woman sitting on a wine bottle with the text 'To be selective!'" className="rounded-lg"/>
                                <p className="text-center text-brown-900 mt-4">BAR</p>
                            </div>
                            <p className="text-purple-900 mt-4">Барное меню</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <img src="" alt="Illustration of a woman sitting on a wine bottle with the text 'To be selective!'" className="rounded-lg"/>
                            </div>
                            <p className="text-purple-900 mt-4">Меню Тортов</p>
                        </div>
                    </div>
                </div>
  )
}

export default Menu