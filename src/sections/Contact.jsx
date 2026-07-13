function Contact() {
  return (
    <section id="contact" className="bg-[#0B1120] py-24 text-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Heading */}
        <p className="text-cyan-400 uppercase tracking-widest font-semibold">
          CONTACT
        </p>

        <h2 className="text-5xl font-bold mt-3">
          Let's Work Together
        </h2>

        <p className="text-slate-400 text-lg mt-5 max-w-2xl leading-8">
          I'm currently open to Data Analyst, Business Analyst and Business
          Intelligence opportunities. Feel free to reach out through any of the
          platforms below.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-14">
          {/* Contact Information */}
          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-cyan-400 transition duration-300">

            <div className="flex items-center gap-4 mb-7">
              <span className="text-3xl">📧</span>

              <div>
                <p className="text-slate-400 text-sm">Email</p>

                <a
                  href="mailto:sai.m.palande@gmail.com"
                  className="hover:text-cyan-400 transition"
                >
                  sai.m.palande@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-7">
              <span className="text-3xl">📞</span>

              <div>
                <p className="text-slate-400 text-sm">Phone</p>

                <a
                  href="tel:+919321601827"
                  className="hover:text-cyan-400 transition"
                >
                  +91 93216 01827
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-7">
              <span className="text-3xl">💬</span>

              <div>
                <p className="text-slate-400 text-sm">WhatsApp</p>

                <a
                  href="https://wa.me/919321601827"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-3xl">📍</span>

              <div>
                <p className="text-slate-400 text-sm">Location</p>

                <p>Dombivli, Maharashtra, India</p>
              </div>
            </div>

          </div>

          {/* Social Links */}
          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-cyan-400 transition duration-300">

            <h3 className="text-2xl font-bold mb-6">
              Connect With Me
            </h3>

            <p className="text-slate-400 leading-7 mb-8">
              You can also connect with me on LinkedIn or explore all of my
              Data Analytics projects on GitHub.
            </p>

            <div className="space-y-5">

              <a
                href="https://www.linkedin.com/in/sai-palande-a38b69320/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-lg hover:text-cyan-400 transition"
              >
                💼 LinkedIn
              </a>

              <a
                href="https://github.com/SaiPalande"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-lg hover:text-cyan-400 transition"
              >
                💻 GitHub
              </a>

            </div>

            <div className="mt-10 p-5 rounded-xl bg-slate-800 border border-slate-700">
              <h4 className="text-xl font-semibold mb-2 text-cyan-400">
                Available For
              </h4>

              <p className="text-slate-300">
                ✔ Data Analyst <br />
                ✔ Business Analyst <br />
                ✔ Power BI Developer <br />
                ✔ MIS Executive <br />
                ✔ Business Intelligence Analyst
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;