"use client";

import React from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

export const CloudDevOpsPage = () => {
  const technologies = [
    "AWS",
    "Azure",
    "Google Cloud",
    "Kubernetes",
    "Docker",
    "Terraform",
    "Jenkins",
    "GitLab CI/CD",
    "Prometheus",
    "Grafana",
    "Ansible",
    "ArgoCD",
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
            Cloud & DevOps Services
          </p>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            Accelerate Your
            <br />
            Cloud Journey
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-white text-black px-8 py-3 rounded-full hover:bg-white/90 transition-colors">
              Cloud Assessment
            </button>
            <button className="flex items-center gap-2 px-8 py-3 border border-white/30 rounded-full hover:bg-white/5 transition-colors">
              Talk to Architects
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 flex items-center justify-center">
                →
              </div>
            </button>
          </div>
          <p className="text-white/70">Migration • Automation • Optimization</p>
          <button className="mt-8 text-white/60 hover:text-white transition-colors">
            <ChevronDown className="w-6 h-6 mx-auto animate-bounce" />
          </button>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="about" className="py-16 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-wider text-white/40 mb-8">
            Our Cloud & DevOps Stack
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Building on the world's leading
            <br />
            cloud platforms and DevOps tools
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
              Cloud-native solutions with enterprise-grade reliability
            </h2>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              We help organizations modernize their infrastructure, automate
              operations, and scale seamlessly. From cloud migration to DevOps
              transformation, we deliver solutions that reduce costs, improve
              speed, and enhance reliability.
            </p>
            <button className="flex items-center gap-2 text-white hover:text-white/80 transition-colors group">
              Learn more
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Service 01 - Cloud Migration */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-sm uppercase tracking-wider text-white/60 mb-4">
                01 - Cloud Migration & Modernization
              </h3>
              <h2 className="text-5xl font-bold mb-8">
                Seamlessly move to the cloud with zero downtime
              </h2>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                Migrate your legacy applications and infrastructure to the cloud
                with confidence. Our proven migration strategies minimize risk,
                reduce costs, and accelerate your time to value.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Cloud readiness assessment",
                  "Multi-cloud and hybrid cloud strategy",
                  "Application refactoring and re-platforming",
                  "Data migration and synchronization",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-pink-400">•</span>
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="flex items-center gap-2 text-white hover:text-white/80 transition-colors group">
                Start migration
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="aspect-square bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-3xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-sm text-white/60 mb-4">On-Premise</div>
                <div className="text-6xl mb-4">→</div>
                <div className="text-sm text-white/60">Cloud</div>
                <div className="mt-8 text-xs text-white/40">
                  Secure Migration
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 02 - DevOps Automation */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="aspect-square bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-3xl" />
            <div>
              <h3 className="text-sm uppercase tracking-wider text-white/60 mb-4">
                02 - DevOps & CI/CD Automation
              </h3>
              <h2 className="text-5xl font-bold mb-8">
                Deploy faster with automated pipelines
              </h2>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                Implement modern DevOps practices that enable rapid, reliable
                software delivery. Build automated CI/CD pipelines that reduce
                manual effort, eliminate errors, and accelerate your release
                cycles.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "CI/CD pipeline design and implementation",
                  "Infrastructure as Code (IaC)",
                  "Automated testing and deployment",
                  "GitOps and version control workflows",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-pink-400">•</span>
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="flex items-center gap-2 text-white hover:text-white/80 transition-colors group">
                Automate workflows
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Service 03 - Monitoring & Optimization */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-sm uppercase tracking-wider text-white/60 mb-4">
                03 - Monitoring, Security & Optimization
              </h3>
              <h2 className="text-5xl font-bold mb-8">
                Maintain peak performance with intelligent monitoring
              </h2>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                Ensure your cloud infrastructure runs smoothly with
                comprehensive monitoring, security hardening, and continuous
                optimization. Identify issues before they impact users and
                optimize costs without compromising performance.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Real-time monitoring and alerting",
                  "Cloud security and compliance",
                  "Cost optimization and FinOps",
                  "Performance tuning and scaling",
                  "Disaster recovery and backup",
                  "24/7 infrastructure support",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-pink-400">•</span>
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="flex items-center gap-2 text-white hover:text-white/80 transition-colors group">
                Optimize infrastructure
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
            Cloud-first strategy with security and compliance at the core
          </h2>
          <p className="text-white/70 text-lg max-w-4xl mb-16 leading-relaxed">
            We design cloud architectures that are secure, scalable, and
            cost-effective. Our certified cloud architects and DevOps engineers
            bring best practices from leading organizations to help you build
            resilient systems that grow with your business.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { value: "99.99%", label: "Infrastructure uptime" },
              { value: "70%", label: "Average cost reduction" },
              { value: "10x", label: "Faster deployment cycles" },
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
            Ready to modernize your infrastructure?
          </p>
          <h2 className="text-5xl font-bold mb-8">
            Let's build your cloud future
          </h2>
          <button className="flex items-center gap-2 mx-auto bg-white text-black px-8 py-4 rounded-full hover:bg-white/90 transition-colors group">
            Start cloud transformation
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
