import { useState } from 'react';
import { Github, ExternalLink, Code, ShoppingCart, MessageCircle, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import arron from '@/assets/arron.png';
import bike from '@/assets/bike.png';
import college from '@/assets/college.png';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Training Company-website',
      description: 'A professional platform for college training program bookings and internship applications.Empowers students to explore and enroll in real-time industrial training and certified internships.Online learning modules to upskill with projects and expert guidance.',
      image: arron,
      technologies: ['HTML','Tailwind','React', 'MYSQL', "Java script"],
      // features: ['JWT Authentication', 'Admin Dashboard', 'Product Management'],
      github: 'https://github.com/Praveen2365',
      demo: '#',
      // icon: <MessageCircle className="h-6 w-6" />
      // <ShoppingCart className="h-6 w-6" />
    },
    {
      id: 2,
      title: 'Bike Shoping Website',
      description: 'A modern bike shop website showcasing the latest bikes from top brands.Supports both online and offline booking for test rides and purchases.Dedicated pages for each bike company with detailed models, features, and pricing.',
      image: bike,
      technologies: ['HTML','Tailwind','React', 'MYSQL', "Java script"],
      // features: ['Real-time Messaging', 'Chat History', 'User Authentication', 'Online Status'],
      github: 'https://github.com/Praveen2365',
      demo: '#',
      // icon: <MessageCircle className="h-6 w-6" />
    },
    {
      id: 3,
      title: 'College Event Website',
      description: 'Dakshaa, the official college symposium.Includes dedicated pages for Hackathons, Workshops, and Technical Events with full event details.Enables students from other colleges to explore, register, and participate in various competitions.',
      image: college,
      technologies: ['React', 'Node.js', 'Tailwind', 'Express', 'MySQL',],
      // features: ['Face Recognition', 'Automated Tracking', 'High Accuracy', 'Data Export'],
      github: 'https://github.com/Praveen2365',
      demo: 'https://dakshaa.ksrct.ac.in/',
      // icon:<MessageCircle className="h-6 w-6" />
      //  <Camera className="h-6 w-6" />
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background via-card/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-primary">Featured</span>{' '}
            <span className="text-gradient-accent">Projects</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-muted-foreground mb-6">
              <span className="text-gradient-primary font-semibold">Full-Stack Mastery</span> — 
              End-to-end development expertise from database design to responsive frontend interfaces.
            </p>
            <div className="text-3xl font-bold text-gradient-accent">
              8+ Projects Built — MERN Stack Expert
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="card-glow card-hover group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                {/* <div className="absolute top-4 left-4 p-2 bg-primary/10 backdrop-blur-sm rounded-lg border border-primary/20">
                  {project.icon}
                </div> */}
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gradient-primary">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                {/* <div className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div> */}

                {/* Action Buttons */}
                <div className="flex space-x-3 pt-4">
                  <Button 
                    asChild
                    size="sm"
                    className="btn-glow flex-1"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  
                  <Button 
                    asChild
                    variant="outline"
                    size="sm"
                    className="btn-outline-glow flex-1"
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Stats */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {[
            { 
              label: 'Full-Stack Projects', 
              value: '4+', 
              description: 'End-to-end applications built',
              gradient: 'from-primary to-primary-glow'
            },
            { 
              label: 'Technologies Used', 
              value: '10+', 
              description: 'Modern frameworks and tools',
              gradient: 'from-secondary to-purple-400'
            },
            // { 
            //   label: 'Lines of Code', 
            //   value: '50K+', 
            //   description: 'Clean, maintainable code written',
            //   gradient: 'from-accent to-cyan-400'
            // }
          ].map((stat, index) => (
            <div key={index} className="text-center card-glow card-hover animate-fade-in">
              <div className={`text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                {stat.value}
              </div>
              <div className="font-semibold mb-1">{stat.label}</div>
              <div className="text-muted-foreground text-sm">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button 
            asChild
            className="btn-glow text-lg px-8 py-4"
          >
            <a href="https://github.com/Praveen2365" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;