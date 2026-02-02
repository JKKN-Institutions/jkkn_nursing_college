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
    <section className="py-8 sm:py-10 lg:py-12 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-6 sm:mb-8 pb-2 border-b-4 border-primary inline-block uppercase">
          OUR COLLEGE ALUMNUS
        </h2>

        <div className="relative mt-8 sm:mt-10 lg:mt-12 sm:px-12">
          {/* Left Arrow - Hidden on mobile */}
          <button
            onClick={scrollLeft}
            className="hidden sm:flex absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-200 hover:bg-gray-300 text-gray-700 w-8 h-8 sm:w-10 sm:h-10 rounded-full shadow-md items-center justify-center transition-colors"
            aria-label="Scroll left"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div
            ref={scrollContainerRef}
            className="flex gap-3 sm:gap-4 lg:gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-2 -mx-1 px-1 sm:mx-0 sm:px-0"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {alumniTestimonials.map((alumni) => (
              <div
                key={alumni.id}
                className="flex-shrink-0 w-[150px] sm:w-[180px] md:w-[200px] bg-white border border-gray-200 rounded-lg p-4 sm:p-5 md:p-6 hover:shadow-lg transition-shadow flex flex-col items-center"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-3 sm:mb-4 bg-gray-200">
                  <Image
                    src={alumni.image}
                    alt={alumni.name}
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="font-bold text-xs sm:text-sm text-black text-center mb-1 sm:mb-2">
                  {alumni.name}
                </h3>
                <p className="text-[10px] sm:text-xs text-black text-center">
                  {alumni.role}
                </p>
              </div>
            ))}
          </div>

          {/* Right Arrow - Hidden on mobile */}
          <button
            onClick={scrollRight}
            className="hidden sm:flex absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-200 hover:bg-gray-300 text-gray-700 w-8 h-8 sm:w-10 sm:h-10 rounded-full shadow-md items-center justify-center transition-colors"
            aria-label="Scroll right"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-6 lg:mt-8">
          {Array.from({ length: totalPages }).map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-colors ${
                index === currentPage ? "bg-primary" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
