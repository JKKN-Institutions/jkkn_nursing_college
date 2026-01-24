"use client";

import { useState } from "react";
import { announcements } from "@/data/siteData";

export default function AnnouncementSection() {
  const [currentAnnouncement, setCurrentAnnouncement] = useState(0);

  return (
    <section className="bg-[#FBFBEE] py-4 border-t border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 flex-1 min-w-0">
          <div className="bg-primary text-white px-4 py-2 rounded font-bold whitespace-nowrap flex items-center gap-2 text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
            ANNOUNCEMENT
          </div>
          <div className="flex-1 overflow-hidden">
            <p className="text-sm md:text-base text-gray-800 truncate">
              {announcements[currentAnnouncement].title}
              <span className="ml-4 text-xs text-gray-600">
                {announcements[currentAnnouncement].date}
              </span>
            </p>
          </div>
        </div>

        <div className="flex gap-2 flex-shrink-0">
          <button
            onClick={() => setCurrentAnnouncement((prev) => (prev - 1 + announcements.length) % announcements.length)}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-3 py-1 rounded transition-colors text-lg"
            aria-label="Previous announcement"
          >
            ‹
          </button>
          <button
            onClick={() => setCurrentAnnouncement((prev) => (prev + 1) % announcements.length)}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-3 py-1 rounded transition-colors text-lg"
            aria-label="Next announcement"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
