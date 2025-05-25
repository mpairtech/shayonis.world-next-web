"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaInstagram,  FaYoutube, FaWhatsapp,} from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { Playfair_Display } from 'next/font/google';


const navItems = [
  { label: "Clothing", id: "clothingbrand" },
  { label: "Construction", id: "construction" },
  { label: "Apparel", id: "apparel" },
  { label: "Agro", id: "agro" },
  { label: "About Us", id: "about" },
];


const scrollToSection = (e, id) => {
  e.preventDefault();
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '800'],
});

const StarIcon = ({ className = "" }) => (
  <svg
    width="37"
    height="36"
    viewBox="0 0 37 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-10 h-10 ${className}`}  // ✅ correct line
  >
    <g clipPath="url(#clip0_24_49)">
      <path
        d="M36.5 17.5392C36.5 17.5392 20.2326 18.1986 18.5 0C18.5 0 18.5 17.2744 0.5 17.5416C0.5 17.5416 17.6994 18.3309 18.5 36C18.5 36 17.4342 20.3091 36.5 17.5392Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_24_49">
        <rect width="36" height="36" fill="white" transform="translate(0.5)" />
      </clipPath>
    </defs>
  </svg>
);





export default function Footer() {
  return (
    <footer className=" w-full  ">
      <section className="mb-20">
        <div className="relative mission p-12 max-w-10/12 mx-auto text-white text-center font-semibold text-xl leading-relaxed">
          {/* Top-left star */}
          <div className="absolute left-6 top-6 lg:left-16 md:left-12 sm:left-10">
            <StarIcon className="animate-flip-x" />
          </div>

          {/* Mission Text */}
          <p className=" sm:text-xl font-bold lg:text-3xl py-4">
            Our mission is to enrich everyday living through quality,
            innovation, and integrity— whether{" "}
            <em>you wear it, eat it, or live in it</em>. Join us as we continue
            to <em>grow, inspire, and create a legacy</em> across industries.
          </p>

          {/* Bottom-right star */}
          <div className="absolute bottom-10 lg:right-46 md:right-40 sm:right-16 right-6 ">
            <StarIcon className="animate-flip-x" />
          </div>
        </div>
      </section>


{        /* Footer Section */}

      <section className="footer text-white max-w-screen mx-auto ">
        <div className="w-full lg:py-12 lg:px-12 flex flex-col lg:flex-row  items-start lg:justify-start lg:gap-4 sm:gap-4 lg:items-start px-6 py-10">

          {/* Left Column */}
          <div className="w-full lg:w-5/12 flex flex-col items-start sm:mb-6">
            <div className="flex flex-col sm:flex-col justify-start items-start sm:items-start gap-4 w-full">
              <div className={`text-3xl mb-2 pl-3 ${playfairDisplay.className}`}>
                <span className="text-white font-normal ">Shayonis</span> <br />
                <span className="text-white font-extrabold  ">World</span>
              </div>

              <p className="text-base sm:w-4/6 lg:w-[100%] sm:pl-3 pl-3">
                From fashion to farming, fabric to foundations —
                Shayonis World unites diverse industries with a single 
                promise: quality, innovation, and trust.
              </p>
            </div>
            <div className="flex space-x-4 mt-4 pl-3">
              {[FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp].map(
                (Icon, index) => (
                  <div
                    key={index}
                    className="bg-white/30 w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/40 transition-colors"
                  >
                    <Icon className="text-white text-xl cursor-pointer" />
                  </div>
                )
              )}
            </div>
          </div>

          {/* Middle Column */}
    <div className=" my-6 w-full lg:w-3/12 grid grid-cols-1 lg:grid-cols-3 gap-3 text-base font-semibold pl-3 lg:text-center">
      {navItems.map(({ label, id }) => (
        <a
          key={id}
          href={`#${id}`}
          onClick={(e) => scrollToSection(e, id)}
          className="hover:underline "
        >
          {label}
        </a>
      ))}
    </div>

          {/* Right Column */}
          <div className="w-full lg:w-4/12 space-y-3 text-base flex flex-col gap-3 pl-3">
            <div className="flex items-start">
              <MdLocationOn className="mt-1 mr-2" />
              <span>
                Shop#350, 2nd floor, Concord Twin Center <br /> Shopping
                Complex, Khulshi, Chattogram
              </span>
            </div>
            <div className="flex items-center">
              <MdEmail className="mr-2" />
              <a
                href="mailto:Shayonisworld@gmail.com"
                className="hover:underline"
              >
                Shayonisworld@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <MdPhone className="mr-2" />
              <a href="tel:+8801829337533" className="hover:underline">
                +8801829337533
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
  <div className="border-t border-gray-400 px-6 lg:px-16 py-4 flex flex-col lg:flex-row justify-between items-center gap-2 text-center lg:text-left">
          <div className="flex items-center gap-2">
            <span>&copy;</span>
            <span className="text-xs font-medium">
              Copyright by Shayonis Wolrd.
            </span>
          </div>
          <div className="text-xs font-medium ">
            Developed by{" "}
            <span className="font-bold">mPair Technologies Ltd.</span>
          </div>
        </div>
      </section>
    </footer>
  );
}
