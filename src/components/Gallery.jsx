import React, { useState, useEffect } from "react";
import { getGallery } from "../sanity";

function Gallery() {
  const [gallery, setGallery] = useState([]);
  const [selectedType, setSelectedType] = useState("Внутри");
  const [displayCount, setDisplayCount] = useState(8);

  useEffect(() => {
    const fetchGallery = async () => {
      const gallery = await getGallery();
      setGallery(gallery);
    };
    fetchGallery();
  }, []);

  useEffect(() => {
    setDisplayCount(8); // Reset display count when type changes
  }, [selectedType]);

  const filteredGallery = gallery.filter((item) => item.type === selectedType);
  const displayedGallery = filteredGallery.slice(0, displayCount);

  const handleLoadMore = () => {
    setDisplayCount((prevCount) => prevCount + 8);
  };

  return (
    <div className="text-center py-8 overflow-hidden mx-auto px-4">
      <h1 className="font-['Kornilow'] text-[40px] md:text-[60px] leading-[48px] md:leading-[58px] text-center mb-6 text-[#722082]">
        Галерея
      </h1>
      <div className="flex justify-center space-x-8 md:space-x-24 mb-6">
        <button
          onClick={() => setSelectedType("Внутри")}
          className={`font-['Kornilow'] text-xl md:text-[25px] leading-[60px] md:leading-[85px] text-[#722082] hover:underline ${
            selectedType === "Внутри" ? "underline" : ""
          }`}
        >
          Внутри
        </button>
        <button
          onClick={() => setSelectedType("Блюда")}
          className={`font-['Kornilow'] text-xl md:text-[25px] leading-[60px] md:leading-[85px] text-[#722082] hover:underline ${
            selectedType === "Блюда" ? "underline" : ""
          }`}
        >
          Блюда
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 px-2 md:px-8">
        {displayedGallery.map((item, index) => (
          <img
            key={index}
            src={item.image}
            alt={item.title}
            style={{
              borderRadius: "50px 25px 50px 25px",
            }}
            className="rounded-lg w-full aspect-video object-cover transition-transform duration-300 hover:scale-110"
          />
        ))}
      </div>
      {filteredGallery.length > displayCount && (
        <button
          onClick={handleLoadMore}
          className="mt-8 md:mt-12 mx-auto block bg-[#722082] hover:bg-purple-700 text-white font-['Kornilow'] text-2xl md:text-[30px] leading-[29px] w-[250px] md:w-[302px] h-[60px] md:h-[72px] rounded-3xl shadow"
        >
          Посмотреть еще
        </button>
      )}
    </div>
  );
}

export default Gallery;
