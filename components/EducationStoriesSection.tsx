"use client";

import { useRef } from "react";
import Image from "next/image";
import { educationStories } from "@/data/eventsData";

export default function EducationStoriesSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <section className="py-8 sm:py-10 lg:py-12 bg-[#FBFBEE]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-6 sm:mb-8 uppercase">
          EDUCATION STORIES
        </h2>

        <div className="relative">
          {/* Left Arrow - Hidden on mobile, shown on tablet+ */}
          <button
            onClick={scrollLeft}
            className="hidden sm:flex absolute -left-3 lg:-left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white text-gray-700 p-2 sm:p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors border border-gray-200 items-center justify-center"
            aria-label="Scroll left"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div
            ref={scrollContainerRef}
            className="flex gap-3 sm:gap-4 lg:gap-5 overflow-x-auto scrollbar-hide scroll-smooth pb-4 px-1 sm:px-2 -mx-1 sm:mx-0"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {educationStories.map((story) => (
              <div
                key={story.id}
                className="flex-shrink-0 w-[200px] sm:w-[220px] md:w-[260px] bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer group"
              >
                <div className="relative h-36 sm:h-40 md:h-48 overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                    <h3 className="font-bold text-white text-xs sm:text-sm md:text-base leading-tight">
                      {story.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow - Hidden on mobile, shown on tablet+ */}
          <button
            onClick={scrollRight}
            className="hidden sm:flex absolute -right-3 lg:-right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white text-gray-700 p-2 sm:p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors border border-gray-200 items-center justify-center"
            aria-label="Scroll right"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
