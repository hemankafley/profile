import React from "react";
import { Briefcase, Calendar } from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

export const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "Software Engineer",
      company: "PNC",
      period: "August 2024 - Present",
      description: [
        "Develop and maintain backend applications using Java and Python",
        "Implement frontend features with React and TypeScript",
        "Design and integrate APIs for enterprise systems",
        "Collaborate on ServiceNow API implementations",
        "Monitor application health using Grafana and Dynatrace",
        "Participate in incident response and reliability engineering",
      ],
      technologies: [
        "Java",
        "Python",
        "JavaScript",
        "TypeScript",
        "React",
        "AWS",
        "Grafana",
        "Dynatrace",
        "Docker",
        "Kubernetes",
      ],
    },
    {
      title: "PNC Technology Development Program",
      company: "PNC",
      period: "August 2023 - August 2024",
      description: [
        "Rotational program across multiple technical domains",
        "Software Engineering: Backend development and system design",
        "Technology Operations: Infrastructure and platform management",
        "Site Reliability Engineering: Monitoring and incident response",
        "Data Analysis: Data processing and insights generation",
        "Enterprise Technology: Large-scale system integration",
      ],
      technologies: [
        "Java",
        "Python",
        "React",
        "AWS",
        "Kubernetes",
        "Ansible",
        "BigPanda",
        "SLOs",
        "CI/CD",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-16">
          <h2 className="section-heading">Professional Experience</h2>
          <p className="text-gray-400 max-w-2xl">
            Building scalable systems and driving impact through technical
            excellence
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="card-dark hover:border-[#3b82f6] hover:border-opacity-50 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start mb-4 gap-4">
                <div className="flex gap-4 items-start flex-1">
                  <div className="p-3 bg-[#1a1a1a] rounded-lg">
                    <Briefcase size={24} className="text-[#3b82f6]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {exp.title}
                    </h3>
                    <p className="text-[#3b82f6] font-semibold text-lg">
                      {exp.company}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-400 whitespace-nowrap">
                  <Calendar size={18} />
                  <span className="text-sm font-medium">{exp.period}</span>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                {exp.description.map((item, i) => (
                  <p key={i} className="text-gray-400 flex gap-3">
                    <span className="text-[#3b82f6] flex-shrink-0 mt-1">▸</span>
                    <span>{item}</span>
                  </p>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#333333]">
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-[#1a1a1a] text-gray-300 rounded-full text-sm border border-[#333333] hover:border-[#3b82f6] hover:text-[#3b82f6] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
