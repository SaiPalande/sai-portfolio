import profile from "../assets/images/profile.jpg";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#0B1120] flex items-center pt-24 lg:pt-20"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Section */}

          <motion.div
            className="order-2 lg:order-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <motion.p
              className="text-cyan-400 text-base sm:text-lg font-medium mb-4"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              Sai Palande
            </motion.h1>

            <motion.h2
              className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mt-6 leading-tight"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Transforming Data
              <br />
              into Business Decisions.
            </motion.h2>

            <motion.p
              className="text-slate-400 text-base sm:text-lg leading-8 mt-8 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Building data-driven solutions through analytics,
              visualization, and business intelligence. I transform
              complex datasets into actionable insights that help
              organizations make smarter decisions.
            </motion.p>

            {/* Tech Stack */}

            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-3 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              {[
                "SQL",
                "Power BI",
                "Python",
                "Excel",
                "PostgreSQL",
              ].map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{
                    scale: 1.08,
                    y: -3,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                  }}
                  className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-cyan-400 text-sm font-medium cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            {/* Buttons */}

            <motion.div
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              <motion.a
                href="#projects"
                whileHover={{
                  scale: 1.05,
                  y: -2,
                }}
                whileTap={{ scale: 0.96 }}
                className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-8 py-4 rounded-xl transition duration-300 text-center"
              >
                View My Work
              </motion.a>

              <motion.a
                href="/Sai_Palande_Resume.pdf"
                download
                whileHover={{
                  scale: 1.05,
                  y: -2,
                }}
                whileTap={{ scale: 0.96 }}
                className="border border-slate-600 hover:border-cyan-400 hover:text-cyan-400 text-white font-semibold px-8 py-4 rounded-xl transition duration-300 text-center"
              >
                Download Resume
              </motion.a>
            </motion.div>

          </motion.div>

          {/* Right Section */}

          <motion.div
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
          >
            <motion.div
              className="relative"
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Glow */}

              <div className="absolute -inset-4 rounded-3xl bg-cyan-500/20 blur-3xl"></div>

              <motion.img
                src={profile}
                alt="Sai Palande"
                whileHover={{
                  scale: 1.05,
                  rotate: 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                }}
                className="relative w-64 sm:w-80 lg:w-[430px] rounded-3xl border border-slate-700 shadow-2xl"
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Hero;