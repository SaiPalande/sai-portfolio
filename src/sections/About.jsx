import {
  BarChart3,
  Database,
  LineChart,
  Brain,
} from "lucide-react";

import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";

function About() {
  return (
    <SectionWrapper>
      <section
        id="about"
        className="bg-[#111827] py-20 lg:py-24 text-white"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8">

          <motion.p
            className="text-cyan-400 uppercase tracking-widest font-semibold text-center lg:text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            ABOUT ME
          </motion.p>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Turning Data into Impact
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 mt-14">

            {/* Left Side */}

            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >

              <p className="text-slate-300 leading-8 text-base sm:text-lg">
                I'm{" "}
                <span className="text-white font-semibold">
                  Sai Palande
                </span>
                , a passionate Data Analyst and AI & Machine Learning graduate
                who enjoys transforming complex datasets into meaningful business
                insights.
              </p>

              <p className="text-slate-400 leading-8 mt-6 text-base sm:text-lg">
                I specialize in SQL, Power BI, Python, Excel, and PostgreSQL,
                creating dashboards, analyzing trends, and solving business
                problems through data. My goal is to help organizations make
                confident, data-driven decisions.
              </p>

              <div className="mt-10 space-y-4 text-base sm:text-lg">

                <p>
                  📍{" "}
                  <span className="text-slate-300">
                    Dombivli, Maharashtra
                  </span>
                </p>

                <p>
                  🎓{" "}
                  <span className="text-slate-300">
                    B.E. Artificial Intelligence & Machine Learning
                    (2022–2026)
                  </span>
                </p>

                <p>
                  💼{" "}
                  <span className="text-slate-300">
                    Open to Data Analyst, BI Analyst & Business Analyst roles
                  </span>
                </p>

                <p>
                  🌐{" "}
                  <span className="text-slate-300">
                    English • Hindi • Marathi
                  </span>
                </p>

              </div>

            </motion.div>

            {/* Right Side */}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              {[
                {
                  icon: <BarChart3 className="text-cyan-400 mb-4" size={32} />,
                  title: "Business Intelligence",
                  desc: "Interactive dashboards that transform raw data into strategic business decisions.",
                },
                {
                  icon: <Database className="text-cyan-400 mb-4" size={32} />,
                  title: "Data Analytics",
                  desc: "SQL, PostgreSQL, Python and Excel for extracting meaningful insights.",
                },
                {
                  icon: <LineChart className="text-cyan-400 mb-4" size={32} />,
                  title: "Data Visualization",
                  desc: "Creating impactful Power BI dashboards with KPIs and interactive reports.",
                },
                {
                  icon: <Brain className="text-cyan-400 mb-4" size={32} />,
                  title: "Continuous Learning",
                  desc: "Continuously improving through real-world analytics projects, certifications and problem solving.",
                },
              ].map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.15,
                    duration: 0.5,
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.03,
                  }}
                  className="bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-cyan-400 transition-all duration-300"
                >
                  {card.icon}

                  <h3 className="font-semibold text-xl mb-2">
                    {card.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-6">
                    {card.desc}
                  </p>
                </motion.div>
              ))}

            </div>

          </div>

        </div>
      </section>
    </SectionWrapper>
  );
}

export default About;