import Image from "next/image";
import { courses } from "@/data/siteData";

export default function CoursesSection() {
  const courseImages = [
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400",
    "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400",
    "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=400",
  ];

  return (
    <section className="py-12 bg-[#FBFBEE]">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-12 uppercase">
          OUR COURSES
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {courses.map((course, index) => (
            <div key={course.id} className="flex flex-col items-center text-center group">
              <div className="relative w-44 h-44 md:w-48 md:h-48 mb-6">
                {/* Decorative border */}
                <div className="absolute inset-0 rounded-full border-8 border-primary opacity-20"></div>
                <div className="absolute inset-2 rounded-full border-4 border-secondary"></div>

                {/* Image container */}
                <div className="absolute inset-4 rounded-full overflow-hidden shadow-xl group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={courseImages[index]}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-primary uppercase tracking-wide">
                {course.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
