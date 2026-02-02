"use client";

import { useState } from "react";
import { announcements } from "@/data/siteData";

export default function AnnouncementSection() {
  const [currentAnnouncement, setCurrentAnnouncement] = useState(0);

  return (
    <section className="bg-[#FBFBEE] py-3 sm:py-4 border-t border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto px-3 sm:px-6 lg:px-12 flex items-center justify-between gap-2 sm:gap-4">
        <div className="flex items-center gap-2 sm:gap-4 flex-1 min-w-0">
          {/* Badge - Smaller on mobile, icon only on very small screens */}
          <div className="bg-primary text-white px-2 sm:px-4 py-1.5 sm:py-2 rounded font-bold whitespace-nowrap flex items-center gap-1 sm:gap-2 text-xs sm:text-sm flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 sm:h-4 sm:w-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
            <span className="hidden xs:inline sm:inline">ANNOUNCEMENT</span>
            <span className="xs:hidden sm:hidden">NEWS</span>
          </div>
          <div className="flex-1 overflow-hidden">
            <p className="text-xs sm:text-sm md:text-base text-gray-800 truncate">
              {announcements[currentAnnouncement].title}
              <span className="ml-2 sm:ml-4 text-[10px] sm:text-xs text-gray-600 hidden sm:inline">
                {announcements[currentAnnouncement].date}
              </span>
            </p>
          </div>
        </div>

        <div className="flex gap-1.5 sm:gap-2 flex-shrink-0">
          <button
            onClick={() => setCurrentAnnouncement((prev) => (prev - 1 + announcements.length) % announcements.length)}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-2 sm:px-3 py-1 rounded transition-colors text-base sm:text-lg min-h-[32px] sm:min-h-[36px] flex items-center justify-center"
            aria-label="Previous announcement"
          >
            ‹
          </button>
          <button
            onClick={() => setCurrentAnnouncement((prev) => (prev + 1) % announcements.length)}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-2 sm:px-3 py-1 rounded transition-colors text-base sm:text-lg min-h-[32px] sm:min-h-[36px] flex items-center justify-center"
            aria-label="Next announcement"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
