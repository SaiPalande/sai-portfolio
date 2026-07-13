import ipl from "../assets/projects/ipl.png";
import mobile from "../assets/projects/mobile-sales.png";
import excel from "../assets/projects/excel-sales.png";
import sqlMovie from "../assets/projects/sql-movie.png";
import bookstore from "../assets/projects/bookstore.png";
import churn from "../assets/projects/churn.png";


const projects = [

  {
    title: "IPL Analysis Power BI Dashboard",
    image: ipl,
    description:
      "Interactive Power BI dashboard analyzing IPL seasons from 2008-2025 with team performance, player statistics, and match insights.",
    tech:["Power BI","DAX","Power Query"],
    github:"https://github.com/SaiPalande/IPL-Analysis-PowerBI-Dashboard"
  },


  {
    title:"PowerBI Mobile Sales Dashboard",
    image:mobile,
    description:
      "Business dashboard analyzing mobile sales performance, customer trends, product categories, and KPIs.",
    tech:["Power BI","DAX","Data Visualization"],
    github:"https://github.com/SaiPalande/PowerBI-Mobile-Sales-Dashboard"
  },


  {
    title:"Excel Sales Dashboard Analysis",
    image:excel,
    description:
      "Interactive Excel dashboard built using Pivot Tables, Power Query, and advanced formulas for sales analysis.",
    tech:["Excel","Power Query","Pivot Tables"],
    github:"https://github.com/SaiPalande/Excel-Sales-Dashboard-Analysis"
  },


  {
    title:"SQL Movie Analysis",
    image:sqlMovie,
    description:
      "Analyzed movie datasets using SQL to identify trends in ratings, genres, revenue, and movie performance.",
    tech:["SQL","PostgreSQL"],
    github:"https://github.com/SaiPalande/SQL-Movie-Analysis"
  },


  {
    title:"Online Bookstore Sales Customer Analytics",
    image:bookstore,
    description:
      "Designed PostgreSQL database and performed SQL analysis on customers, sales, revenue, and inventory.",
    tech:["PostgreSQL","SQL","Database Design"],
    github:"https://github.com/SaiPalande/Online-Bookstore-Sales-Customer-Analytics-PostgreSQL-SQL"
  },


  {
    title:"Customer Churn Analysis Python",
    image:churn,
    description:
      "Performed data cleaning, exploratory analysis, and visualization to identify customer churn patterns.",
    tech:["Python","Pandas","Matplotlib"],
    github:"https://github.com/SaiPalande/customer-churn-analysis-python"
  }

];



function Projects(){

return(

<section 
id="projects"
className="bg-[#111827] py-24 text-white"
>

<div className="max-w-7xl mx-auto px-8">


<p className="text-cyan-400 uppercase tracking-widest font-semibold">
MY WORK
</p>


<h2 className="text-5xl font-bold mt-3">
Featured Projects
</h2>


<div className="space-y-16 mt-16">


{
projects.map((project,index)=>(

<div
key={index}
className="
bg-slate-900
rounded-3xl
border
border-slate-800
overflow-hidden
hover:border-cyan-400
transition
duration-300
"
>


{/* Image */}

<div className="w-full bg-black">

<img
src={project.image}
alt={project.title}
className="
w-full
h-auto
object-contain
"
/>

</div>



{/* Content */}

<div className="p-8">


<h3 className="text-3xl font-bold">
{project.title}
</h3>


<p className="text-slate-400 text-lg leading-8 mt-4">
{project.description}
</p>



<div className="flex flex-wrap gap-3 mt-6">

{
project.tech.map((item)=>(
<span
key={item}
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
</span>
))
}

</div>



<a
href={project.github}
target="_blank"
rel="noopener noreferrer"
className="
inline-block
mt-8
text-cyan-400
font-semibold
hover:text-cyan-300
"
>

View GitHub →

</a>


</div>


</div>

))

}


</div>


</div>

</section>


)

}


export default Projects;