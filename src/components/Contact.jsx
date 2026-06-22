import { Mail, MapPin, Phone, Send, Github, Linkedin, Code2, Award, ExternalLink, FileDown } from 'lucide-react';
import { socialLinks, resumeLinks } from '../data/portfolioData';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [showResumeOptions, setShowResumeOptions] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:priyansusikdar4@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}%0A%0AReply to: ${formData.email}`;
  };

  const contactInfo = [
    { icon: Mail, text: "priyansusikdar4@gmail.com", link: "mailto:priyansusikdar4@gmail.com" },
    { icon: MapPin, text: "Jaipur, Rajasthan, India", link: null },
  ];

  const platformLinks = [
    { name: "GitHub", url: socialLinks.github, icon: Github, color: "hover:text-gray-600 dark:hover:text-gray-400" },
    { name: "LinkedIn", url: socialLinks.linkedin, icon: Linkedin, color: "hover:text-blue-600 dark:hover:text-blue-400" },
    { name: "LeetCode", url: socialLinks.leetcode, icon: Code2, color: "hover:text-yellow-600 dark:hover:text-yellow-400" },
    { name: "HackerRank", url: socialLinks.hackerrank, icon: Award, color: "hover:text-green-600 dark:hover:text-green-400" },
    { name: "Unstop", url: socialLinks.unstop, icon: ExternalLink, color: "hover:text-purple-600 dark:hover:text-purple-400" },
  ];

  // All resume options
  const resumeOptions = [
    { name: "AI/ML Resume", link: resumeLinks.aiMl, icon: "🤖" },
    { name: "Data Science Resume", link: resumeLinks.dataScience, icon: "📊" },
    { name: "Data Analyst Resume", link: resumeLinks.dataAnalyst, icon: "📈" },
    { name: "Frontend Resume", link: resumeLinks.frontend, icon: "🎨" },
    { name: "Python Developer Resume", link: resumeLinks.python, icon: "🐍" },
    { name: "Software Testing Resume", link: resumeLinks.softwareTesting, icon: "🧪" },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            📬 <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
            Let's connect and collaborate on exciting projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card p-6"
          >
            <h3 className="text-2xl font-semibold mb-4">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-2 bg-white/10 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-white/20 focus:border-purple-500 focus:outline-none text-gray-900 dark:text-white"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-2 bg-white/10 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-white/20 focus:border-purple-500 focus:outline-none text-gray-900 dark:text-white"
                required
              />
              <textarea
                rows="4"
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-2 bg-white/10 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-white/20 focus:border-purple-500 focus:outline-none text-gray-900 dark:text-white"
                required
              ></textarea>
              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-card p-6">
              <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-3">
                {contactInfo.map((info, idx) => (
                  info.link ? (
                    <a key={idx} href={info.link} className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                      <info.icon className="w-5 h-5" />
                      <span>{info.text}</span>
                    </a>
                  ) : (
                    <div key={idx} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                      <info.icon className="w-5 h-5" />
                      <span>{info.text}</span>
                    </div>
                  )
                ))}
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-2xl font-semibold mb-4">Find Me On</h3>
              <div className="flex flex-wrap gap-3">
                {platformLinks.map((platform, idx) => (
                  <a
                    key={idx}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 glass-card px-4 py-2 ${platform.color} transition-all hover:scale-105`}
                  >
                    <platform.icon className="w-4 h-4" />
                    {platform.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Download Resume - Working Dropdown */}
            <div className="glass-card p-6">
              <h3 className="text-2xl font-semibold mb-4">📄 Download Resume</h3>
              
              {/* Main Dropdown Button */}
              <button
                onClick={() => setShowResumeOptions(!showResumeOptions)}
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                <FileDown className="w-4 h-4" />
                Choose Your Resume
              </button>

              {/* Resume Options Dropdown */}
              {showResumeOptions && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-3 space-y-2"
                >
                  {resumeOptions.map((resume, idx) => (
                    <a
                      key={idx}
                      href={resume.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 glass-card px-4 py-3 hover:bg-purple-500/10 transition-all hover:scale-[1.02] text-gray-700 dark:text-gray-300"
                      onClick={() => setShowResumeOptions(false)}
                    >
                      <span className="text-xl">{resume.icon}</span>
                      <span>{resume.name}</span>
                      <ExternalLink className="w-4 h-4 ml-auto opacity-50" />
                    </a>
                  ))}
                </motion.div>
              )}
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-3 text-center">
                *All resumes open in a new tab
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;