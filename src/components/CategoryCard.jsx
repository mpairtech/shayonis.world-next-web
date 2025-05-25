'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CategoryCard = ({ item, isShort }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flex flex-col items-center md:mx-8 mx-2 md:px-4 px-1 cursor-pointer" onClick={() => setFlipped(!flipped)}>
      <div className={`relative overflow-hidden rounded-full lg:w-[220px] w-[280px] ${isShort ? 'lg:h-[310px] h-[270px]' : 'lg:h-[350px] h-[350px]'}`}>
        <motion.div
          className="w-full h-full transition-transform duration-500"
          style={{ transformStyle: 'preserve-3d' }}
          animate={{ rotateY: flipped ? 180 : 0 }}
        >
          {/* Front Image */}
          <div className="absolute w-full h-full backface-hidden rounded-full overflow-hidden">
            <img src={item.frontImg} alt="Front" className={`w-full h-full object-cover ${item.objectPos}`} />
          </div>
          {/* Back Image */}
          <div className="absolute w-full h-full rotate-y-180 backface-hidden rounded-full overflow-hidden">
            <img src={item.backImg} alt="Back" className={`w-full h-full object-cover ${item.objectPos}`} />
          </div>
        </motion.div>
      </div>
      <div className="relative left-10 -mt-8 mb-2 z-30">
        <p className="text-sm font-medium bg-white rounded-full py-3 px-6 shadow-md inline-block " style={{ color: 'var(--tag-text)' }}>
          {item.label}
        </p>
      </div>
    </div>
  );
};

export default CategoryCard;
