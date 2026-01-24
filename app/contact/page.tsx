import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function Contact() {
  return (
    <>
      <Header />

      <main className="bg-[#FBFBEE] py-12 lg:py-16">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Contact Info */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#002309] mb-4">
                Contact Info
              </h2>

              <div className="w-16 h-1 bg-[#FFD700] mb-6"></div>

              <p className="text-gray-600 mb-8">
                Welcome to our Website. We are glad to have you around.
              </p>

              <div className="space-y-4">
                {/* Phone Box */}
                <div className="bg-[#e8f5e9] rounded-lg p-6 flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-8 h-8 text-[#0b7845]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#002309] mb-2">Phone</h3>
                    <p className="text-gray-700">+91 93458 55001</p>
                  </div>
                </div>

                {/* Email Box */}
                <div className="bg-[#e8f5e9] rounded-lg p-6 flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-8 h-8 text-[#0b7845]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#002309] mb-2">Email</h3>
                    <a href="mailto:nursing@jkkn.ac.in" className="text-[#0b7845] hover:underline">
                      nursing@jkkn.ac.in
                    </a>
                  </div>
                </div>

                {/* Address Box */}
                <div className="bg-[#e8f5e9] rounded-lg p-6 flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-8 h-8 text-[#0b7845]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#002309] mb-3">Address</h3>
                    <p className="text-gray-700 leading-relaxed">
                      SRESAKTHIMAYEIL INSTITUTE OF NURSING & RESEARCH<br />
                      NATARAJAPURAM, NH-544 (SALEM TO COIMBATORE),<br />
                      KOMARAPALAYAM – 638183, NAMAKKAL (DT)
                    </p>
                  </div>
                </div>
              </div>

              {/* Click Here Button */}
              <div className="mt-6">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#6ba85c] hover:bg-[#5a9149] text-white font-semibold px-8 py-3 rounded-md transition-colors"
                >
                  Click Here
                </a>
              </div>
            </div>

            {/* Right Column - Send a Message */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#002309] mb-4">
                Send a Message
              </h2>

              <div className="w-16 h-1 bg-[#FFD700] mb-6"></div>

              <p className="text-gray-600 mb-8">
                Your email address will not be published. Required fields are marked.
              </p>

              {/* Online Admissions Button */}
              <a
                href="/admissions"
                className="inline-block bg-[#6ba85c] hover:bg-[#5a9149] text-white font-semibold px-8 py-3 rounded-md transition-colors"
              >
                Online Admissions 2025 - 2026
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer hideLifeAtJKKN={true} />
      <FloatingButtons />
    </>
  );
}
