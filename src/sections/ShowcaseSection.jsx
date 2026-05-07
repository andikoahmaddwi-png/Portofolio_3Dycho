import React, { useState, useEffect } from "react";
import { Maximize2, ExternalLink } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

// Data Projects
const projects = [
  {
    id: 1,
    title: "Aritmatika Solver",
    description:
      "Program ini dirancang untuk mempermudah pengguna dalam menyelesaikan soal-soal Aritmatika secara otomatis.",
    img: "/images/projects/project1.png",
    link: "https://example.com/demo1",
  },
  {
    id: 2,
    title: "AutoChat-Discord",
    description:
      "Solusi otomatisasi untuk mengirim pesan ke saluran Discord secara terjadwal dengan mudah.",
    img: "/images/projects/project2.png",
    link: "https://example.com/demo2",
  },
];

// Data Certificates
const certificates = [
  { id: 1, img: "/images/certificates/cert1.png" },
  { id: 2, img: "/images/certificates/cert2.png" },
  { id: 3, img: "/images/certificates/cert3.png" },
  { id: 4, img: "/images/certificates/cert4.png" },
  { id: 5, img: "/images/certificates/cert5.png" },
  { id: 6, img: "/images/certificates/cert6.png" },
];

const ShowcaseSection = () => {
  const [activeTab, setActiveTab] = useState("projects");
  const [selectedCert, setSelectedCert] = useState(null);

  // Init AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-out" });
  }, []);

  // Baca hash URL → kalau ada ?tab=certificates, langsung pindah tab
  useEffect(() => {
    if (window.location.hash.includes("certificates")) {
      setActiveTab("certificates");
    }
  }, []);

  // Close modal dengan ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedCert(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section
      id="showcase"
      className="py-20 px-6 lg:px-20 bg-gradient-to-b from-black via-neutral-900 to-black"
    >
      {/* Judul dengan efek glow */}
      <h2
        className="text-5xl font-bold mb-12 text-center showcase-title bg-gradient-to-r from-indigo-400 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-pulse"
        data-aos="fade-down"
      >
        Portfolio Showcase
      </h2>

      {/* Tab Menu */}
      <div className="flex justify-center mb-12" data-aos="zoom-in">
        <div className="bg-white/5 backdrop-blur-md rounded-lg p-2 flex gap-4 shadow-lg">
          <button
            onClick={() => setActiveTab("projects")}
            className={`px-6 py-2 rounded-lg font-semibold transition-all duration-500 ${
              activeTab === "projects"
                ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg scale-105"
                : "text-gray-300 hover:text-white hover:scale-105"
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => setActiveTab("certificates")}
            className={`px-6 py-2 rounded-lg font-semibold transition-all duration-500 ${
              activeTab === "certificates"
                ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg scale-105"
                : "text-gray-300 hover:text-white hover:scale-105"
            }`}
          >
            Certificates
          </button>
        </div>
      </div>

      {/* Projects Section */}
      {activeTab === "projects" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={project.id}
              data-aos={index % 2 === 0 ? "flip-left" : "flip-right"}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-500 flex flex-col transform hover:scale-[1.05] shadow-lg hover:shadow-indigo-500/30"
            >
              <div className="w-full aspect-video">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-indigo-400 hover:underline mt-auto hover:gap-3 transition-all"
                >
                  <ExternalLink size={18} /> Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Certificates Section */}
      {activeTab === "certificates" && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {certificates.map((certificate, index) => (
              <div
                key={certificate.id}
                role="button"
                tabIndex={0}
                data-aos={index % 2 === 0 ? "zoom-in-up" : "zoom-in-down"}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden relative group cursor-pointer transform hover:scale-[1.05] transition-all duration-500 shadow-lg hover:shadow-pink-500/30"
                onClick={() => setSelectedCert(certificate.img)}
              >
                <img
                  src={certificate.img}
                  alt={`Certificate ${certificate.id}`}
                  className="w-full h-[350px] object-contain bg-white rounded-lg p-2 group-hover:opacity-90 transition duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-black/60 to-black/30 opacity-0 group-hover:opacity-100 transition duration-500">
                  <span className="text-white font-semibold flex items-center gap-2">
                    <Maximize2 size={18} /> View Certificate
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Modal Certificate */}
          {selectedCert && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 overflow-y-auto animate-fadeIn">
              <div className="relative bg-neutral-900/90 backdrop-blur-lg p-6 rounded-2xl max-w-5xl w-full shadow-2xl border border-white/10">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-3 right-3 text-white hover:text-red-400 text-3xl transition"
                >
                  ✕
                </button>
                <img
                  src={selectedCert}
                  alt="Certificate Full"
                  className="w-full h-auto rounded-lg shadow-lg hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default ShowcaseSection;


