import Image from "next/image";
import { pastEvents } from "@/data/eventsData";
import { ClockIcon } from "@heroicons/react/24/outline";

export default function PastEventsSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1a6b4a] mb-8 pb-2 border-b-4 border-[#1a6b4a] inline-block">
          PAST EVENTS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          {pastEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
            >
              <div className="h-48 relative">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-sm text-gray-800 mb-2 line-clamp-2">
                  {event.title}
                </h3>
                <p className="text-xs text-[#f59e0b] font-semibold flex items-center gap-1">
                  <ClockIcon className="w-4 h-4" /> {event.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
