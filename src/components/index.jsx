import React, { useState, useEffect } from "react";
import {
  ArrowUpRight,
  Menu,
  X,
  Mail,
  ShieldCheck,
  Smartphone,
  Settings,
  HelpingHand,
} from "lucide-react";
import Reveal from "./reveal";
import ClickCareFooter from "./ClickCareFooter";
import emailjs from "@emailjs/browser";

const ClickCareHero = () => {
  const [email, setEmail] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  useEffect(() => {
    emailjs.init("4Gd6anwA9I4OhPkDU");
  }, []);

  const containerPadding = "px-4 sm:px-8 md:px-20";

  const openModal = (serviceName) => {
    setSelectedService(serviceName);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService("");
  };

  return (
    <>
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animation-delay-6000 { animation-delay: 6s; }
      `}</style>

      <div
        className="min-h-screen w-full relative overflow-hidden -mb-20 z-10"
        style={{
          borderBottomLeftRadius: "80px",
          borderBottomRightRadius: "80px",
          background:
            "linear-gradient(135deg, #F6F1F1 0%, #AFD3E2 50%, #19A7CE 100%)",
        }}
      >
        <div className="absolute inset-0">
          <div
            className="absolute w-96 h-96 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob"
            style={{
              background: "linear-gradient(45deg, #AFD3E2, #19A7CE)",
              top: "10%",
              left: "10%",
            }}
          ></div>
          <div
            className="absolute w-96 h-96 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-2000"
            style={{
              background: "linear-gradient(45deg, #19A7CE, #146C94)",
              top: "50%",
              right: "10%",
            }}
          ></div>
          <div
            className="absolute w-96 h-96 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-4000"
            style={{
              background: "linear-gradient(45deg, #F6F1F1, #AFD3E2)",
              bottom: "10%",
              left: "30%",
            }}
          ></div>
        </div>

        {/* ✅ NAVBAR SECTION */}
        <nav className={`relative z-10 ${containerPadding} py-5`}>
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img
                src="/assets/clickcare_logo.png"
                alt="ClickCare Logo"
                className="w-10 h-10 rounded-full shadow-lg object-cover"
              />
              <span
                className="text-2xl drop-shadow-sm"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  color: "#146C94",
                }}
              >
                <span className="font-normal">Click</span>
                <span className="font-bold">Care</span>
              </span>
            </div>

            {/* ✅ Desktop nav hidden on small */}
            <div
              className="hidden md:flex items-center space-x-8"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              <a
                href="#problems"
                className="font-bold text-base drop-shadow-sm transition-colors duration-200"
                style={{ color: "#146C94" }}
              >
                Challenges We Solve
              </a>
              <a
                href="#services"
                className="font-bold text-base drop-shadow-sm transition-colors duration-200"
                style={{ color: "#146C94" }}
              >
                Our Services
              </a>
              <a
                href="#faqs"
                className="font-bold text-base drop-shadow-sm transition-colors duration-200"
                style={{ color: "#146C94" }}
              >
                FAQs
              </a>
              <a
                href="#review"
                className="font-bold text-base drop-shadow-sm transition-colors duration-200"
                style={{ color: "#146C94" }}
              >
                Reviews
              </a>
            </div>

            {/* ✅ Phone number only visible on md+ */}
            <div className="hidden md:block">
              <div
                className="rounded-full px-6 py-4 shadow-xl cursor-pointer transition-all duration-200"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  backgroundColor: "rgba(175, 211, 226, 0.3)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(175, 211, 226, 0.5)",
                }}
              >
                <span
                  className="font-bold text-sm drop-shadow-sm"
                  style={{ color: "#146C94" }}
                >
                  0956 401 6766
                </span>
              </div>
            </div>

            {/* ✅ Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg shadow-lg"
              style={{
                backgroundColor: "rgba(255, 255, 255, 1)",
                // backdropFilter: "blur(10px)",
                border: "1px solid rgba(175, 211, 226, 0.5)",
              }}
            >
              {isMenuOpen ? (
                <X size={20} style={{ color: "#146C94" }} />
              ) : (
                <Menu size={20} style={{ color: "#146C94" }} />
              )}
            </button>
          </div>

          {/* ✅ Mobile dropdown menu */}
          {isMenuOpen && (
            <div
              className="md:hidden absolute top-full left-0 right-0 mt-2 mx-6 rounded-xl shadow-2xl"
              style={{
                fontFamily: "Montserrat, sans-serif",
                backgroundColor: "rgba(255, 255, 255, 1)",
                // backdropFilter: "blur(20px)",
                border: "1px solid rgba(175, 211, 226, 0.3)",
              }}
            >
              <div className="p-6 space-y-4 text-center">
                <a href="#problems" className="block font-medium text-sm">
                  Challenges We Solve
                </a>
                <a href="#services" className="block font-medium text-sm">
                  Our Services
                </a>
                <a href="#faqs" className="block font-medium text-sm">
                  FAQs
                </a>
                <a href="#review" className="block font-medium text-sm">
                  Reviews
                </a>
                <div className="pt-4 border-t border-[#AFD3E2]/30">
                  <span className="font-semibold text-sm">0956 401 6766</span>
                </div>
              </div>
            </div>
          )}
        </nav>

        {/* ✅ HERO SECTION */}
        <main className={`relative z-10 ${containerPadding} py-16 md:py-24`}>
          <Reveal>
            <div className="max-w-4xl text-left">
              {/* ✅ Responsive fix: smaller title on phones */}
              <div className="mb-8">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-regular leading-tight mb-4">
                  <span
                    className="block mb-2 drop-shadow-2xl"
                    style={{
                      color: "#146C94",
                      fontFamily: "Unbounded, cursive",
                    }}
                  >
                    Every Click
                  </span>
                  <span
                    className="block drop-shadow-2xl"
                    style={{
                      color: "#19A7CE",
                      fontFamily: "Unbounded, cursive",
                    }}
                  >
                    Deserves Care
                  </span>
                </h1>
              </div>

              <p
                className="text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mb-12 drop-shadow-lg"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  color: "#146C94",
                }}
              >
                ClickCare empowers senior citizens to confidently use
                smartphones, apps, and online tools — keeping them connected,
                safe, and independent.
              </p>
              {/* ✅ CTA Section */}
              <div className="max-w-4xl" style={{ fontFamily: "Montserrat, sans-serif" }}>
                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  {/* Email Input */}
                  <div className="flex-1 w-full">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 z-10" style={{ color: "#146C94" }} />
                      </div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email to get started"
                        className="w-full pl-12 pr-6 py-3 sm:py-4 text-sm sm:text-base outline-none rounded-full shadow-xl"
                        style={{
                          backgroundColor: "rgba(246, 241, 241, 0.8)",
                          border: "1px solid rgba(175, 211, 226, 0.5)",
                          color: "#146C94",
                        }}
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex items-center gap-4 w-full sm:w-auto">
                    <button
                      className="font-bold px-7 py-5 sm:px-8 sm:py-5 rounded-full text-sm flex items-center gap-2 transition-all duration-300 shadow-xl animate-pulseGlow w-full sm:w-auto justify-center"
                      style={{
                        backgroundColor: "#F6F1F1",
                        color: "#146C94",
                        fontFamily: "Montserrat, sans-serif",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background =
                          "linear-gradient(to right, #19A7CE, #AFD3E2)";
                        e.target.style.transform = "translateY(-3px) scale(1.05)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = "#F6F1F1";
                        e.target.style.transform = "translateY(0)";
                      }}
                      onClick={() => setIsModalOpen(true)}
                    >
                      BOOK A SESSION
                      <ArrowUpRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </main>
      </div>

      {/* ✅ Problems Section */}
      <section
        id="problems"
        className="min-h-screen relative overflow-hidden py-12 sm:py-16 md:py-24 px-4 sm:px-8 md:px-12"
        style={{ backgroundColor: "#F6F1F1" }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-16">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 drop-shadow-lg mt-12 sm:mt-16"
              style={{
                fontFamily: "Unbounded, cursive",
                color: "#146C94",
              }}
            >
              Are You Running Into These Problems?
            </h2>
            <p
              className="text-base sm:text-lg max-w-2xl mx-auto mb-8 drop-shadow-sm"
              style={{
                fontFamily: "Montserrat, sans-serif",
                color: "#146C94",
              }}
            >
              Don't worry, you're not alone. Here are common challenges we help solve every day.
            </p>
          </div>

          {/* ✅ Responsive fix: grid adjusts for mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" style={{ fontFamily: "Montserrat, sans-serif" }}>
            {[
              {
                number: "01",
                title: "Struggling to use your smartphone?",
                desc: "Learn step-by-step how to navigate apps, settings, and features with personalized guidance.",
              },
              {
                number: "02",
                title: "Can't connect with family online?",
                desc: "Discover how to use Messenger, Zoom, and other tools for meaningful video calls.",
              },
              {
                number: "03",
                title: "Worried about online scams?",
                desc: "Get expert tips to protect yourself, secure accounts, and browse safely online.",
              },
              {
                number: "04",
                title: "Difficulty making online payments?",
                desc: "Get hands-on help with secure online transactions and payment apps.",
              },
              {
                number: "05",
                title: "Trouble updating apps?",
                desc: "Learn how to keep your apps up-to-date and running smoothly with confidence.",
              },
              {
                number: "06",
                title: "Confused by privacy settings?",
                desc: "Understand and manage privacy settings to keep your personal data safe.",
              },
            ].map((problem, index) => (
              <div
                key={index}
                className="rounded-2xl shadow-xl px-6 sm:px-8 py-8 sm:py-10 flex flex-col justify-between transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: "rgba(175, 211, 226, 0.3)",
                  border: "1px solid rgba(175, 211, 226, 0.5)",
                }}
              >
                <div className="flex justify-between mb-3">
                  <div
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center font-bold text-base"
                    style={{
                      backgroundColor: "#19A7CE",
                      color: "#F6F1F1",
                    }}
                  >
                    {problem.number}
                  </div>
                </div>
                <h3
                  className="text-base sm:text-lg font-bold mb-2"
                  style={{ color: "#146C94" }}
                >
                  {problem.title}
                </h3>
                <p
                  className="text-sm sm:text-base mb-6"
                  style={{ color: "#146C94" }}
                >
                  {problem.desc}
                </p>
                <button
                  className="font-bold px-6 py-3 sm:px-7 sm:py-3 rounded-full text-sm flex items-center gap-2 transition-all duration-300 shadow-xl animate-pulseGlow w-full sm:w-auto justify-center"
                  style={{
                    backgroundColor: "#F6F1F1",
                    color: "#146C94",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background =
                      "linear-gradient(to right, #19A7CE, #AFD3E2)";
                    e.target.style.transform = "translateY(-3px) scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "#F6F1F1";
                    e.target.style.transform = "translateY(0)";
                  }}
                  onClick={() => setIsModalOpen(true)}
                >
                  BOOK A SESSION
                  <ArrowUpRight size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Services Section */}
      <section
        id="services"
        className="min-h-screen relative overflow-hidden py-12 sm:py-16 md:py-24 px-4 sm:px-8 md:px-12 -mb-20 z-10"
        style={{
          backgroundColor: "#F6F1F1",
          borderBottomLeftRadius: "80px",
          borderBottomRightRadius: "80px",
        }}
      >
        <div className="max-w-screen-2xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2
              className="text-2xl sm:text-4xl lg:text-6xl uppercase tracking-wide"
              style={{ fontFamily: "Unbounded, cursive", color: "#AFD3E2" }}
            >
              WHAT WE CAN DO FOR YOU
            </h2>
          </div>

          {/* ✅ Each service item keeps original color */}
          <div
            className="rounded-3xl overflow-hidden shadow-lg divide-y"
            style={{ borderColor: "#AFD3E2" }}
          >
            {[
              {
                icon: <Smartphone className="w-8 h-8 text-[#F6F1F1]" />,
                title: "One-on-One Smartphone Lessons",
                desc: "Personalized guidance on using phones, apps, and features with patient, step-by-step instruction.",
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-[#F6F1F1]" />,
                title: "Online Safety Training",
                desc: "Learn how to avoid scams, protect accounts, and browse the internet wisely with confidence.",
              },
              {
                icon: <Settings className="w-8 h-8 text-[#F6F1F1]" />,
                title: "App Assistance & Setup",
                desc: "Get hands-on help with GCash, Facebook, Zoom, and other essential apps for daily use.",
              },
              {
                icon: <HelpingHand className="w-8 h-8 text-[#F6F1F1]" />,
                title: "Patient, Friendly Support",
                desc: "Sessions are paced slowly and explained clearly — no tech jargon, just caring guidance.",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between px-6 sm:px-8 py-8 sm:py-12"
                style={{ backgroundColor: "#146C94" }}
              >
                <div className="flex items-start sm:items-center gap-4 flex-1">
                  {service.icon}
                  <div>
                    <h3
                      className="text-lg sm:text-2xl md:text-3xl font-bold mb-3 text-[#F6F1F1]"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="text-sm sm:text-base md:text-lg text-[#AFD3E2]"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      {service.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* ✅ Free Consultation card */}
            <div
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-6 sm:px-8 py-8 sm:py-12"
              style={{ backgroundColor: "#19A7CE" }}
            >
              <div className="flex-1 mb-4 sm:mb-0" style={{ fontFamily: "Montserrat, sans-serif" }}>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F6F1F1]">
                  Free Consultation
                </h3>
                <p className="text-sm sm:text-base text-[#F6F1F1]">
                  Start your digital journey with a complimentary session
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                <button
  className="font-bold px-7 py-5 sm:px-8 sm:py-5 rounded-full text-sm flex items-center gap-2 transition-all duration-300 shadow-xl animate-pulseGlow w-full sm:w-auto justify-center"
                  style={{
                    backgroundColor: "#F6F1F1",
                    color: "#146C94",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background =
                      "linear-gradient(to right, #19A7CE, #AFD3E2)";
                    e.target.style.transform = "translateY(-3px) scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "#F6F1F1";
                    e.target.style.transform = "translateY(0)";
                  }}
                  onClick={() => setIsModalOpen(true)}
                >
                  BOOK A SESSION
                  <ArrowUpRight size={18} />
                </button>
                <span className="italic text-base line-through text-[#F6F1F1] opacity-90">
                  worth ₱200
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Understanding Section */}
      <section
        id="about"
        className="relative overflow-hidden py-16 sm:py-20 md:py-24 px-4 sm:px-8"
        style={{
          background:
            "linear-gradient(135deg, #146C94 0%, #19A7CE 50%, #AFD3E2 100%)",
        }}
      >
        {/* Background blobs preserved */}
        <div className="absolute inset-0">
          <div
            className="absolute w-64 h-64 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"
            style={{
              background: "linear-gradient(45deg, #F6F1F1, #AFD3E2)",
              top: "20%",
              left: "10%",
            }}
          ></div>
          <div
            className="absolute w-80 h-80 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"
            style={{
              background: "linear-gradient(45deg, #AFD3E2, #19A7CE)",
              bottom: "20%",
              right: "10%",
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* ✅ Image Section */}
          <div className="lg:w-1/2 flex justify-center">
            <div
              className="relative w-full max-w-sm sm:max-w-md h-auto rounded-3xl flex items-center justify-center shadow-2xl animate-float"
              style={{
                backgroundColor: "rgba(246,241,241,0.15)",
                border: "2px solid rgba(246,241,241,0.2)",
              }}
            >
              <img
                src="/assets/4627185.jpg"
                alt="Illustration"
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>

          {/* ✅ Text Section */}
          <div className="lg:w-1/2 text-center lg:text-left px-4 sm:px-8">
            <div
              className="p-6 sm:p-8 rounded-3xl shadow-2xl"
              style={{
                backgroundColor: "rgba(246,241,241,0.15)",
                border: "2px solid rgba(246,241,241,0.2)",
              }}
            >
              <h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold leading-tight mb-6"
                style={{
                  fontFamily: "Unbounded, cursive",
                  color: "#F6F1F1",
                }}
              >
                We <span className="text-[#146C94]">understand</span> that
                learning technology can be <span>overwhelming</span>.
              </h2>
              <div className="w-16 h-1 mb-6 bg-[#AFD3E2] mx-auto lg:mx-0"></div>
              <p
                className="text-base sm:text-lg md:text-xl text-[#F6F1F1]/90 mb-8"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                That's why we use simple language, visual guides, and
                hands-on practice — all tailored to your pace and comfort level.
              </p>

              <div className="flex justify-center lg:justify-start">
                <button
                  className="font-bold px-6 py-3 sm:px-7 sm:py-3 rounded-full text-sm flex items-center gap-2 transition-all duration-300 shadow-xl animate-pulseGlow w-full sm:w-auto justify-center"
                  style={{
                    backgroundColor: "#F6F1F1",
                    color: "#146C94",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background =
                      "linear-gradient(to right, #19A7CE, #AFD3E2)";
                    e.target.style.transform = "translateY(-3px) scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "#F6F1F1";
                    e.target.style.transform = "translateY(0)";
                  }}
                  onClick={() => setIsModalOpen(true)}
                >
                  BOOK A SESSION
                  <ArrowUpRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Testimonials Section */}
      <section
        id="review"
        className="relative overflow-hidden py-12 sm:py-16 md:py-24 px-4 sm:px-8 -mt-18"
        style={{
          background:
            "linear-gradient(190deg, #AFD3E2 20%, #F6F1F1 50%, #F6F1F1 100%)",
          borderTopLeftRadius: "80px",
          borderTopRightRadius: "80px",
        }}
      >
        <div className="max-w-7xl mx-auto relative z-10 text-center mb-10 sm:mb-16">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg"
            style={{
              fontFamily: "Unbounded, cursive",
              color: "#146C94",
            }}
          >
            What Our Customers Say
          </h2>
          <p
            className="text-base sm:text-lg max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "Montserrat, sans-serif", color: "#146C94" }}
          >
            Real stories from seniors who've transformed their digital experience
            with ClickCare's patient guidance and personalized support.
          </p>
        </div>

        {/* ✅ Testimonials Carousel kept as-is */}
        <TestimonialsCarousel />

        {/* ✅ FAQs Section */}
        <section
          id="faqs"
          className="relative overflow-hidden py-12 sm:py-16 md:py-20 px-4 sm:px-8 mt-10 sm:mt-16 bg-[#F6F1F1] rounded-[40px]"
        >
          <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto gap-10 md:gap-12">
            {/* Left Column */}
            <div className="md:w-1/2">
              <h2
                className="text-3xl sm:text-4xl md:text-5xl mb-6"
                style={{
                  fontFamily: "Unbounded, cursive",
                  color: "#146C94",
                }}
              >
                Frequently Asked Questions
              </h2>
              <div
                className="mt-6 sm:mt-10 text-base sm:text-lg"
                style={{ fontFamily: "Montserrat, sans-serif", color: "#146C94" }}
              >
                Do you have any more questions?
              </div>
              <button
                className="font-bold px-7 py-5 sm:px-8 sm:py-5 mt-4 rounded-full text-sm flex items-center gap-3 transition-all duration-300 shadow-xl animate-pulseGlow w-full sm:w-auto justify-center"
                style={{
                  backgroundColor: "#F6F1F1",
                  color: "#146C94",
                  fontFamily: "Montserrat, sans-serif",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background =
                    "linear-gradient(to right, #19A7CE, #AFD3E2)";
                  e.target.style.transform = "translateY(-3px) scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "#F6F1F1";
                  e.target.style.transform = "translateY(0)";
                }}
                onClick={() => setIsModalOpen(true)}
              >
                CONTACT
                <ArrowUpRight size={18} />
              </button>
            </div>

            {/* Right Column - Accordion */}
            <div className="md:w-1/2 flex flex-col gap-4">
              {[
                {
                  question: "Who can benefit from ClickCare?",
                  answer:
                    "ClickCare is designed for seniors, beginners, and anyone who feels overwhelmed by technology.",
                },
                {
                  question: "What topics do you cover?",
                  answer:
                    "We help with smartphones, apps, online safety, payments, privacy settings, and more.",
                },
                {
                  question: "How do I book a session?",
                  answer:
                    "Simply click any 'Book a Session' button or contact us at 0956 401 6766.",
                },
                {
                  question: "Is there a free consultation?",
                  answer: "Yes! Your first session is complimentary.",
                },
              ].map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-5 sm:p-6 shadow-md"
                >
                  <details>
                    <summary
                      className="font-bold text-[#146C94] cursor-pointer"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      {faq.question}
                    </summary>
                    <p
                      className="mt-3 text-[#146C94]"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      {faq.answer}
                    </p>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>

      {/* ✅ Footer */}
      <ClickCareFooter openModal={() => setIsModalOpen(true)} />

      {/* ✅ Booking Modal (now responsive) */}
      {isModalOpen && (
  <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md z-50 p-4 sm:p-8 animate-fadeIn">
    <div
      className="relative bg-gradient-to-b from-[#F6F1F1] to-[#E3EDF4] rounded-3xl shadow-2xl p-6 sm:p-10 w-full max-w-md sm:max-w-lg overflow-y-auto max-h-[90vh] border border-[#AFD3E2]/40"
      style={{ animation: "scaleIn 0.3s ease" }}
    >
      {/* ✖ Close Button */}
      <button
        onClick={closeModal}
        className="absolute top-3 right-5 text-[#146C94] text-3xl font-bold hover:text-[#19A7CE] transition"
      >
        ×
      </button>

      {/* Title */}
      <h2
        className="text-3xl sm:text-4xl font-bold mb-4 text-center drop-shadow-md"
        style={{ fontFamily: "Unbounded, cursive", color: "#146C94" }}
      >
        Book a Session
      </h2>
      <p
        className="text-center mb-6 text-[#146C94]/80 text-sm sm:text-base"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        Fill out the form below and we'll get in touch with you soon.
      </p>

      {/* Form */}
      <form className="space-y-5">
        {[
          { type: "text", placeholder: "Full Name" },
          { type: "email", placeholder: "Email Address" },
          { type: "text", placeholder: "Service Type" },
          { type: "date", placeholder: "" },
        ].map((field, i) => (
          <input
            key={i}
            type={field.type}
            placeholder={field.placeholder}
            className="w-full border border-[#AFD3E2]/50 rounded-full px-5 py-3 text-sm sm:text-base outline-none focus:ring-2 focus:ring-[#19A7CE]/50 focus:border-[#19A7CE]/60 transition-all"
            style={{ fontFamily: "Montserrat, sans-serif", color: "#146C94" }}
          />
        ))}

        <textarea
          placeholder="Your Message"
          rows="3"
          className="w-full border border-[#AFD3E2]/50 rounded-2xl px-5 py-3 text-sm sm:text-base outline-none resize-none focus:ring-2 focus:ring-[#19A7CE]/50 focus:border-[#19A7CE]/60 transition-all"
          style={{ fontFamily: "Montserrat, sans-serif", color: "#146C94" }}
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full font-bold px-6 py-4 sm:py-5 rounded-full text-base shadow-lg transition-all duration-300 hover:scale-[1.02] animate-pulseGlow"
          style={{
            background: "linear-gradient(to right, #19A7CE, #AFD3E2)",
            color: "#F6F1F1",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          Send Booking Request
        </button>
      </form>
    </div>
  </div>
)}

      {/* ✅ Floating Button */}
      <div
        style={{
          position: 'fixed',
          right: '2rem',
          bottom: '2rem',
          zIndex: 50,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <button
          className="font-bold px-8 py-4 rounded-full text-base flex items-center gap-3 shadow-xl transition-all duration-300 animate-pulseGlow"
          style={{
            backgroundColor: '#19A7CE',
            color: '#F6F1F1',
            fontFamily: 'Montserrat, sans-serif',
            boxShadow: '0 8px 24px rgba(25,167,206,0.15)',
          }}
          onMouseEnter={e => {
            e.target.style.backgroundColor = '#AFD3E2';
            e.target.style.color = '#146C94';
          }}
          onMouseLeave={e => {
            e.target.style.backgroundColor = '#19A7CE';
            e.target.style.color = '#F6F1F1';
          }}
          onClick={() => setIsModalOpen(true)}
        >
          BOOK A SESSION
          <ArrowUpRight size={20} />

        </button>
      </div>
    </>
  );
};


function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    { avatar: '/assets/avatar1.jpg', name: 'Maria Santos', title: 'Grandmother of 5', quote: 'ClickCare helped me connect with my grandchildren through video calls—I never miss a moment now.' },
    { avatar: '/assets/avatar2.jpg', name: 'Roberto Cruz', title: 'Retired Teacher', quote: 'I was terrified of online banking at first, but now I feel safe and independent managing my money.' },
    { avatar: '/assets/avatar3.jpg', name: 'Luz Reyes', title: 'Proud Mother of 3', quote: 'The GCash lessons were amazing! I can now pay bills and send money with ease.' },
    { avatar: '/assets/avatar4.jpg', name: 'Carmen Dela Cruz', title: 'Connecting with friends on Facebook', quote: 'Ive reconnected with long-lost friends—Facebook feels like a reunion every day.' },
    { avatar: '/assets/avatar5.jpg', name: 'Jose Mendoza', title: 'Learning online safety and scam prevention', quote: 'The scam prevention lessons gave me peace of mind—I know how to protect myself online.' },
    { avatar: '/assets/avatar1.jpg', name: 'Aurora Bautista', title: 'Using Zoom for family gatherings', quote: 'Family reunions are back! Thanks to Zoom, we laugh and share stories like before.' },
    { avatar: '/assets/avatar2.jpg', name: 'Fernando Garcia', title: 'Overcoming age-related learning concerns', quote: 'At first I thought I was too old to learn, but ClickCare proved that it’s never too late.' },
    { avatar: '/assets/avatar4.jpg', name: 'Esperanza Flores', title: 'Building confidence with smartphones', quote: 'I used to be scared of touching the wrong button. Now, I feel confident exploring my phone.' },
  ];


  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % totalPages);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);

  const getCurrentTestimonials = () => {
    const startIndex = currentIndex * itemsPerPage;
    return testimonials.slice(startIndex, startIndex + itemsPerPage);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {getCurrentTestimonials().map((t, i) => (
          <div
            key={`${currentIndex}-${i}`}
            className="relative p-8 rounded-3xl shadow-testimonials backdrop-blur-xl border border-white/100 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-white/30"
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <div className="absolute -top-6 left-8 w-12 h-12 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-sm shadow-lg border border-white/30 overflow-hidden">
              <img src={t.avatar} alt={t.name + ' avatar'} className="w-full h-full object-cover rounded-full" />
            </div>
            <div className="mt-8 mb-6">
              <p className="italic text-base text-gray-600 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                "{t.quote}"
              </p>
            </div>
            <h4 className="text-lg font-bold text-gray-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>{t.name}</h4>
            <p className="text-sm text-gray-500" style={{ fontFamily: 'Montserrat, sans-serif' }}>{t.title}</p>

            {/* Subtle shine effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        ))}
      </div>

      {/* Enhanced Navigation */}
      <div className="flex justify-center items-center gap-4">
        <button
          onClick={prevSlide}
          className="w-14 h-14 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 shadow-lg"
        >
          <svg width="24" height="24" viewBox="0 0 24 24"><path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
        <div className="flex gap-3 mx-6">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === i
                ? 'bg-white scale-125 shadow-lg'
                : 'bg-white/40 hover:bg-white/60 hover:scale-110'
                }`}
            />
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="w-14 h-14 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 shadow-lg"
        >
          <svg width="24" height="24" viewBox="0 0 24 24"><path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
      </div>
    </div>
  );
}

{/* Enhanced Animations */ }
<style>{`
  @keyframes blob {
    0% { transform: translate(0px, 0px) scale(1); }
    33% { transform: translate(30px, -50px) scale(1.1); }
    66% { transform: translate(-20px, 20px) scale(0.9); }
    100% { transform: translate(0px, 0px) scale(1); }
  }
  .animate-blob { animation: blob 8s infinite; }
  .animation-delay-2000 { animation-delay: 2s; }
  .animation-delay-4000 { animation-delay: 4s; }
  .animation-delay-6000 { animation-delay: 6s; }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  .animate-float { animation: float 4s ease-in-out infinite; }

  @keyframes spin-slow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  .animate-spin-slow { animation: spin-slow 20s linear infinite; }

  @keyframes fadeUp {
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  .animate-fadeUp { animation: fadeUp 1s ease-out forwards; }

  @keyframes pulse-glow {
    0%, 100% { box-shadow: 0 0 0 0 rgba(246,241,241,0.6); }
    50% { box-shadow: 0 0 20px 5px rgba(246,241,241,0.4); }
  }
  .animate-pulseGlow { animation: pulse-glow 2s infinite; }
  
  @keyframes fadeIn {
    from { 
      opacity: 0; 
      transform: translateY(10px); 
    }
    to { 
      opacity: 1; 
      transform: translateY(0); 
    }
  }

  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  
  @keyframes testimonialSlide {
    0% { opacity: 0; transform: translateY(30px) rotateX(15deg); }
    100% { opacity: 1; transform: translateY(0) rotateX(0deg); }
  }
  
  .testimonial-card-enter { animation: testimonialSlide 0.6s ease-out forwards; }
`}</style>

export default ClickCareHero;



