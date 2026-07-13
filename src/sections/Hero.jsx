import profile from "../assets/images/profile.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#0B1120] flex items-center pt-24 lg:pt-20"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Section */}

          <div className="order-2 lg:order-1 text-center lg:text-left">

            <p className="text-cyan-400 text-base sm:text-lg font-medium mb-4">
              Hello, I'm
            </p>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
              Sai Palande
            </h1>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mt-6 leading-tight">
              Transforming Data
              <br />
              into Business Decisions.
            </h2>

            <p className="text-slate-400 text-base sm:text-lg leading-8 mt-8 max-w-xl mx-auto lg:mx-0">
              Building data-driven solutions through analytics,
              visualization, and business intelligence. I transform
              complex datasets into actionable insights that help
              organizations make smarter decisions.
            </p>

            {/* Tech Stack */}

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-8">

              {[
                "SQL",
                "Power BI",
                "Python",
                "Excel",
                "PostgreSQL",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-cyan-400 text-sm font-medium"
                >
                  {skill}
                </span>
              ))}

            </div>

            {/* Buttons */}

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-10">

              <a
                href="#projects"
                className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-8 py-4 rounded-xl transition duration-300 text-center"
              >
                View My Work
              </a>

              <a
                href="/Sai_Palande_Resume.pdf"
                download
                className="border border-slate-600 hover:border-cyan-400 hover:text-cyan-400 text-white font-semibold px-8 py-4 rounded-xl transition duration-300 text-center"
              >
                Download Resume
              </a>

            </div>

          </div>

          {/* Right Section */}

          <div className="order-1 lg:order-2 flex justify-center">

            <div className="relative">

              {/* Glow */}

              <div className="absolute -inset-4 rounded-3xl bg-cyan-500/20 blur-3xl"></div>

              <img
                src={profile}
                alt="Sai Palande"
                className="relative w-64 sm:w-80 lg:w-[430px] rounded-3xl border border-slate-700 shadow-2xl hover:scale-105 transition duration-500"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;