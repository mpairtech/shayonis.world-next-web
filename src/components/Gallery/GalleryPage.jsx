"use client";
import { useState, useEffect } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const categories = [
  { key: "photos", label: "Eid 2026" },
  { key: "clothing", label: "Clothing" },
  { key: "apparel", label: "Apparel" },
  { key: "construction", label: "Construction" },
  { key: "agro", label: "Agro" },
];

// ------------ IMAGES ----------------
const images = {
  photos: [
    "/image/WhatsApp Image 2026-03-30 at 2.01.08 PM (1).jpeg",
    "/image/WhatsApp Image 2026-03-30 at 2.01.08 PM (2).jpeg",
    "/image/WhatsApp Image 2026-03-30 at 2.01.08 PM.jpeg",
    "/image/WhatsApp Image 2026-03-30 at 2.01.09 PM (1).jpeg",
    "/image/WhatsApp Image 2026-03-30 at 2.01.09 PM (2).jpeg",
    "/image/WhatsApp Image 2026-03-30 at 2.01.09 PM.jpeg",
    "/image/WhatsApp Image 2026-03-30 at 2.01.10 PM (1).jpeg",
    "/image/WhatsApp Image 2026-03-30 at 2.01.10 PM (2).jpeg",
    "/image/WhatsApp Image 2026-03-30 at 2.01.10 PM.jpeg",
    "/image/WhatsApp Image 2026-03-30 at 2.01.11 PM (1).jpeg",
    "/image/WhatsApp Image 2026-03-30 at 2.01.11 PM (2).jpeg",
    "/image/WhatsApp Image 2026-03-30 at 2.01.11 PM.jpeg",
    "/image/WhatsApp Image 2026-03-30 at 2.01.12 PM (1).jpeg",
    "/image/WhatsApp Image 2026-03-30 at 2.01.12 PM (2).jpeg",
    "/image/WhatsApp Image 2026-03-30 at 2.01.12 PM.jpeg",
    "/image/WhatsApp Image 2026-03-30 at 2.01.13 PM (1).jpeg",
    "/image/WhatsApp Image 2026-03-30 at 2.01.13 PM (2).jpeg",
    "/image/WhatsApp Image 2026-03-30 at 2.01.13 PM.jpeg",
    "/image/WhatsApp Image 2026-03-30 at 2.01.14 PM (1).jpeg",
    "/image/WhatsApp Image 2026-03-30 at 2.01.14 PM (2).jpeg",
    "/image/WhatsApp Image 2026-03-30 at 2.01.14 PM.jpeg",
    "/image/WhatsApp Image 2026-03-30 at 2.01.15 PM (1).jpeg",
    "/image/WhatsApp Image 2026-03-30 at 2.01.15 PM (2).jpeg",
    "/image/WhatsApp Image 2026-03-30 at 2.01.15 PM.jpeg",
    "/image/WhatsApp Image 2026-03-30 at 2.01.16 PM (1).jpeg",
    "/image/WhatsApp Image 2026-03-30 at 2.01.16 PM.jpeg",
    "/image/WhatsApp Image 2026-03-30 at 2.01.17 PM (1).jpeg",
    "/image/WhatsApp Image 2026-03-30 at 2.01.17 PM.jpeg",
    "/image/WhatsApp Image 2026-03-30 at 2.01.18 PM (1).jpeg",
    "/image/WhatsApp Image 2026-03-30 at 2.01.18 PM (2).jpeg",
    "/image/WhatsApp Image 2026-03-30 at 2.01.18 PM.jpeg",
    "/image/WhatsApp Image 2026-03-30 at 2.01.19 PM (1).jpeg",
    "/image/WhatsApp Image 2026-03-30 at 2.01.19 PM (2).jpeg",
    "/image/WhatsApp Image 2026-03-30 at 2.01.19 PM.jpeg",
    "/image/WhatsApp Image 2026-03-30 at 2.01.20 PM (1).jpeg",
    "/image/WhatsApp Image 2026-03-30 at 2.01.20 PM (2).jpeg",
    "/image/WhatsApp Image 2026-03-30 at 2.01.20 PM.jpeg",
    "/image/WhatsApp Image 2026-03-30 at 2.01.21 PM (1).jpeg",
    "/image/WhatsApp Image 2026-03-30 at 2.01.21 PM.jpeg",
    "/image/WhatsApp Image 2026-03-30 at 2.01.22 PM (1).jpeg",
    "/image/WhatsApp Image 2026-03-30 at 2.01.22 PM (2).jpeg",
    "/image/WhatsApp Image 2026-03-30 at 2.01.22 PM.jpeg",
    "/image/WhatsApp Image 2026-03-30 at 2.01.23 PM (1).jpeg",
    "/image/WhatsApp Image 2026-03-30 at 2.01.23 PM.jpeg",
    "/image/WhatsApp Image 2026-03-30 at 2.01.24 PM (1).jpeg",
    "/image/WhatsApp Image 2026-03-30 at 2.01.24 PM (2).jpeg",
    "/image/WhatsApp Image 2026-03-30 at 2.01.24 PM.jpeg",
    "/image/WhatsApp Image 2026-03-30 at 2.01.25 PM (1).jpeg",
    "/image/WhatsApp Image 2026-03-30 at 2.01.25 PM.jpeg",
   
  ],
  clothing: [
    "/image/kid1.jpeg",
    "/image/kid2.jpeg",
    "/image/saree1.jpeg",
    "/image/saree2.jpeg",
    "/image/suite1.jpeg",
    "/image/suite2.jpeg",
    "/image/women1.jpeg",
    "/image/women2.jpeg",
    "/image/cloth1.jpeg",
    "/image/cloth2.jpeg",
    "/image/cat51.jpeg",
    "/image/cat52.jpeg",
    "/image/cloth3.jpeg",
    "/image/cloth4.jpeg",
    "/image/cloth5.jpeg",
  ],
  apparel: [
    "image/apparel1.png",
    "image/apparel2.png",
    "image/apparel3.jpeg",
    "image/factory1.jpeg",
    "image/factory2.jpeg",
    "image/factory3.jpeg",
    "image/factory4.jpeg",
    "image/factory5.jpeg",
    "image/factory6.jpeg",
    "image/factory-banner.jpeg",
    "image/building-banner.jpeg",
  ],
  agro: [
    "image/agro-banner.jpeg",
    "image/agro2.jpeg",
    "image/agro3.jpeg",
    "image/agro4.jpeg",
    "image/agro5.jpeg",
  ],
  construction: [],
};

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("clothing");
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentImages = images[activeTab];

  // Modal navigation
  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % currentImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? currentImages.length - 1 : prev - 1
    );
  };

  // Keyboard navigation
 useEffect(() => {
   if (!modalOpen) return;

   const handleKey = (e) => {
     if (e.key === "ArrowRight") nextImage();
     if (e.key === "ArrowLeft") prevImage();
     if (e.key === "Escape") setModalOpen(false);
   };

   window.addEventListener("keydown", handleKey);
   return () => window.removeEventListener("keydown", handleKey);
 }, [modalOpen, nextImage, prevImage]);


  return (
    <div className="px-6 py-10 max-w-6xl mx-auto">
      <h2 className="text-lg md:text-3xl lg:text-5xl text-center mt-20 font-bold pb-4 ">Our Image Gallery</h2>

      <h2 className="text-center text-sm md:text-base lg:text-lg text-gray-600 mb-8">
        Browse our curated image collections, thoughtfully organized into
        categories for a smooth and immersive visual exploration experience.
      </h2>

      {/* ---------- TABS ---------- */}
      <div className="flex md:gap-4 gap-2 justify-center md:mb-8 mb-3 text-sm md:text-base">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveTab(cat.key)}
            className={`md:px-4 md:py-2 p-2 rounded-full border ${
              activeTab === cat.key
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

{/* images */}
      <div className="grid grid-cols-4 gap-2 md:gap-4">
        {currentImages.map((src, idx) => (
          <img
            key={idx}
            src={src}
            className="w-full h-28 md:h-36 object-cover rounded cursor-pointer hover:opacity-80"
            onClick={() => {
              setCurrentIndex(idx);
              setModalOpen(true);
            }}
          />
        ))}
      </div>

      {/* ---------- MODAL ---------- */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <button
            className="absolute left-10 text-white text-5xl"
            onClick={prevImage}
          >
            <IoIosArrowBack />
          </button>

          <img
            src={currentImages[currentIndex]}
            className="h-[80vh] object-center rounded shadow-xl"
          />

          <button
            className="absolute right-10 text-white text-4xl"
            onClick={nextImage}
          >
            <IoIosArrowForward />
          </button>

          <button
            className="absolute top-10 right-10 text-white text-3xl"
            onClick={() => setModalOpen(false)}
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
