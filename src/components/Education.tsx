import React from "react";
import { BookOpen } from "lucide-react";

export const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="py-20 md:py-28 px-4 bg-gradient-to-b from-[#1a1a1a] to-[#1f1f1f]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-16">
          <h2 className="section-heading">Education</h2>
          <p className="text-gray-400 max-w-2xl">
            Strong foundation in computer science and continuous learning
          </p>
        </div>

        <div className="card-dark max-w-2xl flex items-start gap-6 animate-fadeInUp">
          <div className="p-4 bg-[#1a1a1a] rounded-lg flex-shrink-0">
            <BookOpen size={32} className="text-[#3b82f6]" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-2">
              Bachelor of Science in Computer Science
            </h3>
            <p className="text-[#3b82f6] text-lg font-semibold mb-2">
              Miami University
            </p>
            <p className="text-gray-400">May 2023</p>
            <p className="text-gray-400 mt-3 leading-relaxed">
              Graduated with a strong foundation in software engineering,
              algorithms, systems design, and full-stack application
              development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
