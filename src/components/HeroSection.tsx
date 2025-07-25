import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail, Download, ArrowDown, Code, Terminal, ExternalLink } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [showTerminal, setShowTerminal] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTerminal(false);
    }, 5000); // Show for 5 seconds as requested

    return () => clearTimeout(timer);
  }, []);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Praveen2365', label: 'GitHub' },
    // { icon: Linkedin, href: 'https://www.linkedin.com/in/perumal-s-dev', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:praveenboy2306@gmail.com', label: 'Email' }
  ];

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/lovable-uploads/Perumal_Resume.pdf';
    link.download = 'Praveen GResume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 bg-gradient-to-b from-background via-background/95 to-card/30">
      {/* Enhanced animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(160,84,39,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(160,84,39,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(84,81,44,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(84,81,44,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        {/* Floating code elements with enhanced styling */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute font-mono text-[hsl(160,84%,39%)]/30 dark:text-[hsl(84,81%,44%)]/30 text-xs md:text-sm font-semibold"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.7, 0.3],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {['const', 'function', '{}', '[]', '=>', 'async', 'await', 'return', 'class', 'import', 'export', 'useState'][i]}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Enhanced Terminal-style introduction */}
          <AnimatePresence>
            {showTerminal && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                transition={{ duration: 0.8 }}
                className="bg-[hsl(150,10%,8%)]/95 backdrop-blur-lg border border-[hsl(150,8%,16%)] rounded-xl p-6 font-mono text-left max-w-3xl mx-auto mb-8 shadow-2xl"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-[hsl(150,10%,64.9%)] text-sm">~/praveen-portfolio</span>
                </div>
                <div className="space-y-3 text-sm">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-[hsl(160,84%,39%)]"
                  >
                    $ whoami
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="text-[hsl(0,0%,98%)]"
                  >
                    Praveen G - Programmer and Full Stack Developer
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="text-[hsl(160,84%,39%)]"
                  >
                    $ echo $EXPERTISE
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                    className="text-[hsl(0,0%,98%)]"
                  >
                    MERN Stack | Problem Solving | 100+ LeetCode
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5 }}
                    className="text-[hsl(160,84%,39%)]"
                  >
                    $ status
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3 }}
                    className="text-[hsl(84,81%,44%)]"
                  >
                    ● Active - Building scalable solutions
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Enhanced tagline that appears after terminal disappears */}
          <AnimatePresence>
            {!showTerminal && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto mb-8"
              >
                <p className="text-lg md:text-xl text-[hsl(150,10%,64.9%)] font-mono leading-relaxed">
                  Final-year Information Technology student building scalable software and solving real-world problems.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Enhanced main heading with better animation */}
          <div className="space-y-6">
            <motion.h1
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[hsl(160,84%,39%)] via-[hsl(175,70%,41%)] to-[hsl(160,84%,39%)] bg-clip-text text-transparent font-mono"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
              }}
            >
              Praveen G
            </motion.h1>
            
            <div className="h-20 md:h-16">
              <TypeAnimation
                sequence={[
                  'Full-Stack Developer',
                  2000,
                  'MERN Stack Specialist',
                  2000,
                  'Problem Solver',
                  2000,
                  'Software Architect',
                  2000,
                ]}
                wrapper="h2"
                speed={50}
                className="text-2xl md:text-4xl font-semibold text-[hsl(0,0%,98%)] font-mono"
                repeat={Infinity}
              />
            </div>
          </div>

          {/* Enhanced professional badges */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div 
              className="px-4 py-2 bg-[hsl(150,10%,8%)]/80 backdrop-blur-sm border border-[hsl(160,84%,39%)]/30 text-[hsl(160,84%,39%)] rounded-lg text-sm font-mono flex items-center gap-2 shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <Code className="w-4 h-4" />
              MERN Stack
            </motion.div>
            <motion.div 
              className="px-4 py-2 bg-[hsl(150,10%,8%)]/80 backdrop-blur-sm border border-[hsl(175,70%,41%)]/30 text-[hsl(175,70%,41%)] rounded-lg text-sm font-mono flex items-center gap-2 shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <Terminal className="w-4 h-4" />
              100+ LeetCode
            </motion.div>
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.button
              onClick={scrollToProjects}
              className="px-8 py-4 bg-gradient-to-r from-[hsl(160,84%,39%)] to-[hsl(175,70%,41%)] text-[hsl(150,10%,8%)] rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-2 font-mono shadow-lg hover:shadow-[0_0_40px_hsl(160,84%,39%,0.3)]"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
              <ArrowDown className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              onClick={downloadResume}
              className="px-8 py-4 border-2 border-[hsl(160,84%,39%)] text-[hsl(160,84%,39%)] hover:bg-[hsl(160,84%,39%)] hover:text-[hsl(150,10%,8%)] rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-2 font-mono backdrop-blur-sm shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5" />
              Download Resume
            </motion.button>
          </motion.div>

          {/* Enhanced Social Links */}
          <motion.div
            className="flex justify-center space-x-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-lg bg-[hsl(150,10%,8%)]/80 backdrop-blur-sm border border-[hsl(150,8%,16%)] hover:border-[hsl(160,84%,39%)] transition-all duration-300 group shadow-lg"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 + index * 0.1 }}
              >
                <social.icon className="w-6 h-6 text-[hsl(0,0%,98%)] group-hover:text-[hsl(160,84%,39%)] transition-colors" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;