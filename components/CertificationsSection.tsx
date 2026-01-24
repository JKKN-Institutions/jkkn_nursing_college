import Image from "next/image";
import { certifications } from "@/data/partnersData";

export default function CertificationsSection() {
  return (
    <section className="py-12 bg-[#FBFBEE]">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 pb-2 border-b-4 border-primary inline-block uppercase">
          CERTIFICATION & RECOGNITIONS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-shadow flex flex-col items-center"
            >
              <h3 className="text-base font-bold text-black mb-6 text-center">
                {cert.type}
              </h3>
              <div className="flex-1 flex items-center justify-center mb-6">
                <Image
                  src={cert.logo}
                  alt={cert.organization}
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </div>
              <p className="text-sm font-bold text-black text-center">
                {cert.organization}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
