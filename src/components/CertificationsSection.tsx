import { useState } from 'react';
import { Award, Calendar, User, Clock, X, ExternalLink, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MERN from "@/assets/MERN.pdf";
import code from "@/assets/leetcode.pdf";
import DSA from "@/assets/dsa.pdf";

// Assuming you have image versions of your certificates
import MERNImage from "@/assets/MERNstack.png";
import leetcodeImage from "@/assets/leet.png";
import DSAImage from "@/assets/dsa.png";

const CertificationsSection = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<number | null>(null);

  const certifications = [
    {
      id: 1,
      title: 'Full Stack Web Development MASTERY',
      platform: 'Udemy',
      instructor: 'Prerak Mehta',
      duration: '56 hours',
      completionDate: 'December 2024',
      skills: ['React', 'Node.js', 'MongoDB', 'Express.js'],
      description: 'Comprehensive course covering modern full-stack development with MERN stack.',
      rating: 4.8,
      certificate: MERN,
      certificateImage: MERNImage,
      highlights: [
        'Built 5 full-stack applications',
        'Mastered React hooks and context',
        'Implemented JWT authentication',
        'Deployed applications to cloud'
      ]
    },
    {
      id: 2,
      title: 'DSA using C and C++',
      platform: 'Udemy',
      instructor: 'Abdul Bari',
      duration: '58.5 hours',
      completionDate: 'November 2024',
      skills: ['C/C++', 'Algorithms', 'Data Structures'],
      description: 'In-depth coverage of data structures and algorithms with C/C++ implementation.',
      rating: 4.9,
      certificate: code,
      certificateImage: leetcodeImage,
      highlights: [
        'Mastered 50+ algorithms',
        'Implemented all major data structures',
        'Solved 200+ coding problems',
        'Optimized algorithm complexities'
      ]
    },
    {
      id: 3,
      title: 'DSA using Java',
      platform: 'Infosys Springboard',
      instructor: 'Infosys',
      duration: '2025',
      completionDate: 'Ongoing',
      skills: ['Java', 'DSA', 'OOP'],
      description: 'Advanced data structures and algorithms course with Java programming.',
      rating: 4.7,
      certificate: DSA,
      certificateImage: DSAImage,
      highlights: [
        'Object-oriented problem solving',
        'Java collections framework',
        'Advanced algorithm analysis',
        'Industry-standard practices'
      ]
    }
  ];

  const openCertificate = (certId: number) => {
    setSelectedCertificate(certId);
  };

  const closeCertificate = () => {
    setSelectedCertificate(null);
  };

  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-background via-card/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-primary">Professional</span>{' '}
            <span className="text-gradient-accent">Certifications</span>
          </h2>
          <p className="text-xl text-muted-foreground">Continuous learning and skill validation</p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <div 
              key={cert.id}
              className="card-glow card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-3 w-3 ${
                            i < Math.floor(cert.rating) 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-gray-300'
                          }`} 
                        />
                      ))}
                      <span className="text-xs text-muted-foreground">({cert.rating})</span>
                    </div>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  cert.completionDate === 'Ongoing' 
                    ? 'bg-yellow-500/10 text-yellow-500' 
                    : 'bg-green-500/10 text-green-500'
                }`}>
                  {cert.completionDate === 'Ongoing' ? 'In Progress' : 'Completed'}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-bold text-lg text-gradient-primary mb-2">{cert.title}</h3>

              {/* Platform & Instructor */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">{cert.platform}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <User className="h-3 w-3 text-primary" />
                  <span className="text-sm text-muted-foreground">{cert.instructor}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-3 w-3 text-primary" />
                  <span className="text-sm text-muted-foreground">{cert.duration}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-4">{cert.description}</p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-4">
                {cert.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-2 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Highlights */}
              <div className="space-y-1 mb-6">
                {cert.highlights.slice(0, 2).map((highlight, highlightIndex) => (
                  <div key={highlightIndex} className="flex items-center space-x-2">
                    <div className="w-1 h-1 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground text-xs">{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Certificate Button */}
              <Button 
                onClick={() => openCertificate(cert.id)}
                className="btn-glow w-full"
              >
                <Award className="mr-2 h-4 w-4" />
                View Certificate
              </Button>
            </div>
          ))}
        </div>

        {/* Certification Stats */}
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { label: 'Certifications Earned', value: '6+', description: 'Professional Credentials' },
            { label: 'Study Hours', value: '250+', description: 'Dedicated Learning' },
            { label: 'Platforms', value: '4', description: 'Learning Sources' },
            { label: 'Average Rating', value: '4.8/5', description: 'Course Excellence' }
          ].map((stat, index) => (
            <div key={index} className="text-center card-glow card-hover animate-fade-in">
              <div className="text-3xl font-bold text-gradient-accent mb-2">{stat.value}</div>
              <div className="font-semibold mb-1">{stat.label}</div>
              <div className="text-muted-foreground text-sm">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card border border-border rounded-xl max-w-6xl w-full max-h-[90vh] overflow-auto">
            <div className="sticky top-0 z-10 bg-card/80 backdrop-blur-sm flex items-center justify-between p-4 border-b border-border">
              <h3 className="text-xl font-bold">
                {certifications.find(c => c.id === selectedCertificate)?.title}
              </h3>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={closeCertificate}
                className="hover:bg-destructive hover:text-destructive-foreground"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="p-4">
              <div className="flex flex-col items-center">
                <img 
                  src={certifications.find(c => c.id === selectedCertificate)?.certificateImage} 
                  alt="Certificate" 
                  className="max-w-full h-auto rounded-lg border border-border shadow-lg"
                />
                <div className="mt-4 flex gap-4">
                  <Button asChild variant="outline">
                    <a 
                      href={certifications.find(c => c.id === selectedCertificate)?.certificate} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Download PDF
                    </a>
                  </Button>
                  <Button onClick={closeCertificate}>
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CertificationsSection;