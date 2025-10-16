import React, { useEffect } from "react";

const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center z-50" style={{
      background: "linear-gradient(135deg, #cbe7ff 0%, #19A7CE 100%)"
    }}>
      {/* Animated Logo */}
      <h1
        className="text-5xl mb-8 font-bold animate-logoFadeScale"
        style={{ fontFamily: "Montserrat, sans-serif", color: "#0A0F2C", letterSpacing: "2px" }}
      >
        <span className="font-normal">Click</span>
        <span className="font-bold" style={{ color: "#19A7CE" }}>Care</span>
      </h1>

      {/* Glowing Progress Bar */}
      <div className="w-48 h-3 bg-white/40 rounded-full overflow-hidden shadow-lg">
        <div className="h-full bg-[#19A7CE] animate-progressGlow rounded-full shadow-progressBar"></div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes logoFadeScale {
          0% { opacity: 0; transform: scale(0.8); }
          60% { opacity: 1; transform: scale(1.05); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-logoFadeScale {
          animation: logoFadeScale 1.2s cubic-bezier(.4,0,.2,1) forwards;
        }
        @keyframes progressGlow {
          0% { width: 0; box-shadow: 0 0 0px #19A7CE; }
          80% { width: 100%; box-shadow: 0 0 16px #19A7CE; }
          100% { width: 100%; box-shadow: 0 0 8px #19A7CE; }
        }
        .animate-progressGlow {
          animation: progressGlow 2s cubic-bezier(.4,0,.2,1) forwards;
        }
        .shadow-progressBar {
          box-shadow: 0 0 16px #19A7CE, 0 0 4px #19A7CE;
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;
