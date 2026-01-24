"use client";

import { useState } from "react";
import Image from "next/image";
import { educationVideos } from "@/data/eventsData";

export default function EducationVideosSection() {
  const [currentVideo, setCurrentVideo] = useState(educationVideos[0]);

  return (
    <section className="py-12 bg-[#FBFBEE]">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1a6b4a] mb-8 pb-2 border-b-4 border-[#1a6b4a] inline-block">
          EDUCATION VIDEOS
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8 lg:grid-rows-[auto]">
          {/* Main Video Player */}
          <div className="lg:col-span-2">
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden shadow-xl">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${currentVideo.youtubeId}`}
                title={currentVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Playlist Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col aspect-video">
              {/* Currently Playing Header */}
              <div className="bg-[#1a6b4a] text-white px-4 py-3 flex-shrink-0">
                <p className="text-sm font-semibold">Currently Playing</p>
                <h3 className="text-sm mt-1 line-clamp-2">{currentVideo.title}</h3>
              </div>

              {/* Video Playlist */}
              <div className="flex-1 overflow-y-auto">
                {educationVideos.map((video) => (
                  <div
                    key={video.id}
                    onClick={() => setCurrentVideo(video)}
                    className={`flex gap-3 p-3 cursor-pointer hover:bg-gray-50 transition-colors border-b border-gray-100 ${
                      currentVideo.id === video.id ? "bg-gray-100" : ""
                    }`}
                  >
                    <div className="relative w-32 h-20 flex-shrink-0 rounded overflow-hidden">
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-semibold text-gray-800 line-clamp-2 mb-1">
                        {video.title}
                      </h4>
                      <p className="text-xs text-gray-500">{video.duration}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
