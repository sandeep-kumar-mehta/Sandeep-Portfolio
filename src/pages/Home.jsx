import resume from "../assets/Sandeep_Kumar_Mehta.pdf";
import profile from "../assets/profile.png";
import ScrollReveal from "../components/ScrollReveal";

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gray-900 flex items-center"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Text Content */}
        <ScrollReveal direction="left" delay={100}>
          <div className="text-white space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Hi, I’m <span className="text-blue-400">Sandeep</span>
            </h1>

            <p className="mt-2 text-gray-300 text-lg md:text-xl font-medium">
              Java & Full Stack Developer
            </p>

            <p className="mt-4 text-gray-400 leading-relaxed md:text-lg">
              I build scalable backend systems using Java & Spring Boot
              and modern frontend applications using React.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={resume}
                download
                className="px-6 py-3 bg-blue-500 rounded-lg
                           hover:bg-blue-600 transition font-semibold"
              >
                Download Resume
              </a>

              <a
                href="#projects"
                className="px-6 py-3 border border-gray-500 rounded-lg
                           hover:border-blue-400 transition font-semibold"
              >
                View Projects
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Profile Image */}
        <ScrollReveal direction="right" delay={200}>
          <div className="flex justify-center">
            <img
              src={profile}
              alt="Sandeep Kumar Mehta"
              className="
                w-64 h-64 md:w-80 md:h-80
                rounded-full object-cover
                border-4 border-blue-400
                shadow-xl
                animate-float
                hover:scale-105 hover:shadow-blue-500/50
                transition duration-300
              "
            />
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

export default Home;
