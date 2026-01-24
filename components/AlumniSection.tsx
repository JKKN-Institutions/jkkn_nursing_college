"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { alumniTestimonials } from "@/data/partnersData";

export default function AlumniSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(alumniTestimonials.length / itemsPerPage);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -1200, behavior: "smooth" });
      setCurrentPage((prev) => Math.max(0, prev - 1));
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 1200, behavior: "smooth" });
      setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1));
    }
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 pb-2 border-b-4 border-primary inline-block uppercase">
          OUR COLLEGE ALUMNUS
        </h2>

        <div className="relative mt-12">
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-gray-200 hover:bg-gray-300 text-gray-700 w-10 h-10 rounded-full shadow-md flex items-center justify-center transition-colors"
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {alumniTestimonials.map((alumni) => (
              <div
                key={alumni.id}
                className="flex-shrink-0 w-[200px] bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow flex flex-col items-center"
              >
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4 bg-gray-200">
                  <Image
                    src={alumni.image}
                    alt={alumni.name}
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="font-bold text-sm text-black text-center mb-2">
                  {alumni.name}
                </h3>
                <p className="text-xs text-black text-center">
                  {alumni.role}
                </p>
              </div>
            ))}
          </div>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-gray-200 hover:bg-gray-300 text-gray-700 w-10 h-10 rounded-full shadow-md flex items-center justify-center transition-colors"
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, index) => (
            <div
              key={index}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                index === currentPage ? "bg-primary" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
