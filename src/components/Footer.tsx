import React from "react";
import {
  Code as GithubIcon,
  Briefcase as LinkedinIcon,
  Mail,
} from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#333333] bg-[#1a1a1a] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Branding */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Hayti Kafley</h3>
            <p className="text-gray-400">Software Engineer</p>
          </div>

          {/* Social Links */}
          <div>
            <p className="text-gray-400 font-semibold text-sm mb-4 uppercase tracking-widest">
              Connect
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/hayti-kafley-2b602615a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#3b82f6] transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href="https://github.com/hemankafley"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#3b82f6] transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href="mailto:hemankafley@gmail.com"
                className="text-gray-400 hover:text-[#3b82f6] transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-gray-400 font-semibold text-sm mb-4 uppercase tracking-widest">
              Quick Links
            </p>
            <div className="space-y-2">
              <a
                href="#home"
                className="block text-gray-400 hover:text-[#3b82f6] transition-colors text-sm"
              >
                Home
              </a>
              <a
                href="#about"
                className="block text-gray-400 hover:text-[#3b82f6] transition-colors text-sm"
              >
                About
              </a>
              <a
                href="#experience"
                className="block text-gray-400 hover:text-[#3b82f6] transition-colors text-sm"
              >
                Experience
              </a>
              <a
                href="#contact"
                className="block text-gray-400 hover:text-[#3b82f6] transition-colors text-sm"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#333333] pt-8">
          <p className="text-center text-gray-500 text-sm">
            © {currentYear} Hayti Kafley. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
