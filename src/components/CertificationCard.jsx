import { FaCertificate, FaCloud, FaCode } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";

const categoryIcons = {
  "Full Stack": <FaCode />,
  Backend: <SiSpringboot />,
  Cloud: <FaCloud />,
};

function CertificationCard({
  title,
  provider,
  duration,
  description,
  link,
  category,
}) {
  return (
    <div
      className="relative bg-gray-900 p-6 rounded-xl border border-gray-800
                 hover:border-blue-400 hover:shadow-[0_0_25px_rgba(59,130,246,0.25)]
                 transition-all duration-300 group"
    >
      {/* Badge */}
      <div className="flex items-center gap-2 text-sm text-blue-400 mb-3">
        {categoryIcons[category] || <FaCertificate />}
        <span>{category}</span>
      </div>

      <h3 className="text-xl font-semibold text-white mb-1">
        {title}
      </h3>

      <p className="text-sm text-gray-400 mb-2">
        {provider} • {duration}
      </p>

      <p className="text-sm leading-relaxed mb-4">
        {description}
      </p>

      {/* Lazy-loaded PDF (opens only on click) */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-auto text-sm text-blue-400
                   group-hover:text-blue-300 transition"
      >
        View Certificate →
      </a>
    </div>
  );
}

export default CertificationCard;
