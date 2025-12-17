"use client";

import React from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

export const CXExperiencePage = () => {
  const tools = [
    "Figma",
    "Adobe XD",
    "Sketch",
    "InVision",
    "Miro",
    "UserTesting",
    "Hotjar",
    "Maze",
    "Optimal Workshop",
    "Framer",
    "Principle",
    "ProtoPie",
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
            CX & Experience Design
          </p>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            Designing Experiences
            <br />
            Users Love
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-white text-black px-8 py-3 rounded-full hover:bg-white/90 transition-colors">
              View Portfolio
            </button>
            <button className="flex items-center gap-2 px-8 py-3 border border-white/30 rounded-full hover:bg-white/5 transition-colors">
              Book Design Sprint
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 flex items-center justify-center">
                →
              </div>
            </button>
          </div>
          <p className="text-white/70">
            Research • Design • Testing • Iteration
          </p>
          <button className="mt-8 text-white/60 hover:text-white transition-colors">
            <ChevronDown className="w-6 h-6 mx-auto animate-bounce" />
          </button>
        </div>
      </section>

      {/* Tools Section */}
      <section id="about" className="py-16 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-wider text-white/40 mb-8">
            Our Design Tools
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Creating exceptional experiences
            <br />
            with industry-leading design tools
          </h2>

          <div className="relative overflow-hidden py-8">
            <div className="flex gap-12 animate-scroll">
              {[...tools, ...tools].map((tool, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 text-white/40 hover:text-white/70 transition-colors text-sm font-medium whitespace-nowrap"
                >
                  {tool}
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
              Human-centered design that drives business results
            </h2>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              We create meaningful digital experiences that delight users and
              achieve business goals. From research to prototyping to testing,
              our design process is rooted in empathy, data, and continuous
              improvement.
            </p>
            <button className="flex items-center gap-2 text-white hover:text-white/80 transition-colors group">
              Learn more
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Service 01 - UX Research */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-sm uppercase tracking-wider text-white/60 mb-4">
                01 - UX Research & Strategy
              </h3>
              <h2 className="text-5xl font-bold mb-8">
                Understanding your users to inform design decisions
              </h2>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                Uncover deep insights about your users through comprehensive
                research. We combine qualitative and quantitative methods to
                understand behaviors, motivations, and pain points that shape
                effective design strategies.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "User interviews and contextual inquiry",
                  "Usability testing and validation",
                  "Customer journey mapping",
                  "Competitive analysis and benchmarking",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-pink-400">•</span>
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="flex items-center gap-2 text-white hover:text-white/80 transition-colors group">
                Start research
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="aspect-square bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-3xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-sm text-white/60 mb-4">Research</div>
                <div className="text-6xl mb-4">⟷</div>
                <div className="text-sm text-white/60">Insights</div>
                <div className="mt-8 text-xs text-white/40">
                  Data-Driven Design
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 02 - UI/UX Design */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="aspect-square bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-3xl" />
            <div>
              <h3 className="text-sm uppercase tracking-wider text-white/60 mb-4">
                02 - UI/UX Design & Prototyping
              </h3>
              <h2 className="text-5xl font-bold mb-8">
                Beautiful interfaces that work seamlessly
              </h2>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                Create stunning visual designs and interactive prototypes that
                bring your product vision to life. Our designers craft intuitive
                interfaces that balance aesthetics with functionality and
                accessibility.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "User interface design and visual systems",
                  "Interactive prototypes and animations",
                  "Design system creation and maintenance",
                  "Responsive and adaptive design",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-pink-400">•</span>
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="flex items-center gap-2 text-white hover:text-white/80 transition-colors group">
                Explore design services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Service 03 - Service Design */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-sm uppercase tracking-wider text-white/60 mb-4">
                03 - Service Design & CX Transformation
              </h3>
              <h2 className="text-5xl font-bold mb-8">
                Transform your entire customer experience
              </h2>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                Go beyond screens to design holistic service experiences. We map
                and optimize every touchpoint in the customer journey, creating
                seamless experiences across digital and physical channels.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "End-to-end customer journey design",
                  "Service blueprinting and orchestration",
                  "Omnichannel experience strategy",
                  "Voice of customer programs",
                  "CX metrics and measurement",
                  "Employee experience design",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-pink-400">•</span>
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="flex items-center gap-2 text-white hover:text-white/80 transition-colors group">
                Transform CX
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="aspect-square bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-3xl" />
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-sm uppercase tracking-wider text-white/60 mb-4">
            Our Approach
          </h3>
          <h2 className="text-5xl font-bold mb-8 max-w-4xl">
            Design thinking methodology with continuous user validation
          </h2>
          <p className="text-white/70 text-lg max-w-4xl mb-16 leading-relaxed">
            We follow a human-centered design process that puts users at the
            heart of everything we create. Through iterative cycles of research,
            ideation, prototyping, and testing, we ensure every design decision
            is validated and optimized for real user needs.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { value: "40%", label: "Average increase in user satisfaction" },
              { value: "3x", label: "Faster time to market" },
              { value: "500+", label: "User interviews conducted" },
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
            Ready to create exceptional experiences?
          </p>
          <h2 className="text-5xl font-bold mb-8">Let's design together</h2>
          <button className="flex items-center gap-2 mx-auto bg-white text-black px-8 py-4 rounded-full hover:bg-white/90 transition-colors group">
            Start your design project
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
