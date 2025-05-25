"use client";
import React from "react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Tag from "./Tag";
import {  Accordion, AccordionContent,  AccordionItem,  AccordionTrigger,} from "@/components/ui/accordion";



const About =() => {
  const cards = [
    {
      Image: "/image/image1.png",
      title: "Shayonis Emporium",
      subtitle: "A bold and expressive fashion label that blends tradition with modernity.",
    },
    {
      Image: "/image/image2.png",
      title: "Shayonis Dream Homes",
      subtitle: "Curated home decor that transforms spaces into personal sanctuaries.",
    },
    {
      Image: "/image/image3.png",
      title: "Shayonis Apparel",
      subtitle: "Everyday wear redefined with comfort, functionality, and contemporary design at its core.",
    },
    {
      Image: "/image/image4.png",
      title: "Shayonis Agro",
      subtitle: "A bold and expressive fashion label that blends tradition with modernity.",
    },
  ];

  return (
    <div  id="about" className="mt-26 max-w-screen mx-auto px-4 md:px-18 flex flex-col items-center justify-center overflow-hidden">
      <section className=" text-center">

        <div className=" flex flex-col items-center justify-center  w-fit h-fit mb-10 ">
          <Tag text="About Shayonis World" />
          <p className="w-4/5 text-center sm:text-base lg:text-xl font-normal mt-6 ">
            Shayonis World is more than a brand—it’s a multi-dimensional
            lifestyle ecosystem. Born from a passion for excellence  and
            creativity, Shayonis World brings together three powerful ventures
            under one roof:
          </p>
        </div>
      </section>


{/* cards section */}
      <section className="bg-[#F9E9D9] w-full py-10  px-4 md:px-8 lg:px-12  rounded-3xl">

        {/* Large screen layout */}
        <div className="hidden lg:flex md:flex-wrap flex-wrap justify-center gap-8 lg:gap-10 md:gap-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="lg:w-[22%] md:w-[240px] lg:h-[280px] md:h-[250px] pl-[20px] py-[18px] pr-3 hover:bg-white transition duration-300 rounded-xl cursor-pointer flex items-start flex-col  lg:gap-12"
            >
              <img
                src={card.Image}
                alt={card.title}
                className="w-[64px] h-[64px] object-cover object-center rounded-md mt-[5px] mb-1"
              />
              <div className="flex flex-col justify-between gap-2"> 
                    <h3 className="text-xl font-medium text-gray-800">
                {card.title}
              </h3>
              <p className="text-sm text-gray-500 pb-3">{card.subtitle}</p>
              </div>
          
            </div>
          ))}
        </div>

        {/* Small screen accordion layout */}
        <div className="lg:hidden w-full">
          <Accordion type="single" collapsible className="flex flex-col gap-4">
            {cards.map((card, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white/70 rounded-xl overflow-hidden">
                <AccordionTrigger className="flex items-center gap-4 p-4">
                  <img
                    src={card.Image}
                    alt={card.title}
                    className="w-[48px] h-[48px] object-cover rounded-md"
                  />
                  <span className="text-base font-medium text-gray-800">{card.title}</span>
                </AccordionTrigger>
                <AccordionContent className="text-center px-6 pb-4 text-base text-gray-600">
                  {card.subtitle}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>


      </section>

      {/* mission vision */}
      <section>
        <div className=" w-full mt-10 vision-bg  mx-auto sm:mt-8 py-10 px-4 md:px-10 lg:px-16 rounded-3xl flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16 sm:mx-auto">
         


 <div className="flex flex-row sm:justify-center justify-start items-start gap-4 w-full lg:w-auto lg:order-2">
          <div className="w-[120px] sm:w-[35%] md:w-[160px] h-[180px] md:h-[200px] sm:h-[280px] overflow-hidden rounded-[0_0_90px_90px] md:rounded-[0_0_130px_130px]">
            <Image
              src="/image/vision-img2.png"
              alt="Vision"
              width={300}
              height={50}
              className="w-full h-full object-cover object-right-top transition-transform duration-500 ease-in-out hover:scale-110"
            />
          </div>

          <div className="w-[120px] md:w-[160px] h-[250px] sm:w-[35%] lg:h-[300px] md:h-[300px] overflow-hidden rounded-[0_0_90px_90px] md:rounded-[0_0_110px_110px]">
            <Image
              src="/image/vision-img1.png"
              alt="Vision"
              width={160}
              height={300}
              className="w-full h-full object-cover object-center-top transition-transform duration-500 ease-in-out hover:scale-110"
            />
          </div>
          </div>


 {/*left text*/}
          <div className=" gap-8 w-full lg:w-2/3 flex flex-col lg:gap-16 justify-between lg:order-1">
            <h1 className="text-white lg:text-[44px] text-2xl md:text-2xl font-bold ">
              One Vision. <br /> Many Dimensions.
            </h1>

            <p className=" text-lg font-normal sm:w-[90%] lg:w-full sm:px-3 sm:pb-4 text-white ">
              Shayonis World is more than a business — it's a collective vision
              brought to life through innovation, creativity, and purpose. With
              thriving ventures in fashion, agriculture, apparel, and home
              lifestyle, we strive to enhance the everyday experience of
              individuals and communities alike. Each brand under our name is
              guided by a shared philosophy: excellence, authenticity, and
              impact.
            </p>
          </div>


          {/*right image
          <div className=" gap-8 flex flex-row justify-start items-start flex-shrink-0 ">

            <div className="w-[160px] h-[200px] overflow-hidden rounded-[0_0_110px_110px]">
              <Image
                src="/image/vision-img2.png"
                alt="Vision"
                width={80}
                height={200}
                className="w-full h-full object-cover object-right-top transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>

            <div className="w-[160px] h-[300px] overflow-hidden rounded-[0_0_110px_110px]">
              <Image
                src="/image/vision-img1.png"
                alt="Vision"
                width={160}
                height={300}
                className="w-full h-full object-cover object-center-top transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>
          </div>*/}
        </div>
      </section>
    </div>
  );
};

export default About;