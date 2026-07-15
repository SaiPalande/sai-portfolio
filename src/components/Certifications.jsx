import React from "react";
import {
  ExternalLink,
  GraduationCap,
  Briefcase,
  BarChart3,
} from "lucide-react";

import ibmCertificate from "../assets/certificates/ibm-data-analyst.jpg";
import deloitteCertificate from "../assets/certificates/deloitte-data-analytics.jpg";
import tataCertificate from "../assets/certificates/tata-data-visualisation.jpg";

const certifications = [
  {
    title: "IBM Data Analyst Professional Certificate",
    issuer: "Coursera × IBM",
    image: ibmCertificate,
    icon: <GraduationCap size={22} />,
    description:
      "Completed IBM's 11-course professional certificate covering Excel, SQL, Python, Data Visualization, Power BI, Data Analysis, and a hands-on capstone project.",
    credential:
      "https://www.coursera.org/account/accomplishments/professional-cert/LEQPF2HOIFQ2",
  },
  {
    title: "Deloitte Australia Data Analytics Job Simulation",
    issuer: "Forage",
    image: deloitteCertificate,
    icon: <Briefcase size={22} />,
    description:
      "Completed Deloitte's virtual job simulation focused on data cleaning, business insights, Tableau dashboards, and communicating findings to stakeholders.",
    credential: "#",
  },
  {
    title:
      "Tata Group Data Visualisation: Empowering Business with Effective Insights",
    issuer: "Forage",
    image: tataCertificate,
    icon: <BarChart3 size={22} />,
    description:
      "Completed Tata Group's virtual experience in executive dashboard creation, data storytelling, and business decision-making using visual analytics.",
    credential: "#",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Certifications
          </h2>

          <p className="mt-4 text-gray-400 max-w-3xl mx-auto text-lg">
            Professional certifications and virtual job simulations that
            demonstrate practical experience in SQL, Python, Excel, Power BI,
            Tableau, and Business Analytics.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300 shadow-lg"
            >
              {/* Certificate Image */}
              <a
                href={cert.image}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-56 object-cover transition-transform duration-500 hover:scale-105"
                />
              </a>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 text-cyan-400 mb-3">
                  {cert.icon}
                  <span className="font-medium">{cert.issuer}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {cert.title}
                </h3>

                <p className="text-gray-300 leading-7 mb-6">
                  {cert.description}
                </p>

                {cert.credential !== "#" ? (
                  <a
                    href={cert.credential}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white transition"
                  >
                    Verify Credential
                    <ExternalLink size={18} />
                  </a>
                ) : (
                  <button
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-gray-700 text-gray-300 cursor-default"
                  >
                    Certificate Included
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;