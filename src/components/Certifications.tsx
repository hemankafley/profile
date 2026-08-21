import React from "react";
import { Award } from "lucide-react";

interface Certification {
  title: string;
  issuer: string;
  year?: string;
}

export const Certifications: React.FC = () => {
  const certifications: Certification[] = [
    {
      title: "Product Management Certificate",
      issuer: "Cornell University",
      year: "2024",
    },
    {
      title: "ICAgile Certified Professional",
      issuer: "ICAgile",
      year: "2023",
    },
    {
      title: "Certified BigPanda Operator",
      issuer: "BigPanda",
      year: "2024",
    },
    {
      title: "AIOps Foundation",
      issuer: "The AIOps Community",
      year: "2024",
    },
  ];

  return (
    <section id="certifications" className="py-20 md:py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-16">
          <h2 className="section-heading">Certifications</h2>
          <p className="text-gray-400 max-w-2xl">
            Professional credentials and continuous learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="card-dark flex items-start gap-4 animate-fadeInUp"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="p-3 bg-[#1a1a1a] rounded-lg flex-shrink-0">
                <Award size={24} className="text-[#3b82f6]" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white">{cert.title}</h3>
                <p className="text-[#3b82f6] text-sm font-medium">
                  {cert.issuer}
                </p>
                {cert.year && (
                  <p className="text-gray-500 text-xs mt-1">{cert.year}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
