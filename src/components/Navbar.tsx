import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./Button";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-[#1a1a1a]/95 backdrop-blur-sm border-b border-[#333333] z-50 animate-slideInDown">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a
            href="#home"
            className="text-2xl font-bold text-white hover:text-[#55b6d3] transition-colors"
          >
            Hayti Kafley
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-300 hover:text-[#3b82f6] transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact">
              <Button variant="primary">Let's Connect</Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-[#333333] animate-slideInDown">
            <div className="flex flex-col gap-4 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-300 hover:text-[#cef102] transition-colors block py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="w-full"
                onClick={() => setIsOpen(false)}
              >
                <Button variant="primary" className="w-full">
                  Let's Connect
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
