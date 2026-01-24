import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Link from "next/link";
import Image from "next/image";

export default function Placement() {
  return (
    <>
      <Header />
      <main className="bg-[#FBFBEE] min-h-screen">
        {/* Main Content */}
        <div className="bg-[#FBFBEE] py-8 lg:py-12">
          <div className="container mx-auto px-8 lg:px-16 max-w-[1400px]">
            {/* Title */}
            <h1 className="text-3xl lg:text-4xl font-bold text-[#0b7845] mb-8 lg:mb-12">
              Placement
            </h1>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Left Column - Image */}
              <div className="w-full">
                <div className="relative w-full aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/images/placement/placement-session.jpg"
                    alt="Placement Session"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Right Column - Text Content */}
              <div className="w-full">
                <ul className="space-y-6 text-gray-700 text-base leading-relaxed">
                  <li className="flex items-start">
                    <span className="text-[#0b7845] font-bold mr-3 mt-1 text-lg flex-shrink-0">•</span>
                    <p className="text-justify">
                      Sresakthimayeil Institute of Nursing and Research has always viewed placements and its related activities as an offshoot of curriculum; spread across the entire academic year than just a terminal effort. The objective of the placement department is to minimize the gap and conflict between the educated and the employable.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0b7845] font-bold mr-3 mt-1 text-lg flex-shrink-0">•</span>
                    <p className="text-justify">
                      Our passed out nursing students are recruited in & around Erode District, Salem district, Coimbatore district and major cities in India.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer hideLifeAtJKKN={true} />
      <FloatingButtons />
    </>
  );
}
