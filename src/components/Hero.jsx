"use client";
import React from "react";
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const StarIcon = ({
  color = "white",
  size = 40,
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 37 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g clipPath="url(#clip0_24_49)">
      <path
        d="M36.5 17.5392C36.5 17.5392 20.2326 18.1986 18.5 0C18.5 0 18.5 17.2744 0.5 17.5416C0.5 17.5416 17.6994 18.3309 18.5 36C18.5 36 17.4342 20.3091 36.5 17.5392Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_24_49">
        <rect width="36" height="36" fill="white" transform="translate(0.5)" />
      </clipPath>
    </defs>
  </svg>
);

const Hero = () => {
  const className = "text";
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollEl = scrollRef.current;
    let animationFrameId;

    const scroll = () => {
      if (scrollEl) {
        scrollEl.scrollLeft += 0.5;
        if (scrollEl.scrollLeft >= scrollEl.scrollWidth - scrollEl.clientWidth) {
          scrollEl.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div id="home" className="hero-bg overflow-hidden">
      <div className="max-w-screen mx-auto relative pt-12 px-4 md:px-12 sm:px-1">
        <div className="absolute overflow-hidden -top-30 -right-90 -translate-x-1/2 w-[500px] h-[500px] rounded-full border-[80px] sm:h-[300px] sm:w-[380px] sm:border-32 border-[#AF703226] opacity-100 blur-2xl z-0" />

        {/* Stars */}
        <div className="absolute lg:top-[20px] lg:left-[20px] md:top-[30px] md:left-[30px] top-10 left-10">
          <StarIcon color="#FFFFFF" size={52} className="md:w-[80px] md:h-[80px]" />
        </div>
        <div className="absolute lg:top-80 lg:left-6/12 md:top-18 md:left-[200px] top-18 left-[70%]">
          <StarIcon color="#AF703226" size={48} className="md:w-[70px] md:h-[70px]" />
        </div>
        <div className="absolute top-[10px] right-[30px] md:top-[1px] md:right-[30px] sm:-top-2">
          <StarIcon color="#F5F2EC" size={52} className="md:w-[80px] md:h-[80px]" />
        </div>

        {/* Hero Content */}
        <div className="flex flex-col md:flex-row justify-between md:grid-cols-2 items-center gap-10 mt-4">
          
          {/* Left Text Section */}
          <div className="flex flex-col justify-center text-center md:text-left px-4 md:px-0">
            <h1 className="text-[36px] md:text-[54px] mt-10 text-3xl font-black text-[#5F657B] mb-4">
              Welcome to Shayonis World
            </h1>
            <p className="lg:text-2xl md:text-2xl sm:text-xl font-bold text-[#646983] lg:mb-4 sm:mb-1">
              A Universe of Style, Sustainability & Sophistication
            </p>
            <p className="text-base md:text-xl font-normal text-[#434343] lg:mt-8 md:mt-10 mb-6 max-w-2xl">
              From fashion statements to farm-to-table produce and elegant
              home decor—Shayonis World is a diverse lifestyle brand 
              redefining excellence in every sector we touch.
            </p>
            <div className="flex justify-center lg:justify-start">
              <button className="flex flex-row items-center justify-center  gap-2 bg-[#555B73] text-white px-5 py-3 rounded-md hover:bg-[#737890] transition lg:w-[40%] sm:w-[50%]">
              Explore Our Universe <HiOutlineArrowLongRight className="text-[28px]" />
            </button>
              </div>
          </div>

          {/* Right Image Section */}
          <div className="lg:w-2/5 sm:p-8 grid grid-cols-2 gap-4 lg:px-4 px-1 ">
            <Image 
              src="/image/image1.png" 
              alt="Emporium" 
              width={230} 
              height={230} 
              className=" w-full h-full rounded-[30px] object-cover " />
            <Image 
              src="/image/image2.png" 
              alt="Construction" 
              width={230} 
              height={230} 
              className="rounded-[120px_20px_20px_20px] object-cover w-full h-full" />
            <Image 
              src="/image/image3.png" 
              alt="Apparel" 
              width={230} 
              height={230} 
              className="rounded-[30px_30px_120px_30px] object-cover w-full h-full" />
            <Image 
              src="/image/image4.png" 
              alt="Agro" 
              width={230} 
              height={230} 
              className="rounded-[30px] object-cover w-full h-full" />
          </div>
        </div>

     {/* Autoscroll Text */}
<div className="textmovingtext lg:pb-12 pb-10 overflow-auto pt-6 flex flex-row lg:-mx-12">
  <div
    ref={scrollRef}
    className="whitespace-nowrap flex flex-row gap-18 text-[#555] text-sm font-medium items-center"
  >
    {[...Array(20)].map((_, i) => (
      <div key={i} className="flex items-center gap-x-26">
        <span className="flex flex-row gap-3 items-center justify-center">
          <Image src="/image/68.svg" alt="Logo" width={30} height={30} />
          <p className="font-medium text-[22px]">Shayonis Apparel</p>
        </span>

        <span className="flex flex-row gap-3 items-center justify-center">
          <Image src="/image/68.svg" alt="Logo" width={30} height={30} />
          <p className="font-medium text-[22px]">Shayonis Emporium</p>
        </span>

        <span className="flex flex-row gap-3 items-center justify-center">
          <Image src="/image/68.svg" alt="Logo" width={30} height={30} />
          <p className="font-medium text-[22px]">Shayonis Dream Homes</p>
        </span>

        <span className="flex flex-row gap-3 items-center justify-center">
          <Image src="/image/68.svg" alt="Logo" width={30} height={30} />
          <p className="font-medium text-[22px]">Shayonis Agro</p>
        </span>
      </div>
    ))}
  </div>
</div>

      </div>
    </div>
  );
};

export default Hero;
