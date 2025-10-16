import { Mail, ArrowUpRight } from "lucide-react";

const ClickCareFooter = ({ openModal }) => {
  return (
    <footer className="bg-[#0A0F2C] text-white">
      {/* Main Footer */}
      <div className="max-w-[95%] mx-auto px-4 sm:px-8 py-10 sm:py-20 grid gap-10 md:grid-cols-2">
        {/* Left Side */}
        <div className="flex flex-col justify-between items-start">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.1] mb-8 sm:mb-10 text-white"
            style={{ fontFamily: "Unbounded, cursive", letterSpacing: "2px" }}
          >
            <div className="flex items-center gap-3 mb-2">
              <img
                src="/assets/arrow.png"
                alt="arrow"
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
              />
              <span>CONTACT</span>
            </div>
            <span className="block">US</span>
          </h2>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6 flex-wrap">
            {["fb", "ig", "in", "yt"].map((icon, i) => (
              <a
                key={i}
                href="#"
                className="bg-[#194197ff] rounded-full p-3 hover:opacity-80 transition"
              >
                <img
                  src={`/assets/${icon}.png`}
                  alt={icon}
                  className="w-5 h-5 object-contain"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col justify-center">
          <h3
            className="text-base sm:text-lg font-semibold mb-4 sm:mb-6"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Get a Free Consultation
          </h3>

          {/* Email input and button */}
          <div
            className="flex flex-col sm:flex-row items-center gap-3 mb-6 sm:mb-8 w-full"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            <div className="flex items-center bg-white text-gray-800 rounded-full px-5 py-3 w-full sm:w-[300px]">
              <Mail className="w-5 h-5 mr-2 text-gray-600" />
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent outline-none text-sm flex-1 placeholder-gray-500"
              />
            </div>
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
              onClick={openModal}
            >
              BOOK A SESSION
              <ArrowUpRight size={18} />
            </button>
          </div>

          {/* Contact Info */}
          <div
            className="space-y-4 text-sm sm:text-base"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            {[
              { icon: "phone", text: "0956 4016 766" },
              { icon: "email", text: "clickcare@gmail.com" },
              { icon: "location", text: "Pasay City" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="bg-white p-3 rounded-full flex items-center justify-center">
                  <img
                    src={`/assets/${item.icon}.png`}
                    alt={item.icon}
                    className="w-5 h-5 object-contain"
                  />
                </div>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#146C94] py-5 border-t border-gray-800">
        <div className="max-w-[95%] mx-auto px-4 sm:px-8 flex flex-col sm:flex-row justify-between items-center text-xs sm:text-base text-gray-300 gap-2 sm:gap-0 text-center">
          <div className="flex items-center gap-2">
            <img
              src="/assets/clickcare_logo.png"
              alt="ClickCare Logo"
              className="w-8 h-8 rounded-full"
            />
            <span
              className="font-semibold"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              ClickCare
            </span>
          </div>
          <p
            className="sm:text-right"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            © 2025 ClickCare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ClickCareFooter;
