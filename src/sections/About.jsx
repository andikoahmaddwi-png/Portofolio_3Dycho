import React, { useEffect, memo, useMemo } from "react";
import { FileText, Code, Award, Globe, ArrowUpRight, Sparkles } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

// Memoized Components
const Header = memo(() => (
  <div className="text-center lg:mb-8 mb-4 px-[5%]">
    <h2
      className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
      data-aos="zoom-in-up"
      data-aos-duration="600"
    >
      About Me
    </h2>
    <p
      className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg sm:text-xl flex items-center justify-center gap-3"
      data-aos="zoom-in-up"
      data-aos-duration="800"
    >
      <Sparkles className="w-6 h-6 text-purple-400" />
      Transforming ideas into digital experiences
      <Sparkles className="w-6 h-6 text-purple-400" />
    </p>
  </div>
));

const ProfileImage = memo(() => (
  <div className="flex justify-end items-center sm:p-12 sm:py-0 sm:pb-0 p-0 py-2 pb-2">
    <div
      className="relative group"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="absolute -inset-6 opacity-[25%] z-0 hidden sm:block">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-indigo-500 to-purple-600 rounded-full blur-2xl animate-spin-slower" />
        <div className="absolute inset-0 bg-gradient-to-l from-fuchsia-500 via-rose-500 to-pink-600 rounded-full blur-2xl animate-pulse-slow opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600 via-cyan-500 to-teal-400 rounded-full blur-2xl animate-float opacity-50" />
      </div>
      <div className="relative">
        <div className="w-96 h-96 sm:w-96 sm:h-96 rounded-full overflow-hidden shadow-[0_0_40px_rgba(120,119,198,0.3)] transform transition-all duration-700 group-hover:scale-105">
          <img
            src="/images/Photo.jpg"
            alt="Profile"
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </div>
));

const StatCard = memo(
  ({ icon: Icon, color, value, label, description, animation, link }) => (
    <a
      href={link}
      data-aos={animation}
      data-aos-duration={1300}
      className="relative group block"
    >
      <div className="relative z-10 bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full flex flex-col justify-between">
        <div
          className={`absolute -z-10 inset-0 bg-gradient-to-br ${color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
        />
        <div className="flex items-center justify-between mb-4">
          <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white/10 transition-transform group-hover:rotate-6">
            <Icon className="w-8 h-8 text-white" />
          </div>
          <span className="text-5xl sm:text-6xl font-bold text-white">
            {value}
          </span>
        </div>
        <div>
          <p className="text-sm sm:text-base uppercase tracking-wider text-gray-300 mb-2">
            {label}
          </p>
          <div className="flex items-center justify-between">
            <p className="text-xs sm:text-sm text-gray-400">{description}</p>
            <ArrowUpRight className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
          </div>
        </div>
      </div>
    </a>
  )
);

const AboutPage = () => {
  const { totalProjects, totalCertificates, YearExperience } = useMemo(() => {
    const storedProjects = JSON.parse(localStorage.getItem("projects") || "[]");
    const storedCertificates = JSON.parse(localStorage.getItem("certificates") || "[]");
    const startDate = new Date("2021-11-06");
    const today = new Date();
    const experience =
      today.getFullYear() -
      startDate.getFullYear() -
      (today <
      new Date(today.getFullYear(), startDate.getMonth(), startDate.getDate())
        ? 1
        : 0);

    return {
      totalProjects: storedProjects.length,
      totalCertificates: storedCertificates.length,
      YearExperience: experience,
    };
  }, []);

  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  const statsData = useMemo(
    () => [
      {
        icon: Code,
        color: "from-[#6366f1] to-[#a855f7]",
        value: totalProjects,
        label: "Total Projects",
        description: "Innovative web solutions crafted",
        animation: "fade-right",
        link: "#showcase", // 🔗 sambung ke ShowcaseSection
      },
      {
        icon: Award,
        color: "from-[#a855f7] to-[#6366f1]",
        value: totalCertificates,
        label: "Certificates",
        description: "Professional skills validated",
        animation: "fade-up",
        link: "#showcase", // 🔗 juga ke ShowcaseSection (tab certificate)
      },
      {
        icon: Globe,
        color: "from-[#6366f1] to-[#a855f7]",
        value: YearExperience,
        label: "Years of Experience",
        description: "Continuous learning journey",
        animation: "fade-left",
        link: "#About",
      },
    ],
    [totalProjects, totalCertificates, YearExperience]
  );

  return (
    <div className="h-auto pb-[10%] text-white overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] mt-10" id="About">
      <Header />
      <div className="w-full mx-auto pt-8 sm:pt-12 relative">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
                Hello, I'm
              </span>
              <span className="block mt-2 text-gray-200 text-3xl sm:text-4xl lg:text-5xl">
                Ahmad Dwi Andiko
              </span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 leading-relaxed text-justify pb-4 sm:pb-0">
              a student at Universitas Pamulang (Viktor) with a strong passion for Front-End development. I specialize in crafting engaging
              digital experiences and consistently strive to deliver exceptional solutions in every project I take on.
            </p>

            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:px-0 w-full">
              <a href="https://drive.google.com/drive/folders/1rtH9cWE48e9Dde1_j17B2XwpuCps3H45?usp=drive_link" className="w-full lg:w-auto">
                <button className="w-full lg:w-auto sm:px-8 py-3 sm:py-4 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center lg:justify-start gap-3 shadow-lg hover:shadow-xl">
                  <FileText className="w-5 h-5 sm:w-6 sm:h-6" /> Download CV
                </button>
              </a>
              <a href="#showcase" className="w-full lg:w-auto">
                <button className="w-full lg:w-auto sm:px-8 py-3 sm:py-4 rounded-lg border border-[#a855f7]/50 text-[#a855f7] font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center lg:justify-start gap-3 hover:bg-[#a855f7]/10">
                  <Code className="w-5 h-5 sm:w-6 sm:h-6" /> View Projects
                </button>
              </a>
            </div>
          </div>
          <ProfileImage />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {statsData.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(AboutPage);


