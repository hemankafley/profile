import React, { useState } from "react";
import {
  Mail,
  Briefcase as LinkedinIcon,
  Code as GithubIcon,
  Send,
} from "lucide-react";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simple validation
    if (formData.name && formData.email && formData.message) {
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } else {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="space-y-4 mb-16 text-center">
          <h2 className="section-heading">Let's Build Something Reliable</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            I'm open to conversations about software engineering, backend
            development, SRE, observability, and senior engineering
            opportunities.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Email */}
          <a
            href="mailto:hemankafley@gmail.com"
            className="card-dark flex flex-col items-center justify-center py-8 text-center hover:border-[#3b82f6] group"
          >
            <Mail
              size={32}
              className="text-[#3b82f6] mb-4 group-hover:scale-110 transition-transform"
            />
            <p className="text-white font-semibold mb-1">Email</p>
            <p className="text-gray-400 text-sm break-all">
              hemankafley@gmail.com
            </p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/hayti-kafley-2b602615a/"
            target="_blank"
            rel="noopener noreferrer"
            className="card-dark flex flex-col items-center justify-center py-8 text-center hover:border-[#3b82f6] group"
          >
            <LinkedinIcon
              size={32}
              className="text-[#3b82f6] mb-4 group-hover:scale-110 transition-transform"
            />
            <p className="text-white font-semibold mb-1">LinkedIn</p>
            <p className="text-gray-400 text-sm">Hayti Kafley</p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/hemankafley"
            target="_blank"
            rel="noopener noreferrer"
            className="card-dark flex flex-col items-center justify-center py-8 text-center hover:border-[#3b82f6] group"
          >
            <GithubIcon
              size={32}
              className="text-[#3b82f6] mb-4 group-hover:scale-110 transition-transform"
            />
            <p className="text-white font-semibold mb-1">GitHub</p>
            <p className="text-gray-400 text-sm">hemankafley</p>
          </a>
        </div>

        {/* Contact Form */}
        <div className="card-dark max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-6">
            Send me a message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#333333] text-white rounded-lg focus:outline-none focus:border-[#ff1493] transition-colors"
                placeholder="Your name"
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#333333] text-white rounded-lg focus:outline-none focus:border-[#ff1493] transition-colors"
                placeholder="your.email@example.com"
                required
              />
            </div>

            {/* Message Textarea */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#333333] text-white rounded-lg focus:outline-none focus:border-[#3b82f6] transition-colors resize-none"
                placeholder="Your message..."
                rows={5}
                required
              />
            </div>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <div className="p-4 bg-green-500 bg-opacity-10 border border-green-500 text-green-400 rounded-lg text-sm">
                ✓ Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {submitStatus === "error" && (
              <div className="p-4 bg-red-500 bg-opacity-10 border border-red-500 text-red-400 rounded-lg text-sm">
                ✗ Please fill in all fields to send your message.
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 btn-accent mt-6"
            >
              <Send size={18} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
