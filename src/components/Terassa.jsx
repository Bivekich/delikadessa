import { useState, useEffect } from "react";
import { getTerrassa } from "../sanity";

const Terassa = () => {
  const [terassa, setTerrassa] = useState([]);
  useEffect(() => {
    const fetchTerrassa = async () => {
      const terrace = await getTerrassa();
      setTerrassa(terrace);
    };
    fetchTerrassa();
  }, []);
  return (
    <div
      className="bg-cover bg-center overflow-hidden mx-auto px-4"
      style={{ backgroundImage: `url(${terassa.image})` }}
    >
      <div className="container mx-auto p-4">
        <div className="mt-16">
          <div className="relative rounded-lg py-16 px-7 mb-32">
            <div
              className="absolute inset-0 backdrop-blur rounded-lg"
              style={{
                borderRadius: "100px 50px 100px 50px",
                backgroundColor: "rgba(50, 50, 50, 0.3)",
              }}
            ></div>
            <div className="relative z-10 min-h-[45vh] flex flex-col gap-10 items-center lg:items-start lg:gap-2 lg:justify-between px-10">
              <div className="flex flex-col gap-5">
                <h1 className="mx-auto text-4xl text-white mb-10">
                  {terassa.title}
                </h1>
                <p className="text-white">{terassa.fullDescription}</p>
              </div>
              <div className="mx-auto text-white text-center">
                Время работы <br />
                {terassa.worktime}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terassa;
