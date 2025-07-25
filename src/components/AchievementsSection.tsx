import { useState, useEffect } from 'react';
import { Trophy, Code, Target, Lightbulb, Users, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AchievementsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const achievements = [
    {
      id: 1,
      category: 'Hackathon Participation',
      icon: <Lightbulb className="h-8 w-8" />,
      color: 'from-yellow-400 to-orange-500',
      achievements: [
        {
          title: 'Dark Pattern Hackathon 2024',
          description: 'Participated in environmental sustainability hackathon',
          details: 'Developed eco-friendly solution for waste management',
          date: '2024'
        },
        {
          title: 'Smart India Hackathon 2023-2024',
          description: 'College level hackathon participation',
          details: 'Created innovative solution for digital governance',
          date: '2024'
        }
      ]
    },
    // {
    //   id: 2,
    //   category: 'Problem Solving Excellence',
    //   icon: <Code className="h-8 w-8" />,
    //   color: 'from-blue-400 to-purple-500',
    //   achievements: [
    //     {
    //       title: '100+ LeetCode Problems',
    //       description: 'Solved diverse algorithmic challenges',
    //       details: 'Maintained consistent problem-solving streak',
    //       date: '2024'
    //     },
    //     {
    //       title: 'DSA Mastery',
    //       description: 'Advanced data structures and algorithms',
    //       details: 'Optimized solutions with efficient time complexity',
    //       date: '2023-2024'
    //     },
    //     {
    //       title: 'Competitive Programming',
    //       description: 'Active participation in coding contests',
    //       details: 'Regular participation in CodeChef and Codeforces',
    //       date: '2023-2024'
    //     }
    //   ]
    // },
    {
      id: 3,
      category: 'Development Milestones',
      icon: <Target className="h-8 w-8" />,
      color: 'from-green-400 to-emerald-500',
      achievements: [
        {
          title: '8+ Full-Stack Projects',
          description: 'End-to-end application development',
          details: 'Built scalable web applications using MERN stack',
          date: '2023-2024'
        },
        {
          title: 'MERN Stack Expertise',
          description: 'Mastered modern web development stack',
          details: 'Express.js, React, Node.js',
          date: '2024'
        },
        {
          title: 'Open Source Contributions',
          description: 'Contributing to community projects',
          details: 'Active GitHub contributor with meaningful contributions',
          date: '2024'
        }
      ]
    },
    {
      id: 4,
      category: 'Academic Excellence',
      icon: <Star className="h-8 w-8" />,
      color: 'from-purple-400 to-pink-500',
      achievements: [
        {
          title: 'CGPA 7.90',
          description: 'Consistent academic performance',
          details: 'Strong foundation in computer science fundamentals',
          date: '2022-2024'
        },
        {
          title: 'Technical Leadership',
          description: 'Leading technical initiatives',
          details: 'Mentoring peers and organizing coding workshops',
          date: '2024'
        },
        {
          title: 'Research Projects',
          description: 'Innovative research work',
          details: 'Published technical papers and research articles',
          date: '2024'
        }
      ]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % achievements.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + achievements.length) % achievements.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentAchievement = achievements[currentSlide];

  return (
    <section id="achievements" className="py-20 bg-gradient-to-b from-background via-card/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {/* <span className="text-gradient-primary">Notable</span>{' '} */}
            <span className="text-gradient-accent">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground">Recognition and milestones in my journey</p>
        </div>

        {/* Main Achievement Slider */}
        <div className="relative mb-16">
          <div className="card-glow overflow-hidden">
            <div className="relative min-h-[400px] flex items-center">
              {/* Navigation Buttons */}
              <Button
                variant="outline"
                size="sm"
                onClick={prevSlide}
                className="absolute left-4 z-10 rounded-full w-10 h-10 p-0 bg-card/80 backdrop-blur-sm hover:bg-primary/10"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                onClick={nextSlide}
                className="absolute right-4 z-10 rounded-full w-10 h-10 p-0 bg-card/80 backdrop-blur-sm hover:bg-primary/10"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>

              {/* Achievement Content */}
              <div className="w-full px-16 py-8">
                <div className="text-center mb-8">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${currentAchievement.color} mb-4`}>
                    <div className="text-white">
                      {currentAchievement.icon}
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-gradient-primary mb-2">
                    {currentAchievement.category}
                  </h3>
                </div>

                {/* Achievement Items */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {currentAchievement.achievements.map((achievement, index) => (
                    <div 
                      key={index}
                      className="bg-card/50 border border-border rounded-lg p-6 hover:bg-primary/5 transition-all duration-300 animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-center space-x-3 mb-3">
                        <Trophy className="h-5 w-5 text-primary" />
                        <span className="text-sm text-muted-foreground">{achievement.date}</span>
                      </div>
                      <h4 className="font-bold text-lg mb-2">{achievement.title}</h4>
                      <p className="text-muted-foreground text-sm mb-3">{achievement.description}</p>
                      <p className="text-xs text-muted-foreground">{achievement.details}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {achievements.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-primary scale-125' 
                    : 'bg-muted hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Achievement Summary Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              label: 'Hackathons', 
              value: '5+', 
              description: 'College Level',
              icon: <Lightbulb className="h-5 w-5" />,
              gradient: 'from-yellow-400 to-orange-500'
            },
            { 
              label: 'Problems Solved', 
              value: '100+', 
              description: 'LeetCode & Competitive',
              icon: <Code className="h-5 w-5" />,
              gradient: 'from-blue-400 to-purple-500'
            },
            { 
              label: 'Projects Built', 
              value: '8+', 
              description: 'Full-Stack Applications',
              icon: <Target className="h-5 w-5" />,
              gradient: 'from-green-400 to-emerald-500'
            },
            { 
              label: 'Academic CGPA', 
              value: '7.97', 
              description: 'Consistent Excellence',
              icon: <Star className="h-5 w-5" />,
              gradient: 'from-purple-400 to-pink-500'
            }
          ].map((stat, index) => (
            <div key={index} className="card-glow card-hover text-center animate-fade-in">
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${stat.gradient} mb-3`}>
                <div className="text-white">
                  {stat.icon}
                </div>
              </div>
              <div className={`text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                {stat.value}
              </div>
              <div className="font-semibold mb-1">{stat.label}</div>
              <div className="text-muted-foreground text-sm">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;