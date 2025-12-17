"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export const ContactPage = () => {
  const [activeTab, setActiveTab] = useState("services");

  const tabs = [
    { id: "services", label: "Request for services" },
    { id: "careers", label: "Join our team" },
    { id: "general", label: "General inquiries" },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Spacer for navbar */}
      <div className="h-16" />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Get in touch</h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Let's start a conversation about how we can help transform your
            business
          </p>
        </div>
      </section>

      {/* Tabs and Form Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full transition-all ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-pink-400 to-purple-500 text-white"
                    : "bg-white/5 text-white/70 hover:bg-white/10"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Form */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="space-y-6">
              {/* Name Fields */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="flex px-2 items-center text-sm font-medium mb-2">
                    First name <span className="text-pink-400 ml-1">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-full focus:outline-none focus:border-pink-400 transition-colors"
                    placeholder="John"
                  />
                </div>

                <div>
                  <label className="flex px-2 items-center text-sm font-medium mb-2">
                    Last name <span className="text-pink-400 ml-1">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-full focus:outline-none focus:border-pink-400 transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="flex px-2 items-center text-sm font-medium mb-2">
                  {activeTab === "careers" ? "Email" : "Business Email"}
                  <span className="text-pink-400 ml-1">*</span>
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-full focus:outline-none focus:border-pink-400 transition-colors"
                  placeholder="john.doe@company.com"
                />
              </div>

              {/* Company */}
              {activeTab === "services" && (
                <div>
                  <label className="flex px-2 items-center text-sm font-medium mb-2">
                    Company <span className="text-pink-400 ml-1">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-full focus:outline-none focus:border-pink-400 transition-colors"
                    placeholder="Company name"
                  />
                </div>
              )}

              {/* Phone */}
              <div>
                <label className="flex px-2 items-center text-sm font-medium mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-full focus:outline-none focus:border-pink-400 transition-colors"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              {/* Service Interest */}
              {activeTab === "services" && (
                <div>
                  <label className="flex px-2 items-center text-sm font-medium mb-2">
                    Service Interest
                  </label>
                  <select className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-full focus:outline-none focus:border-pink-400 transition-colors text-white appearance-none cursor-pointer">
                    <option value="" className="bg-black">
                      Select a service
                    </option>
                    <option value="staffing" className="bg-black">
                      Staffing & Recruiting
                    </option>
                    <option value="engineering" className="bg-black">
                      Digital Engineering
                    </option>
                    <option value="data-ai" className="bg-black">
                      Data & AI
                    </option>
                    <option value="cloud" className="bg-black">
                      Cloud & DevOps
                    </option>
                    <option value="cx" className="bg-black">
                      CX & Experience Design
                    </option>
                    <option value="marketing" className="bg-black">
                      Digital Marketing
                    </option>
                  </select>
                </div>
              )}

              {/* Message */}
              <div>
                <label className="flex px-2 items-center text-sm font-medium mb-2">
                  Message <span className="text-pink-400 ml-1">*</span>
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-3xl focus:outline-none focus:border-pink-400 transition-colors resize-none"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>

              {/* Consent */}
              <div className="space-y-3">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 w-4 h-4 rounded border-white/20 bg-white/5"
                  />
                  <span className="text-sm text-white/70">
                    Send me occasional information about Eldora UI news and
                    events
                  </span>
                </label>
                <p className="text-xs text-white/50">
                  You may withdraw your consent at any time. For more
                  information, see our{" "}
                  <a
                    href="/privacy"
                    className="text-pink-400 hover:text-pink-300"
                  >
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>

              {/* Submit Button */}
              <button className="w-full bg-gradient-to-r from-pink-400 to-purple-500 text-white px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                Submit
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
