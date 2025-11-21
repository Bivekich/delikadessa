import { useState, useEffect } from 'react';
import { getTerrassa } from '../sanity';
import Preloader from './Preloader';
import SEO from './SEO';

const Terassa = () => {
  const [terassa, setTerrassa] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const fetchTerrassa = async () => {
      try {
        const terraceData = await getTerrassa();
        setTerrassa(terraceData);
        setLoading(false);
        setTimeout(() => setIsVisible(true), 100);
      } catch (error) {
        console.error('Error fetching terrace data:', error);
        setLoading(false);
      }
    };
    fetchTerrassa();
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <>
      <SEO
        title="Летняя терраса ресторана Деликадесса | Открытая веранда"
        description="Летняя терраса ресторана Деликадесса в Москве: уютная открытая веранда, прекрасный вид, комфортная атмосфера. Забронируйте столик на террасе."
        keywords="терраса деликадесса, летняя терраса москва, ресторан с верандой, открытая терраса"
        ogImage="/terassa-og.jpg"
      />
      <main
      className="min-h-screen bg-fixed bg-cover bg-center relative"
      style={{ backgroundImage: `url(${terassa.image})` }}
    >
      <div className="absolute inset-0 bg-black/30" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="mt-8 md:mt-16">
            <div className="relative rounded-[50px_25px_50px_25px] md:rounded-[100px_50px_100px_50px] overflow-hidden">
              <div
                className="absolute inset-0 backdrop-blur-sm"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                }}
              />
              <div className="relative z-10 p-6 md:p-12 lg:p-16">
                <div className="max-w-4xl mx-auto space-y-8">
                  <h1
                    className={`text-3xl md:text-4xl lg:text-5xl text-white text-center mb-8 font-bold transition-all duration-1000 delay-200 ${
                      isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-10'
                    }`}
                    style={{ fontFamily: 'Kornilow' }}
                  >
                    {terassa.title}
                  </h1>
                  <p
                    className={`text-lg md:text-xl text-white leading-relaxed transition-all duration-1000 delay-400 ${
                      isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-10'
                    }`}
                  >
                    {terassa.fullDescription}
                  </p>
                  <div
                    className={`text-center transition-all duration-1000 delay-600 ${
                      isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-10'
                    }`}
                  >
                    <h3
                      className="text-xl md:text-2xl text-white mb-4"
                      style={{ fontFamily: 'Kornilow' }}
                    >
                      Время работы
                    </h3>
                    <p className="text-lg md:text-xl text-white">
                      {terassa.worktime}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  );
};

export default Terassa;
