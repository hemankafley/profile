import React from "react";
import { Button } from "./Button";

export const About: React.FC = () => {
  const secondaryImageUrl = "/aboutme.png";

  return (
    <section
      id="about"
      className="py-20 md:py-28 px-4 bg-gradient-to-b from-[#1a1a1a] to-[#1f1f1f]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Image */}
          <div className="hidden md:flex items-center justify-center order-2 md:order-1 animate-fadeInLeft">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] rounded-2xl blur-3xl opacity-20" />

              {/* Image Card */}
              <div className="relative bg-[#252525] border border-[#333333] rounded-2xl p-1">
                <img
                  src={secondaryImageUrl}
                  alt="Professional headshot"
                  className="w-full aspect-[3/4] object-cover rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6 order-1 md:order-2 animate-fadeInRight">
            <h2 className="section-heading">Who I Am?</h2>

            <p className="text-gray-400 leading-relaxed">
              I'm a Software Engineer with a passion for building robust,
              scalable systems that make a real impact. My expertise spans
              backend development, frontend technologies, and the full spectrum
              of modern application development.
            </p>

            <p className="text-gray-400 leading-relaxed">
              At PNC, I work on application development and backend engineering,
              focusing on:
            </p>

            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start gap-3">
                <span className="text-[#3b82f6] font-bold">✓</span>
                <span>
                  Backend & Frontend Development with Java, Python, JavaScript,
                  and TypeScript
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#3b82f6] font-bold">✓</span>
                <span>
                  API design, integrations, and ServiceNow platform expertise
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#3b82f6] font-bold">✓</span>
                <span>
                  Observability, monitoring (Grafana, Dynatrace), and
                  reliability engineering
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#3b82f6] font-bold">✓</span>
                <span>
                  Automation, CI/CD pipelines, and enterprise software delivery
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#3b82f6] font-bold">✓</span>
                <span>
                  Cloud technologies (AWS), containerization, and infrastructure
                  automation
                </span>
              </li>
            </ul>

            <p className="text-gray-400 leading-relaxed pt-4">
              I'm driven by a commitment to write clean, maintainable code and
              build systems that engineers can trust.
            </p>

            <div className="pt-6">
              <Button variant="primary">Download Resume</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
