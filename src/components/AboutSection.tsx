import { Code, Database, Zap, GitBranch, Brain, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/praveen1.jpg';

const AboutSection = () => {
  const codeLines = [
    "▸ I'm a final-year Information Technology student with deep expertise in the MERN stack",
    "▸ Skilled in DSA, backend development, and building scalable software solutions with a focus on performance and maintainability.", 
    "▸ Strong experience in DSA, backend development, and scalable software architectureolved 100+ problems on LeetCode with advanced problem-solving skills",
    "▸ Currently mastering  database optimization techniques",
    "▸ Building innovative full-stack applications with modern web technologies",
    "▸ Passionate about creating efficient, maintainable, and scalable solutions",
    "▸ Constantly exploring new technologies and development methodologies"
  ];

  const expertise = [
    {
      icon: <Layers className="h-6 w-6" />,
      title: "MERN Stack Specialist",
      description: "Expert in Express.js, React, and Node.js development"
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Problem Solver", 
      description: "100+ LeetCode problems solved with strong DSA foundation"
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Database Expert",
      description: " DBMS knowledge and database optimization techniques"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Backend Systems",
      description: "Scalable architectures, RESTful APIs, and microservices design"
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Modern Web Tech",
      description: "Latest frameworks, tools, and development methodologies"
    },
    {
      icon: <GitBranch className="h-6 w-6" />,
      title: "Version Control",
      description: " Git workflows and collaborative development practices"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background via-background/95 to-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-primary">About</span> Me
          </h2>
          <p className="text-xl text-muted-foreground">Final-Year IT Student & Full-Stack Developer</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left Side - Code Style Content */}
          <div className="space-y-6">
            <div className="card-glow">
              <div className="flex items-center mb-4">
                <div className="flex space-x-2 mb-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
              <div className="bg-black/50 rounded-lg p-6 font-mono text-sm">
                <div className="text-green-400 mb-2">// About Praveen G</div>
                <div className="text-blue-400 mb-4">const developer = {`{`}</div>
                {codeLines.map((line, index) => (
                  <div 
                    key={index} 
                    className="text-gray-300 ml-4 mb-2 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {line}
                  </div>
                ))}
                <div className="text-blue-400 mt-4">{`};`}</div>
              </div>
            </div>
          </div>

          {/* Right Side - Profile Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-xl opacity-50 animate-pulse"></div>
              <img
                src={profilePhoto}
                alt="Praveen G"
                className="relative w-80 h-80 object-cover rounded-2xl border-4 border-primary/20 shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold">
                Full Stack Developer
              </div>
            </div>
          </div>
        </div>

        {/* Expertise Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertise.map((item, index) => (
            <div 
              key={index}
              className="card-glow card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4 mt-12">
          <Button 
            asChild
            className="btn-glow"
          >
            <a href="https://github.com/Praveen2365" target="_blank" rel="noopener noreferrer">
              <GitBranch className="mr-2 h-5 w-5" />
              GitHub
            </a>
          </Button>
          
          <Button 
            asChild
            className="btn-outline-glow"
          >
            <a href="https://leetcode.com/u/praveen2810/" target="_blank" rel="noopener noreferrer">
              <Code className="mr-2 h-5 w-5" />
              LeetCode
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;