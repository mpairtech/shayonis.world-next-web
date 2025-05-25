"use client";
import React from "react";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Tag from "./Tag";

  
const StarIcon = ({
  color = "white",
  size = 40, // Default size: 40px
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



const carouselItems = [
  {
    id: 1,
    image: "/image/carosal-img1.png",
    title: "Industry Leader in Fabric Finishing",
    subtitle: "Shayoni’s Apparels is a globally renowned name known for special finishes on knitted fabrics.",
  },
  {
    id: 2,
    image: "/image/carosal-img2.png",
    title: "Advanced Technology & Skilled Team",
    subtitle: "Uses cutting-edge machinery and expert craftsmanship to deliver comfortable, protective, healthy, and stylish fabrics.",
  },
  {
    id: 3,
    image: "/image/carosal-img3.png",
    title: "Clients Around the World",
    subtitle: "Successfully partnered with over 150+ global clients, including top brands and garment retailers.",
  },
  {
    id: 4,
    image: "/image/carosal-img4.png",
    title: "In-House Processing",
    subtitle: "End-to-end finishing processes are managed in-house through personalized vendor networks, reducing costs and ensuring quality.",
  },
  {
    id: 5,
    image: "/image/carosal-img5.png",
    title: "Specialization in Mechanical Finishing",
    subtitle: "Expertise includes: Sueding/Peaching Calendaring Beetling Moiré Sizing and crisp finishes",
  },

];

export default function Apparel() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);


  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % carouselItems.length);
      setFade(true);
    }, 300);
  }, 7000);

    return () => clearInterval(timer);
  }, []);
  const item = carouselItems[index];



   return (
     <section  id="apparel" className=" manufacturing relative md:px-18 px-6 max-w-screen mx-auto pb-10">
       <div className="text-blue-400 flex flex-row items- justify-end">
         <div className="absolute top-0 lg:right-20 sm:right-2">
           <StarIcon color="#F5F6FF" size={100} className="w-[80%] md:w-[100%]" />
         </div>
         <div className="absolute top-16 lg:right-38 sm:right-20">
           <StarIcon color="#E6E9FF" size={60} className="w-[80%] md:w-[100%]"/>
         </div>
       </div>

       {/* Heading */}
       <div className="sm:text-center lg:text-start mb-12  ">
         <Tag text="Manufacturing Business" />
         <h2
           className=" font-bold  lg:text-[44px] md:text-3xl sm:text-2xl mt-3"
           style={{ color: "var(--primary-text)" }}
         >
           {" "}
           Shayonis Apparel{" "}
         </h2>
         <p
           className="font-bold lg:text-[44px] md:text-3xl sm:text-lg"
           style={{ color: "var(--secondary-text)" }}
         >
           {" "}
           Where Every Thread Tells a Story{" "}
         </p>
       </div>

       <div className="simple-carousel relative h-[400px]  ">
         {carouselItems.map((item, i) => (
           <div
             key={item.id}
             className={`carousel-slide-card absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
               i === index ? "opacity-100 z-10" : "opacity-0 z-0"
             }`}
           >
             <Image
               src={item.image}
               alt={item.title}
               width={800}
               height={400}
               className="w-[full] h-[full] object-cover carousel-img"
             />
             <div className="overlay">

               <div className="absolute flex flex-row justify-between  items-start sm:gap-2 lg:gap-48  lg:px-12 sm:px-4 overflow-hidden">
                 <span className="text-base lg:text-2xl sm:text-base font-medium pt-10  sm:pt-16 sm:w-[100%] w-8/12 pl-4">
                   <p>{item.subtitle}</p>
                 </span>
                 <span className="flex items-end lg:pl-20 mt-62 lg:mt-66 w-5/12  lg:w-4/12 text-lg lg:text-2xl pr-4 font-bold  ">
                   <h3>{item.title}</h3>
                 </span>
               </div>
             </div>
           </div>
         ))}

         <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
           {carouselItems.map((_, i) => (
             <button
               key={i}
               onClick={() => setIndex(i)}
               className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${  index === i ? "bg-white" : "bg-white/50"   }`}
             />
           ))}
         </div>
       </div>
     </section>
   );
}

      