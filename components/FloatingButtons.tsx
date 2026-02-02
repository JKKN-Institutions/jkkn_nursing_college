"use client";

export default function FloatingButtons() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Floating Page Up Button - Bottom Right */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-20 right-3 md:bottom-6 md:right-6 z-50 w-8 h-8 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-[#0b7845] text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-[#095d36] transition-all hover:scale-110 transform"
        aria-label="Scroll to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 md:w-7 md:h-7 lg:w-8 lg:h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>
    </>
  );
}
