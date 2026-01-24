import { admissionInfo } from "@/data/siteData";

export default function AdmissionZoneSection() {
  return (
    <section className="bg-white">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
        <div className="bg-[#1a6b4a] py-3 px-6 mb-0">
          <h2 className="text-lg md:text-xl font-bold text-white">
            ADMISSION ZONE 2025-2026
          </h2>
        </div>

        <div className="bg-white py-8 px-6">
          <ul className="space-y-4">
            {admissionInfo.map((info) => (
              <li key={info.id} className="flex items-start gap-3">
                <span className="text-gray-700 text-lg mt-1">•</span>
                <p className="flex-1 text-sm md:text-base leading-relaxed text-gray-700">
                  {info.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
