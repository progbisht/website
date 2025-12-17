"use client";

import React from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

export const DigitalEngineeringPage = () => {
  const technologies = [
    "React",
    "Node.js",
    "Python",
    "Java",
    "Kubernetes",
    "Microservices",
    "TypeScript",
    "GraphQL",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "AWS",
  ];

  return (
    <div className="bg-black text-white">
      <div className="h-16" />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-3xl rounded-full" />
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <p className="text-sm uppercase tracking-wider text-white/60 mb-6">
            Digital Engineering Services
          </p>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            Building Digital
            <br />
            Products That Scale
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-white text-black px-8 py-3 rounded-full hover:bg-white/90 transition-colors">
              View Our Work
            </button>
            <button className="flex items-center gap-2 px-8 py-3 border border-white/30 rounded-full hover:bg-white/5 transition-colors">
              Talk to Engineers
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 flex items-center justify-center">
                →
              </div>
            </button>
          </div>
          <p className="text-white/70">
            Modern Architecture • Agile Delivery • Quality Code
          </p>
          <button className="mt-8 text-white/60 hover:text-white transition-colors">
            <ChevronDown className="w-6 h-6 mx-auto animate-bounce" />
          </button>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="about" className="py-16 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-wider text-white/40 mb-8">
            Our Technology Stack
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Working with cutting-edge technologies
            <br />
            to build robust digital solutions
          </h2>

          <div className="relative overflow-hidden py-8">
            <div className="flex gap-12 animate-scroll">
              {[...technologies, ...technologies].map((tech, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 text-white/40 hover:text-white/70 transition-colors text-sm font-medium whitespace-nowrap"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-square bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-3xl" />
          <div>
            <h3 className="text-sm uppercase tracking-wider text-white/60 mb-4">
              What We Do
            </h3>
            <h2 className="text-5xl font-bold mb-6">
              End-to-end software development and engineering excellence
            </h2>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              We design, build, and maintain scalable digital products that
              drive business growth. Our engineering teams work as an extension
              of yours, bringing expertise in modern architecture, best
              practices, and cutting-edge technologies to deliver exceptional
              results.
            </p>
            <button className="flex items-center gap-2 text-white hover:text-white/80 transition-colors group">
              Learn more
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Service 01 - Web & Mobile Development */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-sm uppercase tracking-wider text-white/60 mb-4">
                01 - Web & Mobile Development
              </h3>
              <h2 className="text-5xl font-bold mb-8">
                Responsive applications that users love
              </h2>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                Build fast, scalable, and beautiful web and mobile applications
                using modern frameworks. We create seamless experiences across
                all devices with performance, accessibility, and user experience
                at the forefront.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Progressive Web Apps (PWA)",
                  "Native iOS and Android applications",
                  "Cross-platform solutions with React Native",
                  "Responsive web design and development",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-pink-400">•</span>
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="flex items-center gap-2 text-white hover:text-white/80 transition-colors group">
                Explore solutions
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="aspect-square bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-3xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-sm text-white/60 mb-4">Frontend</div>
                <div className="text-6xl mb-4">⟷</div>
                <div className="text-sm text-white/60">Backend</div>
                <div className="mt-8 text-xs text-white/40">
                  Seamless Integration
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 02 - API & Backend Systems */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="aspect-square bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-3xl" />
            <div>
              <h3 className="text-sm uppercase tracking-wider text-white/60 mb-4">
                02 - API & Backend Systems
              </h3>
              <h2 className="text-5xl font-bold mb-8">
                Robust infrastructure that powers your business
              </h2>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                Design and implement scalable backend systems with microservices
                architecture, RESTful and GraphQL APIs, and optimized database
                solutions that handle millions of requests with reliability and
                speed.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Microservices architecture design",
                  "RESTful and GraphQL API development",
                  "Database design and optimization",
                  "Real-time systems and WebSockets",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-pink-400">•</span>
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="flex items-center gap-2 text-white hover:text-white/80 transition-colors group">
                Explore solutions
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Service 03 - Quality & Testing */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-sm uppercase tracking-wider text-white/60 mb-4">
                03 - Quality Assurance & Testing
              </h3>
              <h2 className="text-5xl font-bold mb-8">
                Ship with confidence through rigorous testing
              </h2>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                Comprehensive testing strategies that catch bugs before they
                reach production. From automated testing pipelines to manual QA,
                we ensure your applications meet the highest quality standards.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Automated testing (Unit, Integration, E2E)",
                  "Performance and load testing",
                  "Security testing and audits",
                  "Continuous testing in CI/CD pipelines",
                  "Manual QA and user acceptance testing",
                  "Test-driven development (TDD)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-pink-400">•</span>
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="flex items-center gap-2 text-white hover:text-white/80 transition-colors group">
                Explore solutions
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="aspect-square bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-3xl" />
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-sm uppercase tracking-wider text-white/60 mb-4">
            Our Process
          </h3>
          <h2 className="text-5xl font-bold mb-8 max-w-4xl">
            Agile methodology with a focus on collaboration and rapid delivery
          </h2>
          <p className="text-white/70 text-lg max-w-4xl mb-16 leading-relaxed">
            We follow industry best practices with agile sprints, continuous
            integration, and regular client collaboration. Our engineers don't
            just write code—they understand your business goals and build
            solutions that drive measurable outcomes.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { value: "100+", label: "Projects delivered" },
              { value: "99.9%", label: "Uptime guarantee" },
              { value: "2 weeks", label: "Average sprint cycle" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-sm text-white/60 mb-2">{stat.label}</p>
                <p className="text-7xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white/60 mb-4">
            Ready to build something extraordinary?
          </p>
          <h2 className="text-5xl font-bold mb-8">
            Let's engineer your success
          </h2>
          <button className="flex items-center gap-2 mx-auto bg-white text-black px-8 py-4 rounded-full hover:bg-white/90 transition-colors group">
            Start your project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
};
