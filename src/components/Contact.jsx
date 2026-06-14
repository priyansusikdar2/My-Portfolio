import { Mail, MapPin, Phone, Send, Github, Linkedin, Code2, Award, ExternalLink } from 'lucide-react';
import { socialLinks } from '../data/portfolioData';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can integrate EmailJS or Formspree here
    window.location.href = `mailto:priyansusikdar4@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}%0A%0AReply to: ${formData.email}`;
  };

  const contactInfo = [
    { icon: Mail, text: "priyansusikdar4@gmail.com", link: "mailto:priyansusikdar4@gmail.com" },
    { icon: MapPin, text: "Jaipur, Rajasthan, India", link: null },
  ];

  const platformLinks = [
    { name: "GitHub", url: socialLinks.github, icon: Github, color: "hover:text-gray-400" },
    { name: "LinkedIn", url: socialLinks.linkedin, icon: Linkedin, color: "hover:text-blue-400" },
    { name: "LeetCode", url: socialLinks.leetcode, icon: Code2, color: "hover:text-yellow-400" },
    { name: "HackerRank", url: socialLinks.hackerrank, icon: Award, color: "hover:text-green-400" },
    { name: "Unstop", url: socialLinks.unstop, icon: ExternalLink, color: "hover:text-purple-400" },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          📬 <span className="gradient-text">Get In Touch</span>
        </h2>
        <p className="text-center text-gray-400 mb-12">
          Let's connect and collaborate on exciting projects
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="glass-card p-6">
            <h3 className="text-2xl font-semibold mb-4">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-2 bg-white/10 rounded-lg border border-white/20 focus:border-purple-500 focus:outline-none"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-2 bg-white/10 rounded-lg border border-white/20 focus:border-purple-500 focus:outline-none"
                required
              />
              <textarea
                rows="4"
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-2 bg-white/10 rounded-lg border border-white/20 focus:border-purple-500 focus:outline-none"
                required
              ></textarea>
              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="glass-card p-6">
              <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-3">
                {contactInfo.map((info, idx) => (
                  info.link ? (
                    <a key={idx} href={info.link} className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors">
                      <info.icon className="w-5 h-5" />
                      <span>{info.text}</span>
                    </a>
                  ) : (
                    <div key={idx} className="flex items-center gap-3 text-gray-300">
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

            {/* Resume Button */}
            <div className="text-center">
              <button className="btn-secondary flex items-center gap-2 mx-auto">
                Download Resume <ExternalLink className="w-4 h-4" />
              </button>
              <p className="text-xs text-gray-500 mt-2">
                *Resume available upon request
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;