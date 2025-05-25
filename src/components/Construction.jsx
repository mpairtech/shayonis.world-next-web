"use client"
import React from 'react';
import Image from 'next/image';
import Tag from './Tag';
import { useEffect, useRef } from 'react';

const Construction = () => {
  return (
    <section
      id="construction"
      className="mt-8 px-6 lg:px-18 lg:py-16 pb-8 overflow-hidden"
    >
      {/* Heading */}
      <div className="flex flex-col justify-center items-center text-center lg:mb-14 sm:mb-4">
        <Tag text="Construction Business" />
        <h2
          className=" font-bold text-2xl lg:text-[44px] mt-3"
          style={{ color: "var(--primary-text)" }}
        >
          {" "}
          Shayoni’s Dream Homes & Premium Lifestyle{" "}
        </h2>

        <p
          className="font-bold text-xl sm:text-xl lg:text-[44px] leading-tight mt-2"
          style={{ color: "var(--secondary-text)" }}
        >
          Crafting More Than Homes — Creating Dreams in Concrete
        </p>
      </div>

      {/* Main Content */}
<div className="flex flex-col justify-center lg:flex-row items-start md:items-center gap-y-6 md:gap-x-6">
        {/* - Card  */}
        <div className="relative bg-[#FCF9F4] mt-8 md:my-1 w-fit h-fit md:h-[350px] p-6 rounded-2xl order-1 md:order-2">
          <h4
            className=" text-base font-medium text-gray-800 mb-4
          sm:mb-10"
          >
            Whether you're building your first home or investing in future
            spaces, we bring together innovation, precision with our strengths
            in–
          </h4>

          {/* Vertical Divider */}
          <div className="absolute top-[43%] bottom-6 left-8 lg:top-32 lg:bottom-4 w-[4px] bg-gradient-to-t from-[#BEB7AD] to-[#DACAB4] rounded-full  " />

          <div className="pl-10 pt-2 flex flex-col gap-4 md:gap-6">
            <p className="text-gray-500 font-semibold "> GREAT PLACES</p>
            <p className="text-gray-500 font-semibold ">
              {" "}
              LEADING CONSTRUCTION
            </p>
            <p className="text-gray-500 font-semibold ">
              {" "}
              INVESTING IN OUR PEOPLE
            </p>
            <p className="text-gray-500 font-semibold"> CUSTOMER FIRST</p>
          </div>
        </div>


<div className="flex order-2 lg:order-1">
  <div className=" w-full grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 place-items-center">
  <div className="lg:col-span-2 h-[340px] overflow-hidden rounded-xl">
    <Image
      src="/image/cons1.png"
      alt="Image 1"
      width={500}
      height={335}
      className="w-full h-full object-cover transition-transform duration-400 ease-in-out hover:scale-105"
    />
  </div>

  <div className="flex flex-row gap-4 md:gap-6 h-[340px] md:flex-row md:col-span-2">
    <div className=" h-[340px] overflow-hidden rounded-xl">
    <Image
      src="/image/cons2.png"
      alt="Image 2"
      width={340}
      height={335}
      className="w-full h-full object-cover transition-transform duration-400 ease-in-out hover:scale-105"
    />
  </div>

  <div className="  h-[340px] overflow-hidden rounded-xl">
    <Image
      src="/image/cons3.png"
      alt="Image 3"
      width={340}
      height={335}
      className="w-full h-full object-cover transition-transform duration-400 ease-in-out hover:scale-105"
    />
  </div>
</div>
</div>

</div>



      </div>
    </section>
  );
};

export default Construction;
