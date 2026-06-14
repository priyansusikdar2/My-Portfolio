import { Github, Linkedin, Code2, Trophy, ExternalLink, Award } from 'lucide-react';
import { socialLinks } from '../data/portfolioData';
import { motion } from 'framer-motion';

const Hero = () => {
  const quickLinks = [
    { name: 'GitHub', url: socialLinks.github, icon: Github, color: 'hover:text-gray-600 dark:hover:text-gray-400' },
    { name: 'LinkedIn', url: socialLinks.linkedin, icon: Linkedin, color: 'hover:text-blue-600 dark:hover:text-blue-400' },
    { name: 'LeetCode', url: socialLinks.leetcode, icon: Code2, color: 'hover:text-yellow-600 dark:hover:text-yellow-400' },
    { name: 'HackerRank', url: socialLinks.hackerrank, icon: Award, color: 'hover:text-green-600 dark:hover:text-green-400' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto text-center relative z-10"
      >
        {/* Top Badge */}
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full px-4 py-2 border border-yellow-500/30 mb-8">
          <Trophy className="w-4 h-4 text-yellow-500" />
          <span className="text-sm font-medium">Top 1% - Naukri.com Youth Turks India</span>
        </motion.div>

        {/* Main Title with Typing Animation */}
        <motion.div variants={itemVariants}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Priyansu Sikdar</span>
          </h1>
        </motion.div>
        
        {/* Animated Role Text */}
        <motion.div variants={itemVariants}>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-4">
            🚀 AI/ML Explorer | Python Developer | Software Tester | Data Scientist | Data Analyst | Frontend Developer
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Building intelligent, scalable systems. 
            <span className="block mt-2 text-purple-600 dark:text-purple-400 font-semibold">
              500+ problems solved | 9.00+ CGPA | 38+ repositories
            </span>
          </p>
        </motion.div>

        {/* Stats Cards with Improved Text Visibility */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-8">
          {[
            { value: "38+", label: "Repositories", color: "from-blue-500 to-cyan-500" },
            { value: "500+", label: "Problems Solved", color: "from-green-500 to-emerald-500" },
            { value: "15+", label: "Featured Projects", color: "from-purple-500 to-pink-500" },
            { value: "10+", label: "Certifications", color: "from-orange-500 to-red-500" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`glass-card px-6 py-3 bg-gradient-to-r ${stat.color} bg-opacity-10 text-center min-w-[130px]`}
            >
              <span className="font-black text-3xl block text-white drop-shadow-lg">
                {stat.value}
              </span>
              <span className="text-sm font-semibold text-white/90 uppercase tracking-wide drop-shadow">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Links with Hover Animation */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
          {quickLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 glass-card px-5 py-2 ${link.color} transition-all`}
            >
              <link.icon className="w-5 h-5" />
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href={socialLinks.unstop}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-2 glass-card px-5 py-2 hover:text-purple-600 dark:hover:text-purple-400 transition-all"
          >
            <ExternalLink className="w-5 h-5" />
            Unstop
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;