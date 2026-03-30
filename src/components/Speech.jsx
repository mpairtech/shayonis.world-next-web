"use client";
import React from "react";
import Image from "next/image";
import Tag from "./Tag";

const leaders = [
  {
    role: "Chairman",
    name: "Khaled Md. Tanveer",
    img: "/image/chairman_img.jpeg",
    bio: "With over three decades of visionary leadership, our Chairman has steered Shayonis Group from a humble beginning into a multi-sector conglomerate. His unwavering commitment to sustainable agriculture, responsible construction, and ethical business has laid the cornerstone of everything we build — from the fields we cultivate to the homes we create and the fabric we weave.",
  },
  {
    role: "Managing Director",
    name: "Sanjoy Dewanjee",
    img: "/image/managing_director_img.jpeg",
    bio: "As the driving force behind Shayonis Group's day-to-day operations, our Managing Director brings sharp strategic vision and operational excellence to each of our divisions — Agro, Construction, Housing, and Clothing. His hands-on approach and passion for quality ensure that every project we deliver meets the highest standards of performance and trust.",
  },
];

const Speech = () => {
  return (
    <section
      id="leadership"
      className="mt-12 sm:mb-8 md:px-12 lg:px-16 py-8 md:py-12 lg:my-16"
    >
      {/* Heading */}
      <div className="flex flex-col justify-center items-center sm:text-center mb-8 md:mb-10 lg:mb-14">
        <Tag text="Leadership Speech" />
        <h2
          className="text-[32px] lg:text-[44px] md:text-3xl sm:text-2xl font-bold mt-3"
          style={{ color: "var(--primary-text)" }}
        >
          Chairman's & Managing Director's Speech
        </h2>
        <p
          className="font-bold sm:font-semibold lg:text-[44px] md:text-3xl sm:text-lg md:text-[30px]"
          style={{ color: "var(--secondary-text)" }}
        >
          Voices That Lead Shayonis Forward
        </p>
      </div>

      {/* Leadership Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {leaders.map((leader, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden group flex flex-col sm:flex-row"
            style={{ background: "var(--card-bg, #e8eff5)" }}
          >
            {/* Image — left side */}
            <div
              className="relative w-full sm:w-2/5 flex-shrink-0"
              style={{ aspectRatio: "3/4" }}
            >
              <Image
                src={leader.img}
                alt={leader.role}
                fill
                sizes="(max-width: 640px) 100vw, 40vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />

              {/* Role badge */}
              <div className="absolute top-4 left-4">
                <span
                  className="px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase"
                  style={{
                    background: "var(--badge-bg, #D3EDFF)",
                    color: "var(--primary-text, #0a2540)",
                  }}
                >
                  {leader.role}
                </span>
              </div>
            </div>

            {/* Text — right side */}
            <div className="flex flex-col justify-center p-5 md:p-6 gap-2">
              <p
                className="text-xs font-medium uppercase tracking-widest opacity-60"
                style={{ color: "var(--primary-text, #0a2540)" }}
              >
                {leader.role}
              </p>
              <h3
                className="text-xl md:text-2xl font-bold leading-tight"
                style={{ color: "var(--primary-text, #0a2540)" }}
              >
                {leader.name}
              </h3>
              <p
                className="text-sm md:text-base leading-relaxed mt-2"
                style={{ color: "var(--body-text, #4a5568)" }}
              >
                {leader.bio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Speech;
