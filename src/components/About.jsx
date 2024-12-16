import React from 'react';
import ab from '../assets/ab.png';
import ab2 from '../assets/ab2.png';
import { Link } from 'react-router-dom';
import { getAboutUs, getTerrassa } from '../sanity';
import { useState, useEffect } from 'react';
import Preloader from './Preloader';

function About() {
  const [aboutUs, setAboutUs] = useState([]);
  const [terassa, setTerrassa] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const fetchAboutUs = async () => {
      try {
        const aboutUsData = await getAboutUs();
        const terrassaData = await getTerrassa();
        setAboutUs(aboutUsData);
        setTerrassa(terrassaData);
        setLoading(false);
        setTimeout(() => setIsVisible(true), 100);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    fetchAboutUs();
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div
        className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start mb-24">
          <div className="w-full lg:w-1/2 relative">
            <img
              src={ab}
              alt="О нас"
              className="w-full rounded-3xl shadow-lg"
            />
          </div>

          <div className="w-full lg:w-1/2 space-y-6">
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg">
              <h2
                className="text-2xl md:text-3xl text-[#722082] mb-4"
                style={{ fontFamily: 'Kornilow' }}
              >
                {aboutUs.title}
              </h2>
              <p className="text-[#5C6574] text-base md:text-lg leading-relaxed">
                {aboutUs.description}
              </p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg">
              <h2
                className="text-2xl md:text-3xl text-[#722082] mb-4"
                style={{ fontFamily: 'Kornilow' }}
              >
                {terassa.title}
              </h2>
              <p className="text-[#5C6574] text-base md:text-lg leading-relaxed mb-6">
                {terassa.shortDescription}
              </p>
              <div className="flex justify-end">
                <Link
                  to="/terassa"
                  className="bg-[#722082] hover:bg-[#8f35a1] text-white text-lg md:text-xl py-3 px-6 rounded-full transition-all duration-300 hover:scale-105"
                  style={{ fontFamily: 'Kornilow' }}
                >
                  Узнать больше
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 space-y-8">
            <h2
              className="text-3xl md:text-4xl text-[#722082] mb-8"
              style={{ fontFamily: 'Kornilow' }}
            >
              Наши преимущества
            </h2>
            <div className="space-y-6">
              {aboutUs.advantages?.map((advantage, index) => (
                <div
                  key={index}
                  className={`transform transition-all duration-1000 delay-[${
                    index * 200
                  }ms] ${
                    isVisible
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 -translate-x-10'
                  }`}
                >
                  <h3 className="text-xl text-[#722082] mb-2">
                    {advantage.advantageTitle}
                  </h3>
                  <p className="text-[#5C6574] text-base md:text-lg leading-relaxed">
                    {advantage.advantageDescription}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <img
              src={ab2}
              alt="Преимущества"
              className="w-full rounded-3xl shadow-lg transform transition-all duration-1000 delay-500"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
              }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
