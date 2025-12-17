import Link from "next/link";
import InstaIcon from "../assets/icons/insta.svg";
import XIcon from "../assets/icons/x-social.svg";
import LinkedInIcon from "../assets/icons/linkedin.svg";
import YoutubeIcon from "../assets/icons/youtube.svg";

export const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-white/20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Services Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/staffing-recruiting"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Staffing & Recruiting
                </Link>
              </li>
              <li>
                <Link
                  href="/services/digital-engineering"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Digital Engineering
                </Link>
              </li>
              <li>
                <Link
                  href="/services/data-ai"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Data & AI
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cloud-devops"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Cloud & DevOps
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cx-experience-design"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  CX & Experience Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services/digital-marketing"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/about/leadership"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Leadership
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/insights"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Insights
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/case-studies"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/whitepapers"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Whitepapers
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/newsletter"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Newsletter
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Connect With Us</h3>
            <p className="text-white/60 mb-6 text-sm">
              Stay updated with our latest insights, news, and innovations.
            </p>
            <ul className="flex gap-4 mb-8">
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:opacity-75 transition-opacity"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon className="w-5 h-5" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:opacity-75 transition-opacity"
                  aria-label="Twitter"
                >
                  <XIcon className="w-5 h-5" />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:opacity-75 transition-opacity"
                  aria-label="Instagram"
                >
                  <InstaIcon className="w-5 h-5" />
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:opacity-75 transition-opacity"
                  aria-label="YouTube"
                >
                  <YoutubeIcon className="w-5 h-5" />
                </a>
              </li>
            </ul>

            {/* Office Info */}
            <div className="text-sm text-white/60">
              <p className="font-semibold text-white mb-2">Headquarters</p>
              <p>123 Business Street</p>
              <p>City, State 12345</p>
              <p className="mt-2">info@eldoraui.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/60 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Intell. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link
                href="/privacy"
                className="text-white/60 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-white/60 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-white/60 hover:text-white transition-colors"
              >
                Cookie Policy
              </Link>
              <Link
                href="/sitemap"
                className="text-white/60 hover:text-white transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
