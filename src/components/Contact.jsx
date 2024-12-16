import React, { useEffect, useState } from "react";
import logo1 from "../assets/logo1.svg";
import contact from "../assets/contact.png";
import { getContacts } from "../sanity";

function Contact() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      const contacts = await getContacts();
      setContacts(contacts);
    };
    fetchContacts();
  }, []);
  return (
    <div
      className="bg-cover bg-center overflow-hidden mx-auto px-4"
      style={{ backgroundImage: `url(${contact})` }}
    >
      <div className="container mx-auto p-4">
        <div className="mt-16">
          <h1 className="text-center text-4xl text-[#722082] mb-8 font-[Inter] text-[40px] leading-[85px] font-semibold">
            Контакты
          </h1>
          <div className="relative rounded-lg py-16 px-7 mb-32 pb-44">
            <div
              className="absolute inset-0 backdrop-blur-md rounded-lg"
              style={{
                borderRadius: "100px 50px 100px 50px",
                backgroundColor: "rgba(114, 32, 130, 0.3)",
              }}
            ></div>
            <div className="relative z-10 flex flex-col lg:flex-row gap-10 items-center lg:items-start lg:gap-2 lg:justify-between">
              <div className="flex w-fit items-center mb-4 md:mb-0">
                <img src={logo1} alt="logo1" className="h-200 w-200 p-5" />
              </div>
              <div className="text-start w-fit">
                <h2 className="text-2xl text-white mb-2 font-inter text-[32px] font-semibold leading-6">
                  Часы работы
                </h2>
                <p className="font-inter text-[15px] font-semibold leading-6 text-white max-w-[200px] whitespace-pre-line">
                  {contacts.worktime?.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
              </div>
              <div className="text-start w-fit">
                <h2 className="text-2xl text-white mb-2 font-inter text-[32px] font-semibold leading-6">
                  Для связи
                </h2>
                <p className="font-inter text-[15px] font-semibold leading-6 text-white text-nowrap">
                  {contacts.forconnect}
                </p>
                <div className="flex justify-center space-x-4 mt-4">
                  <a className="text-white text-2xl" href="#">
                    <i className="fab fa-telegram-plane"></i>
                  </a>
                  <a className="text-white text-2xl" href="#">
                    <i className="fab fa-vk"></i>
                  </a>
                </div>
              </div>
              <div className="text-start w-fit">
                <h2 className="text-2xl text-white mb-2 font-inter text-[32px] font-semibold leading-6">
                  Где мы находимся
                </h2>
                <p className="font-inter text-[15px] font-semibold leading-6 text-white">
                  {contacts.address}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
