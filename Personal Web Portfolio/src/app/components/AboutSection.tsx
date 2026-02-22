import { Github, Linkedin, Mail } from 'lucide-react';

interface AboutSectionProps {
  profileImage: string;
}

export function AboutSection({ profileImage }: AboutSectionProps) {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center md:justify-end order-1 md:order-2">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-600 shadow-xl">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="order-2 md:order-1">
            <div className="mb-4">
              <span className="text-blue-600 font-medium">Hello, I'm</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4 text-gray-900">
              John Smith
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
              Computer Science Student
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              I'm a passionate computer science student with a strong foundation in software development, 
              algorithms, and data structures. I love building innovative solutions and learning new technologies. 
              My expertise spans web development, mobile applications, and machine learning. 
              I'm always eager to take on new challenges and collaborate on exciting projects.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-900 text-white hover:bg-blue-600 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-900 text-white hover:bg-blue-600 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:john.smith@email.com"
                className="p-3 rounded-full bg-gray-900 text-white hover:bg-blue-600 transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
