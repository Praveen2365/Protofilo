import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const EducationSection = () => {
  return (
    <section id="education" className="py-20 bg-gradient-to-b from-background via-card/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-primary">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground">Academic foundation in technology and innovation</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card-glow card-hover animate-fade-in">
            <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
              {/* Institution Logo/Icon */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center animate-glow">
                  <GraduationCap className="h-12 w-12 text-white" />
                </div>
              </div>

              {/* Education Details */}
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-gradient-primary mb-2">
                  K S Rangasamy College of Technology
                </h3>
                <h4 className="text-xl font-semibold mb-4">
                  Bachelor of Technology – Information Technology
                </h4>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center justify-center lg:justify-start space-x-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">2022 – 2026</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start space-x-2">
                    <Award className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">CGPA: 7.97</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start space-x-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">Tamil Nadu, India</span>
                  </div>
                </div>

                {/* Key Achievements */}
                <div className="space-y-3">
                  <h5 className="font-semibold text-lg">Academic Highlights:</h5>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      "Strong foundation in Computer Science fundamentals",
                      "Specialized in Full-Stack Web Development",
                      "Active participant in coding competitions",
                      // "Completed multiple industry-relevant projects",
                      // "Member of Department clubs and societies",
                      "Consistent academic performance"
                    ].map((achievement, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-muted-foreground text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CGPA Display */}
              <div className="flex-shrink-0">
                <div className="text-center card-glow bg-gradient-to-br from-primary/10 to-secondary/10 p-6 rounded-xl">
                  <div className="text-4xl font-bold text-gradient-accent mb-2">7.97</div>
                  <div className="text-sm text-muted-foreground">CGPA</div>
                  <div className="text-xs text-muted-foreground mt-1">Out of 10.0</div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Education Stats */}
          {/* <div className="grid md:grid-cols-4 gap-6 mt-12">
            {[
              { label: 'Academic Year', value: 'Final Year', description: '2025-2026' },
              { label: 'Core Subjects', value: '25+', description: 'CS Fundamentals' },
              { label: 'Lab Projects', value: '15+', description: 'Hands-on Experience' },
              { label: 'Technical Papers', value: '5+', description: 'Research Work' }
            ].map((stat, index) => (
              <div key={index} className="text-center card-glow card-hover animate-fade-in">
                <div className="text-2xl font-bold text-gradient-primary mb-2">{stat.value}</div>
                <div className="font-semibold mb-1">{stat.label}</div>
                <div className="text-muted-foreground text-sm">{stat.description}</div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;