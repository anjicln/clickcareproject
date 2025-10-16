import React, { useRef, useEffect, useState } from "react";

const Reveal = ({ children, animation = "fade-slide-in" }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current); // animate only once
        }
      },
      { threshold: 0.2 } // trigger when 20% of section is visible
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

return (
  <div
    ref={ref}
    className={`${isVisible ? animation : "opacity-0 translate-y-10"} bg-transparent`}
  >
    {children}
  </div>
);




};

export default Reveal;
