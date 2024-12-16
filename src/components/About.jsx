import React from "react";
import ab from "../assets/ab.png";
import ab2 from "../assets/ab2.png";
import { Link } from "react-router-dom";
import { getAboutUs, getTerrassa } from "../sanity";
import { useState, useEffect } from "react";
function About() {
  const [aboutUs, setAboutUs] = useState([]);
  const [terassa, setTerrassa] = useState([]);
  useEffect(() => {
    const fetchAboutUs = async () => {
      const aboutUs = await getAboutUs();
      setAboutUs(aboutUs);
      const terrace = await getTerrassa();
      setTerrassa(terrace);
    };
    fetchAboutUs();
  }, []);

  return (
    <div className="mx-auto px-4 pt-14 pb-8 mb-8">
      <div className="flex flex-col md:flex-row gap-8 items-start relative">
        <div className=" relative">
          <img
            src={ab}
            alt="ab"
            className="md:w-2/3 w-full h-auto object-cover rounded-3xl"
          />
          <div className="md:w-[80%] absolute right-[-20%] bottom-[-25%] w-1/3 z-10">
            <div className="bg-white p-8 md:p-5 rounded-3xl shadow-lg relative z-30">
              <h2
                className="text-xl ml-4 font-bold text-purple-900 mb-4"
                style={{
                  fontFamily: "Kornilow",
                  fontSize: "32px",
                  fontWeight: 400,
                  lineHeight: "45px",
                  textAlign: "left",
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                }}
              >
                {aboutUs.title}
              </h2>
              <p
                className="text-[#5C6574] px-4"
                style={{
                  fontFamily: "Inter",
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "1.5",
                  textAlign: "justify",
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                }}
              >
                {aboutUs.description}
              </p>
            </div>
            <div className="bg-white ml-4 p-8 md:p-5 rounded-3xl shadow-lg -mt-8 relative z-10 mr-2 md:mr-4 -ml-4 md:-ml-8">
              <h2
                className="text-2xl font-bold text-purple-900 mb-4 mt-2"
                style={{
                  fontFamily: "Kornilow",
                  fontSize: "32px",
                  fontWeight: 400,
                  lineHeight: "45px",
                  textAlign: "left",
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                }}
              >
                {terassa.title}
              </h2>
              <p
                className="text-[#5C6574] mb-4 px-4"
                style={{
                  fontFamily: "Inter",
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "1.5",
                  textAlign: "justify",
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                }}
              >
                {terassa.shortDescription}
              </p>
              <div className="flex justify-end">
                <Link
                  to="/terassa"
                  className={`bg-[#722082] hover:bg-purple-700 text-white font-semibold rounded-tl-2xl rounded-br-2xl rounded-tr-md rounded-bl-md shadow w-full md:w-auto h-18 text-lg py-4 px-7`}
                  style={{
                    fontFamily: "Kornilow",
                    fontSize: "20px",
                    fontWeight: 400,
                    lineHeight: "29px",
                    textAlign: "center",
                    textUnderlinePosition: "from-font",
                    textDecorationSkipInk: "none",
                    width: "235px",
                    height: "64px",
                  }}
                >
                  Узнать больше
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center min-h-screen pt-24">
        <div className="flex flex-col md:flex-row items-center p-8 rounded-lg">
          <div className="flex flex-col space-y-6">
            <h1 className="text-3xl text-center md:text-left text-purple-900 mb-8">
              Наши преимущества
            </h1>
            {aboutUs.advantages?.map((advantage, index) => (
              <div key={index} className="flex items-start space-x-4">
                <i className="fas fa-check-circle text-purple-900 text-3xl"></i>
                <div>
                  <h2 className="text-xl text-purple-900">
                    {advantage.advantageTitle}
                  </h2>
                  <p className="text-gray-400">
                    {advantage.advantageDescription}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 md:mt-0 md:ml-8">
            <img src={ab2} alt="ab2" className="rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
