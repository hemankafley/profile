import React from "react";
import { Button } from "./Button";
import { SocialLinks } from "./SocialLinks";

export const Hero: React.FC = () => {
  const professionalImageUrl = "/profile.png";

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 md:pt-0 px-4"
    >
      <div className="max-w-6xl w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fadeInLeft">
            {/* Eyebrow Text */}
            <div className="text-[#3b82f6] font-semibold tracking-widest text-sm md:text-base uppercase">
              Welcome to My Portfolio
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Hi, I'm <span className="accent-gradient">Hayti Kafley</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-300">
                Software Engineer
              </h2>
              <p className="text-gray-400 text-lg">
                Building reliable, scalable, and user-focused applications.
              </p>
            </div>

            {/* Professional Summary */}
            <p className="text-gray-400 leading-relaxed max-w-lg text-base md:text-lg">
              I'm a Software Engineer at PNC focused on application development,
              backend engineering, automation, observability, and reliable
              software delivery. I specialize in building robust systems that
              scale.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="primary" href="#experience">
                View My Experience
              </Button>
              <Button variant="secondary" href="#contact">
                Let's Connect
              </Button>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-[#333333]">
              <p className="text-gray-500 text-sm font-semibold mb-4 uppercase tracking-widest">
                Find me online
              </p>
              <SocialLinks />
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden md:flex items-center justify-center animate-fadeInRight">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] rounded-2xl blur-3xl opacity-20 animate-glow" />

              {/* Image Card */}
              <div className="relative bg-[#252525] border border-[#333333] rounded-2xl p-1 shadow-2xl">
                <img
                  src={professionalImageUrl}
                  alt="Hayti Kafley - Software Engineer"
                  className="w-full aspect-[3/4] object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
