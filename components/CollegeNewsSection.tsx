import Image from "next/image";
import { collegeNews } from "@/data/eventsData";

export default function CollegeNewsSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1a6b4a] mb-8 pb-2 border-b-4 border-[#1a6b4a] inline-block">
          COLLEGE NEWS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {collegeNews.map((news) => (
            <div
              key={news.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
            >
              <div className="h-56 relative">
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-base text-gray-800 mb-3">
                  {news.title}
                </h3>
                <p className="text-xs text-[#f59e0b] font-semibold flex items-center gap-1">
                  <span className="text-base">🕐</span> {news.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
