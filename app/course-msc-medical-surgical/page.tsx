"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { useState } from "react";
import {
  CheckCircle2,
  Clock,
  Building2,
  Award,
  Users,
  Calendar,
  Lightbulb,
  FlaskConical,
  GraduationCap,
  Stethoscope,
  Briefcase,
  BookOpen,
  Heart,
  Monitor,
  Activity,
  FileText,
  BookMarked,
  School,
  Hospital,
  ClipboardList,
} from "lucide-react";

export default function MScMedicalSurgicalNursing() {
  const [activeTab, setActiveTab] = useState<
    "first-year" | "second-year" | "clinical-practicum"
  >("first-year");

  return (
    <>
      <Header />
      <main className="bg-[#FBFBEE]">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#006837] via-[#7cb983] to-[#a8d5b0] text-white py-16 md:py-24">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  M.Sc Nursing{" "}
                  <span className="text-[#7cb983]">
                    Medical Surgical Nursing
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-[#a8d5b0] mb-6">
                  Postgraduate Program in Advanced Clinical Nursing
                </p>
                <p className="text-base md:text-lg mb-8 text-gray-100 leading-relaxed">
                  Elevate your nursing career with specialized expertise in
                  medical-surgical care. Our INC-approved program combines
                  advanced theoretical knowledge with intensive clinical
                  training to develop competent nurse educators, administrators,
                  and clinical specialists.
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 bg-[#006837]/50 px-4 py-2 rounded-full">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>INC Approved</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#006837]/50 px-4 py-2 rounded-full">
                    <Clock className="w-5 h-5" />
                    <span>2 Years Full-Time</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#006837]/50 px-4 py-2 rounded-full">
                    <Building2 className="w-5 h-5" />
                    <span>Clinical Specialization</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4">
                  <button className="hover:bg-[#6ba872] text-white px-8 py-3 rounded-full font-semibold transition-colors flex items-center gap-2" style={{backgroundColor: '#7cb983'}}>
                    Apply Now
                    <span className="text-xl">→</span>
                  </button>
                  <button className="border-2 border-white hover:bg-white hover:text-[#7cb983] text-white px-8 py-3 rounded-full font-semibold transition-colors">
                    View Curriculum
                  </button>
                </div>
              </div>

              {/* Right Content - Video/Image Placeholder */}
              <div className="relative">
                <div className="bg-[#006837]/30 backdrop-blur-sm rounded-2xl p-8 border border-[#7cb983]/30">
                  <div className="bg-gradient-to-br from-[#7cb983]/20 to-[#7cb983]/20 rounded-xl aspect-video flex items-center justify-center mb-6">
                    <div className="text-center">
                      <Monitor className="w-16 h-16 mx-auto mb-4 text-[#a8d5b0]" />
                      <p className="text-2xl font-bold">
                        M.Sc Nursing Clinical Training
                      </p>
                    </div>
                  </div>
                  <div className="text-white px-6 py-4 rounded-xl inline-block" style={{backgroundColor: '#7cb983'}}>
                    <p className="text-4xl font-bold mb-1">100%</p>
                    <p className="text-sm">Placement Assistance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-[#FBFBEE]">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                <p className="text-4xl md:text-5xl font-bold text-[#7cb983] mb-2">
                  30+
                </p>
                <p className="text-gray-600">Years of Excellence</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                <p className="text-4xl md:text-5xl font-bold text-[#7cb983] mb-2">
                  15
                </p>
                <p className="text-gray-600">Seats Available</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                <p className="text-4xl md:text-5xl font-bold text-[#7cb983] mb-2">
                  1:8
                </p>
                <p className="text-gray-600">Facilitator-Learner Ratio</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                <p className="text-4xl md:text-5xl font-bold text-[#7cb983] mb-2">
                  500+
                </p>
                <p className="text-gray-600">Clinical Training Hours</p>
              </div>
            </div>
          </div>
        </section>

        {/* Program Overview */}
        <section className="py-16 md:py-20">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#7cb983] mb-4">
                Program Overview
              </h2>
              <div className="w-24 h-1 bg-[#7cb983] mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                A comprehensive postgraduate nursing education designed to
                develop advanced clinical competencies and leadership skills
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6 text-gray-700 leading-relaxed">
                <p>
                  The Master of Science in Nursing with specialization in
                  Medical Surgical Nursing at JKKN College of Nursing is a
                  two-year, full-time postgraduate program designed to prepare
                  registered nurses for advanced roles in clinical practice,
                  education, research, and administration.
                </p>
                <p>
                  This program provides in-depth knowledge of medical-surgical
                  nursing concepts, advanced assessment skills, evidence-based
                  practice, and nursing research methodology. Learners develop
                  expertise in managing complex patient conditions across
                  various clinical settings including critical care units,
                  emergency departments, and specialty wards.
                </p>
                <p>
                  Our program emphasizes the development of clinical reasoning,
                  critical thinking, and leadership abilities essential for
                  contemporary nursing practice. Through a combination of
                  theoretical instruction, laboratory practice, and extensive
                  clinical rotations, learners gain the competencies needed to
                  excel as nurse educators, clinical specialists, and healthcare
                  administrators.
                </p>
                <p>
                  The curriculum is aligned with Indian Nursing Council (INC)
                  guidelines and is continuously updated to reflect current best
                  practices in nursing education and healthcare delivery.
                  Graduates are well-prepared for careers in academic
                  institutions, hospitals, research organizations, and
                  healthcare management.
                </p>
              </div>

              {/* Quick Information Sidebar */}
              <div className="bg-gradient-to-br from-[#FBFBEE] to-[#FBFBEE] rounded-xl p-6 border border-gray-200 h-fit">
                <h3 className="text-2xl font-bold text-[#7cb983] mb-6">
                  Quick Information
                </h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="bg-[#e8f5ea] rounded-lg p-3 h-fit">
                      <Clock className="w-6 h-6 text-[#7cb983]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#002309] mb-1">
                        Duration
                      </p>
                      <p className="text-gray-700">2 Years (4 Semesters)</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-[#e8f5ea] rounded-lg p-3 h-fit">
                      <Building2 className="w-6 h-6 text-[#7cb983]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#002309] mb-1">
                        Affiliation
                      </p>
                      <p className="text-gray-700">
                        The Tamil Nadu Dr. M.G.R. Medical University
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-[#e8f5ea] rounded-lg p-3 h-fit">
                      <Award className="w-6 h-6 text-[#7cb983]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#002309] mb-1">
                        Approval
                      </p>
                      <p className="text-gray-700">
                        Indian Nursing Council (INC)
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-[#e8f5ea] rounded-lg p-3 h-fit">
                      <Users className="w-6 h-6 text-[#7cb983]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#002309] mb-1">Intake</p>
                      <p className="text-gray-700">15 Seats per Year</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-[#e8f5ea] rounded-lg p-3 h-fit">
                      <Calendar className="w-6 h-6 text-[#7cb983]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#002309] mb-1">
                        Academic Session
                      </p>
                      <p className="text-gray-700">August - July</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose This Program */}
        <section className="py-16 md:py-20 bg-[#FBFBEE]">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#7cb983] mb-4">
                Why Choose This Program?
              </h2>
              <div className="w-24 h-1 bg-[#7cb983] mx-auto mb-6"></div>
              <p className="text-lg text-gray-600">
                Discover the unique advantages that set our M.Sc Nursing program
                apart
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature Card 1 */}
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-br from-[#FBFBEE] to-[#FBFBEE] w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Lightbulb className="w-8 h-8 text-[#7cb983]" />
                </div>
                <h3 className="text-xl font-bold text-[#7cb983] mb-3">
                  Research-Driven Curriculum
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Engage with evidence-based practice and develop strong
                  research skills through dissertation work and published
                  studies.
                </p>
              </div>

              {/* Feature Card 2 */}
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-br from-[#FBFBEE] to-[#FBFBEE] w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <FlaskConical className="w-8 h-8 text-[#7cb983]" />
                </div>
                <h3 className="text-xl font-bold text-[#7cb983] mb-3">
                  Advanced Simulation Labs
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Practice clinical skills in state-of-the-art simulation
                  centers with high-fidelity manikins and realistic patient
                  scenarios.
                </p>
              </div>

              {/* Feature Card 3 */}
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-br from-[#FBFBEE] to-[#FBFBEE] w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <GraduationCap className="w-8 h-8 text-[#7cb983]" />
                </div>
                <h3 className="text-xl font-bold text-[#7cb983] mb-3">
                  Expert Learning Facilitators
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Learn from experienced nurse educators and clinical
                  specialists with extensive academic and healthcare industry
                  experience.
                </p>
              </div>

              {/* Feature Card 4 */}
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-br from-[#FBFBEE] to-[#FBFBEE] w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Stethoscope className="w-8 h-8 text-[#7cb983]" />
                </div>
                <h3 className="text-xl font-bold text-[#7cb983] mb-3">
                  Clinical Partnerships
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Access diverse clinical rotations at affiliated multispecialty
                  hospitals, gaining exposure to complex patient cases.
                </p>
              </div>

              {/* Feature Card 5 */}
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-br from-[#FBFBEE] to-[#FBFBEE] w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Briefcase className="w-8 h-8 text-[#7cb983]" />
                </div>
                <h3 className="text-xl font-bold text-[#7cb983] mb-3">
                  Career Support
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Benefit from dedicated placement cell support with connections
                  to leading hospitals, colleges, and healthcare organizations.
                </p>
              </div>

              {/* Feature Card 6 */}
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-br from-[#FBFBEE] to-[#FBFBEE] w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <BookOpen className="w-8 h-8 text-[#7cb983]" />
                </div>
                <h3 className="text-xl font-bold text-[#7cb983] mb-3">
                  Comprehensive Resources
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Access well-stocked library with nursing journals, e-resources,
                  and latest textbooks for academic excellence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Eligibility Criteria */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-[#006837] via-[#7cb983] to-[#a8d5b0] text-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Eligibility Criteria
              </h2>
              <div className="w-24 h-1 bg-[#7cb983] mx-auto mb-6"></div>
              <p className="text-lg text-gray-100">
                Requirements for admission to M.Sc Nursing in Medical Surgical
                Nursing
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Academic Requirements */}
              <div className="bg-[#006837]/40 backdrop-blur-sm rounded-xl p-8 border border-[#7cb983]/30">
                <div className="flex items-center gap-3 mb-6">
                  <BookMarked className="w-8 h-8 text-[#7cb983]" />
                  <h3 className="text-2xl font-bold text-[#7cb983]">
                    Academic Requirements
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#a8d5b0] flex-shrink-0 mt-1" />
                    <p className="leading-relaxed">
                      B.Sc Nursing (4-year course) with minimum 55% aggregate
                      marks from a recognized university
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#a8d5b0] flex-shrink-0 mt-1" />
                    <p className="leading-relaxed">
                      Post Basic B.Sc Nursing with minimum 55% aggregate marks
                      from a recognized university
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#a8d5b0] flex-shrink-0 mt-1" />
                    <p className="leading-relaxed">
                      Candidates with B.Sc Hons. Nursing (if applicable) are
                      also eligible
                    </p>
                  </div>
                </div>
              </div>

              {/* Professional Requirements */}
              <div className="bg-[#006837]/40 backdrop-blur-sm rounded-xl p-8 border border-[#7cb983]/30">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-8 h-8 text-[#7cb983]" />
                  <h3 className="text-2xl font-bold text-[#7cb983]">
                    Professional Requirements
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#a8d5b0] flex-shrink-0 mt-1" />
                    <p className="leading-relaxed">
                      Valid registration with State Nursing Registration Council
                      as Registered Nurse (RN) and Registered Midwife (RM)
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#a8d5b0] flex-shrink-0 mt-1" />
                    <p className="leading-relaxed">
                      Minimum 1 year of clinical work experience after B.Sc
                      Nursing or Post Basic B.Sc Nursing
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#a8d5b0] flex-shrink-0 mt-1" />
                    <p className="leading-relaxed">
                      Medically fit as certified by a registered medical
                      practitioner
                    </p>
                  </div>
                </div>
              </div>

              {/* Selection Process */}
              <div className="bg-[#006837]/40 backdrop-blur-sm rounded-xl p-8 border border-[#7cb983]/30">
                <div className="flex items-center gap-3 mb-6">
                  <ClipboardList className="w-8 h-8 text-[#7cb983]" />
                  <h3 className="text-2xl font-bold text-[#7cb983]">
                    Selection Process
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#a8d5b0] flex-shrink-0 mt-1" />
                    <p className="leading-relaxed">
                      Entrance examination conducted by the university or
                      institution
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#a8d5b0] flex-shrink-0 mt-1" />
                    <p className="leading-relaxed">
                      Merit-based selection considering academic performance and
                      entrance test score
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#a8d5b0] flex-shrink-0 mt-1" />
                    <p className="leading-relaxed">
                      Personal interview for shortlisted candidates
                    </p>
                  </div>
                </div>
              </div>

              {/* Documents Required */}
              <div className="bg-[#006837]/40 backdrop-blur-sm rounded-xl p-8 border border-[#7cb983]/30">
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="w-8 h-8 text-[#7cb983]" />
                  <h3 className="text-2xl font-bold text-[#7cb983]">
                    Documents Required
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#a8d5b0] flex-shrink-0 mt-1" />
                    <p className="leading-relaxed">
                      B.Sc Nursing or Post Basic B.Sc Nursing degree certificate
                      and mark sheets
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#a8d5b0] flex-shrink-0 mt-1" />
                    <p className="leading-relaxed">
                      Nursing registration certificate (RN/RM)
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#a8d5b0] flex-shrink-0 mt-1" />
                    <p className="leading-relaxed">
                      Experience certificate from employer, transfer certificate,
                      and recent passport-size photographs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Curriculum Structure */}
        <section className="py-16 md:py-20 bg-[#FBFBEE]">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#7cb983] mb-4">
                Curriculum Structure
              </h2>
              <div className="w-24 h-1 bg-[#7cb983] mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A comprehensive 4-semester curriculum designed as per INC
                guidelines for advanced nursing education
              </p>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button
                onClick={() => setActiveTab("first-year")}
                className={`px-8 py-3 rounded-full font-semibold transition-all ${
                  activeTab === "first-year"
                    ? "bg-[#7cb983] text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                First Year
              </button>
              <button
                onClick={() => setActiveTab("second-year")}
                className={`px-8 py-3 rounded-full font-semibold transition-all ${
                  activeTab === "second-year"
                    ? "bg-[#7cb983] text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                Second Year
              </button>
              <button
                onClick={() => setActiveTab("clinical-practicum")}
                className={`px-8 py-3 rounded-full font-semibold transition-all ${
                  activeTab === "clinical-practicum"
                    ? "bg-[#7cb983] text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                Clinical Practicum
              </button>
            </div>

            {/* Tab Content */}
            <div className="grid md:grid-cols-2 gap-6">
              {activeTab === "first-year" && (
                <>
                  <div className="bg-gradient-to-br from-[#FBFBEE] to-[#FBFBEE] rounded-xl p-6 border-l-4 border-[#7cb983]">
                    <h3 className="text-xl font-bold text-[#7cb983] mb-3">
                      Nursing Education
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-700">
                      <span className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-[#7cb983]" />
                        Theory: 60 hours
                      </span>
                      <span className="flex items-center gap-2">
                        <Activity className="w-4 h-4 text-[#7cb983]" />
                        Practicum: 120 hours
                      </span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#FBFBEE] to-[#FBFBEE] rounded-xl p-6 border-l-4 border-[#7cb983]">
                    <h3 className="text-xl font-bold text-[#7cb983] mb-3">
                      Advanced Nursing Practice
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-700">
                      <span className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-[#7cb983]" />
                        Theory: 60 hours
                      </span>
                      <span className="flex items-center gap-2">
                        <Activity className="w-4 h-4 text-[#7cb983]" />
                        Practicum: 120 hours
                      </span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#FBFBEE] to-[#FBFBEE] rounded-xl p-6 border-l-4 border-[#7cb983]">
                    <h3 className="text-xl font-bold text-[#7cb983] mb-3">
                      Nursing Research and Statistics
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-700">
                      <span className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-[#7cb983]" />
                        Theory: 90 hours
                      </span>
                      <span className="flex items-center gap-2">
                        <Activity className="w-4 h-4 text-[#7cb983]" />
                        Practicum: 60 hours
                      </span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#FBFBEE] to-[#FBFBEE] rounded-xl p-6 border-l-4 border-[#7cb983]">
                    <h3 className="text-xl font-bold text-[#7cb983] mb-3">
                      Clinical Speciality – I (Medical Surgical Nursing)
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-700">
                      <span className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-[#7cb983]" />
                        Theory: 120 hours
                      </span>
                      <span className="flex items-center gap-2">
                        <Hospital className="w-4 h-4 text-[#7cb983]" />
                        Clinical: 540 hours
                      </span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#FBFBEE] to-[#FBFBEE] rounded-xl p-6 border-l-4 border-[#7cb983]">
                    <h3 className="text-xl font-bold text-[#7cb983] mb-3">
                      Nursing Management
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-700">
                      <span className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-[#7cb983]" />
                        Theory: 45 hours
                      </span>
                      <span className="flex items-center gap-2">
                        <Activity className="w-4 h-4 text-[#7cb983]" />
                        Practicum: 90 hours
                      </span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#FBFBEE] to-[#FBFBEE] rounded-xl p-6 border-l-4 border-[#7cb983]">
                    <h3 className="text-xl font-bold text-[#7cb983] mb-3">
                      Pathophysiology and Pharmacology
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-700">
                      <span className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-[#7cb983]" />
                        Theory: 60 hours
                      </span>
                      <span className="flex items-center gap-2">
                        <Activity className="w-4 h-4 text-[#7cb983]" />
                        Practical: 30 hours
                      </span>
                    </div>
                  </div>
                </>
              )}

              {activeTab === "second-year" && (
                <>
                  <div className="bg-gradient-to-br from-[#FBFBEE] to-[#FBFBEE] rounded-xl p-6 border-l-4 border-[#7cb983]">
                    <h3 className="text-xl font-bold text-[#7cb983] mb-3">
                      Clinical Speciality – II (Advanced Medical Surgical
                      Nursing)
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-700">
                      <span className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-[#7cb983]" />
                        Theory: 120 hours
                      </span>
                      <span className="flex items-center gap-2">
                        <Hospital className="w-4 h-4 text-[#7cb983]" />
                        Clinical: 540 hours
                      </span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#FBFBEE] to-[#FBFBEE] rounded-xl p-6 border-l-4 border-[#7cb983]">
                    <h3 className="text-xl font-bold text-[#7cb983] mb-3">
                      Dissertation / Thesis
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-700">
                      <span className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-[#7cb983]" />
                        Research Work: 300 hours
                      </span>
                      <span className="flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-[#7cb983]" />
                        Viva Voce
                      </span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#FBFBEE] to-[#FBFBEE] rounded-xl p-6 border-l-4 border-[#7cb983]">
                    <h3 className="text-xl font-bold text-[#7cb983] mb-3">
                      Critical Care Nursing
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-700">
                      <span className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-[#7cb983]" />
                        Theory: 60 hours
                      </span>
                      <span className="flex items-center gap-2">
                        <Hospital className="w-4 h-4 text-[#7cb983]" />
                        Clinical: 240 hours
                      </span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#FBFBEE] to-[#FBFBEE] rounded-xl p-6 border-l-4 border-[#7cb983]">
                    <h3 className="text-xl font-bold text-[#7cb983] mb-3">
                      Emergency and Trauma Nursing
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-700">
                      <span className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-[#7cb983]" />
                        Theory: 45 hours
                      </span>
                      <span className="flex items-center gap-2">
                        <Hospital className="w-4 h-4 text-[#7cb983]" />
                        Clinical: 180 hours
                      </span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#FBFBEE] to-[#FBFBEE] rounded-xl p-6 border-l-4 border-[#7cb983]">
                    <h3 className="text-xl font-bold text-[#7cb983] mb-3">
                      Perioperative Nursing
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-700">
                      <span className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-[#7cb983]" />
                        Theory: 45 hours
                      </span>
                      <span className="flex items-center gap-2">
                        <Hospital className="w-4 h-4 text-[#7cb983]" />
                        Clinical: 180 hours
                      </span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#FBFBEE] to-[#FBFBEE] rounded-xl p-6 border-l-4 border-[#7cb983]">
                    <h3 className="text-xl font-bold text-[#7cb983] mb-3">
                      Teaching Practicum
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-700">
                      <span className="flex items-center gap-2">
                        <School className="w-4 h-4 text-[#7cb983]" />
                        Classroom Teaching: 60 hours
                      </span>
                      <span className="flex items-center gap-2">
                        <Hospital className="w-4 h-4 text-[#7cb983]" />
                        Clinical Teaching: 90 hours
                      </span>
                    </div>
                  </div>
                </>
              )}

              {activeTab === "clinical-practicum" && (
                <>
                  <div className="bg-gradient-to-br from-[#FBFBEE] to-[#FBFBEE] rounded-xl p-6 border-l-4 border-[#7cb983]">
                    <h3 className="text-xl font-bold text-[#7cb983] mb-3">
                      Medical Units Rotation
                    </h3>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p className="flex items-center gap-2">
                        <Hospital className="w-4 h-4 text-[#7cb983]" />
                        General Medicine, Neurology, Cardiology
                      </p>
                      <p className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#7cb983]" />
                        360 hours
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#FBFBEE] to-[#FBFBEE] rounded-xl p-6 border-l-4 border-[#7cb983]">
                    <h3 className="text-xl font-bold text-[#7cb983] mb-3">
                      Surgical Units Rotation
                    </h3>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p className="flex items-center gap-2">
                        <Hospital className="w-4 h-4 text-[#7cb983]" />
                        General Surgery, Orthopedics, Urology
                      </p>
                      <p className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#7cb983]" />
                        360 hours
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#FBFBEE] to-[#FBFBEE] rounded-xl p-6 border-l-4 border-[#7cb983]">
                    <h3 className="text-xl font-bold text-[#7cb983] mb-3">
                      Intensive Care Unit (ICU)
                    </h3>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p className="flex items-center gap-2">
                        <Hospital className="w-4 h-4 text-[#7cb983]" />
                        MICU, SICU, CCU, Neuro ICU
                      </p>
                      <p className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#7cb983]" />
                        480 hours
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#FBFBEE] to-[#FBFBEE] rounded-xl p-6 border-l-4 border-[#7cb983]">
                    <h3 className="text-xl font-bold text-[#7cb983] mb-3">
                      Emergency & Casualty Department
                    </h3>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p className="flex items-center gap-2">
                        <Hospital className="w-4 h-4 text-[#7cb983]" />
                        Emergency Triage, Trauma Care
                      </p>
                      <p className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#7cb983]" />
                        240 hours
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#FBFBEE] to-[#FBFBEE] rounded-xl p-6 border-l-4 border-[#7cb983]">
                    <h3 className="text-xl font-bold text-[#7cb983] mb-3">
                      Operation Theatre Complex
                    </h3>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p className="flex items-center gap-2">
                        <Hospital className="w-4 h-4 text-[#7cb983]" />
                        Pre-op, Intra-op, Post-op Care
                      </p>
                      <p className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#7cb983]" />
                        240 hours
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#FBFBEE] to-[#FBFBEE] rounded-xl p-6 border-l-4 border-[#7cb983]">
                    <h3 className="text-xl font-bold text-[#7cb983] mb-3">
                      Specialty Units
                    </h3>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p className="flex items-center gap-2">
                        <Hospital className="w-4 h-4 text-[#7cb983]" />
                        Dialysis, Oncology, Burns Unit
                      </p>
                      <p className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#7cb983]" />
                        180 hours
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>

        {/* Clinical Training Excellence */}
        <section className="py-16 md:py-20 bg-[#FBFBEE]">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#7cb983] mb-4">
                Clinical Training Excellence
              </h2>
              <div className="w-24 h-1 bg-[#7cb983] mx-auto mb-6"></div>
              <p className="text-lg text-gray-600">
                Hands-on experience in diverse clinical settings with expert
                supervision
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image Placeholder */}
              <div className="bg-gradient-to-br from-[#7cb983] to-[#7cb983] rounded-2xl aspect-video flex items-center justify-center">
                <div className="text-center text-white">
                  <Hospital className="w-20 h-20 mx-auto mb-4" />
                  <p className="text-3xl font-bold">
                    Clinical Training Facilities
                  </p>
                </div>
              </div>

              {/* Clinical Areas */}
              <div>
                <h3 className="text-2xl font-bold text-[#7cb983] mb-8">
                  Specialized Clinical Areas
                </h3>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  Our learners receive comprehensive clinical exposure across
                  various specialty units, developing expertise in managing
                  complex patient conditions under the guidance of experienced
                  clinical mentors.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
                    <div className="bg-[#e8f5ea] rounded-lg p-2">
                      <Heart className="w-5 h-5 text-[#7cb983]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#7cb983] text-sm">
                        Cardiac Care Unit
                      </p>
                      <p className="text-xs text-gray-600">(CCU)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
                    <div className="bg-[#e8f5ea] rounded-lg p-2">
                      <Monitor className="w-5 h-5 text-[#7cb983]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#7cb983] text-sm">
                        Neurological ICU
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
                    <div className="bg-[#e8f5ea] rounded-lg p-2">
                      <Activity className="w-5 h-5 text-[#7cb983]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#7cb983] text-sm">
                        Emergency
                      </p>
                      <p className="text-xs text-gray-600">Department</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
                    <div className="bg-[#e8f5ea] rounded-lg p-2">
                      <FlaskConical className="w-5 h-5 text-[#7cb983]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#7cb983] text-sm">
                        Operation Theatre
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
                    <div className="bg-[#e8f5ea] rounded-lg p-2">
                      <FileText className="w-5 h-5 text-[#7cb983]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#7cb983] text-sm">
                        Renal Dialysis Unit
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
                    <div className="bg-[#e8f5ea] rounded-lg p-2">
                      <Award className="w-5 h-5 text-[#7cb983]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#7cb983] text-sm">
                        Oncology Unit
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
                    <div className="bg-[#e8f5ea] rounded-lg p-2">
                      <Activity className="w-5 h-5 text-[#7cb983]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#7cb983] text-sm">
                        Burns & Trauma Unit
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
                    <div className="bg-[#e8f5ea] rounded-lg p-2">
                      <Building2 className="w-5 h-5 text-[#7cb983]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#7cb983] text-sm">
                        Orthopedic Ward
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Career Opportunities */}
        <section className="py-16 md:py-20 bg-[#FBFBEE]">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#7cb983] mb-4">
                Career Opportunities
              </h2>
              <div className="w-24 h-1 bg-[#7cb983] mx-auto mb-6"></div>
              <p className="text-lg text-gray-600">
                Diverse career pathways await graduates of M.Sc Nursing in
                Medical Surgical Nursing
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Career Card 1 */}
              <div className="bg-gradient-to-br from-[#FBFBEE] to-[#FBFBEE] rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="bg-[#FBFBEE] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <BookOpen className="w-8 h-8 text-[#7cb983]" />
                </div>
                <h3 className="text-xl font-bold text-[#7cb983] mb-3">
                  Nursing Educator
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Teach and mentor nursing learners at colleges and
                  universities, shaping future healthcare professionals.
                </p>
              </div>

              {/* Career Card 2 */}
              <div className="bg-gradient-to-br from-[#FBFBEE] to-[#FBFBEE] rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="bg-[#FBFBEE] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-[#7cb983]" />
                </div>
                <h3 className="text-xl font-bold text-[#7cb983] mb-3">
                  Clinical Nurse Specialist
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Provide expert clinical care in specialized areas such as
                  critical care, cardiology, or oncology.
                </p>
              </div>

              {/* Career Card 3 */}
              <div className="bg-gradient-to-br from-[#FBFBEE] to-[#FBFBEE] rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="bg-[#FBFBEE] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Briefcase className="w-8 h-8 text-[#7cb983]" />
                </div>
                <h3 className="text-xl font-bold text-[#7cb983] mb-3">
                  Nursing Administrator
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Lead nursing departments and manage healthcare teams in
                  hospitals and healthcare organizations.
                </p>
              </div>

              {/* Career Card 4 */}
              <div className="bg-gradient-to-br from-[#FBFBEE] to-[#FBFBEE] rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="bg-[#FBFBEE] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Lightbulb className="w-8 h-8 text-[#7cb983]" />
                </div>
                <h3 className="text-xl font-bold text-[#7cb983] mb-3">
                  Nurse Researcher
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Conduct research to improve nursing practices and contribute
                  to evidence-based healthcare.
                </p>
              </div>

              {/* Career Card 5 */}
              <div className="bg-gradient-to-br from-[#FBFBEE] to-[#FBFBEE] rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="bg-[#FBFBEE] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Building2 className="w-8 h-8 text-[#7cb983]" />
                </div>
                <h3 className="text-xl font-bold text-[#7cb983] mb-3">
                  ICU/CCU Head
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Manage intensive care units and coordinate critical care
                  services in hospitals.
                </p>
              </div>

              {/* Career Card 6 */}
              <div className="bg-gradient-to-br from-[#FBFBEE] to-[#FBFBEE] rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="bg-[#FBFBEE] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <GraduationCap className="w-8 h-8 text-[#7cb983]" />
                </div>
                <h3 className="text-xl font-bold text-[#7cb983] mb-3">
                  Ph.D. Scholar
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Pursue doctoral studies and contribute to advanced nursing
                  research and academia.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* World-Class Facilities */}
        <section className="py-16 md:py-20 bg-[#FBFBEE]">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#7cb983] mb-4">
                World-Class Facilities
              </h2>
              <div className="w-24 h-1 bg-[#7cb983] mx-auto mb-6"></div>
              <p className="text-lg text-gray-600">
                State-of-the-art infrastructure supporting comprehensive nursing
                education
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Facility Card 1 */}
              <div className="bg-gradient-to-br from-[#006837] to-[#7cb983] text-white rounded-xl p-8 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold mb-3">
                  Simulation Laboratory
                </h3>
                <p className="text-gray-100 leading-relaxed">
                  High-fidelity manikins and simulation equipment for realistic
                  clinical scenario practice.
                </p>
              </div>

              {/* Facility Card 2 */}
              <div className="bg-gradient-to-br from-[#7cb983] to-[#7cb983] text-white rounded-xl p-8 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold mb-3">Clinical Skills Lab</h3>
                <p className="text-gray-100 leading-relaxed">
                  Dedicated space for practicing advanced nursing procedures and
                  patient care techniques.
                </p>
              </div>

              {/* Facility Card 3 */}
              <div className="bg-gradient-to-br from-[#6ba872] to-[#7cb983] text-white rounded-xl p-8 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold mb-3">Digital Library</h3>
                <p className="text-gray-100 leading-relaxed">
                  Extensive collection of nursing journals, e-books, and
                  research databases.
                </p>
              </div>

              {/* Facility Card 4 */}
              <div className="bg-gradient-to-br from-[#006837] to-[#7cb983] text-white rounded-xl p-8 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold mb-3">Research Center</h3>
                <p className="text-gray-100 leading-relaxed">
                  Dedicated facilities supporting nursing research and
                  dissertation work.
                </p>
              </div>

              {/* Facility Card 5 */}
              <div className="bg-gradient-to-br from-[#7cb983] to-[#7cb983] text-white rounded-xl p-8 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold mb-3">Computer Laboratory</h3>
                <p className="text-gray-100 leading-relaxed">
                  Modern computer facilities with nursing software and
                  e-learning resources.
                </p>
              </div>

              {/* Facility Card 6 */}
              <div className="bg-gradient-to-br from-[#6ba872] to-[#7cb983] text-white rounded-xl p-8 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold mb-3">Conference Hall</h3>
                <p className="text-gray-100 leading-relaxed">
                  Well-equipped auditorium for seminars, workshops, and academic
                  presentations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Admission Process */}
        <section className="py-16 md:py-20 bg-[#FBFBEE]">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#7cb983] mb-4">
                Admission Process
              </h2>
              <div className="w-24 h-1 bg-[#7cb983] mx-auto mb-6"></div>
              <p className="text-lg text-gray-600">
                Simple steps to begin your journey towards advanced nursing
                education
              </p>
            </div>

            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-x-16 gap-y-8 relative">
              {/* Vertical Timeline Line - Center */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 -translate-x-1/2"></div>

              {/* Step 1 - Left */}
              <div className="relative">
                <div className="absolute -right-8 top-0 w-12 h-12 rounded-full bg-[#7cb983] text-white flex items-center justify-center font-bold text-lg z-10">
                  1
                </div>
                <div className="pr-12">
                  <h3 className="text-2xl font-bold text-[#7cb983] mb-3">
                    Online Application
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Submit your application online through our admission portal
                    with required documents and application fee.
                  </p>
                </div>
              </div>

              {/* Step 2 - Right */}
              <div className="relative">
                <div className="absolute -left-8 top-0 w-12 h-12 rounded-full bg-[#7cb983] text-white flex items-center justify-center font-bold text-lg z-10">
                  2
                </div>
                <div className="pl-12">
                  <h3 className="text-2xl font-bold text-[#7cb983] mb-3">
                    Document Verification
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our admission team verifies your academic credentials,
                    nursing registration, and experience certificates.
                  </p>
                </div>
              </div>

              {/* Step 3 - Left */}
              <div className="relative">
                <div className="absolute -right-8 top-0 w-12 h-12 rounded-full bg-[#7cb983] text-white flex items-center justify-center font-bold text-lg z-10">
                  3
                </div>
                <div className="pr-12">
                  <h3 className="text-2xl font-bold text-[#7cb983] mb-3">
                    Entrance Examination
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Appear for the university entrance examination covering
                    nursing fundamentals and specialization topics.
                  </p>
                </div>
              </div>

              {/* Step 4 - Right */}
              <div className="relative">
                <div className="absolute -left-8 top-0 w-12 h-12 rounded-full bg-[#7cb983] text-white flex items-center justify-center font-bold text-lg z-10">
                  4
                </div>
                <div className="pl-12">
                  <h3 className="text-2xl font-bold text-[#7cb983] mb-3">
                    Personal Interview
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Shortlisted candidates attend a personal interview to
                    assess aptitude and motivation for postgraduate study.
                  </p>
                </div>
              </div>

              {/* Step 5 - Left */}
              <div className="relative">
                <div className="absolute -right-8 top-0 w-12 h-12 rounded-full bg-[#7cb983] text-white flex items-center justify-center font-bold text-lg z-10">
                  5
                </div>
                <div className="pr-12">
                  <h3 className="text-2xl font-bold text-[#7cb983] mb-3">
                    Merit List Publication
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Final merit list is published based on entrance
                    examination score, academic performance, and interview
                    assessment.
                  </p>
                </div>
              </div>

              {/* Step 6 - Right */}
              <div className="relative">
                <div className="absolute -left-8 top-0 w-12 h-12 rounded-full bg-[#7cb983] text-white flex items-center justify-center font-bold text-lg z-10">
                  6
                </div>
                <div className="pl-12">
                  <h3 className="text-2xl font-bold text-[#7cb983] mb-3">
                    Fee Payment & Enrollment
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Selected candidates complete fee payment and enrollment
                    formalities to confirm admission.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fee Structure */}
        <section className="py-16 md:py-20 bg-[#FBFBEE]">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#7cb983] mb-4">
                Fee Structure
              </h2>
              <div className="w-24 h-1 bg-[#7cb983] mx-auto mb-6"></div>
              <p className="text-lg text-gray-600">
                Transparent and affordable fee structure for quality nursing
                education
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gradient-to-r from-[#006837] to-[#7cb983] text-white">
                      <th className="px-6 py-4 text-left font-semibold text-lg">
                        Fee Component
                      </th>
                      <th className="px-6 py-4 text-left font-semibold text-lg">
                        First Year
                      </th>
                      <th className="px-6 py-4 text-left font-semibold text-lg">
                        Second Year
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="px-6 py-4 text-gray-700">Tuition Fee</td>
                      <td className="px-6 py-4 font-semibold text-[#7cb983]">
                        ₹85,000
                      </td>
                      <td className="px-6 py-4 font-semibold text-[#7cb983]">
                        ₹85,000
                      </td>
                    </tr>
                    <tr className="bg-[#FBFBEE] border-b border-gray-200">
                      <td className="px-6 py-4 text-gray-700">
                        University Fee
                      </td>
                      <td className="px-6 py-4 font-semibold text-[#7cb983]">
                        ₹15,000
                      </td>
                      <td className="px-6 py-4 font-semibold text-[#7cb983]">
                        ₹15,000
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="px-6 py-4 text-gray-700">
                        Laboratory & Library Fee
                      </td>
                      <td className="px-6 py-4 font-semibold text-[#7cb983]">
                        ₹10,000
                      </td>
                      <td className="px-6 py-4 font-semibold text-[#7cb983]">
                        ₹10,000
                      </td>
                    </tr>
                    <tr className="bg-[#FBFBEE] border-b border-gray-200">
                      <td className="px-6 py-4 text-gray-700">
                        Clinical Training Fee
                      </td>
                      <td className="px-6 py-4 font-semibold text-[#7cb983]">
                        ₹15,000
                      </td>
                      <td className="px-6 py-4 font-semibold text-[#7cb983]">
                        ₹15,000
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="px-6 py-4 text-gray-700">
                        Development Fee
                      </td>
                      <td className="px-6 py-4 font-semibold text-[#7cb983]">
                        ₹5,000
                      </td>
                      <td className="px-6 py-4 font-semibold text-[#7cb983]">
                        ₹5,000
                      </td>
                    </tr>
                    <tr className="bg-[#7cb983]/10 border-b-2 border-[#7cb983]">
                      <td className="px-6 py-4 font-bold text-[#002309]">
                        Total Annual Fee
                      </td>
                      <td className="px-6 py-4 font-bold text-[#7cb983] text-lg">
                        ₹1,30,000
                      </td>
                      <td className="px-6 py-4 font-bold text-[#7cb983] text-lg">
                        ₹1,30,000
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-8 bg-[#FBFBEE] border-l-4 border-[#7cb983] p-6 rounded-r-lg">
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold">Note:</span> Fee structure is
                  indicative and subject to revision. Additional charges may
                  apply for hostel accommodation, examination fees, and other
                  miscellaneous expenses. Scholarships and educational loans are
                  available for eligible learners. Contact the admission office
                  for the latest fee details and payment options.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-20 bg-[#FBFBEE]">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#7cb983] mb-4">
                Frequently Asked Questions
              </h2>
              <div className="w-24 h-1 bg-[#7cb983] mx-auto mb-6"></div>
              <p className="text-lg text-gray-600">
                Find answers to common queries about our M.Sc Nursing program
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {/* FAQ 1 */}
              <details className="bg-white rounded-xl shadow-sm group">
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-[#7cb983] pr-8">
                    What is the duration of M.Sc Nursing in Medical Surgical
                    Nursing?
                  </h3>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#7cb983] text-white flex items-center justify-center group-open:rotate-180 transition-transform">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </summary>
                <div className="px-6 pb-5">
                  <p className="text-gray-700 leading-relaxed">
                    M.Sc Nursing in Medical Surgical Nursing is a 2-year
                    full-time postgraduate program divided into 4 semesters. The
                    first year focuses on core nursing subjects, research
                    methodology, and foundational clinical specialty courses.
                    The second year emphasizes advanced clinical specialization,
                    teaching practicum, and dissertation/thesis work.
                  </p>
                </div>
              </details>

              {/* FAQ 2 */}
              <details className="bg-white rounded-xl shadow-sm group">
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-[#7cb983] pr-8">
                    What are the eligibility criteria for M.Sc Nursing
                    admission?
                  </h3>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#7cb983] text-white flex items-center justify-center group-open:rotate-180 transition-transform">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </summary>
                <div className="px-6 pb-5">
                  <p className="text-gray-700 leading-relaxed">
                    Candidates must have completed B.Sc Nursing (4-year course)
                    or Post Basic B.Sc Nursing with a minimum of 55% aggregate
                    marks from a recognized university. Additionally, applicants
                    must possess valid registration with the State Nursing
                    Council as RN/RM and have at least 1 year of clinical work
                    experience after completing their basic nursing degree.
                  </p>
                </div>
              </details>

              {/* FAQ 3 */}
              <details className="bg-white rounded-xl shadow-sm group">
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-[#7cb983] pr-8">
                    What career opportunities are available after completing
                    M.Sc Nursing?
                  </h3>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#7cb983] text-white flex items-center justify-center group-open:rotate-180 transition-transform">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </summary>
                <div className="px-6 pb-5">
                  <p className="text-gray-700 leading-relaxed">
                    Graduates can pursue diverse careers including Nursing
                    Educator/Lecturer at nursing colleges, Clinical Nurse
                    Specialist in hospitals, Nurse Administrator/Nursing
                    Superintendent, Research Associate at healthcare
                    organizations, ICU/CCU Unit Head, Quality Assurance Officer,
                    and can also pursue Ph.D. in Nursing for academic and
                    research careers.
                  </p>
                </div>
              </details>

              {/* FAQ 4 */}
              <details className="bg-white rounded-xl shadow-sm group">
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-[#7cb983] pr-8">
                    Is the M.Sc Nursing program at JKKN approved by INC?
                  </h3>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#7cb983] text-white flex items-center justify-center group-open:rotate-180 transition-transform">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </summary>
                <div className="px-6 pb-5">
                  <p className="text-gray-700 leading-relaxed">
                    Yes, the M.Sc Nursing program at JKKN College of Nursing is
                    approved by the Indian Nursing Council (INC) and is
                    affiliated to The Tamil Nadu Dr. M.G.R. Medical University,
                    Chennai. The college is also recognized by the Tamil Nadu
                    Nurses and Midwives Council, ensuring that the degree is
                    valid for employment and higher education across India.
                  </p>
                </div>
              </details>

              {/* FAQ 5 */}
              <details className="bg-white rounded-xl shadow-sm group">
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-[#7cb983] pr-8">
                    What specialization areas are covered in Medical Surgical
                    Nursing?
                  </h3>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#7cb983] text-white flex items-center justify-center group-open:rotate-180 transition-transform">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </summary>
                <div className="px-6 pb-5">
                  <p className="text-gray-700 leading-relaxed">
                    Medical Surgical Nursing specialization encompasses a wide
                    range of clinical areas including critical care nursing,
                    emergency and trauma nursing, perioperative nursing, cardiac
                    nursing, neurological nursing, oncology nursing, orthopedic
                    nursing, nephrology nursing, and gastroenterological
                    nursing. Learners gain comprehensive expertise in managing
                    complex patient conditions across multiple clinical
                    settings.
                  </p>
                </div>
              </details>

              {/* FAQ 6 */}
              <details className="bg-white rounded-xl shadow-sm group">
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-[#7cb983] pr-8">
                    What is the selection process for M.Sc Nursing admission?
                  </h3>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#7cb983] text-white flex items-center justify-center group-open:rotate-180 transition-transform">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </summary>
                <div className="px-6 pb-5">
                  <p className="text-gray-700 leading-relaxed">
                    The selection process involves multiple stages: submission
                    of online application with required documents, verification
                    of academic credentials and professional registration,
                    university entrance examination, and personal interview for
                    shortlisted candidates. The final merit list is prepared
                    based on a weighted combination of entrance examination
                    score, academic performance in qualifying degree, and
                    interview assessment.
                  </p>
                </div>
              </details>

              {/* FAQ 7 */}
              <details className="bg-white rounded-xl shadow-sm group">
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-[#7cb983] pr-8">
                    Are scholarships available for M.Sc Nursing learners?
                  </h3>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#7cb983] text-white flex items-center justify-center group-open:rotate-180 transition-transform">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </summary>
                <div className="px-6 pb-5">
                  <p className="text-gray-700 leading-relaxed">
                    Yes, JKKN College of Nursing offers various scholarship
                    opportunities for deserving learners based on academic
                    merit, financial need, and other criteria. Additionally,
                    learners may be eligible for government scholarships, SC/ST
                    scholarships, and educational loans from nationalized banks.
                    Our admission office provides guidance on available
                    financial assistance options.
                  </p>
                </div>
              </details>

              {/* FAQ 8 */}
              <details className="bg-white rounded-xl shadow-sm group">
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-[#7cb983] pr-8">
                    What clinical exposure will learners receive during the
                    program?
                  </h3>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#7cb983] text-white flex items-center justify-center group-open:rotate-180 transition-transform">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </summary>
                <div className="px-6 pb-5">
                  <p className="text-gray-700 leading-relaxed">
                    Learners receive over 1000 hours of supervised clinical
                    practice in affiliated multispecialty hospitals. Clinical
                    rotations include intensive care units (MICU, SICU, CCU,
                    Neuro ICU), emergency departments, operation theatres,
                    medical and surgical wards, dialysis units, oncology units,
                    and specialty clinics. This extensive clinical exposure
                    ensures that graduates are well-prepared for advanced
                    clinical practice.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-[#7cb983]">
          <div className="container-custom text-center text-white">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Begin Your Advanced Nursing Journey
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              Take the next step in your nursing career. Apply now for the
              2025-26 academic session and join our community of nursing
              professionals dedicated to excellence in healthcare.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button className="bg-white text-[#7cb983] hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-colors flex items-center gap-2">
                Apply Online
                <span className="text-xl">→</span>
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-[#7cb983] px-8 py-4 rounded-full font-semibold text-lg transition-colors">
                Download Brochure
              </button>
            </div>

            <div className="border-t border-white/30 pt-8">
              <p className="text-lg mb-4">
                Have questions? Contact our admission team:
              </p>
              <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                <a
                  href="tel:+914288234567"
                  className="flex items-center gap-2 hover:underline"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  +91 4288 234567
                </a>
                <a
                  href="mailto:nursing.admissions@jkkn.ac.in"
                  className="flex items-center gap-2 hover:underline"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  nursing.admissions@jkkn.ac.in
                </a>
                <a href="#" className="flex items-center gap-2 hover:underline">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Explore Other Programs */}
        <section className="py-16 md:py-20 bg-[#FBFBEE]">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#7cb983] mb-4">
                Explore Other Nursing Programs
              </h2>
              <div className="w-24 h-1 bg-[#7cb983] mx-auto mb-6"></div>
              <p className="text-lg text-gray-600">
                Discover more nursing education opportunities at JKKN College of
                Nursing
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Program 1 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-[#006837] to-[#7cb983] h-48 flex items-center justify-center">
                  <h3 className="text-3xl font-bold text-white">B.Sc Nursing</h3>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-[#7cb983] mb-3">
                    B.Sc Nursing
                  </h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    4-year undergraduate program preparing nurses for
                    professional healthcare practice.
                  </p>
                  <a
                    href="/bsc-nursing"
                    className="text-[#7cb983] font-semibold flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    Learn More
                    <span>→</span>
                  </a>
                </div>
              </div>

              {/* Program 2 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-[#7cb983] to-[#7cb983] h-48 flex items-center justify-center">
                  <h3 className="text-3xl font-bold text-white">
                    M.Sc OBG Nursing
                  </h3>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-[#7cb983] mb-3">
                    M.Sc Nursing - OBG
                  </h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Postgraduate specialization in Obstetrics and Gynecological
                    Nursing practice.
                  </p>
                  <a
                    href="/course-msc-obstetrics-gynecological"
                    className="text-[#7cb983] font-semibold flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    Learn More
                    <span>→</span>
                  </a>
                </div>
              </div>

              {/* Program 3 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-[#6ba872] to-[#7cb983] h-48 flex items-center justify-center">
                  <h3 className="text-3xl font-bold text-white">
                    M.Sc Pediatric Nursing
                  </h3>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-[#7cb983] mb-3">
                    M.Sc Nursing - Pediatrics
                  </h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Postgraduate specialization in Child Health Nursing and
                    pediatric care.
                  </p>
                  <a
                    href="/course-msc-child-health"
                    className="text-[#7cb983] font-semibold flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    Learn More
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
