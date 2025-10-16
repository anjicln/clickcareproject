import { Mail, Phone, MapPin, ArrowRight, Facebook, Instagram, Linkedin, Youtube, ArrowUpRight } from "lucide-react";

const ClickCareFooter = () => {
  return (
    <footer className="bg-[#0A0F2C] text-white">
      {/* Main Footer */}
      <div className="max-w-[95%] mx-auto px-8 py-20 grid md:grid-cols-2 gap-16">
        {/* Left Side */}
        <div className="flex flex-col justify-between">
          <div>
            <h2
              className="text-6xl font-regular tracking-tight leading-[1.1] mb-10 text-white"
              style={{ fontFamily: 'Unbounded, cursive', letterSpacing: '2px' }}
            >
              <div className="flex items-center gap-3">
                <img
                  src="/assets/arrow.png"
                  alt="arrow"
                  className="w-10 h-10 object-contain"
                />
                <span>CONTACT</span>
              </div>
              <span className="block">US</span>
            </h2>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 mt-6">
            <a href="#" className="bg-[#194197ff] rounded-full p-3 hover:opacity-80 transition">
              <img
                src="/assets/fb.png"
                alt="Facebook"
                className="w-5 h-5 object-contain"
              />
            </a>

            <a href="#" className="bg-[#194197ff] rounded-full p-3 hover:opacity-80 transition">
              <img
                src="/assets/ig.png"
                alt="Instagram"
                className="w-5 h-5 object-contain"
              />
            </a>

            <a href="#" className="bg-[#194197ff] rounded-full p-3 hover:opacity-80 transition">
              <img
                src="/assets/in.png"
                alt="LinkedIn"
                className="w-5 h-5 object-contain"
              />
            </a>

            <a href="#" className="bg-[#194197ff] rounded-full p-3 hover:opacity-80 transition">
              <img
                src="/assets/yt.png"
                alt="YouTube"
                className="w-5 h-5 object-contain"
              />
            </a>
          </div>

        </div>

        {/* Right Side */}
        <div className="flex flex-col justify-center">
          <h3 className="text-lg font-semibold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>Get a Free consultation</h3>

          {/* Email input and button */}
          <div className="flex flex-col sm:flex-row items-center gap-3 mb-8 " style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <div className="flex items-center bg-white text-gray-800 rounded-full px-6 py-3 w-[300px] sm:w-[300px]">
              <Mail className="w-5 h-5 mr-2 text-gray-600" />
              <input
                type="email"
                placeholder="Enter your email to get started"
                className="bg-transparent outline-none text-sm flex-1 placeholder-gray-500"
              />
            </div>
            <button
              className="font-bold px-7 py-3 rounded-full text-sm flex items-center gap-3 transition-all duration-300 shadow-xl animate-pulseGlow"
              style={{
                backgroundColor: '#F6F1F1',
                color: '#146C94',
                fontFamily: 'Montserrat, sans-serif'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'linear-gradient(to right, #19A7CE, #AFD3E2)';
                e.target.style.transform = 'translateY(-3px) scale(1.05)';
                e.target.style.boxShadow = '0 12px 24px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#F6F1F1';
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
              }}
            >
              BOOK A SESSION
              <ArrowUpRight size={18} />
            </button>
          </div>

          <div className="space-y-4 text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <div className="flex items-center gap-4">
              <div className="bg-white p-3 rounded-full flex items-center justify-center">
                <img src="/assets/phone.png" alt="phone" className="w-5 h-5 object-contain" />
              </div>
              <span>0956 4016 766</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-white p-3 rounded-full flex items-center justify-center">
                <img src="/assets/email.png" alt="mail" className="w-5 h-5 object-contain" />
              </div>
              <span>clickcare@gmail.com</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-white p-3 rounded-full flex items-center justify-center">
                <img src="/assets/location.png" alt="location" className="w-5 h-5 object-contain" />
              </div>
              <span>Pasay City</span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#146C94] py-6 border-t border-gray-800">
        <div className="max-w-[95%] mx-auto px-8 flex flex-col sm:flex-row justify-between items-center text-base text-gray-300">
          <div className="flex items-center gap-2 mb-3 sm:mb-0">
            <img src="/assets/clickcare_logo.png" alt="ClickCare Logo" className="w-9 h-9 rounded-full" />
            <span className="font-semibold" style={{ fontFamily: 'Montserrat, sans-serif' }}>ClickCare</span>
          </div>
          <p className="text-center sm:text-right " style={{ fontFamily: 'Montserrat, sans-serif' }}>
            All rights reserved © 2025 ClickCare. Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ClickCareFooter;
