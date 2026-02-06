import { useState } from "react";
import ScrollReveal from "../components/ScrollReveal";
import CertificationCard from "../components/CertificationCard";

const certifications = [
  {
    title: "Full Stack Development Training",
    provider: "KodNest",
    duration: "6 Months",
    category: "Full Stack",
    description:
      "Hands-on training in Java, Spring Boot, Hibernate, SQL, Web Development, Testing, and Competitive Programming.",
    link: "https://production-resume-builder.s3.ap-south-1.amazonaws.com/certificates/KODI63CRG-SANDEEP%20KUMAR%20MEHTA/certificate.pdf",
  },

  // 🔮 Future-ready examples
  // {
  //   title: "Spring Boot Microservices",
  //   provider: "Udemy",
  //   duration: "20 Hours",
  //   category: "Backend",
  //   description: "Microservices, REST, JWT, Docker",
  //   link: "",
  // },
];

const filters = ["All", "Full Stack", "Backend", "Cloud"];

function Certification() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredCerts =
    activeFilter === "All"
      ? certifications
      : certifications.filter(cert => cert.category === activeFilter);

  return (
    <section
      id="certifications"
      className="bg-gray-900 py-20 text-gray-300"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-white mb-8">
            Certifications
          </h2>
        </ScrollReveal>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-4 mb-10">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm border transition
                ${
                  activeFilter === filter
                    ? "bg-blue-500 text-white border-blue-500"
                    : "border-gray-700 text-gray-400 hover:border-blue-400 hover:text-blue-400"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Certification Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredCerts.map((cert, index) => (
            <ScrollReveal
              key={index}
              delay={index * 120}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <CertificationCard {...cert} />
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Certification;
