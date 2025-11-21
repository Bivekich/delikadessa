import { useState, useEffect } from 'react';
import { getMenu, getSeafood } from '../sanity';
import { Link } from 'react-router-dom';
import Preloader from './Preloader';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import SEO from './SEO';
import StructuredData from './StructuredData';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [seafood, setSeafood] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [menuData, seafoodData] = await Promise.all([
          getMenu(),
          getSeafood(),
        ]);
        setMenu(menuData);
        setSeafood(seafoodData);
        setLoading(false);
        setTimeout(() => setIsVisible(true), 100);
      } catch (error) {
        console.error('Error fetching menu:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <SEO
        title="Меню ресторана Деликадесса | Авторские блюда и морепродукты"
        description="Изысканное меню ресторана Деликадесса: живой аквариум с морепродуктами, авторские блюда европейской кухни, большой выбор вин. Онлайн бронирование столиков."
        keywords="меню ресторана, деликадесса меню, морепродукты москва, живой аквариум, европейская кухня"
        ogImage="/menu-og.jpg"
      />
      <StructuredData type="restaurant" />
      {loading ? (
        <Preloader />
      ) : (
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="mb-4">
            <h2
              className={`text-2xl md:text-3xl font-bold text-[#722082] mb-4 text-center transition-all duration-1000 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ fontFamily: 'Kornilow' }}
            >
              Живой аквариум
            </h2>

            <div
              className={`transition-all duration-1000 mb-4 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                spaceBetween={20}
                coverflowEffect={{
                  rotate: 30,
                  stretch: 0,
                  depth: 50,
                  modifier: 1,
                  slideShadows: false,
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                modules={[EffectCoverflow, Autoplay]}
                className="mySwiper"
              >
                {seafood.map((item) => (
                  <SwiperSlide key={item._id}>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          <h1
            className={`text-2xl md:text-3xl font-bold text-[#722082] mb-6 text-center transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
            style={{ fontFamily: 'Kornilow' }}
          >
            Меню
          </h1>

          <div className="flex justify-center flex-wrap gap-6 max-w-4xl mx-auto">
            {menu.map((category, index) => (
              <div
                key={category._id}
                className={`w-full sm:w-[calc(50%-0.75rem)] transition-all duration-1000 delay-[${
                  index * 200
                }ms] ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
              >
                <Link to={category.pdf} className="block">
                  <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                    <div className="relative overflow-hidden group">
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:opacity-0" />
                    </div>
                    <div className="p-4">
                      <h2
                        className="text-xl text-[#722082] text-center"
                        style={{ fontFamily: 'Kornilow' }}
                      >
                        {category.title}
                      </h2>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </main>
      )}
    </>
  );
};

export default Menu;
