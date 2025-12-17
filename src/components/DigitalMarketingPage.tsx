"use client";

import React from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

export const DigitalMarketingPage = () => {
  const platforms = [
    "Google Ads",
    "Facebook",
    "Instagram",
    "LinkedIn",
    "TikTok",
    "Twitter/X",
    "YouTube",
    "Pinterest",
    "Snapchat",
    "SEMrush",
    "HubSpot",
    "Mailchimp",
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
            Digital Marketing Services
          </p>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            Growth Through
            <br />
            Digital Excellence
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-white text-black px-8 py-3 rounded-full hover:bg-white/90 transition-colors">
              View Case Studies
            </button>
            <button className="flex items-center gap-2 px-8 py-3 border border-white/30 rounded-full hover:bg-white/5 transition-colors">
              Free Marketing Audit
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 flex items-center justify-center">
                →
              </div>
            </button>
          </div>
          <p className="text-white/70">
            Strategy • Execution • Optimization • Growth
          </p>
          <button className="mt-8 text-white/60 hover:text-white transition-colors">
            <ChevronDown className="w-6 h-6 mx-auto animate-bounce" />
          </button>
        </div>
      </section>

      {/* Platforms Section */}
      <section id="about" className="py-16 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-wider text-white/40 mb-8">
            Platforms We Master
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Driving results across all major
            <br />
            digital marketing channels
          </h2>

          <div className="relative overflow-hidden py-8">
            <div className="flex gap-12 animate-scroll">
              {[...platforms, ...platforms].map((platform, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 text-white/40 hover:text-white/70 transition-colors text-sm font-medium whitespace-nowrap"
                >
                  {platform}
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
              Data-driven marketing that delivers measurable ROI
            </h2>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              We create and execute comprehensive digital marketing strategies
              that drive growth. From SEO to paid advertising, content marketing
              to social media, we deliver campaigns that reach the right
              audience and convert.
            </p>
            <button className="flex items-center gap-2 text-white hover:text-white/80 transition-colors group">
              Learn more
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Service 01 - SEO & Content */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-sm uppercase tracking-wider text-white/60 mb-4">
                01 - SEO & Content Marketing
              </h3>
              <h2 className="text-5xl font-bold mb-8">
                Dominate search rankings and attract organic traffic
              </h2>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                Boost your online visibility with strategic SEO and compelling
                content. We optimize your digital presence to rank higher, drive
                qualified traffic, and establish your brand as an industry
                authority.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Technical SEO and site optimization",
                  "Keyword research and strategy",
                  "Content creation and optimization",
                  "Link building and authority development",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-pink-400">•</span>
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="flex items-center gap-2 text-white hover:text-white/80 transition-colors group">
                Boost rankings
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="aspect-square bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-3xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-sm text-white/60 mb-4">Content</div>
                <div className="text-6xl mb-4">→</div>
                <div className="text-sm text-white/60">Rankings</div>
                <div className="mt-8 text-xs text-white/40">Organic Growth</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 02 - Paid Advertising */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="aspect-square bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-3xl" />
            <div>
              <h3 className="text-sm uppercase tracking-wider text-white/60 mb-4">
                02 - Paid Advertising & PPC
              </h3>
              <h2 className="text-5xl font-bold mb-8">
                Maximize ROI with targeted paid campaigns
              </h2>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                Drive immediate results with strategic paid advertising across
                search, social, and display networks. We create, manage, and
                optimize campaigns that deliver qualified leads and maximize
                your advertising budget.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Google Ads and search campaigns",
                  "Social media advertising (Meta, LinkedIn, TikTok)",
                  "Display and programmatic advertising",
                  "Remarketing and retargeting strategies",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-pink-400">•</span>
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="flex items-center gap-2 text-white hover:text-white/80 transition-colors group">
                Launch campaigns
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Service 03 - Social & Email */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-sm uppercase tracking-wider text-white/60 mb-4">
                03 - Social Media & Email Marketing
              </h3>
              <h2 className="text-5xl font-bold mb-8">
                Build lasting relationships with your audience
              </h2>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                Engage your audience where they spend their time. We create
                compelling social media strategies and email campaigns that
                build brand loyalty, drive engagement, and nurture leads through
                the customer journey.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Social media strategy and management",
                  "Community building and engagement",
                  "Email marketing automation",
                  "Newsletter design and campaigns",
                  "Influencer marketing programs",
                  "Social listening and reputation management",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-pink-400">•</span>
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="flex items-center gap-2 text-white hover:text-white/80 transition-colors group">
                Grow your audience
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="aspect-square bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-3xl" />
          </div>
        </div>
      </section>

      {/* Our Results Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-sm uppercase tracking-wider text-white/60 mb-4">
            Our Results
          </h3>
          <h2 className="text-5xl font-bold mb-8 max-w-4xl">
            Performance-driven campaigns backed by analytics and insights
          </h2>
          <p className="text-white/70 text-lg max-w-4xl mb-16 leading-relaxed">
            We don't just run campaigns—we obsess over performance. Through
            continuous testing, optimization, and data analysis, we ensure every
            marketing dollar works harder to achieve your business goals.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { value: "350%", label: "Average ROI increase" },
              { value: "180%", label: "Growth in organic traffic" },
              { value: "$50M+", label: "Ad spend managed" },
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
          <p className="text-white/60 mb-4">Ready to accelerate your growth?</p>
          <h2 className="text-5xl font-bold mb-8">
            Let's create your success story
          </h2>
          <button className="flex items-center gap-2 mx-auto bg-white text-black px-8 py-4 rounded-full hover:bg-white/90 transition-colors group">
            Start your campaign
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
