"use client";
import React, { useState } from "react";
import { useEffect, useRef } from 'react';
import Image from "next/image";
import Tag from "./Tag";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";

const contentData = [
  {
    title: "Sustainable Farming Practices",
    img: "/image/agro-img1.png",
    text: "Focuses on long-term environmental health and resource efficiency in agriculture.",
  },
  {
    title: "Naturally Grown Produce",
    img: "/image/agro-img2.png",
    text: "Supports the cultivation of produce without synthetic chemicals.",
  },
  {
    title: "Farm-to-Table Model",
    img: "/image/agro-img3.png",
    text: "Connects consumers directly to local farms, reducing travel and waste.",
  },
  {
    title: "Packaging & Distribution",
    img: "/image/agro-img4.png",
    text: "Emphasizes eco-friendly, organic, and environmentally responsible methods.",
  },
];

const Agro = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="agro"
      className="mt-12 sm:mb-8 md:px-12 lg:px-16 py-8 md:py-12 lg:my-16"
    >
      {/* Heading */}

      <div className="flex flex-col justify-center items-center sm:text-center mb-8 md:mb-10 lg:mb-14">
        <Tag text="Agro Business" />

        <h2
          className="text-[32px] lg:text-[44px] md:text-3xl sm:text-2xl  font-bold mt-3"
          style={{ color: "var(--primary-text)" }}
        >
          Shayonis Agro
        </h2>
        <p
          className="font-bold sm:font-semibold lg:text-[44px] md:text-3xl sm:text-lg md:text-[30px] "
          style={{ color: "var(--secondary-text)" }}
        >
          Rooted in Nature. Growing the Future
        </p>
      </div>

      {/* Main Content */}
      <div className=" info-panel flex flex-col md:flex-row gap-4 md:gap-8 items-start">
        {/* Sidebar Buttons */}
        <div className="hidden md:flex flex-col gap-4 md:w-1/3">
          <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible no-scrollbar pb-2">
            {contentData.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`sidebar-btn flex-shrink-0 flex justify-between items-center md:min-w-0 ${
                  activeIndex === index ? "bg-[#D3EDFF]" : "bg-[#e8eff5]"
                }`}
              >
                <span className="text-left md:text-lg text-sm font-medium">
                  {item.title}
                </span>
                <HiOutlineArrowLongRight className="text-2xl" />
              </button>
            ))}
          </div>
        </div>

        <div className="hidden md:block w-full relative md:w-2/3 md:h-[370px] rounded-2xl overflow-hidden">
          <Image
            src={contentData[activeIndex].img}
            alt="Agro Content"
            fill
            className="object-cover object-center"
          />
          <div className="absolute bottom-0 left-0 w-full h-28 bg-black/50 p-5 text-white flex items-center text-left text-xl">
            {contentData[activeIndex].text}
          </div>
        </div>

        {/* Mobile: Horizontally scrollable card-style view */}
        <div className=" flex md:hidden gap-4 overflow-x-auto no-scrollbar pb-2 w-full">
          {contentData.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[70%] rounded-2xl bg-[#f0f7fb] p-3"
            >
              <button
                onClick={() => setActiveIndex(index)}
                className="w-full flex justify-between items-center px-6 py-4 rounded-lg bg-[#D3EDFF]"
              >
                <span className="text-left text-sm font-medium">
                  {item.title}
                </span>
                <HiOutlineArrowLongRight className="text-xl" />
              </button>

              <div className="relative w-full h-[250px] mt-3 rounded-xl overflow-hidden">
                <Image
                  src={item.img}
                  alt={`Content ${index}`}
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute bottom-0 left-0 w-full h-20 bg-black/50 p-3 text-white text-sm flex items-center">
                  {item.text}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Agro;
