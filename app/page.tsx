import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#006837] via-[#7cb983] to-[#006837] py-20 md:py-32 overflow-hidden">
          <div className="container mx-auto px-[44px] md:px-[52px] lg:px-[68px] relative z-10">
            <div className="max-w-4xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full mb-8">
                <span className="text-2xl">🏥</span>
                <span className="text-white text-sm md:text-base font-medium">
                  INC Approved | TNNMC Registered | Tamil Nadu's Premier Nursing College
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                Begin Your Journey in
                <br />
                <span className="text-[#7cb983]">Nursing Excellence</span>
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl leading-relaxed">
                Join J.K.K. Nattraja College of Nursing and become a compassionate healthcare professional. B.Sc, M.Sc, Post Basic Nursing & GNM programs with state-of-the-art simulation labs, 500+ bedded hospital training, and 98%+ placement success.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/courses"
                  className="bg-white hover:bg-gray-50 text-[#006837] font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Explore Programs →
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white hover:bg-white hover:text-[#006837] text-white font-bold px-8 py-4 rounded-full transition-all duration-300"
                >
                  Apply for 2025-26
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-b from-[#7cb983] to-[#006837]">
          <div className="container mx-auto px-[44px] md:px-[52px] lg:px-[68px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { number: "4", label: "NURSING\nPROGRAMS" },
                { number: "98%+", label: "PLACEMENT RATE" },
                { number: "500+", label: "BED HOSPITAL\nTRAINING" },
                { number: "800+", label: "ACTIVE LEARNERS" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-3xl p-8 text-center hover:bg-white/20 transition-all duration-300"
                >
                  <div className="text-5xl md:text-6xl font-bold text-[#7cb983] mb-3">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base text-white font-medium whitespace-pre-line">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-[#FBFBEE]">
          <div className="container mx-auto px-[44px] md:px-[52px] lg:px-[68px]">
            {/* Info Cards Row */}
            <div className="bg-white rounded-3xl shadow-xl p-8 mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    icon: "🎓",
                    title: "University Affiliated",
                    subtitle: "TN Dr. M.G.R. Medical University",
                  },
                  {
                    icon: "✅",
                    title: "INC Approved",
                    subtitle: "Indian Nursing Council",
                  },
                  {
                    icon: "💼",
                    title: "Avg. Package",
                    subtitle: "₹4.2 - 12 LPA",
                  },
                  {
                    icon: "📅",
                    title: "Admission Open",
                    subtitle: "2025-26 Batch Now",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="text-4xl">{item.icon}</div>
                    <div>
                      <h3 className="text-lg font-bold text-[#006837] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600">{item.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* About Content */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-[#7cb983] text-sm font-bold uppercase tracking-wide mb-4">
                  ABOUT JKKN COLLEGE OF NURSING
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-[#006837] mb-6">
                  Nurturing Compassionate Healthcare Leaders Since 2008
                </h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                  J.K.K. Nattraja College of Nursing, part of J.K.K. Nattraja Educational Institutions celebrating #JKKN100, is committed to producing skilled, compassionate nursing professionals who deliver excellence in patient care. Our Learners are trained in clinical competence, critical thinking, and humanitarian values.
                </p>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Affiliated with The Tamil Nadu Dr. M.G.R. Medical University, approved by the Indian Nursing Council (INC), and registered with Tamil Nadu Nurses and Midwives Council (TNNMC), we offer comprehensive nursing programs. Our experienced Learning Facilitators combine clinical expertise with pedagogical excellence in state-of-the-art Learning Studios.
                </p>

                {/* Features */}
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {[
                    "INC approved programs with hospital internship",
                    "500+ bedded teaching hospital for clinical training",
                    "Advanced nursing simulation laboratory",
                    "International placement partnerships",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#7cb983] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/courses"
                  className="inline-block bg-[#7cb983] hover:bg-[#6ba872] text-white font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg"
                >
                  View All Programs →
                </Link>
              </div>

              <div className="relative">
                <div className="absolute -top-8 -right-8 w-24 h-24 md:w-32 md:h-32 bg-[#7cb983] rounded-[40px] flex flex-col items-center justify-center text-white shadow-2xl z-10">
                  <div className="text-3xl md:text-4xl font-bold">100</div>
                  <div className="text-[10px] md:text-xs font-bold uppercase">YEARS LEGACY</div>
                </div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/api/placeholder/600/400"
                    alt="JKKN Nursing College Simulation Lab with Learners practicing clinical skills on high-fidelity mannequins"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-[44px] md:px-[52px] lg:px-[68px]">
            <div className="text-center mb-12">
              <p className="text-[#7cb983] text-sm font-bold uppercase tracking-wide mb-4">
                OUR PROGRAMS
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-[#006837] mb-4">
                Nursing Programs
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Choose from our INC-approved nursing programs designed to build clinical competence, compassionate care, and leadership skills for a rewarding healthcare career.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* B.Sc Nursing */}
              <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-4 border-[#7cb983] relative">
                <div className="absolute -top-3 left-6 bg-[#7cb983] text-white px-4 py-1 rounded-full text-xs font-bold">
                  MOST POPULAR
                </div>
                <div className="w-16 h-16 bg-[#006837] rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-3xl">👨‍⚕️</span>
                </div>
                <h3 className="text-2xl font-bold text-[#006837] mb-2">
                  B.Sc Nursing
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                  <span>⏱️</span>
                  <span>4 Years</span>
                </div>
                <p className="text-gray-700 text-sm mb-6 leading-relaxed">
                  Comprehensive undergraduate nursing program covering medical-surgical, pediatric, obstetric, psychiatric, and community health nursing with extensive clinical rotations.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="inline-block bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-700 mr-2">
                    60 Seats
                  </div>
                  <div className="inline-block bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-700">
                    ₹95,000/year
                  </div>
                </div>
                <div className="bg-[#FBFBEE] px-3 py-2 rounded-lg mb-4">
                  <p className="text-xs text-gray-700">Internship Included</p>
                </div>
                <p className="text-sm text-gray-700">
                  <span className="font-bold">Careers:</span> Staff Nurse, ICU Specialist, Community Health Nurse, Nursing Supervisor, International Nursing
                </p>
              </div>

              {/* M.Sc Nursing */}
              <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-[#006837] rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-3xl">🎓</span>
                </div>
                <h3 className="text-2xl font-bold text-[#006837] mb-2">
                  M.Sc Nursing
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                  <span>⏱️</span>
                  <span>2 Years</span>
                </div>
                <p className="text-gray-700 text-sm mb-6 leading-relaxed">
                  Postgraduate specializations in Medical-Surgical, OBG, Pediatric, Psychiatric & Community Health Nursing. Prepares for advanced practice, education & research roles.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="inline-block bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-700 mr-2">
                    20 Seats
                  </div>
                  <div className="inline-block bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-700">
                    ₹1,25,000/year
                  </div>
                </div>
                <div className="bg-[#FBFBEE] px-3 py-2 rounded-lg mb-4">
                  <p className="text-xs text-gray-700">5 Specializations</p>
                </div>
                <p className="text-sm text-gray-700">
                  <span className="font-bold">Careers:</span> Nursing Educator, Clinical Specialist, Nurse Manager, Research Associate
                </p>
              </div>

              {/* Post Basic B.Sc Nursing */}
              <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-[#006837] rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-3xl">📚</span>
                </div>
                <h3 className="text-2xl font-bold text-[#006837] mb-2">
                  Post Basic B.Sc Nursing
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                  <span>⏱️</span>
                  <span>2 Years</span>
                </div>
                <p className="text-gray-700 text-sm mb-6 leading-relaxed">
                  Degree completion program for GNM diploma holders to upgrade qualifications. Opens doors to M.Sc Nursing, better positions, and higher salaries.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="inline-block bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-700 mr-2">
                    40 Seats
                  </div>
                  <div className="inline-block bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-700">
                    ₹85,000/year
                  </div>
                </div>
                <div className="bg-[#FBFBEE] px-3 py-2 rounded-lg mb-4">
                  <p className="text-xs text-gray-700">For GNM Holders</p>
                </div>
                <p className="text-sm text-gray-700">
                  <span className="font-bold">Careers:</span> Senior Staff Nurse, Ward In-charge, Nursing Supervisor, Higher Studies
                </p>
              </div>

              {/* GNM */}
              <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-[#006837] rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-3xl">💉</span>
                </div>
                <h3 className="text-2xl font-bold text-[#006837] mb-2">GNM</h3>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                  <span>⏱️</span>
                  <span>3 Years</span>
                </div>
                <p className="text-gray-700 text-sm mb-6 leading-relaxed">
                  General Nursing and Midwifery diploma providing foundational nursing skills, patient care training, and midwifery expertise for entry-level nursing positions.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="inline-block bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-700 mr-2">
                    50 Seats
                  </div>
                  <div className="inline-block bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-700">
                    ₹75,000/year
                  </div>
                </div>
                <div className="bg-[#FBFBEE] px-3 py-2 rounded-lg mb-4">
                  <p className="text-xs text-gray-700">Diploma Program</p>
                </div>
                <p className="text-sm text-gray-700">
                  <span className="font-bold">Careers:</span> Staff Nurse, ANM, Community Health Worker, Midwife
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-[#006837]">
          <div className="container mx-auto px-[44px] md:px-[52px] lg:px-[68px]">
            <div className="text-center mb-12">
              <p className="text-[#7cb983] text-sm font-bold uppercase tracking-wide mb-4">
                WHY CHOOSE US
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Why JKKN College of Nursing?
              </h2>
              <p className="text-white/80 max-w-3xl mx-auto">
                Experience world-class nursing education with clinical excellence, modern facilities, and exceptional career opportunities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: "🏥",
                  title: "500+ Bed Hospital Training",
                  description:
                    "Hands-on clinical training in our attached 500+ bedded multi-specialty hospital covering all nursing specialities with real patient interactions.",
                },
                {
                  icon: "🔬",
                  title: "Advanced Simulation Labs",
                  description:
                    "Practice on high-fidelity mannequins in our simulation labs before working with real patients. Learn safely, gain confidence, and master clinical skills.",
                },
                {
                  icon: "🌍",
                  title: "International Placements",
                  description:
                    "Direct recruitment partnerships with hospitals in UK, USA, Canada, Australia, Singapore, and Gulf countries. NCLEX and IELTS preparation support included.",
                },
                {
                  icon: "👨‍🏫",
                  title: "Expert Learning Facilitators",
                  description:
                    "Learn from experienced nursing professionals with clinical and academic expertise. Our Learning Facilitators bring real-world healthcare knowledge to every Learning Studio.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-3xl p-8 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Placement Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-[44px] md:px-[52px] lg:px-[68px]">
            <div className="text-center mb-12">
              <p className="text-[#7cb983] text-sm font-bold uppercase tracking-wide mb-4">
                CAREER SUCCESS
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-[#006837] mb-4">
                Outstanding Placement Record
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our Learners are recruited by leading hospitals, healthcare systems, and international healthcare organizations.
              </p>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-4 gap-6 mb-16">
              {[
                { number: "98%+", label: "Placement Rate" },
                { number: "₹4.2L", label: "Avg. Package" },
                { number: "₹25L", label: "Highest (International)" },
                { number: "150+", label: "Recruiting Partners" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-8 text-center shadow-lg"
                >
                  <div className="text-4xl md:text-5xl font-bold text-[#7cb983] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Top Recruiters */}
            <div>
              <h3 className="text-2xl font-bold text-center text-[#006837] mb-8">
                Top Recruiters
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {[
                  "Apollo Hospitals",
                  "MIOT International",
                  "Fortis Healthcare",
                  "Manipal Hospitals",
                  "KIMS Hospitals",
                  "Narayana Health",
                  "AIIMS",
                  "Government Hospitals",
                  "NHS (UK)",
                  "Saudi German Hospital",
                  "Cleveland Clinic Abu Dhabi",
                  "Singapore General Hospital",
                ].map((hospital, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-4 text-center shadow hover:shadow-lg transition-all duration-300"
                  >
                    <p className="text-sm font-semibold text-[#006837]">
                      {hospital}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Campus Infrastructure Section */}
        <section className="py-20 bg-[#FBFBEE]">
          <div className="container mx-auto px-[44px] md:px-[52px] lg:px-[68px]">
            <div className="text-center mb-12">
              <p className="text-[#7cb983] text-sm font-bold uppercase tracking-wide mb-4">
                CAMPUS INFRASTRUCTURE
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-[#006837] mb-4">
                World-Class Facilities
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our campus offers modern infrastructure designed for comprehensive nursing education and comfortable campus life.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "🏥",
                  title: "Nursing Skills Simulation Lab",
                  description:
                    "High-fidelity mannequins for practicing injections, IV cannulation, catheterization, wound care, and emergency procedures in a safe environment.",
                },
                {
                  icon: "🧬",
                  title: "Anatomy & Physiology Lab",
                  description:
                    "Well-equipped lab with anatomical models, charts, and specimens for comprehensive understanding of human body systems.",
                },
                {
                  icon: "👶",
                  title: "Maternity & Pediatric Lab",
                  description:
                    "Specialized training for obstetric and pediatric nursing with infant care simulators and maternal health equipment.",
                },
                {
                  icon: "🍎",
                  title: "Nutrition & Dietetics Lab",
                  description:
                    "Modern kitchen and lab for practical training in therapeutic nutrition and patient diet planning.",
                },
                {
                  icon: "📚",
                  title: "Digital Library",
                  description:
                    "15,000+ books, international nursing journals, e-resources, and NCLEX preparation materials accessible 24/7.",
                },
                {
                  icon: "🏠",
                  title: "Modern Hostels",
                  description:
                    "Separate hostels for men and women with furnished rooms, 24/7 security, Wi-Fi, mess, gym, and recreation facilities.",
                },
              ].map((facility, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-3xl p-6 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-[#006837] rounded-2xl flex items-center justify-center mb-4">
                    <span className="text-3xl">{facility.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#006837] mb-3">
                    {facility.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Admissions Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-[44px] md:px-[52px] lg:px-[68px]">
            <div className="text-center mb-12">
              <p className="text-[#7cb983] text-sm font-bold uppercase tracking-wide mb-4">
                JOIN US
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-[#006837] mb-4">
                Admissions 2025-26
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Take the first step towards a rewarding nursing career. Applications are now open for the 2025-26 academic session.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Eligibility Criteria */}
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-[#006837] mb-6">
                  Eligibility Criteria
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      program: "B.Sc Nursing:",
                      criteria:
                        "10+2 with PCB, minimum 45% marks (40% for SC/ST), age 17-35 years",
                    },
                    {
                      program: "M.Sc Nursing:",
                      criteria:
                        "B.Sc Nursing with 55% marks, 1 year clinical experience, valid TNNMC registration",
                    },
                    {
                      program: "Post Basic B.Sc:",
                      criteria:
                        "GNM diploma with 1 year experience, valid TNNMC registration",
                    },
                    {
                      program: "GNM:",
                      criteria:
                        "10+2 with any stream, minimum 40% marks, age 17-35 years",
                    },
                    {
                      program: "Documents:",
                      criteria:
                        "Marksheets, TC, Community Certificate, Medical Fitness, Aadhaar",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#7cb983] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <p className="text-gray-700">
                        <span className="font-bold">{item.program}</span>{" "}
                        {item.criteria}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Application CTA */}
              <div className="bg-gradient-to-br from-[#006837] to-[#7cb983] rounded-3xl p-10 text-center shadow-2xl">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Start Your Application
                </h3>
                <p className="text-white/90 mb-8">
                  Limited seats available. Apply early to secure your place in Tamil Nadu's premier nursing institution.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="bg-white hover:bg-gray-50 text-[#006837] font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg"
                  >
                    Apply Online →
                  </Link>
                  <Link
                    href="tel:+91"
                    className="border-2 border-white hover:bg-white hover:text-[#006837] text-white font-bold px-8 py-4 rounded-full transition-all duration-300 inline-flex items-center justify-center gap-2"
                  >
                    <span>📞</span>
                    Call Admissions
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-[#FBFBEE]">
          <div className="container mx-auto px-[44px] md:px-[52px] lg:px-[68px]">
            <div className="text-center mb-12">
              <p className="text-[#7cb983] text-sm font-bold uppercase tracking-wide mb-4">
                SUCCESS STORIES
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-[#006837] mb-4">
                What Our Learners Say
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Hear from our Learners and alumni about their transformative experience at JKKN College of Nursing.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "The simulation labs at JKKN gave me confidence before my first clinical posting. The hands-on training with mannequins helped me handle real emergencies calmly. I'm now working at Apollo Chennai.",
                  name: "Priya Subramanian",
                  designation: "B.Sc Nursing 2022, Staff Nurse at Apollo",
                  initials: "PS",
                },
                {
                  quote:
                    "After completing my M.Sc Nursing from JKKN, I received placement offers from 3 nursing colleges. The research exposure and clinical specialization prepared me perfectly for an academic career.",
                  name: "Rajesh Kumar",
                  designation: "M.Sc Nursing 2023, Nursing Lecturer",
                  initials: "RK",
                },
                {
                  quote:
                    "The international placement support at JKKN changed my life. They helped me with IELTS preparation and UK visa process. Now I'm earning in GBP and supporting my family back home.",
                  name: "Anitha Murugan",
                  designation: "B.Sc Nursing 2021, NHS UK",
                  initials: "AM",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="text-6xl text-[#7cb983]/20 mb-4">"</div>
                  <p className="text-gray-700 italic mb-6 leading-relaxed">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-[#006837] flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">
                        {testimonial.initials}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#006837]">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {testimonial.designation}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-[44px] md:px-[52px] lg:px-[68px]">
            <div className="text-center mb-12">
              <p className="text-[#7cb983] text-sm font-bold uppercase tracking-wide mb-4">
                HAVE QUESTIONS?
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-[#006837] mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Find answers to common questions about nursing programs, admissions, fees, and career opportunities.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {[
                {
                  question: "What is the difference between B.Sc Nursing and GNM?",
                  answer:
                    "B.Sc Nursing is a 4-year degree program while GNM is a 3-year diploma. B.Sc Nursing offers a broader curriculum, better career advancement opportunities, higher salaries, eligibility for M.Sc Nursing, and international job prospects. GNM provides foundational nursing skills for entry-level positions. We recommend B.Sc Nursing if you qualify, as it opens more doors for career growth and higher studies.",
                },
                {
                  question: "Is JKKN College of Nursing approved by INC?",
                  answer:
                    "Yes, J.K.K. Nattraja College of Nursing is fully approved by the Indian Nursing Council (INC), registered with Tamil Nadu Nurses and Midwives Council (TNNMC), and affiliated with The Tamil Nadu Dr. M.G.R. Medical University. Our degrees are recognized nationally and internationally, enabling our graduates to work anywhere in India and apply for international nursing positions.",
                },
                {
                  question: "What is the fee structure for nursing programs?",
                  answer:
                    "Our annual fee structure: B.Sc Nursing - ₹95,000, M.Sc Nursing - ₹1,25,000, Post Basic B.Sc Nursing - ₹85,000, GNM - ₹75,000. This includes tuition, laboratory, clinical training, and examination fees. Hostel accommodation is approximately ₹60,000-75,000 per year. Merit scholarships covering up to 75% of tuition fees are available for deserving Learners.",
                },
                {
                  question: "What are the placement opportunities after nursing?",
                  answer:
                    "JKKN has 98%+ placement rate with recruiters including Apollo, MIOT, Fortis, Manipal, KIMS, government hospitals, and international recruiters from UK (NHS), USA, Canada, Australia, Singapore, and Gulf countries. Starting salaries range from ₹3.5-6 LPA in India and ₹15-25 LPA internationally. Our placement cell provides NCLEX, IELTS preparation, and visa support for international placements.",
                },
                {
                  question: "Can male candidates apply for nursing?",
                  answer:
                    "Absolutely! Nursing is a gender-neutral profession with growing demand for male nurses, especially in ICU, emergency, orthopedics, psychiatry, and community health. JKKN welcomes male applicants and provides separate hostel facilities. Male nurses have excellent career opportunities, particularly in critical care units and international placements.",
                },
                {
                  question: "What clinical training facilities are available?",
                  answer:
                    "Our Learners receive clinical training at the attached 500+ bedded multi-specialty hospital covering medicine, surgery, pediatrics, obstetrics, psychiatry, orthopedics, and more. We also have advanced simulation labs with high-fidelity mannequins for practicing procedures safely. Community health training is conducted through rural health centers and urban health posts in partnership with government health departments.",
                },
                {
                  question: "Is hostel accommodation mandatory?",
                  answer:
                    "Hostel is not mandatory but strongly recommended for nursing Learners due to clinical posting schedules that may include early morning and evening shifts. Our hostels offer 24/7 security, Wi-Fi, mess with nutritious meals, gym, recreation room, and are located within the campus for safety and convenience. Day scholars are also welcome if they can manage clinical posting timings.",
                },
                {
                  question: "What are the M.Sc Nursing specializations available?",
                  answer:
                    "JKKN offers M.Sc Nursing in 5 specializations: Medical-Surgical Nursing (most popular), Obstetrics & Gynecological Nursing, Pediatric (Child Health) Nursing, Psychiatric (Mental Health) Nursing, and Community Health Nursing. Each specialization prepares you for advanced clinical practice, nursing education, administration, and research roles. Admission is based on entrance exam and B.Sc Nursing percentage.",
                },
              ].map((faq, index) => (
                <details
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition-all duration-300 group"
                >
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <h3 className="text-lg font-bold text-[#006837] pr-4">
                      {faq.question}
                    </h3>
                    <span className="text-2xl text-[#7cb983] group-open:rotate-45 transition-transform duration-300">
                      +
                    </span>
                  </summary>
                  <p className="text-gray-700 mt-4 leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-[#7cb983]">
          <div className="container mx-auto px-[44px] md:px-[52px] lg:px-[68px] text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Begin Your Nursing Journey?
            </h2>
            <p className="text-lg text-white/90 mb-10 max-w-3xl mx-auto">
              Join J.K.K. Nattraja College of Nursing and become part of a legacy of healthcare excellence spanning 100 years. Applications for 2025-26 are now open.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white hover:bg-gray-50 text-[#006837] font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Apply Online Now →
              </Link>
              <Link
                href="#"
                className="border-2 border-white hover:bg-white hover:text-[#7cb983] text-white font-bold px-8 py-4 rounded-full transition-all duration-300"
              >
                Download Brochure
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer hideLifeAtJKKN={true} />
      <FloatingButtons />
    </>
  );
}
