import ipl from "../assets/projects/ipl.png";
import mobile from "../assets/projects/mobile-sales.png";
import excel from "../assets/projects/excel-sales.png";
import sqlMovie from "../assets/projects/sql-movie.png";
import bookstore from "../assets/projects/bookstore.png";
import churn from "../assets/projects/churn.png";
import { motion } from "framer-motion";

const projects = [
  {
    title: "IPL Analysis Power BI Dashboard",
    image: ipl,
    description:
      "Interactive Power BI dashboard analyzing IPL seasons from 2008-2025 with team performance, player statistics, and match insights.",
    highlights: [
      "Analyzed IPL data across multiple seasons (2008–2025).",
      "Built interactive dashboards using DAX and Power Query.",
      "Visualized team, player, venue and season performance.",
    ],
    tech: [
      "Power BI",
      "DAX",
      "Power Query",
      "Data Modeling",
      "Data Visualization",
      "Dashboard Design",
    ],
    github:
      "https://github.com/SaiPalande/IPL-Analysis-PowerBI-Dashboard",
  },

  {
    title: "PowerBI Mobile Sales Dashboard",
    image: mobile,
    description:
      "Business dashboard analyzing mobile sales performance, customer trends, product categories, and KPIs.",
    highlights: [
      "Tracked sales and revenue performance through KPIs.",
      "Analyzed customer and product trends.",
      "Created interactive business dashboards.",
    ],
    tech: [
      "Power BI",
      "DAX",
      "Data Visualization",
      "Power Query",
      "Business Intelligence",
    ],
    github:
      "https://github.com/SaiPalande/PowerBI-Mobile-Sales-Dashboard",
  },

  {
    title: "Excel Sales Dashboard Analysis",
    image: excel,
    description:
      "Interactive Excel dashboard built using Pivot Tables, Power Query, and advanced formulas for sales analysis.",
    highlights: [
      "Cleaned and transformed sales data.",
      "Created Pivot Tables and interactive charts.",
      "Built KPI dashboards for sales reporting.",
    ],
    tech: [
      "Excel",
      "Power Query",
      "Pivot Tables",
      "XLOOKUP",
      "Charts",
      "Data Cleaning",
    ],
    github:
      "https://github.com/SaiPalande/Excel-Sales-Dashboard-Analysis",
  },

  {
    title: "SQL Movie Analysis",
    image: sqlMovie,
    description:
      "Analyzed movie datasets using SQL to identify trends in ratings, genres, revenue, and movie performance.",
    highlights: [
      "Solved business questions using SQL queries.",
      "Explored ratings, genres and revenue trends.",
      "Generated insights using PostgreSQL.",
    ],
    tech: [
      "SQL",
      "PostgreSQL",
      "Joins",
      "CTEs",
      "Window Functions",
      "Aggregations",
      "Data Analysis",
    ],
    github:
      "https://github.com/SaiPalande/SQL-Movie-Analysis",
  },

  {
    title: "Online Bookstore Sales Customer Analytics",
    image: bookstore,
    description:
      "Designed PostgreSQL database and performed SQL analysis on customers, sales, revenue, and inventory.",
    highlights: [
      "Designed a relational database from scratch.",
      "Analyzed customer, sales and inventory data.",
      "Answered business questions using SQL.",
    ],
    tech: [
      "PostgreSQL",
      "SQL",
      "Database Design",
      "ER Diagram",
      "Normalization",
      "Joins",
      "CTEs",
      "Window Functions",
    ],
    github:
      "https://github.com/SaiPalande/Online-Bookstore-Sales-Customer-Analytics-PostgreSQL-SQL",
  },

  {
    title: "Customer Churn Analysis Python",
    image: churn,
    description:
      "Performed data cleaning, exploratory analysis, and visualization to identify customer churn patterns.",
    highlights: [
      "Performed exploratory data analysis on customer data.",
      "Identified churn patterns through visualizations.",
      "Generated actionable business insights.",
    ],
    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "EDA",
      "Data Cleaning",
      "Data Visualization",
    ],
    github:
      "https://github.com/SaiPalande/customer-churn-analysis-python",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#111827] py-24 text-white"
    >
      <div className="max-w-7xl mx-auto px-8">

        <motion.p
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  className="text-cyan-400 uppercase tracking-widest font-semibold"
>
  MY WORK
</motion.p>

<motion.h2
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.1 }}
  className="text-5xl font-bold mt-3"
>
  Featured Projects
</motion.h2>

        <div className="space-y-16 mt-16">

          {projects.map((project, index) => (
            <motion.div
  key={index}
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{
    duration: 0.6,
    delay: index * 0.12,
  }}
  whileHover={{
    y: -8,
  }}
  className="
  bg-slate-900
  rounded-3xl
  border
  border-slate-800
  overflow-hidden
  hover:border-cyan-400
  hover:shadow-cyan-500/20
  hover:shadow-2xl
  transition-all
  duration-300
  "
>
            

              {/* Clickable Image */}

              <div className="w-full bg-black overflow-hidden">

                <a
                  href={project.image}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                    w-full
                    h-auto
                    object-contain
                    cursor-pointer
                    transition-transform
                    duration-500
                    hover:scale-105
                    "
                  />
                </a>

              </div>

              {/* Content */}

              <div className="p-8">

                <h3 className="text-3xl font-bold">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-lg leading-8 mt-4">
  {project.description}
</p>

<ul className="mt-6 space-y-3">
  {project.highlights.map((point, i) => (
    <li
      key={i}
      className="flex items-start gap-3 text-slate-300"
    >
      <span className="text-cyan-400 font-bold mt-0.5">✓</span>
      <span>{point}</span>
    </li>
  ))}
</ul>

<div className="flex flex-wrap gap-3 mt-8">

                  {project.tech.map((item) => (
                    <motion.span
  key={item}
  whileHover={{ scale: 1.08 }}
  className="
  px-4
  py-2
  rounded-full
  bg-slate-800
  text-cyan-400
  text-sm
  "
>
                      {item}
                    </motion.span>
                  ))}

                </div>

                <motion.a
  href={project.github}
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ x: 6 }}
  className="
  inline-block
  mt-8
  text-cyan-400
  font-semibold
  hover:text-cyan-300
  transition
  "
>
                  View GitHub →
                </motion.a>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;