"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const serviceLogos = {
  digitalEngineering:
    "https://api.iconify.design/mdi/code-braces.svg?color=%23ffffff&width=96&height=96",
  staffing:
    "https://api.iconify.design/mdi/account-group.svg?color=%23ffffff&width=96&height=96",
  dataAI:
    "https://api.iconify.design/mdi/brain.svg?color=%23ffffff&width=96&height=96",
  cloud:
    "https://api.iconify.design/mdi/cloud-outline.svg?color=%23ffffff&width=96&height=96",
  experience:
    "https://api.iconify.design/mdi/palette-outline.svg?color=%23ffffff&width=96&height=96",
  marketing:
    "https://api.iconify.design/mdi/bullhorn-outline.svg?color=%23ffffff&width=96&height=96",
};
const CardWithEffect = ({ children }: { children: React.ReactNode }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      className="relative bg-[#000] flex-1 rounded-xl border border-white/30 p-4 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ willChange: "transform" }}
    >
      {isHovered && (
        <div
          className="pointer-events-none absolute rounded-full"
          style={{
            width: "300px",
            height: "300px",
            top: mousePosition.y - 150,
            left: mousePosition.x - 150,
            background: "#5D2CA8",
            filter: "blur(100px)",
            transform: "translate(-0%, -0%)",
            zIndex: 10,
            willChange: "transform, top, left",
          }}
        />
      )}
      {children}
    </div>
  );
};

const ServiceCard = ({
  icon,
  title,
  description,
  link,
}: {
  icon: string;
  title: string;
  description: string;
  link: string;
}) => {
  return (
    <div className="flex flex-col justify-center h-full items-center relative p-6">
      <div className="relative bg-black border-2 border-white/70 rounded-2xl flex items-center justify-center w-20 h-20 p-4 overflow-hidden shadow-[0_0_15px_5px_#dbe0e2] mb-6">
        <img
          src={icon}
          alt={title}
          className="filter invert brightness-0 w-full h-full object-contain"
        />
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            duration: 2,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
          style={{ willChange: "transform" }}
        />
      </div>
      <div className="text-center">
        <h1 className="text-white text-2xl font-bold mb-2 hover:bg-gradient-to-r hover:from-pink-400 hover:to-purple-500 hover:bg-clip-text hover:text-transparent transition-all duration-300">
          <a href={link}>{title}</a>
        </h1>
        <p className="text-gray-400 text-base">{description}</p>
      </div>
    </div>
  );
};

const BentoBox1 = () => {
  return (
    <div className="bg-[#000000] flex justify-center items-center min-h-screen p-5 rounded-lg sm:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-7xl">
        <CardWithEffect>
          <ServiceCard
            icon={serviceLogos.digitalEngineering}
            title="Digital Engineering"
            description="Build innovative digital solutions with cutting-edge engineering practices and modern technologies."
            link="/services/digital-engineering"
          />
        </CardWithEffect>

        <CardWithEffect>
          <ServiceCard
            icon={serviceLogos.staffing}
            title="Staffing & Recruiting"
            description="Connect with top talent and build high-performing teams with our expert recruitment services."
            link="/services/staffing"
          />
        </CardWithEffect>

        <CardWithEffect>
          <ServiceCard
            icon={serviceLogos.dataAI}
            title="Data & AI"
            description="Harness the power of data analytics and artificial intelligence to drive business insights."
            link="/services/data-ai"
          />
        </CardWithEffect>

        <CardWithEffect>
          <ServiceCard
            icon={serviceLogos.cloud}
            title="Cloud & DevOps"
            description="Scale your infrastructure with modern cloud solutions and streamlined DevOps practices."
            link="/services/cloud-devops"
          />
        </CardWithEffect>

        <CardWithEffect>
          <ServiceCard
            icon={serviceLogos.experience}
            title="CX & Experience Design"
            description="Create exceptional customer experiences with user-centric design and innovative solutions."
            link="/services/cx-experience-design"
          />
        </CardWithEffect>

        <CardWithEffect>
          <ServiceCard
            icon={serviceLogos.marketing}
            title="Digital Marketing"
            description="Amplify your brand presence and drive growth with data-driven marketing strategies."
            link="/services/digital-marketing"
          />
        </CardWithEffect>
      </div>
    </div>
  );
};

export default BentoBox1;
