"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Search, ChevronDown, MapPin } from "lucide-react";
import LogoImage from "../assets/icons/logo.svg";

const navigationItems = [
  {
    title: "What we do",
    submenu: {
      columns: [
        {
          heading: "Solutions",
          links: [
            {
              label: "Digital Engineering",
              href: "/services/digital-engineering",
            },
            {
              label: "Staffing & Recruiting",
              href: "/services/staffing-recruiting",
            },
            { label: "Data & AI", href: "/services/data-ai" },
            { label: "Cloud & Devops", href: "/services/cloud-devops" },
            {
              label: "CX & Experience Design",
              href: "/services/cx-experience-design",
            },
            { label: "Digital Marketing", href: "/services/digital-marketing" },
          ],
        },
        {
          heading: "Industries",
          links: [
            { label: "Banking", href: "/industries/banking" },
            { label: "Healthcare", href: "/industries/healthcare" },
            { label: "Retail", href: "/industries/retail" },
            { label: "Technology", href: "/industries/technology" },
            { label: "Manufacturing", href: "/industries/manufacturing" },
            { label: "Energy", href: "/industries/energy" },
          ],
        },
      ],
    },
  },
  {
    title: "Who we are",
    submenu: {
      columns: [
        {
          heading: "Our organization",
          links: [
            { label: "About Us", href: "/about" },
            { label: "Leadership", href: "/about/leadership" },
            { label: "Locations", href: "/about/locations" },
            { label: "Awards", href: "/about/awards" },
          ],
        },
        {
          heading: "How we serve",
          links: [
            { label: "Consulting", href: "/services/consulting" },
            { label: "Technology", href: "/services/technology" },
            { label: "Operations", href: "/services/operations" },
          ],
        },
      ],
    },
  },
  { title: "Careers", href: "/careers" },
  { title: "Contact Us", href: "/contact" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
  };

  const toggleMobileDropdown = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <nav className="bg-black text-white fixed top-0 left-0 right-0 z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 relative">
          {/* Logo */}
          <Link href="/" className="relative flex-shrink-0">
            <div className="absolute w-full top-2 bottom-0 bg-gradient-to-r from-pink-400 via-purple-500 to-pink-500 blur-md opacity-75"></div>
            <LogoImage className="h-10 w-10 relative" />
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {navigationItems.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => item.submenu && setActiveDropdown(index)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className="px-4 py-2 text-sm hover:text-white/80 transition-colors flex items-center gap-1 text-white/90"
                  >
                    {item.title}
                  </Link>
                ) : (
                  <button className="px-4 py-2 text-sm hover:text-white/80 transition-colors flex items-center gap-1 text-white/90">
                    {item.title}
                    {item.submenu && <ChevronDown className="w-4 h-4" />}
                  </button>
                )}

                {/* Mega Menu Dropdown */}
                {item.submenu && activeDropdown === index && (
                  <div className="absolute top-full left-0 w-screen max-w-4xl bg-black border border-white/10 shadow-2xl mt-0">
                    <div className="p-8">
                      <div className="grid grid-cols-2 gap-12">
                        {item.submenu.columns.map((column, colIndex) => (
                          <div key={colIndex}>
                            <h3 className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-4">
                              {column.heading}
                            </h3>
                            <ul className="space-y-3">
                              {column.links.map((link, linkIndex) => (
                                <li key={linkIndex}>
                                  <Link
                                    href={link.href}
                                    className="text-sm text-white/80 hover:text-white transition-colors block"
                                  >
                                    {link.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4 flex-shrink-0">
            {/* Search Icon - Desktop */}
            <button
              className="hidden lg:block p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Location Selector - Desktop */}
            <button className="hidden lg:flex items-center gap-2 px-3 py-2 hover:bg-white/10 rounded-lg transition-colors">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">India</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 border border-white/30 rounded-lg hover:bg-white/10 transition-colors"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-white/10 py-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
            {navigationItems.map((item, index) => (
              <div
                key={index}
                className="border-b border-white/10 last:border-0"
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-white/90 hover:text-white"
                    onClick={toggleMobileMenu}
                  >
                    {item.title}
                  </Link>
                ) : (
                  <>
                    <button
                      onClick={() => toggleMobileDropdown(index)}
                      className="w-full px-4 py-3 text-left text-white/90 hover:text-white flex items-center justify-between"
                    >
                      {item.title}
                      {item.submenu && (
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            activeDropdown === index ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </button>

                    {item.submenu && activeDropdown === index && (
                      <div className="bg-white/5 px-4 py-3">
                        {item.submenu.columns.map((column, colIndex) => (
                          <div key={colIndex} className="mb-4 last:mb-0">
                            <h3 className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-2">
                              {column.heading}
                            </h3>
                            <ul className="space-y-2">
                              {column.links.map((link, linkIndex) => (
                                <li key={linkIndex}>
                                  <Link
                                    href={link.href}
                                    className="text-sm text-white/80 hover:text-white block py-1"
                                    onClick={toggleMobileMenu}
                                  >
                                    {link.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}

            {/* Mobile Bottom Actions */}
            <div className="px-4 pt-4 space-y-3">
              <div className="flex items-center gap-3 justify-center pt-2">
                <button
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  aria-label="Search"
                >
                  <Search className="w-5 h-5" />
                </button>
                <button className="flex items-center gap-2 px-3 py-2 hover:bg-white/10 rounded-lg transition-colors">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">India</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
