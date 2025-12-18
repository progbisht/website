"use client";

import React from "react";
import { Users, Target, Zap, Award, TrendingUp, Globe } from "lucide-react";

export const AboutPage = () => {
  const stats = [
    { value: "500+", label: "Projects Delivered" },
    { value: "50+", label: "Global Clients" },
    { value: "200+", label: "Tech Experts" },
    { value: "98%", label: "Client Satisfaction" },
  ];

  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description:
        "We're committed to empowering businesses through innovative technology solutions that drive real results.",
    },
    {
      icon: Users,
      title: "People First",
      description:
        "Our success is built on the talent and dedication of our team and the strong partnerships we build with clients.",
    },
    {
      icon: Zap,
      title: "Innovation Focus",
      description:
        "We stay ahead of the curve, leveraging cutting-edge technologies to solve complex business challenges.",
    },
    {
      icon: Award,
      title: "Excellence Always",
      description:
        "Quality is non-negotiable. We deliver exceptional results that exceed expectations every time.",
    },
  ];

  const milestones = [
    {
      year: "2015",
      title: "Company Founded",
      description:
        "Started with a vision to transform businesses through technology",
    },
    {
      year: "2018",
      title: "Global Expansion",
      description:
        "Opened offices across 3 continents to serve clients worldwide",
    },
    {
      year: "2021",
      title: "500+ Projects",
      description: "Reached milestone of 500 successful project deliveries",
    },
    {
      year: "2024",
      title: "Industry Leader",
      description:
        "Recognized as a top IT services provider in digital transformation",
    },
  ];

  return (
    <div className="bg-black text-white">
      {/* Spacer for navbar */}
      <div className="h-16" />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Building the Future of
            <span className="block bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
              Digital Innovation
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto">
            We're a team of passionate technologists, strategists, and
            problem-solvers dedicated to transforming businesses through
            cutting-edge digital solutions.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <p className="text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-white/70 text-lg">
                <p>
                  Founded in 2015, ApniCompany began with a simple mission: to
                  bridge the gap between innovative technology and business
                  success. What started as a small team of passionate developers
                  has grown into a global force in digital transformation.
                </p>
                <p>
                  Today, we partner with organizations across industries—from
                  startups to Fortune 500 companies—helping them navigate the
                  complex landscape of modern technology. Our expertise spans
                  staffing, digital engineering, cloud solutions, data & AI, and
                  beyond.
                </p>
                <p>
                  We don't just deliver projects; we build lasting partnerships.
                  Our success is measured by the growth and achievements of the
                  businesses we serve.
                </p>
              </div>
            </div>
            <div className="aspect-square bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-3xl border border-white/10"></div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-white/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Journey</h2>
            <p className="text-xl text-white/70">
              Key milestones that shaped our growth
            </p>
          </div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-24 text-right">
                  <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-shrink-0 w-4 h-4 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 mt-2"></div>
                <div className="flex-1 pb-12 border-l-2 border-white/10 pl-8 -ml-2">
                  <h3 className="text-2xl font-bold mb-2">{milestone.title}</h3>
                  <p className="text-white/70">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Global Presence
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              With offices and teams across the world, we deliver local
              expertise with global capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "15+ Countries",
                description: "Operating across multiple continents",
              },
              {
                icon: Users,
                title: "200+ Experts",
                description: "Certified professionals in latest technologies",
              },
              {
                icon: TrendingUp,
                title: "24/7 Support",
                description: "Round-the-clock assistance for all clients",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-8 bg-white/5 border border-white/10 rounded-2xl"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-white/70 mb-8">
            Let's discuss how we can help transform your business through
            innovative technology solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-pink-400 to-purple-500 text-white px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity">
              Get in Touch
            </button>
            <button className="border border-white/30 px-8 py-4 rounded-full font-medium hover:bg-white/5 transition-colors">
              View Our Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
