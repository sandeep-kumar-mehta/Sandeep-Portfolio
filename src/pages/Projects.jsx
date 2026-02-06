import ScrollReveal from "../components/ScrollReveal";
import Card from "../components/Card";

const projects = [
  {
    title: "Sales Savvy – E-Commerce Application",
    description:
      "Full-stack e-commerce application with authentication, cart, product management, and secure payment workflow.",
    tech: "Java, Spring Boot, Hibernate, MySQL, React",
    github: "https://github.com/sandeep-kumar-mehta/Sales-Savvy",
  },
  {
    title: "Task Buddy – Task Management App",
    description:
      "Task management application with add, edit, delete functionality and persistent storage using LocalStorage.",
    tech: "React, JavaScript, HTML, CSS",
    github: "https://github.com/sandeep-kumar-mehta/Task-Buddy",
  },
  {
    title: "Employee CRUD Application",
    description:
      "Full-stack Spring Boot application for employee management with web interface and REST APIs supporting complete CRUD operations.",
    tech: "Java 17, Spring Boot, Spring Data JPA, Hibernate, MySQL, Thymeleaf, Bootstrap",
    github: "https://github.com/sandeep-kumar-mehta/Employee-crud",
  },
  // Add more projects here easily
];

function Projects() {
  return (
    <section id="projects" className="bg-gray-900 py-20 text-gray-300">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-white mb-10">
            Projects
          </h2>
        </ScrollReveal>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal
              key={index}
              delay={index * 120}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <Card {...project} />
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;
