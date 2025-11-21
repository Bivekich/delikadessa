import React, { useState, useEffect } from 'react';
import { getGallery } from '../sanity';
import Preloader from './Preloader';
import SEO from './SEO';

function Gallery() {
  const [gallery, setGallery] = useState([]);
  const [selectedType, setSelectedType] = useState('Внутри');
  const [displayCount, setDisplayCount] = useState(8);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const galleryData = await getGallery();
        setGallery(galleryData);
        setLoading(false);
        setTimeout(() => setIsVisible(true), 100);
      } catch (error) {
        console.error('Error fetching gallery:', error);
        setLoading(false);
      }
    };
    fetchGallery();
  }, []);

  useEffect(() => {
    setDisplayCount(8);
  }, [selectedType]);

  const filteredGallery = gallery.filter((item) => item.type === selectedType);
  const displayedGallery = filteredGallery.slice(0, displayCount);

  const handleLoadMore = () => {
    setDisplayCount((prevCount) => prevCount + 8);
  };

  if (loading) {
    return <Preloader />;
  }

  return (
    <>
      <SEO
        title="Галерея ресторана Деликадесса | Интерьер и атмосфера"
        description="Фотографии интерьера ресторана Деликадесса: уютная атмосфера, изысканная терраса, современный дизайн. Посмотрите нашу галерею и забронируйте столик."
        keywords="галерея ресторана, деликадесса фото, интерьер ресторана, терраса москва"
        ogImage="/gallery-og.jpg"
      />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div
        className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h1
          className="text-3xl md:text-4xl text-[#722082] mb-8 text-center"
          style={{ fontFamily: 'Kornilow' }}
        >
          Галерея
        </h1>

        <div className="flex justify-center space-x-8 md:space-x-16 mb-10">
          <button
            onClick={() => setSelectedType('Внутри')}
            className={`font-['Kornilow'] text-lg md:text-xl text-[#722082] transition-all duration-300 ${
              selectedType === 'Внутри'
                ? 'border-b-2 border-[#722082] scale-105'
                : 'hover:scale-105'
            }`}
          >
            Внутри
          </button>
          <button
            onClick={() => setSelectedType('Блюда')}
            className={`font-['Kornilow'] text-lg md:text-xl text-[#722082] transition-all duration-300 ${
              selectedType === 'Блюда'
                ? 'border-b-2 border-[#722082] scale-105'
                : 'hover:scale-105'
            }`}
          >
            Блюда
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {displayedGallery.map((item, index) => (
            <div
              key={item._id || index}
              className={`transform transition-all duration-1000 delay-[${
                index * 200
              }ms] ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="relative group overflow-hidden rounded-[50px_25px_50px_25px] shadow-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:opacity-0" />
                {item.title && (
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-lg font-medium">
                      {item.title}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredGallery.length > displayCount && (
          <div
            className={`flex justify-center mt-12 transition-all duration-1000 delay-[800ms] ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <button
              onClick={handleLoadMore}
              className="bg-[#722082] hover:bg-[#8f35a1] text-white text-xl md:text-2xl py-4 px-8 rounded-full transition-all duration-300 hover:scale-105"
              style={{ fontFamily: 'Kornilow' }}
            >
              Показать еще
            </button>
          </div>
        )}
      </div>
    </main>
    </>
  );
}

export default Gallery;
