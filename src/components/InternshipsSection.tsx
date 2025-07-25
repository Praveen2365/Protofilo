import { useState } from 'react';
import { Award, Calendar, Building, X, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Import certificate image (only for ID 1)
import fullstackCert from '@/assets/intern.jpg';

const InternshipsSection = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<number | null>(null);

  const internships = [
    {
      id: 1,
      title: 'Web Development Internship',
      company: 'Statix pro',
      duration: 'january 2025 - February 2025',
      description: 'Successfully completed a 4-week internship focused on web development.Contributed to real-time projects, showcasing strong adaptability, problem-solving, and collaboration skills.',
      skills: ['HTML', 'BOOT STRAP', 'Java Script'],
      certificate: '/certificates/fullstack-internship.pdf',
      certificateImage: fullstackCert,
      highlights: [
        'Built 2 client-facing web applications',
        // 'Improved application performance by 40%',
        'Mentored junior interns'
        // 'Received outstanding performance rating'
      ]
    }
  ];

  const openCertificate = (internshipId: number) => {
    setSelectedCertificate(internshipId);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeCertificate = () => {
    setSelectedCertificate(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  return (
    <section id="internships" className="py-20 bg-gradient-to-b from-background via-card/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {/* <span className="text-gradient-primary">Professional</span>{' '} */}
            <span className="text-gradient-accent">Internship</span>
          </h2>
          {/* <p className="text-xl text-muted-foreground">Hands-on experience and industry exposure</p> */}
        </div>

        {/* Single Internship Card */}
        <div className="flex justify-center">
          <div className="card-glow card-hover animate-fade-in max-w-md w-full">
            {/* Header */}
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Building className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-gradient-primary">{internships[0].title}</h3>
                <p className="text-muted-foreground text-sm">{internships[0].company}</p>
              </div>
            </div>

            {/* Duration */}
            <div className="flex items-center space-x-2 mb-4">
              <Calendar className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground text-sm">{internships[0].duration}</span>
            </div>

            {/* Description */}
            <p className="text-muted-foreground mb-4">{internships[0].description}</p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mb-4">
              {internships[0].skills.map((skill, skillIndex) => (
                <span 
                  key={skillIndex}
                  className="px-2 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Highlights */}
            <div className="space-y-2 mb-6">
              {internships[0].highlights.slice(0, 2).map((highlight, highlightIndex) => (
                <div key={highlightIndex} className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground text-sm">{highlight}</span>
                </div>
              ))}
            </div>

            {/* Certificate Button */}
            <Button 
              onClick={() => openCertificate(internships[0].id)}
              className="btn-glow w-full"
            >
              <Award className="mr-2 h-4 w-4" />
              View Certificate
            </Button>
          </div>
        </div>
      </div>

      {/* Full-page Certificate Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 z-50">
          {/* Overlay with fade-in animation */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
            onClick={closeCertificate}
          />
          
          {/* Modal container with slide-up animation */}
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className={`
              bg-card border border-border rounded-xl w-full h-full max-w-6xl max-h-[95vh] overflow-auto
              transform transition-all duration-300 ease-out
              ${selectedCertificate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
            `}>
              {/* Close Button */}
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={closeCertificate}
                className="absolute top-4 right-4 z-10 hover:bg-destructive hover:text-destructive-foreground"
              >
                <X className="h-5 w-5" />
              </Button>
              
              {/* Certificate Content */}
              <div className="h-full flex flex-col">
                {/* Certificate Image - Centered and responsive */}
                <div className="flex-1 flex items-center justify-center p-8">
                  <img 
                    src={internships[0].certificateImage}
                    alt="Internship Certificate"
                    className="max-w-full max-h-[70vh] object-contain rounded-lg border border-border"
                  />
                </div>
                
                {/* Download Button - Sticky bottom */}
                <div className="sticky bottom-0 bg-card/80 backdrop-blur-sm p-4 border-t border-border flex justify-center">
                  <Button asChild className="btn-glow">
                    <a 
                      href={internships[0].certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Download Certificate PDF
                    </a>
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

export default InternshipsSection;