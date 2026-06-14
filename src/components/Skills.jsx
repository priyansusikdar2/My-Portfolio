import { skills } from '../data/portfolioData';
import { 
  Code2, Brain, Server, Globe, Bug, Wrench, 
  Database, Cloud, Shield, Figma, Terminal, Cpu
} from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const Skills = () => {
  const skillCategories = [
    { title: "💻 Programming Languages", icon: Code2, skills: skills.programming, color: "from-blue-500 to-cyan-500" },
    { title: "🤖 AI/ML & Data Science", icon: Brain, skills: skills.ai_ml, color: "from-purple-500 to-pink-500" },
    { title: "⚙️ Backend Development", icon: Server, skills: skills.backend, color: "from-green-500 to-emerald-500" },
    { title: "🎨 Frontend & Design", icon: Globe, skills: skills.frontend, color: "from-orange-500 to-red-500" },
    { title: "🧪 Testing & QA", icon: Bug, skills: skills.testing, color: "from-yellow-500 to-orange-500" },
    { title: "🛠️ Tools & Technologies", icon: Wrench, skills: skills.tools, color: "from-indigo-500 to-purple-500" },
    { title: "🗄️ Databases", icon: Database, skills: ["Oraclesql", "MySQL", "Sqlite", "Firebase"], color: "from-cyan-500 to-blue-500" }

  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-transparent to-black/5 dark:to-white/5">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            🛠️ <span className="gradient-text">Tech Universe</span>
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
            Tools and Technologies I am working on
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="glass-card p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 bg-gradient-to-r ${category.color} rounded-lg`}>
                  <category.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 bg-gray-100 dark:bg-white/5 rounded-full text-sm text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-500/20 transition-colors cursor-pointer"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;