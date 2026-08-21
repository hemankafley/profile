import React from "react";
import { Code, Briefcase, Mail } from "lucide-react";

export const SocialLinks: React.FC = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/hayti-kafley-2b602615a/",
      icon: Briefcase,
    },
    { name: "GitHub", url: "https://github.com/hemankafley", icon: Code },
    { name: "Email", url: "mailto:hemankafley@gmail.com", icon: Mail },
  ];

  return (
    <div className="flex gap-6">
      {socialLinks.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-[#252525] border border-[#333333] rounded-lg transition-all duration-300 hover:text-[#3b82f6] hover:border-[#3b82f6] hover:shadow-accent-glow"
            aria-label={link.name}
          >
            <Icon size={24} />
          </a>
        );
      })}
    </div>
  );
};
