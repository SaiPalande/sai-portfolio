import {
  BarChart3,
  Database,
  LineChart,
  Brain,
} from "lucide-react";

function About() {
  return (
    <section
      id="about"
      className="bg-[#111827] py-20 lg:py-24 text-white"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        <p className="text-cyan-400 uppercase tracking-widest font-semibold text-center lg:text-left">
          ABOUT ME
        </p>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 text-center lg:text-left">
          Turning Data into Impact
        </h2>

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 mt-14">

          {/* Left Side */}

          <div className="text-center lg:text-left">

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

          </div>

          {/* Right Side */}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-cyan-400 hover:-translate-y-2 transition duration-300">
              <BarChart3 className="text-cyan-400 mb-4" size={32} />
              <h3 className="font-semibold text-xl mb-2">
                Business Intelligence
              </h3>
              <p className="text-slate-400 text-sm leading-6">
                Interactive dashboards that transform raw data into strategic
                business decisions.
              </p>
            </div>

            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-cyan-400 hover:-translate-y-2 transition duration-300">
              <Database className="text-cyan-400 mb-4" size={32} />
              <h3 className="font-semibold text-xl mb-2">
                Data Analytics
              </h3>
              <p className="text-slate-400 text-sm leading-6">
                SQL, PostgreSQL, Python and Excel for extracting meaningful
                insights.
              </p>
            </div>

            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-cyan-400 hover:-translate-y-2 transition duration-300">
              <LineChart className="text-cyan-400 mb-4" size={32} />
              <h3 className="font-semibold text-xl mb-2">
                Data Visualization
              </h3>
              <p className="text-slate-400 text-sm leading-6">
                Creating impactful Power BI dashboards with KPIs and interactive
                reports.
              </p>
            </div>

            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-cyan-400 hover:-translate-y-2 transition duration-300">
              <Brain className="text-cyan-400 mb-4" size={32} />
              <h3 className="font-semibold text-xl mb-2">
                Continuous Learning
              </h3>
              <p className="text-slate-400 text-sm leading-6">
                Continuously improving through real-world analytics projects,
                certifications and problem solving.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;