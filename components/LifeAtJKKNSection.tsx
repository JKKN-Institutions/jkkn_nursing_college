import Image from "next/image";
import { lifeAtJKKN } from "@/data/facilitiesData";

export default function LifeAtJKKNSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 pb-2 border-b-4 border-primary inline-block uppercase">
          LIFE @ JKKN
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {lifeAtJKKN.map((item) => (
            <div
              key={item.id}
              className="relative h-[220px] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white font-bold text-xl md:text-2xl text-center px-4 uppercase">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
