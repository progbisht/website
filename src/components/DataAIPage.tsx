"use client";

import React from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

export const DataAIPage = () => {
  const technologies = [
    "TensorFlow",
    "PyTorch",
    "Scikit-learn",
    "Apache Spark",
    "OpenAI",
    "LangChain",
    "Hugging Face",
    "MLflow",
    "Snowflake",
    "Databricks",
    "BigQuery",
    "Elasticsearch",
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
            Data & AI Solutions
          </p>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            Transform Data Into
            <br />
            Intelligent Action
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-white text-black px-8 py-3 rounded-full hover:bg-white/90 transition-colors">
              Explore AI Solutions
            </button>
            <button className="flex items-center gap-2 px-8 py-3 border border-white/30 rounded-full hover:bg-white/5 transition-colors">
              Book AI Consultation
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 flex items-center justify-center">
                →
              </div>
            </button>
          </div>
          <p className="text-white/70">
            Machine Learning • Big Data • Predictive Analytics
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
            Our AI & Data Stack
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Leveraging advanced technologies
            <br />
            to unlock insights from your data
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
              Intelligent solutions powered by data science and AI
            </h2>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              We help organizations harness the power of their data through
              advanced analytics, machine learning, and AI. From building
              predictive models to deploying enterprise-scale AI systems, we
              turn data into competitive advantage.
            </p>
            <button className="flex items-center gap-2 text-white hover:text-white/80 transition-colors group">
              Learn more
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Service 01 - AI & Machine Learning */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-sm uppercase tracking-wider text-white/60 mb-4">
                01 - AI & Machine Learning
              </h3>
              <h2 className="text-5xl font-bold mb-8">
                Custom AI models that solve real business problems
              </h2>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                Build intelligent systems that learn, adapt, and improve over
                time. From computer vision to natural language processing, we
                develop custom AI solutions tailored to your unique challenges
                and objectives.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Large Language Models (LLM) integration",
                  "Computer vision and image recognition",
                  "Natural Language Processing (NLP)",
                  "Recommendation systems",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-pink-400">•</span>
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="flex items-center gap-2 text-white hover:text-white/80 transition-colors group">
                Explore AI services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="aspect-square bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-3xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-sm text-white/60 mb-4">Raw Data</div>
                <div className="text-6xl mb-4">⟷</div>
                <div className="text-sm text-white/60">AI Insights</div>
                <div className="mt-8 text-xs text-white/40">
                  Intelligent Transformation
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 02 - Data Engineering */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="aspect-square bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-3xl" />
            <div>
              <h3 className="text-sm uppercase tracking-wider text-white/60 mb-4">
                02 - Data Engineering & Pipelines
              </h3>
              <h2 className="text-5xl font-bold mb-8">
                Scalable infrastructure for your data ecosystem
              </h2>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                Design and implement robust data pipelines that collect,
                process, and transform massive volumes of data. Build the
                foundation for reliable analytics and AI with modern data
                architecture.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "ETL/ELT pipeline development",
                  "Data warehouse and lake architecture",
                  "Real-time streaming data processing",
                  "Data quality and governance",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-pink-400">•</span>
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="flex items-center gap-2 text-white hover:text-white/80 transition-colors group">
                Explore data services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Service 03 - Analytics & BI */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-sm uppercase tracking-wider text-white/60 mb-4">
                03 - Analytics & Business Intelligence
              </h3>
              <h2 className="text-5xl font-bold mb-8">
                Make data-driven decisions with powerful insights
              </h2>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                Transform raw data into actionable insights with advanced
                analytics and interactive dashboards. Empower your team to
                explore data, uncover trends, and make informed decisions
                faster.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Interactive dashboards and visualizations",
                  "Predictive and prescriptive analytics",
                  "Customer behavior analysis",
                  "Business intelligence strategy",
                  "Self-service analytics platforms",
                  "Advanced statistical modeling",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-pink-400">•</span>
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="flex items-center gap-2 text-white hover:text-white/80 transition-colors group">
                Explore analytics services
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
            Data-first methodology with proven AI implementation frameworks
          </h2>
          <p className="text-white/70 text-lg max-w-4xl mb-16 leading-relaxed">
            We combine deep technical expertise with business acumen to deliver
            AI and data solutions that create real value. Our data scientists
            and engineers work closely with your team to understand your
            challenges and build solutions that scale.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { value: "10PB+", label: "Data processed annually" },
              { value: "95%", label: "Model accuracy average" },
              { value: "50+", label: "AI models in production" },
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
            Ready to unlock the power of your data?
          </p>
          <h2 className="text-5xl font-bold mb-8">
            Let's build intelligent solutions
          </h2>
          <button className="flex items-center gap-2 mx-auto bg-white text-black px-8 py-4 rounded-full hover:bg-white/90 transition-colors group">
            Get started with AI
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
