import { Trophy, Award, Medal, Target, Star, GraduationCap } from 'lucide-react';
import { achievements } from '../data/portfolioData';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

const Achievements = () => {
  const achievementSections = [
    { title: "🏆 Top Rankings", icon: Trophy, items: achievements.topRanks, color: "from-yellow-500 to-orange-500" },
    { title: "📚 NPTEL Excellence", icon: GraduationCap, items: achievements.nptel, color: "from-blue-500 to-cyan-500" },
    { title: "💻 Coding Achievements", icon: Target, items: achievements.coding, color: "from-green-500 to-emerald-500" },
    { title: "📜 Internship Certificates", icon: Award, items: achievements.certificates, color: "from-red-500 to-orange-500" },
  ];

  return (
    <section id="achievements" className="py-20 px-4 bg-gradient-to-b from-transparent to-black/5 dark:to-white/5">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            🏅 <span className="gradient-text">Achievements & Recognition</span>
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
            Milestones and accomplishments in my journey
          </p>
        </AnimatedSection>

        <div className="space-y-8">
          {achievementSections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 bg-gradient-to-r ${section.color} rounded-lg`}>
                  <section.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{section.title}</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                {section.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                    <span className="text-purple-500 dark:text-purple-400 mt-1">▹</span>
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ET Gen AI Hackathon Achievement Card - Only this remains */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-8 glass-card p-6 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-purple-500/30"
        >
          <div className="text-center">
            <Star className="w-12 h-12 text-yellow-400 mx-auto mb-3" />
            <p className="text-lg font-semibold gradient-text">ET Gen AI Hackathon Achievement</p>
            <p className="text-gray-700 dark:text-gray-300">
              Ranked Top 6,594 among 54,617 candidates nationwide
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;