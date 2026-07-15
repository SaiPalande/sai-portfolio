import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollTop}
      className={`
  fixed
  bottom-8
  left-1/2
  -translate-x-1/2
  z-50
  p-4
  rounded-full
  bg-cyan-500
  text-white
  shadow-xl
  hover:bg-cyan-600
  hover:scale-110
  transition-all
  duration-300
  ${
    visible
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-5 pointer-events-none"
        }
      `}
    >
      <ChevronUp size={24} />
    </button>
  );
}

export default ScrollToTop;