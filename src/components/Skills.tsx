import React from "react";

interface SkillCategory {
  title: string;
  skills: string[];
}

export const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Languages",
      skills: [
        "Java",
        "Python",
        "JavaScript",
        "TypeScript",
        "C++",
        "C#",
        "SQL",
        "HTML",
        "CSS",
      ],
    },
    {
      title: "Frontend",
      skills: ["React", "Angular", "JavaScript", "TypeScript", "UI/UX Design"],
    },
    {
      title: "Backend",
      skills: [
        "Java",
        "Python",
        "Node.js",
        "REST APIs",
        "API Integrations",
        "Microservices",
      ],
    },
    {
      title: "Cloud & DevOps",
      skills: [
        "AWS",
        "Docker",
        "Kubernetes",
        "Ansible",
        "CI/CD",
        "Infrastructure as Code",
      ],
    },
    {
      title: "Observability & Reliability",
      skills: [
        "Grafana",
        "Dynatrace",
        "BigPanda",
        "SLOs",
        "Monitoring",
        "Incident Response",
        "Site Reliability Engineering",
      ],
    },
    {
      title: "Enterprise Tools",
      skills: [
        "ServiceNow",
        "Archer",
        "Ansible Automation Platform",
        "XMP",
        "SyslogNG",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 md:py-28 px-4 bg-gradient-to-b from-[#1a1a1a] to-[#1f1f1f]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-16">
          <h2 className="section-heading">Technical Skills</h2>
          <p className="text-gray-400 max-w-2xl">
            A comprehensive toolkit of modern technologies and tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="card-dark animate-fadeInUp"
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#3b82f6] rounded-full" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-2 bg-[#1a1a1a] text-gray-300 rounded-lg text-sm border border-[#333333] hover:border-[#3b82f6] hover:text-[#3b82f6] transition-all duration-300 cursor-pointer"
                  >
                    {skill}
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
