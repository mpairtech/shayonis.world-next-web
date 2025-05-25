"use client";
import React from 'react';

import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoLocationSharp } from "react-icons/io5";


const AutoScrolling = () => {
  const [toggle, setToggle] = useState(true)

  useEffect(() => {
    AOS.init({ duration: 1000 })

    const interval = setInterval(() => {
      setToggle((prev) => !prev)
    }, 3000) // 3s interval

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-28 overflow-hidden relative  flex items-center justify-end">
      <div
        className="absolute top-0 left-0 right-0 transition-all duration-1000"
        data-aos={toggle ? 'fade-up' : 'fade-down'}
        key={toggle ? 'text1' : 'text2'}
      >
        {toggle ? (
          <p className="text-lg font-normal">Here tradition meets trend, and elegance defines everyday wear. From ethnic collections to modern essentials, we curate timeless fashion that celebrates identity and confidence.</p>
        ) : (
          <div className=" leading-snug space-y-1 p-4">
            
            <div className="flex items-start justify-start gap-1 text-gray-600">
                <IoLocationSharp className="text-2xl text-red-700"/>
              <span className="text-sm">
                <p  className="text-gray-700">Shayoni’s Emporium</p>            
            <p className="text-gray-500">Shop#350, 2nd floor, Concord Twin Center Shopping Complex, Khulshi, Chattogram</p>
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AutoScrolling;
