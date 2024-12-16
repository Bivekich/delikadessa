import React, { useEffect, useState, useRef } from "react";
import main_image from "../assets/main_img.png";
import { Button } from "./Button";
import { getMainpage } from "../sanity";

const Body = () => {
  const [mainpage, setMainpage] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2 человека",
  });
  const bookingRef = useRef(null);

  useEffect(() => {
    const fetchMainpage = async () => {
      const mainpage = await getMainpage();
      setMainpage(mainpage);
    };
    fetchMainpage();
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#book" && bookingRef.current) {
        // Remove the hash after scrolling
        setTimeout(() => {
          bookingRef.current.scrollIntoView({ behavior: "smooth" });
          history.pushState("", document.title, window.location.pathname);
        }, 1000);
      }
    };

    // Handle initial hash if present
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBookings((prevBookings) => [...prevBookings, formData]);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "2 человека",
    });
    console.log("All bookings:", bookings);
  };

  return (
    <main className="bg-cover">
      <section className="relative mx-auto mb-24 mt-12 overflow-hidden">
        <div
          style={{
            backgroundImage: `url(${main_image})`,
            borderRadius: "100px 50px 100px 50px",
          }}
          className="container mx-auto relative flex flex-col items-start justify-center h-full p-6 md:p-10 text-white bg-cover bg-center"
        >
          <h1
            className="text-3xl md:text-5xl font-thin mb-4 pt-20 pb-0 text-white max-w-[700px]"
            style={{
              fontFamily: "Kornilow",
              lineHeight: "65px",
              textAlign: "left",
            }}
          >
            {mainpage.title}
          </h1>
          <p
            className="text-base md:text-lg mb-4 max-w-[700px]"
            style={{
              fontFamily: "Inter",
              lineHeight: "29px",
              textAlign: "left",
            }}
          >
            {mainpage.description?.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
          <div className="mt-20 mb-10">
            <Button
              style={{ fontFamily: "Kornilow" }}
              className="font-thin py-4 px-7"
              onClick={() =>
                bookingRef.current.scrollIntoView({ behavior: "smooth" })
              }
            >
              Забронировать
            </Button>
          </div>
        </div>
      </section>
      <section ref={bookingRef} className="pb-64">
        <div
          style={{ borderRadius: "100px 50px 100px 50px" }}
          className="container mx-auto my-12 p-6 bg-white shadow-2xl backdrop-blur-xl"
        >
          <h2
            className="text-center text-2xl font-bold text-[#7E6783]"
            style={{
              fontFamily: "Kornilow",
              fontSize: "40px",
              lineHeight: "85px",
            }}
          >
            Бронирование столика
          </h2>
          <p
            className="text-center text-[#7E6783] mt-2"
            style={{
              fontFamily: "Kornilow",
              fontSize: "28px",
              lineHeight: "85px",
            }}
          >
            Для бронирования столика необходимо внести депозит в размере 3000Р
          </p>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Имя"
                className="border border-[#722082] rounded-lg p-3 w-full shadow-md"
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Фамилия"
                className="border border-[#722082] rounded-lg p-3 w-full shadow-md"
              />
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="E-mail"
              className="border border-[#722082] rounded-lg p-3 w-full shadow-md"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Телефон"
              className="border border-[#722082] rounded-lg p-3 w-full shadow-md"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="border border-[#722082] rounded-lg p-3 w-full shadow-md"
              />
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                className="border border-[#722082] rounded-lg p-3 w-full shadow-md"
              />
            </div>
            <select
              name="guests"
              value={formData.guests}
              onChange={handleInputChange}
              className="border border-[#722082] rounded-lg p-3 w-full shadow-md"
            >
              <option>2 человека</option>
              <option>3 человека</option>
              <option>4 человека</option>
              <option>5 человек</option>
              <option>6 человек</option>
            </select>
            <div className="flex justify-center w-full">
              <button
                type="submit"
                className="bg-[#722082] hover:bg-purple-700 text-white font-bold text-2xl rounded-full w-72 h-24 shadow-lg"
              >
                Забронировать
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Body;
