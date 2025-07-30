import { useState, useRef, useEffect } from 'react';
import { Code, Database, Cpu, Zap } from 'lucide-react';

const SkillsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [visibleSkills, setVisibleSkills] = useState<number[]>([]);
  const skillsRef = useRef<HTMLDivElement>(null);

  const filters = [
    { id: 'All', label: 'All', icon: <Zap className="h-4 w-4" /> },
    { id: 'Frontend', label: 'Frontend', icon: <Code className="h-4 w-4" /> },
    { id: 'Backend', label: 'Backend', icon: <Database className="h-4 w-4" /> },
    { id: 'Programming', label: 'Programming', icon: <Cpu className="h-4 w-4" /> },
    { id: 'DSA', label: 'DSA & Problem Solving', icon: <Zap className="h-4 w-4" /> }
  ];

  const skills = [
    { skill: '⚛️ React', category: 'Frontend', proficiency: 80, achievement: '🚀 Built 5+ Projects', emoji: '⚛️' },
    { skill: '🟨 JavaScript', category: 'Frontend', proficiency: 85, achievement: '🚀 Advanced ES6+', emoji: '🟨' },
    { skill: '💙 TypeScript', category: 'Frontend', proficiency: 80, achievement: '🚀 Type-Safe Code', emoji: '💙' },
    { skill: '🎨 Tailwind CSS', category: 'Frontend', proficiency: 85, achievement: '🚀 Responsive Design', emoji: '🎨' },
    { skill: '🎨 Bootstrap', category: 'Frontend', proficiency: 85, achievement: '🚀 Responsive Design', emoji: '🎨' },
    { skill: '💚 Node.js', category: 'Backend', proficiency: 70, achievement: '🚀 Backend Expert', emoji: '💚' },
    { skill: '🚀 Express.js', category: 'Backend', proficiency: 70, achievement: '🚀 API Development', emoji: '🚀' },
    { skill: '🗄️ PostgreSQL', category: 'Backend', proficiency: 82, achievement: '🚀 Database Design', emoji: '🗄️' },
    { skill: '🗃️ MySQL', category: 'Backend', proficiency: 70, achievement: '🚀 Query Optimization', emoji: '🗃️' },
    { skill: '☕ Java', category: 'Programming', proficiency: 90, achievement: '🚀 LeetCode Expert', emoji: '☕' },
    // { skill: '🐍 Python', category: 'Programming', proficiency: 85, achievement: '🚀 Automation & Scripting', emoji: '🐍' },
    // { skill: '⚡ C/C++', category: 'Programming', proficiency: 80, achievement: '🚀 System Programming', emoji: '⚡' },
    { skill: '🧠 Data Structures', category: 'DSA', proficiency: 70, achievement: '🚀 Advanced Knowledge', emoji: '🧠' },
    { skill: '⚡ Algorithms', category: 'DSA', proficiency: 70, achievement: '🚀 Problem Solving', emoji: '⚡' },
    { skill: '🎯 LeetCode', category: 'DSA', proficiency: 50, achievement: '🚀 100+ Problems Solved', emoji: '🎯' },
    { skill: '🏗️ System Design', category: 'DSA', proficiency: 75, achievement: '🚀 Scalable Solutions', emoji: '🏗️' }
  ];

  const filteredSkills = activeFilter === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            filteredSkills.forEach((_, index) => {
              setTimeout(() => {
                setVisibleSkills(prev => [...prev, index]);
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, [filteredSkills]);

  useEffect(() => {
    setVisibleSkills([]);
  }, [activeFilter]);

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-card/30 via-background to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-primary">Technical</span>{' '}
            <span className="text-gradient-accent">Arsenal</span>
          </h2>
          <p className="text-xl text-muted-foreground">Mastering technologies that power modern applications</p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-card/50 text-muted-foreground hover:bg-primary/10 hover:text-primary border border-border'
              }`}
            >
              {filter.icon}
              <span>{filter.label}</span>
            </button>
          ))}
        </div>

        {/* Skills Table */}
        <div ref={skillsRef} className="card-glow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-6 font-semibold">Skill</th>
                  <th className="text-left py-4 px-6 font-semibold">Category</th>
                  <th className="text-left py-4 px-6 font-semibold">Proficiency</th>
                  <th className="text-left py-4 px-6 font-semibold">Achievement</th>
                </tr>
              </thead>
              <tbody>
                {filteredSkills.map((skill, index) => (
                  <tr 
                    key={index}
                    className={`border-b border-border/50 hover:bg-primary/5 transition-all duration-300 ${
                      visibleSkills.includes(index) 
                        ? 'animate-fade-in opacity-100' 
                        : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{skill.emoji}</span>
                        <span className="font-medium">{skill.skill.split(' ').slice(1).join(' ')}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        {skill.category}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-3">
                        <div className="flex-1 bg-muted rounded-full h-2 overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out"
                            style={{ 
                              width: visibleSkills.includes(index) ? `${skill.proficiency}%` : '0%' 
                            }}
                          ></div>
                        </div>
                        <span className="font-semibold text-primary w-12">{skill.proficiency}%</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-muted-foreground">{skill.achievement}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            { label: 'Technologies Mastered', value: '10+', color: 'from-primary to-primary-glow' },
            // { label: 'Years of Experience', value: '3+', color: 'from-secondary to-purple-400' },
            { label: 'Projects Completed', value: '8+', color: 'from-accent to-cyan-400' },
            { label: 'LeetCode Problems', value: '100+', color: 'from-green-400 to-emerald-500' }
          ].map((stat, index) => (
            <div key={index} className="text-center card-glow card-hover animate-fade-in">
              <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;