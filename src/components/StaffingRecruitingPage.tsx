"use client";

import React from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

export const StaffingRecruitingPage = () => {
  const industries = [
    "Technology",
    "Healthcare",
    "Finance",
    "Manufacturing",
    "Retail",
    "Hospitality",
    "Construction",
    "Education",
    "Legal",
    "Marketing",
    "Real Estate",
    "Pharmaceuticals",
  ];

  return (
    <div className="bg-black text-white">
      {/* Spacer for navbar */}
      <div className="h-16" />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-3xl rounded-full" />
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <p className="text-sm uppercase tracking-wider text-white/60 mb-6">
            Staffing & Recruiting Excellence
          </p>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            Your Trusted
            <br />
            Talent Partner
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-white text-black px-8 py-3 rounded-full hover:bg-white/90 transition-colors">
              Explore Services
            </button>
            <button className="flex items-center gap-2 px-8 py-3 border border-white/30 rounded-full hover:bg-white/5 transition-colors">
              Schedule Consultation
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 flex items-center justify-center">
                →
              </div>
            </button>
          </div>
          <p className="text-white/70">
            Connecting Top Talent with Leading Organizations
          </p>
          <button className="mt-8 text-white/60 hover:text-white transition-colors">
            <ChevronDown className="w-6 h-6 mx-auto animate-bounce" />
          </button>
        </div>
      </section>

      {/* Industries Section */}
      <section id="about" className="py-16 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-wider text-white/40 mb-8">
            Industries We Serve
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Providing recruitment solutions across
            <br />
            multiple industries and sectors
          </h2>

          {/* Scrolling industries */}
          <div className="relative overflow-hidden py-8">
            <div className="flex gap-12 animate-scroll">
              {[...industries, ...industries].map((industry, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 text-white/40 hover:text-white/70 transition-colors text-sm font-medium whitespace-nowrap"
                >
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-square bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-3xl" />
          <div>
            <h3 className="text-sm uppercase tracking-wider text-white/60 mb-4">
              Why Choose Us
            </h3>
            <h2 className="text-5xl font-bold mb-6">
              Comprehensive staffing solutions tailored to your needs
            </h2>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              We understand that finding the right talent is crucial for your
              business success. Our comprehensive staffing and recruiting
              services are designed to connect you with qualified professionals
              who align with your company culture and drive your organization
              forward.
            </p>
            <button className="flex items-center gap-2 text-white hover:text-white/80 transition-colors group">
              Learn more
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Service 01 - Permanent Placement */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-sm uppercase tracking-wider text-white/60 mb-4">
                01 - Permanent Placement
              </h3>
              <h2 className="text-5xl font-bold mb-8">
                Building your team for long-term success
              </h2>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                Our permanent placement services focus on finding candidates who
                will grow with your organization. We conduct thorough screening,
                background checks, and skill assessments to ensure the perfect
                match for your company's long-term goals.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Executive search and C-suite recruitment",
                  "Professional and mid-level positions",
                  "Comprehensive candidate screening process",
                  "Cultural fit assessment",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-pink-400">•</span>
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="flex items-center gap-2 text-white hover:text-white/80 transition-colors group">
                Find out more
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="aspect-square bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-3xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-sm text-white/60 mb-4">
                  Qualified Candidates
                </div>
                <div className="text-6xl mb-4">⟷</div>
                <div className="text-sm text-white/60">Your Organization</div>
                <div className="mt-8 text-xs text-white/40">
                  Perfect Match Guaranteed
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 02 - Temporary Staffing */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="aspect-square bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-3xl" />
            <div>
              <h3 className="text-sm uppercase tracking-wider text-white/60 mb-4">
                02 - Temporary Staffing
              </h3>
              <h2 className="text-5xl font-bold mb-8">
                Flexible workforce solutions for dynamic business needs
              </h2>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                Scale your workforce up or down based on project demands,
                seasonal peaks, or interim coverage needs. Our temporary
                staffing solutions provide you with qualified professionals
                ready to contribute from day one.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Short-term and long-term assignments",
                  "Seasonal and project-based staffing",
                  "Immediate availability of qualified talent",
                  "Temp-to-permanent conversion options",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-pink-400">•</span>
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="flex items-center gap-2 text-white hover:text-white/80 transition-colors group">
                Find out more
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Service 03 - Contract & Contract-to-Hire */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-sm uppercase tracking-wider text-white/60 mb-4">
                03 - Contract & Contract-to-Hire
              </h3>
              <h2 className="text-5xl font-bold mb-8">
                Test drive your talent before commitment
              </h2>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                Reduce hiring risks with our contract-to-hire solutions.
                Evaluate candidates' performance, skills, and cultural fit in a
                real work environment before making a permanent hiring decision.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Risk-free evaluation period",
                  "Specialized skills for specific projects",
                  "Smooth transition to permanent employment",
                  "Reduced hiring costs and time",
                  "Payroll and benefits management included",
                  "Flexible contract durations",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-pink-400">•</span>
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="flex items-center gap-2 text-white hover:text-white/80 transition-colors group">
                Find out more
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
            A proven recruitment process that delivers results every time
          </h2>
          <p className="text-white/70 text-lg max-w-4xl mb-16 leading-relaxed">
            Our systematic approach combines industry expertise with
            cutting-edge recruitment technology. We don't just fill positions—we
            build lasting partnerships that help your business thrive. From
            initial consultation to post-placement support, we're with you every
            step of the way.
          </p>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { value: "95%", label: "Client satisfaction rate" },
              { value: "48hrs", label: "Average time to first candidate" },
              { value: "90%", label: "One-year retention rate" },
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
            Ready to find your next great hire?
          </p>
          <h2 className="text-5xl font-bold mb-8">
            Let's start the conversation
          </h2>
          <button className="flex items-center gap-2 mx-auto bg-white text-black px-8 py-4 rounded-full hover:bg-white/90 transition-colors group">
            Contact us today
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
