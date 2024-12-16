import React, { useState, useEffect } from "react";
import { getCakes } from "../sanity";

function Cake() {
  const [cakes, setCakes] = useState([]);
  const [displayCount, setDisplayCount] = useState(4);

  useEffect(() => {
    const fetchCakes = async () => {
      const cakes = await getCakes();
      setCakes(cakes);
    };
    fetchCakes();
  }, []);

  const handleShowMore = () => {
    setDisplayCount((prevCount) => prevCount + 4);
  };

  const displayedCakes = cakes.slice(0, displayCount);
  const hasMoreCakes = displayCount < cakes.length;

  return (
    <div className="container mx-auto overflow-hidden">
      <div className="overflow-hidden mx-auto px-4">
        <main className="text-center py-4">
          <h1
            className="text-3xl font-bold text-[#722082] mb-4"
            style={{
              fontFamily: "Kornilow",
              fontSize: "40px",
              fontWeight: 400,
              lineHeight: "60px",
            }}
          >
            Торты на заказ
          </h1>
          <p
            className="text-lg text-[#722082] mb-1"
            style={{
              fontFamily: "Kornilow",
              fontSize: "25px",
              fontWeight: 400,
              lineHeight: "30px",
            }}
          >
            Индивидуальный дизайн, для уточнения свяжитесь по телефону
          </p>
          <p
            className="text-lg text-[#722082] mb-4"
            style={{
              fontFamily: "Kornilow",
              fontSize: "25px",
              fontWeight: 400,
              lineHeight: "30px",
            }}
          >
            Минимальное время на изготовление торта: неделя
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16 px-4">
            {displayedCakes.map((cake) => (
              <img
                key={cake.title}
                src={cake.image}
                alt={cake.title}
                className="w-full rounded-lg transform transition-transform duration-300 hover:scale-105"
              />
            ))}
          </div>
          {hasMoreCakes && (
            <button
              onClick={handleShowMore}
              className="mt-12 mx-auto block bg-[#722082] hover:bg-purple-700 text-white font-bold py-4 px-4 rounded-3xl shadow"
              style={{
                fontFamily: "Kornilow",
                fontSize: "30px",
                fontWeight: 400,
                lineHeight: "29px",
                textAlign: "center",
                width: "302px",
                height: "72px",
              }}
            >
              Посмотреть еще
            </button>
          )}
        </main>
      </div>
    </div>
  );
}

export default Cake;
