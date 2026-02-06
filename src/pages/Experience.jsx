import ScrollReveal from "../components/ScrollReveal";
import {
  FaJava,
  FaPython,
  FaReact,
  FaLinux,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiMysql,
  SiFastapi,
  SiMongodb,
  SiOpenai,
} from "react-icons/si";

const experiences = [
  {
    role: "Java Development Intern",
    company: "JSpiders / QSpiders, Noida",
    duration: "Jul 2025 – Dec 2025",
    points: [
      "Worked on Core Java and Spring Boot backend modules",
      "Developed REST APIs with complete CRUD operations",
      "Integrated backend APIs with frontend and MySQL database",
      "Improved debugging skills and understanding of backend workflows",
    ],
    techIcons: [
      <FaJava key="java" title="Java" />,
      <SiSpringboot key="spring" title="Spring Boot" />,
      <SiMysql key="mysql" title="MySQL" />,
      <FaGitAlt key="git" title="Git" />,
    ],
  },
  {
    role: "Automation Developer",
    company: "American Express — Enterprise Technology",
    duration: "Jan 12, 2025 – Present",
    points: [
      "Worked in the Automation Developer team within Enterprise Technology",
      "Built automation solutions using Python and FastAPI",
      "Developed frontend components using React",
      "Designed and integrated MongoDB for backend data storage",
      "Worked in Linux-based environments for development and deployment",
      "Explored and implemented GenAI-based solutions",
    ],
    techIcons: [
      <FaPython key="python" title="Python" />,
      <SiFastapi key="fastapi" title="FastAPI" />,
      <FaReact key="react" title="React" />,
      <SiMongodb key="mongo" title="MongoDB" />,
      <FaLinux key="linux" title="Linux" />,
      <SiOpenai key="genai" title="GenAI" />,
    ],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="bg-gray-800 py-20 text-gray-300"
    >
      <div className="max-w-6xl mx-auto px-6">

        <ScrollReveal>
          <h2 className="text-3xl font-bold text-white mb-10">
            Internship Experience
          </h2>
        </ScrollReveal>

        {experiences.map((exp, index) => (
          <ScrollReveal
            key={index}
            delay={index * 150}
            direction={index % 2 === 0 ? "left" : "right"}
          >
            <div className="bg-gray-900 rounded-xl p-8 shadow-lg
                            hover:shadow-xl transition max-w-3xl mb-10">

              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <h3 className="text-xl font-semibold text-blue-400">
                  {exp.role}
                </h3>
                <span className="text-sm text-gray-400 mt-2 md:mt-0">
                  {exp.duration}
                </span>
              </div>

              <p className="text-gray-400 mb-4">
                {exp.company}
              </p>

              <ul className="list-disc list-inside space-y-2">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              {/* Tech Icons */}
              <div className="flex items-center gap-4 mt-5 text-xl text-gray-400">
                {exp.techIcons.map((icon, i) => (
                  <span
                    key={i}
                    className="hover:text-blue-400 hover:scale-110 transition"
                  >
                    {icon}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}

      </div>
    </section>
  );
}

export default Experience;
