import ScrollReveal from "../components/ScrollReveal";
import Card from "../components/Card";

function Projects() {
  return (
    <ScrollReveal>
      <section
        id="projects"
        className="bg-gray-900 py-20 text-gray-300"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-10">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Project 1 */}
            <Card
              title="Sales Savvy – E-Commerce Application"
              description="Full-stack e-commerce application with authentication, cart, product management, and secure payment workflow."
              tech="Java, Spring Boot, Hibernate, MySQL, React"
              github="https://github.com/sandeepkrmehta/Sales-Savvy"
            />

            {/* Project 2 */}
            <Card
              title="Task Buddy – Task Management App"
              description="Task management application with add, edit, delete functionality and persistent storage using LocalStorage."
              tech="React, JavaScript, HTML, CSS"
              github="https://github.com/sandeepkrmehta/"
            />

            {/* Project 3 */}
            <Card
              title="Employee CRUD Application"
              description="Full-stack Spring Boot application for employee management with web interface and REST APIs supporting complete CRUD operations."
              tech="Java 17, Spring Boot, Spring Data JPA, Hibernate, MySQL, Thymeleaf, Bootstrap"
              github="https://github.com/sandeepkrmehta/employee-crud-application"
            />

          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}

export default Projects;
