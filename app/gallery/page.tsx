import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import ImageCarousel from "@/components/ImageCarousel";

export default function Gallery() {
  // Gallery data - replace with your actual image paths
  const foundersDay2022Images = [
    "/images/foundersday-1.jpg",
    "/images/foundersday-2.jpg",
    "/images/foundersday-3.jpg",
    "/images/foundersday-4.jpg",
    "/images/foundersday-5.jpg",
    "/images/foundersday-6.jpg",
    "/images/foundersday-7.jpg",
    "/images/foundersday-8.jpg",
  ];

  const vollymania2023Images = [
    "/images/volleymania-1.jpg",
    "/images/volleymania-2.jpg",
    "/images/volleymania-3.jpg",
    "/images/volleymania-4.jpg",
    "/images/volleymania-5.jpg",
    "/images/volleymania-6.jpg",
    "/images/volleymania-7.jpg",
  ];

  const pongal2023Images = [
    "/images/pongal_celebration-1.jpg",
    "/images/pongal_celebration-2.jpg",
    "/images/pongal_celebration-3.jpg",
    "/images/pongal_celebration-4.jpg",
    "/images/pongal_celebration-5.jpg",
  ];

  return (
    <>
      <Header />

      <main className="bg-cream pt-24 sm:pt-28 lg:pt-32 pb-8 sm:pb-12 lg:pb-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          {/* Founders Day 2022 */}
          <section className="mb-10 sm:mb-14 lg:mb-20">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[42px] font-bold text-[#002309] mb-4 sm:mb-6 lg:mb-12">
              Founders Day 2022
            </h2>
            <ImageCarousel images={foundersDay2022Images} eventName="Founders Day 2022" />
          </section>

          {/* Vollymania 2023 */}
          <section className="mb-10 sm:mb-14 lg:mb-20">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[42px] font-bold text-[#002309] mb-4 sm:mb-6 lg:mb-12">
              Vollymania 2023
            </h2>
            <ImageCarousel images={vollymania2023Images} eventName="Vollymania 2023" />
          </section>

          {/* JKKN Pongal Celebration 2023 */}
          <section className="mb-10 sm:mb-14 lg:mb-20">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[42px] font-bold text-[#002309] mb-4 sm:mb-6 lg:mb-12">
              JKKN Pongal Celebration 2023
            </h2>
            <ImageCarousel images={pongal2023Images} eventName="JKKN Pongal Celebration 2023" />
          </section>
        </div>
      </main>

      <Footer hideLifeAtJKKN={true} />
      <FloatingButtons />
    </>
  );
}
