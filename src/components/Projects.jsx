import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            📁 <span className="gradient-text">Featured Projects</span>
          </h2>
        </AnimatedSection>

        {/* All Projects Grid - No "More Projects" heading */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 group cursor-pointer"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Github className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs px-2 py-1 bg-purple-500/20 rounded-full text-purple-600 dark:text-purple-400">
                  {project.category}
                </span>
              </div>

              <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                {project.name}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                {project.desc}
              </p>
              
              <p className="text-purple-600 dark:text-purple-400 text-xs mb-4">
                {project.tech}
              </p>
              
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                View on GitHub <ExternalLink className="w-3 h-3" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;